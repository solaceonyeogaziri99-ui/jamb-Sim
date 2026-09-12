let questions = [];
let subjectGroups = [];
let currentSubjectIndex = 0;
let currentQuestionIndex = 0;
let userAnswers = [];
let timeLeft = 0;
let timerInterval = null;

const MAX_TOTAL_QUESTION_COUNT = 720;
const defaultSelectedSubjects = ["biology", "chemistry", "physics", "mathematics", "english", "general"];
const rawSelectedSubjects = JSON.parse(localStorage.getItem("selectedSubjects") || "[]");
const subject = (localStorage.getItem("selectedSubject") || (rawSelectedSubjects[0] || defaultSelectedSubjects[0])).toLowerCase();
const selectedSubjects = rawSelectedSubjects.length
    ? rawSelectedSubjects.map((name) => name.toLowerCase())
    : defaultSelectedSubjects;
const questionCount = Math.min(Number(localStorage.getItem("questionCount")) || 20, MAX_TOTAL_QUESTION_COUNT);
const examTime = Number(localStorage.getItem("examTime")) || 60;

const getElement = (id) => document.getElementById(id);

function buildSubjectBankMap() {
    const map = {
        biology: Array.isArray(biologyQuestions) ? [...biologyQuestions] : Array.isArray(window.biologyQuestions) ? [...window.biologyQuestions] : [],
        chemistry: Array.isArray(chemistryQuestions) ? [...chemistryQuestions] : Array.isArray(window.chemistryQuestions) ? [...window.chemistryQuestions] : [],
        physics: Array.isArray(physicsQuestions) ? [...physicsQuestions] : Array.isArray(window.physicsQuestions) ? [...window.physicsQuestions] : [],
        mathematics: Array.isArray(mathematicsQuestions) ? [...mathematicsQuestions] : Array.isArray(window.mathematicsQuestions) ? [...window.mathematicsQuestions] : [],
        english: Array.isArray(englishQuestions) ? [...englishQuestions] : Array.isArray(window.englishQuestions) ? [...window.englishQuestions] : [],
        general: Array.isArray(generalKnowledgeQuestions) ? [...generalKnowledgeQuestions] : Array.isArray(window.generalKnowledgeQuestions) ? [...window.generalKnowledgeQuestions] : []
    };

    Object.keys(map).forEach((subjectName) => {
        map[subjectName] = shuffleArray(map[subjectName]);
    });

    return map;
}

const questionBanks = buildSubjectBankMap();
const maxAvailableQuestions = selectedSubjects.reduce((total, subjectName) => {
    const bank = questionBanks[subjectName] || [];
    return total + bank.length;
}, 0);
const effectiveQuestionCount = Math.min(questionCount, MAX_TOTAL_QUESTION_COUNT, maxAvailableQuestions || questionCount);

function humanizeSubject(subjectName) {
    return (subjectName || "Question")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function shuffleArray(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function getQuestionPool(subjectName) {
    const normalized = (subjectName || "").toLowerCase();
    const pool = (questionBanks[normalized] || []).map((question) => ({
        ...question,
        subjectLabel: question.subject || humanizeSubject(subjectName)
    }));

    const shuffled = shuffleArray(pool);
    return shuffled;
}

function getTargetCountMap() {
    const subjectStats = selectedSubjects
        .map((subjectName) => ({
            subjectName,
            bankLength: questionBanks[subjectName]?.length || 0,
            target: 0
        }))
        .filter((item) => item.bankLength > 0);

    if (!subjectStats.length) {
        return [];
    }

    const totalSubjects = subjectStats.length;
    const limit = Math.min(effectiveQuestionCount, subjectStats.reduce((sum, item) => sum + item.bankLength, 0));
    const base = Math.floor(limit / totalSubjects);
    const remainder = limit % totalSubjects;

    subjectStats.forEach((item, index) => {
        const value = base + (index < remainder ? 1 : 0);
        item.target = Math.min(value, item.bankLength);
    });

    let remaining = limit - subjectStats.reduce((sum, item) => sum + item.target, 0);

    for (let i = 0; i < subjectStats.length && remaining > 0; i++) {
        const item = subjectStats[i];
        if (item.target < item.bankLength) {
            item.target += 1;
            remaining -= 1;
        }
    }

    return subjectStats;
}

function getSubjectGroups() {
    const targetMap = getTargetCountMap();
    const usedQuestionIds = new Set();

    const groups = targetMap
        .map((subjectStat) => {
            const availableQuestions = getQuestionPool(subjectStat.subjectName).filter((question) => {
                if (!question || !question.id) return true;
                return !usedQuestionIds.has(question.id);
            });

            const selectedQuestions = [];
            for (const question of availableQuestions) {
                if (selectedQuestions.length >= subjectStat.target) break;
                if (question && question.id) {
                    usedQuestionIds.add(question.id);
                }
                selectedQuestions.push(question);
            }

            return {
                subjectName: subjectStat.subjectName,
                subjectLabel: humanizeSubject(subjectStat.subjectName),
                questions: selectedQuestions
            };
        })
        .filter((group) => group.questions.length > 0);

    return groups;
}

function getFlattenedIndex(subjectIndex, questionIndex) {
    let totalBefore = 0;
    for (let i = 0; i < subjectIndex; i++) {
        totalBefore += subjectGroups[i]?.questions.length || 0;
    }
    return totalBefore + questionIndex;
}

subjectGroups = getSubjectGroups();
questions = subjectGroups.flatMap((group) => group.questions);
userAnswers = new Array(questions.length).fill(null);

function initExam() {
    const subjectName = getElement("subjectName");
    const questionSubject = getElement("questionSubject");
    const totalQuestions = getElement("totalQuestions");

    const currentGroup = subjectGroups[currentSubjectIndex] || { subjectLabel: humanizeSubject(selectedSubjects[0] || "biology") };
    const displayLabel = `${currentGroup.subjectLabel} (${currentSubjectIndex + 1}/${subjectGroups.length || 1})`;

    if (subjectName) subjectName.textContent = displayLabel;
    if (questionSubject) questionSubject.textContent = currentGroup.subjectLabel;
    if (totalQuestions) totalQuestions.textContent = String(subjectGroups[currentSubjectIndex]?.questions.length || 0);

    timeLeft = examTime * 60;
    startTimer();
    updateSubjectNavigation();
    displayQuestion();
    createQuestionNumbers();
}

function startTimer() {
    updateTimerDisplay();
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timerEl = getElement("timer");

    if (timerEl) {
        timerEl.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
}

function getCurrentQuestion() {
    const currentGroup = subjectGroups[currentSubjectIndex] || { questions: [] };
    return currentGroup.questions[currentQuestionIndex] || null;
}

function updateSubjectNavigation() {
    const container = getElement("subjectProgress");
    if (!container) return;

    container.innerHTML = "";

    subjectGroups.forEach((group, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `subject-nav-btn ${index === currentSubjectIndex ? "active" : ""}`;
        button.textContent = `${group.subjectLabel} (${index + 1}/${subjectGroups.length})`;
        button.title = `Go to ${group.subjectLabel}`;

        button.onclick = () => {
            currentSubjectIndex = index;
            currentQuestionIndex = 0;
            updateSubjectNavigation();
            displayQuestion();
            createQuestionNumbers();
        };

        container.appendChild(button);
    });
}

function displayQuestion() {
    const question = getCurrentQuestion();
    if (!question) return;

    const currentQuestion = getElement("currentQuestion");
    const questionText = getElement("questionText");
    const optionsContainer = getElement("optionsContainer");
    const totalQuestions = getElement("totalQuestions");
    const subjectName = getElement("subjectName");
    const questionSubject = getElement("questionSubject");
    const currentGroup = subjectGroups[currentSubjectIndex] || { subjectLabel: "Question", questions: [] };

    if (currentQuestion) currentQuestion.textContent = String(currentQuestionIndex + 1);
    if (totalQuestions) totalQuestions.textContent = String(currentGroup.questions.length || 0);
    if (subjectName) subjectName.textContent = `${currentGroup.subjectLabel} (${currentSubjectIndex + 1}/${subjectGroups.length || 1})`;
    if (questionSubject) questionSubject.textContent = currentGroup.subjectLabel;

    if (questionText) {
        const subjectLabel = question.subjectLabel || question.subject || currentGroup.subjectLabel;
        questionText.textContent = selectedSubjects.length > 1
            ? `${subjectLabel}: ${question.question}`
            : question.question;
    }

    if (!optionsContainer) return;

    optionsContainer.innerHTML = "";
    const answerIndex = userAnswers[getFlattenedIndex(currentSubjectIndex, currentQuestionIndex)];

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";

        if (answerIndex === index) {
            button.classList.add("selected");
        }

        button.innerHTML = `
            <span>${String.fromCharCode(65 + index)}</span>
            ${option}
        `;

        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });

    updateQuestionNumbers();
    updateNavigationButtons();
    updateSubjectNavigation();
}

function selectAnswer(answerIndex) {
    const flatIndex = getFlattenedIndex(currentSubjectIndex, currentQuestionIndex);
    userAnswers[flatIndex] = answerIndex;
    displayQuestion();
}

function createQuestionNumbers() {
    const container = getElement("questionNumbers");
    if (!container) return;

    container.innerHTML = "";
    const currentGroup = subjectGroups[currentSubjectIndex] || { questions: [] };

    currentGroup.questions.forEach((question, index) => {
        const button = document.createElement("button");
        button.className = "number";
        button.textContent = String(index + 1);

        button.onclick = () => {
            currentQuestionIndex = index;
            displayQuestion();
        };

        const flatIndex = getFlattenedIndex(currentSubjectIndex, index);
        if (index === currentQuestionIndex) button.classList.add("active");
        if (userAnswers[flatIndex] !== null) button.classList.add("answered");

        container.appendChild(button);
    });
}

function updateQuestionNumbers() {
    const buttons = document.querySelectorAll(".number");
    buttons.forEach((button, index) => {
        button.classList.remove("active", "answered");
        if (index === currentQuestionIndex) button.classList.add("active");

        const flatIndex = getFlattenedIndex(currentSubjectIndex, index);
        if (userAnswers[flatIndex] !== null) button.classList.add("answered");
    });
}

function updateNavigationButtons() {
    const prevButton = getElement("previousBtn");
    const nextButton = getElement("nextBtn");
    const currentGroup = subjectGroups[currentSubjectIndex] || { questions: [] };

    const isFirstQuestion = currentSubjectIndex === 0 && currentQuestionIndex === 0;
    const isLastQuestion = currentSubjectIndex === subjectGroups.length - 1 && currentQuestionIndex === currentGroup.questions.length - 1;

    if (prevButton) prevButton.disabled = isFirstQuestion;
    if (nextButton) nextButton.disabled = isLastQuestion;

    if (nextButton) {
        const hasMoreSubjects = currentSubjectIndex < subjectGroups.length - 1;
        nextButton.textContent = hasMoreSubjects && currentQuestionIndex === currentGroup.questions.length - 1
            ? "Next Subject →"
            : "Next →";
    }
}

const nextBtn = getElement("nextBtn");
if (nextBtn) {
    nextBtn.onclick = function () {
        const currentGroup = subjectGroups[currentSubjectIndex] || { questions: [] };

        if (currentQuestionIndex < currentGroup.questions.length - 1) {
            currentQuestionIndex += 1;
        } else if (currentSubjectIndex < subjectGroups.length - 1) {
            currentSubjectIndex += 1;
            currentQuestionIndex = 0;
        }

        updateSubjectNavigation();
        displayQuestion();
        createQuestionNumbers();
    };
}

const previousBtn = getElement("previousBtn");
if (previousBtn) {
    previousBtn.onclick = function () {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex -= 1;
        } else if (currentSubjectIndex > 0) {
            currentSubjectIndex -= 1;
            currentQuestionIndex = (subjectGroups[currentSubjectIndex]?.questions.length || 1) - 1;
        }

        updateSubjectNavigation();
        displayQuestion();
        createQuestionNumbers();
    };
}

const submitButton = getElement("submitBtn");
if (submitButton) {
    submitButton.onclick = function () {
        const unanswered = userAnswers.filter((answer) => answer === null).length;

        if (unanswered > 0) {
            const confirmSubmit = confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`);
            if (!confirmSubmit) return;
        }

        submitExam();
    };
}

function submitExam() {
    clearInterval(timerInterval);

    let score = 0;

    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });

    const percentage = Math.round((score / questions.length) * 100);

    localStorage.setItem("score", String(score));
    localStorage.setItem("percentage", String(percentage));
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    localStorage.setItem("examQuestions", JSON.stringify(questions));

    window.location.href = "result.html";
}

initExam();
