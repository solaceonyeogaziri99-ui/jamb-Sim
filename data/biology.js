const biologyQuestions = [
  {
    "id": "BIO-001",
    "question": "Which structure contains the genetic material in a typical eukaryotic cell?",
    "options": [
      "Cell wall",
      "Nucleus",
      "Vacuole",
      "Cytoplasm"
    ],
    "answer": 1,
    "explanation": "The nucleus contains chromosomes made mainly of DNA."
  },
  {
    "id": "BIO-002",
    "question": "What is the process by which green plants manufacture food using light energy?",
    "options": [
      "Respiration",
      "Photosynthesis",
      "Excretion",
      "Digestion"
    ],
    "answer": 1,
    "explanation": "Photosynthesis uses light energy to make organic food from carbon dioxide and water."
  },
  {
    "id": "BIO-003",
    "question": "Which gas is required by green plants for photosynthesis?",
    "options": [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Hydrogen"
    ],
    "answer": 1,
    "explanation": "Carbon dioxide provides the carbon used to make carbohydrates."
  },
  {
    "id": "BIO-004",
    "question": "Which structure controls the movement of substances into and out of a cell?",
    "options": [
      "Cell membrane",
      "Cell wall",
      "Nucleus",
      "Ribosome"
    ],
    "answer": 0,
    "explanation": "The selectively permeable cell membrane regulates movement into and out of the cell."
  },
  {
    "id": "BIO-005",
    "question": "Which organelle contains chlorophyll?",
    "options": [
      "Mitochondrion",
      "Chloroplast",
      "Ribosome",
      "Lysosome"
    ],
    "answer": 1,
    "explanation": "Chloroplasts contain chlorophyll and are the main sites of photosynthesis."
  },
  {
    "id": "BIO-006",
    "question": "What is the movement of water molecules through a selectively permeable membrane called?",
    "options": [
      "Diffusion",
      "Osmosis",
      "Active transport",
      "Transpiration"
    ],
    "answer": 1,
    "explanation": "Osmosis is the movement of water across a selectively permeable membrane."
  },
  {
    "id": "BIO-007",
    "question": "Movement of particles from a region of higher concentration to lower concentration is?",
    "options": [
      "Diffusion",
      "Osmosis only",
      "Respiration",
      "Filtration"
    ],
    "answer": 0,
    "explanation": "Diffusion is net movement down a concentration gradient."
  },
  {
    "id": "BIO-008",
    "question": "Which process requires energy to move substances against a concentration gradient?",
    "options": [
      "Diffusion",
      "Active transport",
      "Osmosis",
      "Transpiration"
    ],
    "answer": 1,
    "explanation": "Active transport uses cellular energy to move substances against their concentration gradient."
  },
  {
    "id": "BIO-009",
    "question": "Which blood vessel carries blood away from the heart?",
    "options": [
      "Vein",
      "Artery",
      "Capillary",
      "Venule"
    ],
    "answer": 1,
    "explanation": "Arteries carry blood away from the heart."
  },
  {
    "id": "BIO-010",
    "question": "Which blood vessel usually carries blood toward the heart?",
    "options": [
      "Artery",
      "Vein",
      "Aorta only",
      "Capillary only"
    ],
    "answer": 1,
    "explanation": "Veins generally return blood to the heart."
  },
  {
    "id": "BIO-011",
    "question": "Which chamber of the heart pumps oxygenated blood to the body?",
    "options": [
      "Right atrium",
      "Right ventricle",
      "Left atrium",
      "Left ventricle"
    ],
    "answer": 3,
    "explanation": "The left ventricle pumps oxygenated blood into the aorta and systemic circulation."
  },
  {
    "id": "BIO-012",
    "question": "Which chamber receives deoxygenated blood from the body?",
    "options": [
      "Left ventricle",
      "Right atrium",
      "Left atrium",
      "Right ventricle"
    ],
    "answer": 1,
    "explanation": "The right atrium receives deoxygenated blood from the body through the venae cavae."
  },
  {
    "id": "BIO-013",
    "question": "What is the main function of the diaphragm during normal inhalation?",
    "options": [
      "It relaxes upward",
      "It contracts and flattens",
      "It closes the trachea",
      "It stops blood flow"
    ],
    "answer": 1,
    "explanation": "Contraction flattens the diaphragm and increases thoracic volume, drawing air into the lungs."
  },
  {
    "id": "BIO-014",
    "question": "Which gas is transported from body tissues to the lungs for exhalation?",
    "options": [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen only",
      "Hydrogen"
    ],
    "answer": 1,
    "explanation": "Cells produce carbon dioxide during respiration, which is transported to the lungs."
  },
  {
    "id": "BIO-015",
    "question": "Which enzyme digests starch into smaller carbohydrates in the mouth?",
    "options": [
      "Pepsin",
      "Amylase",
      "Lipase",
      "Trypsin"
    ],
    "answer": 1,
    "explanation": "Salivary amylase begins starch digestion in the mouth."
  },
  {
    "id": "BIO-016",
    "question": "Which organ produces bile?",
    "options": [
      "Stomach",
      "Liver",
      "Pancreas",
      "Kidney"
    ],
    "answer": 1,
    "explanation": "The liver produces bile, which is stored in the gallbladder."
  },
  {
    "id": "BIO-017",
    "question": "What is the main role of bile in fat digestion?",
    "options": [
      "Break proteins into amino acids",
      "Emulsify fats",
      "Convert glucose to glycogen",
      "Digest starch directly"
    ],
    "answer": 1,
    "explanation": "Bile emulsifies fats into smaller droplets, increasing the surface area for lipase."
  },
  {
    "id": "BIO-018",
    "question": "Which organ stores bile?",
    "options": [
      "Pancreas",
      "Gallbladder",
      "Liver",
      "Small intestine"
    ],
    "answer": 1,
    "explanation": "The gallbladder stores and concentrates bile produced by the liver."
  },
  {
    "id": "BIO-019",
    "question": "Which organ produces insulin?",
    "options": [
      "Pancreas",
      "Liver",
      "Kidney",
      "Thyroid"
    ],
    "answer": 0,
    "explanation": "The beta cells of the pancreatic islets produce insulin."
  },
  {
    "id": "BIO-020",
    "question": "Which part of the brain controls breathing and heartbeat among other involuntary functions?",
    "options": [
      "Cerebrum",
      "Medulla oblongata",
      "Cerebellum",
      "Hypothalamus only"
    ],
    "answer": 1,
    "explanation": "The medulla oblongata contains centres involved in vital involuntary functions."
  },
  {
    "id": "BIO-021",
    "question": "Which receptor detects light in the human eye?",
    "options": [
      "Auditory receptor",
      "Photoreceptor",
      "Chemoreceptor",
      "Thermoreceptor"
    ],
    "answer": 1,
    "explanation": "Photoreceptors in the retina detect light."
  },
  {
    "id": "BIO-022",
    "question": "Which part of the ear contains the sensory organ for hearing?",
    "options": [
      "Cochlea",
      "Pinna only",
      "Eustachian tube",
      "Ear canal"
    ],
    "answer": 0,
    "explanation": "The cochlea contains sensory hair cells involved in hearing."
  },
  {
    "id": "BIO-023",
    "question": "Which hormone is responsible for stimulating milk production after childbirth?",
    "options": [
      "Prolactin",
      "Insulin",
      "Adrenaline",
      "Thyroxine"
    ],
    "answer": 0,
    "explanation": "Prolactin stimulates milk production in the mammary glands."
  },
  {
    "id": "BIO-024",
    "question": "Which hormone mainly causes uterine contractions during labour?",
    "options": [
      "Oxytocin",
      "Insulin",
      "Glucagon",
      "Melatonin"
    ],
    "answer": 0,
    "explanation": "Oxytocin stimulates uterine contractions during labour."
  },
  {
    "id": "BIO-025",
    "question": "What is the fusion of male and female gametes called?",
    "options": [
      "Germination",
      "Fertilisation",
      "Pollination",
      "Implantation"
    ],
    "answer": 1,
    "explanation": "Fertilisation is the fusion of male and female gametes to form a zygote."
  },
  {
    "id": "BIO-026",
    "question": "What is the first cell formed after fertilisation?",
    "options": [
      "Embryo",
      "Zygote",
      "Foetus",
      "Placenta"
    ],
    "answer": 1,
    "explanation": "The fertilised egg is called a zygote."
  },
  {
    "id": "BIO-027",
    "question": "Which type of reproduction involves only one parent and usually produces genetically similar offspring?",
    "options": [
      "Sexual reproduction",
      "Asexual reproduction",
      "Cross-fertilisation",
      "Internal fertilisation"
    ],
    "answer": 1,
    "explanation": "Asexual reproduction involves one parent and does not involve fusion of gametes."
  },
  {
    "id": "BIO-028",
    "question": "What is the transfer of pollen from anther to stigma called?",
    "options": [
      "Fertilisation",
      "Pollination",
      "Germination",
      "Dispersal"
    ],
    "answer": 1,
    "explanation": "Pollination is the transfer of pollen to the stigma."
  },
  {
    "id": "BIO-029",
    "question": "Which agent commonly helps pollinate flowering plants?",
    "options": [
      "Wind",
      "Blood",
      "Bile",
      "Urine"
    ],
    "answer": 0,
    "explanation": "Wind is a common pollinating agent, especially in grasses."
  },
  {
    "id": "BIO-030",
    "question": "What is seed dispersal?",
    "options": [
      "Production of pollen",
      "Movement of seeds away from the parent plant",
      "Fusion of gametes",
      "Growth of roots"
    ],
    "answer": 1,
    "explanation": "Seed dispersal moves seeds away from the parent plant, reducing competition."
  },
  {
    "id": "BIO-031",
    "question": "Which part of a seed develops into the root?",
    "options": [
      "Plumule",
      "Radicle",
      "Cotyledon",
      "Testa"
    ],
    "answer": 1,
    "explanation": "The radicle develops into the primary root."
  },
  {
    "id": "BIO-032",
    "question": "Which part of a seed develops into the shoot?",
    "options": [
      "Radicle",
      "Plumule",
      "Testa",
      "Hilum"
    ],
    "answer": 1,
    "explanation": "The plumule develops into the shoot."
  },
  {
    "id": "BIO-033",
    "question": "What is the process by which a seed begins to grow into a seedling?",
    "options": [
      "Germination",
      "Pollination",
      "Transpiration",
      "Fermentation"
    ],
    "answer": 0,
    "explanation": "Germination begins when a viable seed gets suitable conditions and starts growing."
  },
  {
    "id": "BIO-034",
    "question": "Which condition is generally NOT required for seed germination?",
    "options": [
      "Water",
      "Oxygen",
      "Suitable temperature",
      "Light for all seeds"
    ],
    "answer": 3,
    "explanation": "Most seeds need water, oxygen and a suitable temperature; light is not required for all seeds."
  },
  {
    "id": "BIO-035",
    "question": "An organism that obtains nutrients by feeding on another living organism is a?",
    "options": [
      "Producer",
      "Consumer",
      "Autotroph",
      "Mineral"
    ],
    "answer": 1,
    "explanation": "Consumers obtain organic nutrients by feeding on other organisms."
  },
  {
    "id": "BIO-036",
    "question": "Organisms that break down dead organic matter are called?",
    "options": [
      "Producers",
      "Decomposers",
      "Herbivores only",
      "Predators only"
    ],
    "answer": 1,
    "explanation": "Decomposers such as bacteria and fungi break down dead organic material."
  },
  {
    "id": "BIO-037",
    "question": "Which relationship benefits one organism while the other is harmed?",
    "options": [
      "Mutualism",
      "Parasitism",
      "Commensalism",
      "Cooperation"
    ],
    "answer": 1,
    "explanation": "In parasitism, the parasite benefits while the host is harmed."
  },
  {
    "id": "BIO-038",
    "question": "An animal that feeds mainly on plants is a?",
    "options": [
      "Carnivore",
      "Herbivore",
      "Omnivore",
      "Decomposer"
    ],
    "answer": 1,
    "explanation": "Herbivores primarily feed on plants."
  },
  {
    "id": "BIO-039",
    "question": "An animal that eats both plants and animals is a?",
    "options": [
      "Herbivore",
      "Carnivore",
      "Omnivore",
      "Autotroph"
    ],
    "answer": 2,
    "explanation": "Omnivores consume both plant and animal food."
  },
  {
    "id": "BIO-040",
    "question": "Which ecological pyramid shows the amount of living material at each trophic level?",
    "options": [
      "Pyramid of biomass",
      "Food web",
      "Water cycle",
      "Gene map"
    ],
    "answer": 0,
    "explanation": "A pyramid of biomass represents the total mass of living material at each trophic level."
  },
  {
    "id": "BIO-041",
    "question": "Which molecule is the immediate energy currency of most cells?",
    "options": [
      "DNA",
      "ATP",
      "RNA",
      "Glycogen"
    ],
    "answer": 1,
    "explanation": "ATP is the main readily usable energy carrier in cells."
  },
  {
    "id": "BIO-042",
    "question": "Which organelle modifies and packages proteins?",
    "options": [
      "Golgi apparatus",
      "Ribosome",
      "Nucleus",
      "Vacuole"
    ],
    "answer": 0,
    "explanation": "The Golgi apparatus modifies, sorts and packages proteins."
  },
  {
    "id": "BIO-043",
    "question": "Which structure is characteristic of plant cells but absent from animal cells?",
    "options": [
      "Cell membrane",
      "Cell wall",
      "Cytoplasm",
      "Ribosome"
    ],
    "answer": 1,
    "explanation": "Plant cells have a cellulose cell wall."
  },
  {
    "id": "BIO-044",
    "question": "What gives plant cell walls much of their strength?",
    "options": [
      "Cellulose",
      "Glycogen",
      "Haemoglobin",
      "Keratin"
    ],
    "answer": 0,
    "explanation": "Cellulose is a major structural component of plant cell walls."
  },
  {
    "id": "BIO-045",
    "question": "Which process produces gametes with half the normal chromosome number?",
    "options": [
      "Mitosis",
      "Meiosis",
      "Budding",
      "Binary fission"
    ],
    "answer": 1,
    "explanation": "Meiosis reduces chromosome number by half."
  },
  {
    "id": "BIO-046",
    "question": "How many chromosomes are normally found in a human gamete?",
    "options": [
      "46",
      "44",
      "23",
      "92"
    ],
    "answer": 2,
    "explanation": "Human gametes are haploid and normally contain 23 chromosomes."
  },
  {
    "id": "BIO-047",
    "question": "What is a genotype?",
    "options": [
      "Genetic constitution",
      "Physical appearance only",
      "Habitat",
      "Diet"
    ],
    "answer": 0,
    "explanation": "Genotype is an organism's genetic makeup."
  },
  {
    "id": "BIO-048",
    "question": "What is a phenotype?",
    "options": [
      "Observable characteristics",
      "DNA sequence only",
      "Chromosome number only",
      "Habitat"
    ],
    "answer": 0,
    "explanation": "Phenotype refers to observable characteristics."
  },
  {
    "id": "BIO-049",
    "question": "Which base occurs in DNA but not normally in RNA?",
    "options": [
      "Uracil",
      "Thymine",
      "Cytosine",
      "Guanine"
    ],
    "answer": 1,
    "explanation": "DNA uses thymine; RNA normally uses uracil."
  },
  {
    "id": "BIO-050",
    "question": "Which sugar occurs in RNA?",
    "options": [
      "Ribose",
      "Deoxyribose",
      "Glucose",
      "Fructose"
    ],
    "answer": 0,
    "explanation": "RNA contains ribose."
  },
  {
    "id": "BIO-051",
    "question": "Which sugar occurs in DNA?",
    "options": [
      "Ribose",
      "Deoxyribose",
      "Sucrose",
      "Maltose"
    ],
    "answer": 1,
    "explanation": "DNA contains deoxyribose."
  },
  {
    "id": "BIO-052",
    "question": "What is the main function of DNA?",
    "options": [
      "Store genetic information",
      "Digest fats",
      "Carry oxygen",
      "Produce bile"
    ],
    "answer": 0,
    "explanation": "DNA stores hereditary information."
  },
  {
    "id": "BIO-053",
    "question": "Which blood vessel carries blood away from the heart?",
    "options": [
      "Vein",
      "Artery",
      "Capillary",
      "Venule"
    ],
    "answer": 1,
    "explanation": "Arteries carry blood away from the heart."
  },
  {
    "id": "BIO-054",
    "question": "Where does most exchange between blood and tissues occur?",
    "options": [
      "Capillaries",
      "Aorta",
      "Large arteries",
      "Vena cava"
    ],
    "answer": 0,
    "explanation": "Capillaries have thin walls suited to exchange."
  },
  {
    "id": "BIO-055",
    "question": "What is the liquid part of blood called?",
    "options": [
      "Plasma",
      "Lymph",
      "Cytoplasm",
      "Bile"
    ],
    "answer": 0,
    "explanation": "Plasma is the fluid portion of blood."
  },
  {
    "id": "BIO-056",
    "question": "What is the main role of haemoglobin?",
    "options": [
      "Transport oxygen",
      "Digest protein",
      "Produce antibodies",
      "Clot blood"
    ],
    "answer": 0,
    "explanation": "Haemoglobin binds and transports oxygen."
  },
  {
    "id": "BIO-057",
    "question": "What is an antibody?",
    "options": [
      "An immune protein",
      "A digestive enzyme",
      "A red pigment",
      "A clotting cell"
    ],
    "answer": 0,
    "explanation": "Antibodies specifically recognise antigens."
  },
  {
    "id": "BIO-058",
    "question": "Which organ filters blood and contributes to immune function?",
    "options": [
      "Spleen",
      "Pancreas",
      "Stomach",
      "Thyroid"
    ],
    "answer": 0,
    "explanation": "The spleen filters blood and supports immune responses."
  },
  {
    "id": "BIO-059",
    "question": "Which organ produces urine?",
    "options": [
      "Kidney",
      "Liver",
      "Heart",
      "Lung"
    ],
    "answer": 0,
    "explanation": "The kidneys filter blood and form urine."
  },
  {
    "id": "BIO-060",
    "question": "What is the main nitrogenous waste in human urine?",
    "options": [
      "Urea",
      "Glucose",
      "Oxygen",
      "Starch"
    ],
    "answer": 0,
    "explanation": "Urea is formed during amino-acid metabolism."
  },
  {
    "id": "BIO-061",
    "question": "Which hormone raises blood glucose when it falls?",
    "options": [
      "Glucagon",
      "Insulin",
      "Oestrogen",
      "ADH"
    ],
    "answer": 0,
    "explanation": "Glucagon promotes processes that raise blood glucose."
  },
  {
    "id": "BIO-062",
    "question": "Which hormone helps the kidneys conserve water?",
    "options": [
      "ADH",
      "Insulin",
      "Thyroxine",
      "Adrenaline"
    ],
    "answer": 0,
    "explanation": "ADH increases water reabsorption by the kidneys."
  },
  {
    "id": "BIO-063",
    "question": "What is homeostasis?",
    "options": [
      "Maintaining a stable internal environment",
      "Rapid growth",
      "Digestion",
      "Blood movement"
    ],
    "answer": 0,
    "explanation": "Homeostasis keeps internal conditions within suitable limits."
  },
  {
    "id": "BIO-064",
    "question": "Which gland produces thyroxine?",
    "options": [
      "Thyroid",
      "Pituitary",
      "Pancreas",
      "Adrenal"
    ],
    "answer": 0,
    "explanation": "The thyroid produces thyroxine."
  },
  {
    "id": "BIO-065",
    "question": "Which gland regulates several other endocrine glands?",
    "options": [
      "Pituitary",
      "Thyroid",
      "Pancreas",
      "Adrenal"
    ],
    "answer": 0,
    "explanation": "The pituitary releases hormones that regulate several endocrine functions."
  },
  {
    "id": "BIO-066",
    "question": "Which part of a neuron receives many incoming signals?",
    "options": [
      "Dendrites",
      "Axon",
      "Myelin",
      "Nucleus"
    ],
    "answer": 0,
    "explanation": "Dendrites receive signals from other cells."
  },
  {
    "id": "BIO-067",
    "question": "Which structure carries impulses away from a neuron's cell body?",
    "options": [
      "Axon",
      "Dendrite",
      "Nucleus",
      "Cell wall"
    ],
    "answer": 0,
    "explanation": "The axon carries impulses away from the cell body."
  },
  {
    "id": "BIO-068",
    "question": "What is a reflex action?",
    "options": [
      "A rapid automatic response",
      "A learned language skill",
      "Digestion",
      "Voluntary exercise"
    ],
    "answer": 0,
    "explanation": "Reflexes are rapid automatic responses to stimuli."
  },
  {
    "id": "BIO-069",
    "question": "What is a stimulus?",
    "options": [
      "A change that causes a response",
      "A hormone",
      "A blood cell",
      "An enzyme"
    ],
    "answer": 0,
    "explanation": "A stimulus is a detectable environmental change."
  },
  {
    "id": "BIO-070",
    "question": "Which sense organ contains receptors for smell?",
    "options": [
      "Nose",
      "Ear",
      "Skin",
      "Eye"
    ],
    "answer": 0,
    "explanation": "Olfactory receptors in the nose detect smell."
  },
  {
    "id": "BIO-071",
    "question": "Which organ contains taste receptors?",
    "options": [
      "Tongue",
      "Eye",
      "Ear",
      "Kidney"
    ],
    "answer": 0,
    "explanation": "Taste buds contain taste receptors."
  },
  {
    "id": "BIO-072",
    "question": "Which nutrient group includes vitamins and minerals?",
    "options": [
      "Micronutrients",
      "Proteins",
      "Fats",
      "Carbohydrates"
    ],
    "answer": 0,
    "explanation": "Vitamins and minerals are needed in relatively small amounts."
  },
  {
    "id": "BIO-073",
    "question": "Which process removes metabolic wastes from the body?",
    "options": [
      "Excretion",
      "Ingestion",
      "Assimilation",
      "Photosynthesis"
    ],
    "answer": 0,
    "explanation": "Excretion removes metabolic wastes."
  },
  {
    "id": "BIO-074",
    "question": "What is ingestion?",
    "options": [
      "Taking food into the body",
      "Breaking down food",
      "Absorbing nutrients",
      "Removing urine"
    ],
    "answer": 0,
    "explanation": "Ingestion is the intake of food."
  },
  {
    "id": "BIO-075",
    "question": "What is assimilation?",
    "options": [
      "Use of absorbed nutrients by cells",
      "Chewing",
      "Urination",
      "Bile production"
    ],
    "answer": 0,
    "explanation": "Assimilation is incorporation and use of absorbed nutrients by cells."
  },
  {
    "id": "BIO-076",
    "question": "Which organ stores bile?",
    "options": [
      "Gallbladder",
      "Pancreas",
      "Liver",
      "Kidney"
    ],
    "answer": 0,
    "explanation": "The gallbladder stores and concentrates bile."
  },
  {
    "id": "BIO-077",
    "question": "Which enzyme begins starch digestion in the mouth?",
    "options": [
      "Amylase",
      "Pepsin",
      "Lipase",
      "Trypsin"
    ],
    "answer": 0,
    "explanation": "Salivary amylase begins starch digestion."
  },
  {
    "id": "BIO-078",
    "question": "Which part of a seed develops into the root?",
    "options": [
      "Radicle",
      "Plumule",
      "Testa",
      "Cotyledon"
    ],
    "answer": 0,
    "explanation": "The radicle develops into the primary root."
  },
  {
    "id": "BIO-079",
    "question": "Which part of a seed develops into the shoot?",
    "options": [
      "Plumule",
      "Radicle",
      "Testa",
      "Hilum"
    ],
    "answer": 0,
    "explanation": "The plumule develops into the shoot."
  },
  {
    "id": "BIO-080",
    "question": "Which process moves pollen from anther to stigma?",
    "options": [
      "Pollination",
      "Fertilisation",
      "Germination",
      "Respiration"
    ],
    "answer": 0,
    "explanation": "Pollination is pollen transfer to the stigma."
  },
  {
    "id": "BIO-081",
    "question": "Which blood component helps to transport carbon dioxide?",
    "options": [
      "Red blood cells",
      "White blood cells",
      "Platelets",
      "Plasma"
    ],
    "answer": 0,
    "explanation": "Red blood cells transport oxygen and help carry carbon dioxide back to the lungs."
  },
  {
    "id": "BIO-082",
    "question": "Which process involves the release of energy from food in living cells?",
    "options": [
      "Respiration",
      "Digestion",
      "Osmosis",
      "Excretion"
    ],
    "answer": 0,
    "explanation": "Cellular respiration releases energy from food."
  },
  {
    "id": "BIO-083",
    "question": "The highest concentration of chlorophyll in a leaf is found in the?",
    "options": [
      "Palisade mesophyll",
      "Spongy mesophyll",
      "Upper epidermis",
      "Guard cells"
    ],
    "answer": 0,
    "explanation": "Palisade mesophyll cells contain many chloroplasts for photosynthesis."
  },
  {
    "id": "BIO-084",
    "question": "Which is a function of the liver?",
    "options": [
      "Detoxification",
      "Production of urine",
      "Pumping blood",
      "Absorption of oxygen"
    ],
    "answer": 0,
    "explanation": "The liver detoxifies harmful substances and processes nutrients."
  },
  {
    "id": "BIO-085",
    "question": "Which structure in the plant controls the opening and closing of stomata?",
    "options": [
      "Guard cells",
      "Phloem",
      "Xylem",
      "Cortex"
    ],
    "answer": 0,
    "explanation": "Guard cells regulate stomatal opening and closing."
  },
  {
    "id": "BIO-086",
    "question": "Which disease is caused by the deficiency of vitamin C?",
    "options": [
      "Scurvy",
      "Rickets",
      "Goitre",
      "Anaemia"
    ],
    "answer": 0,
    "explanation": "Vitamin C deficiency leads to scurvy."
  },
  {
    "id": "BIO-087",
    "question": "Which vitamin is important for blood clotting?",
    "options": [
      "Vitamin K",
      "Vitamin A",
      "Vitamin C",
      "Vitamin B12"
    ],
    "answer": 0,
    "explanation": "Vitamin K is necessary for proper blood clotting."
  },
  {
    "id": "BIO-088",
    "question": "Which component of the blood is responsible for clotting?",
    "options": [
      "Platelets",
      "Plasma",
      "Haemoglobin",
      "Leucocytes"
    ],
    "answer": 0,
    "explanation": "Platelets help to form clots and stop bleeding."
  },
  {
    "id": "BIO-089",
    "question": "Which of these is an example of a biotic factor?",
    "options": [
      "Plants",
      "Rainfall",
      "Temperature",
      "Light"
    ],
    "answer": 0,
    "explanation": "Biotic factors are living components of the environment."
  },
  {
    "id": "BIO-090",
    "question": "The process by which green plants make food is called?",
    "options": [
      "Photosynthesis",
      "Respiration",
      "Transpiration",
      "Germination"
    ],
    "answer": 0,
    "explanation": "Photosynthesis is the process by which plants make food."
  },
  {
    "id": "BIO-091",
    "question": "Which gas is required for photosynthesis?",
    "options": [
      "Carbon dioxide",
      "Nitrogen",
      "Helium",
      "Hydrogen"
    ],
    "answer": 0,
    "explanation": "Carbon dioxide is absorbed during photosynthesis."
  },
  {
    "id": "BIO-092",
    "question": "What is the role of chlorophyll?",
    "options": [
      "Absorb light energy",
      "Transport water",
      "Make proteins",
      "Store starch"
    ],
    "answer": 0,
    "explanation": "Chlorophyll absorbs light needed for photosynthesis."
  },
  {
    "id": "BIO-093",
    "question": "Which is the main site of digestion in humans?",
    "options": [
      "Small intestine",
      "Stomach",
      "Mouth",
      "Large intestine"
    ],
    "answer": 0,
    "explanation": "Most digestion and absorption take place in the small intestine."
  },
  {
    "id": "BIO-094",
    "question": "Which organ produces bile?",
    "options": [
      "Liver",
      "Gallbladder",
      "Pancreas",
      "Kidney"
    ],
    "answer": 0,
    "explanation": "The liver produces bile."
  },
  {
    "id": "BIO-095",
    "question": "The main function of the large intestine is to?",
    "options": [
      "Absorb water",
      "Digest protein",
      "Store oxygen",
      "Filter blood"
    ],
    "answer": 0,
    "explanation": "The large intestine absorbs water from undigested food."
  },
  {
    "id": "BIO-096",
    "question": "Which blood vessel carries deoxygenated blood to the lungs?",
    "options": [
      "Pulmonary artery",
      "Pulmonary vein",
      "Aorta",
      "Vena cava"
    ],
    "answer": 0,
    "explanation": "The pulmonary artery carries deoxygenated blood from the heart to the lungs."
  },
  {
    "id": "BIO-097",
    "question": "Which organ is responsible for producing insulin?",
    "options": [
      "Pancreas",
      "Liver",
      "Kidney",
      "Spleen"
    ],
    "answer": 0,
    "explanation": "The pancreas produces insulin and digestive enzymes."
  },
  {
    "id": "BIO-098",
    "question": "The movement of molecules from a region of higher concentration to lower concentration is called?",
    "options": [
      "Diffusion",
      "Osmosis",
      "Active transport",
      "Filtration"
    ],
    "answer": 0,
    "explanation": "Diffusion is the spreading of particles from a higher to lower concentration."
  },
  {
    "id": "BIO-099",
    "question": "Which part of the human ear is responsible for balance?",
    "options": [
      "Semi-circular canals",
      "Cochlea",
      "Eustachian tube",
      "Auditory nerve"
    ],
    "answer": 0,
    "explanation": "The semi-circular canals help maintain balance."
  },
  {
    "id": "BIO-100",
    "question": "The process by which a seed begins to grow is called?",
    "options": [
      "Germination",
      "Pollination",
      "Fertilisation",
      "Transpiration"
    ],
    "answer": 0,
    "explanation": "Germination is when a seed starts to grow into a plant."
  },
  {
    "id": "BIO-101",
    "question": "Which blood cells are responsible for the transport of oxygen?",
    "options": [
      "Erythrocytes",
      "Leucocytes",
      "Platelets",
      "Plasma cells"
    ],
    "answer": 0,
    "explanation": "Erythrocytes, or red blood cells, transport oxygen."
  },
  {
    "id": "BIO-102",
    "question": "Which of these is a disease-causing microorganism?",
    "options": [
      "Pathogen",
      "Antibody",
      "Vaccine",
      "Hormone"
    ],
    "answer": 0,
    "explanation": "A pathogen causes disease."
  },
  {
    "id": "BIO-103",
    "question": "Which of these cells are involved in immunity?",
    "options": [
      "White blood cells",
      "Red blood cells",
      "Platelets",
      "Neurons"
    ],
    "answer": 0,
    "explanation": "White blood cells defend the body against invading pathogens."
  },
  {
    "id": "BIO-104",
    "question": "Which part of the circulatory system carries blood away from the heart?",
    "options": [
      "Arteries",
      "Veins",
      "Capillaries",
      "Lymph vessels"
    ],
    "answer": 0,
    "explanation": "Arteries carry blood away from the heart."
  },
  {
    "id": "BIO-105",
    "question": "Which type of reproduction does not involve gametes?",
    "options": [
      "Asexual reproduction",
      "Sexual reproduction",
      "Pollination",
      "Fertilisation"
    ],
    "answer": 0,
    "explanation": "Asexual reproduction does not require gametes."
  },
  {
    "id": "BIO-106",
    "question": "Which virus can lead to acquired immune deficiency syndrome?",
    "options": [
      "HIV",
      "Influenza",
      "Hepatitis B",
      "Rabies"
    ],
    "answer": 0,
    "explanation": "HIV causes AIDS."
  },
  {
    "id": "BIO-107",
    "question": "Which process is responsible for removal of excess water from leaves?",
    "options": [
      "Transpiration",
      "Respiration",
      "Digestion",
      "Pollination"
    ],
    "answer": 0,
    "explanation": "Transpiration is the loss of water vapour from leaves."
  },
  {
    "id": "BIO-108",
    "question": "Which mineral is needed for the formation of chlorophyll?",
    "options": [
      "Magnesium",
      "Calcium",
      "Iron",
      "Zinc"
    ],
    "answer": 0,
    "explanation": "Magnesium is a central component of chlorophyll."
  },
  {
    "id": "BIO-109",
    "question": "Which organ acts as the body?s thermostat?",
    "options": [
      "Hypothalamus",
      "Kidney",
      "Liver",
      "Skin"
    ],
    "answer": 0,
    "explanation": "The hypothalamus regulates body temperature."
  },
  {
    "id": "BIO-110",
    "question": "The female gamete in humans is the?",
    "options": [
      "Egg cell",
      "Sperm cell",
      "Zygote",
      "Embryo"
    ],
    "answer": 0,
    "explanation": "The egg is the female gamete."
  },
  {
    "id": "BIO-111",
    "question": "The male gamete in humans is the?",
    "options": [
      "Sperm cell",
      "Egg cell",
      "Ovum",
      "Placenta"
    ],
    "answer": 0,
    "explanation": "The sperm cell is the male gamete."
  },
  {
    "id": "BIO-112",
    "question": "Which part of the plant absorbs mineral salts?",
    "options": [
      "Roots",
      "Leaves",
      "Flowers",
      "Stem"
    ],
    "answer": 0,
    "explanation": "Roots absorb mineral salts from the soil."
  },
  {
    "id": "BIO-113",
    "question": "Which is a function of the skeleton?",
    "options": [
      "Protection of organs",
      "Transport of oxygen",
      "Digestion of food",
      "Production of hormones"
    ],
    "answer": 0,
    "explanation": "The skeleton protects internal organs and supports the body."
  },
  {
    "id": "BIO-114",
    "question": "Which blood vessel brings blood back to the heart?",
    "options": [
      "Vein",
      "Artery",
      "Capillary",
      "Lymph vessel"
    ],
    "answer": 0,
    "explanation": "Veins return blood to the heart."
  },
  {
    "id": "BIO-115",
    "question": "Which nutrient provides the body with energy most quickly?",
    "options": [
      "Carbohydrate",
      "Protein",
      "Vitamin",
      "Mineral"
    ],
    "answer": 0,
    "explanation": "Carbohydrates are the main immediate source of energy."
  },
  {
    "id": "BIO-116",
    "question": "What is the function of the alveoli?",
    "options": [
      "Gas exchange",
      "Protein synthesis",
      "Water absorption",
      "Food digestion"
    ],
    "answer": 0,
    "explanation": "Alveoli are the sites of gas exchange in the lungs."
  },
  {
    "id": "BIO-117",
    "question": "Which process removes waste products from the body?",
    "options": [
      "Excretion",
      "Pollination",
      "Fermentation",
      "Growth"
    ],
    "answer": 0,
    "explanation": "Excretion eliminates metabolic wastes."
  },
  {
    "id": "BIO-118",
    "question": "Which part of the eye changes size to regulate light entry?",
    "options": [
      "Iris",
      "Lens",
      "Retina",
      "Cornea"
    ],
    "answer": 0,
    "explanation": "The iris controls the size of the pupil."
  },
  {
    "id": "BIO-119",
    "question": "What is the function of the kidney tubules?",
    "options": [
      "Reabsorption and filtration",
      "Digestion",
      "Hormone production",
      "Blood oxygenation"
    ],
    "answer": 0,
    "explanation": "Kidney tubules filter and reabsorb useful substances."
  },
  {
    "id": "BIO-120",
    "question": "Which tissue conducts water in plants?",
    "options": [
      "Xylem",
      "Phloem",
      "Epidermis",
      "Cambium"
    ],
    "answer": 0,
    "explanation": "Xylem transports water and mineral salts."
  },
  {
    "id": "BIO-121",
    "question": "Which tissue transports sugars in plants?",
    "options": [
      "Phloem",
      "Xylem",
      "Root hair",
      "Cortex"
    ],
    "answer": 0,
    "explanation": "Phloem transports sugars and organic nutrients."
  },
  {
    "id": "BIO-122",
    "question": "What is the role of mucus in the respiratory tract?",
    "options": [
      "Trap dust and microbes",
      "Digest starch",
      "Carry oxygen",
      "Absorb minerals"
    ],
    "answer": 0,
    "explanation": "Mucus traps particles and microorganisms."
  },
  {
    "id": "BIO-123",
    "question": "Which structure controls all cell activities?",
    "options": [
      "Nucleus",
      "Cell membrane",
      "Ribosome",
      "Mitochondrion"
    ],
    "answer": 0,
    "explanation": "The nucleus contains DNA and controls cell activities."
  },
  {
    "id": "BIO-124",
    "question": "What is the main function of haemoglobin?",
    "options": [
      "Carry oxygen",
      "Digest food",
      "Fight infection",
      "Store enzymes"
    ],
    "answer": 0,
    "explanation": "Haemoglobin binds oxygen for transport."
  },
  {
    "id": "BIO-125",
    "question": "Which condition is caused by deficiency of iodine?",
    "options": [
      "Goitre",
      "Anaemia",
      "Scurvy",
      "Rickets"
    ],
    "answer": 0,
    "explanation": "Iodine deficiency can cause goitre."
  },
  {
    "id": "BIO-126",
    "question": "Which process increases the population of microorganisms rapidly?",
    "options": [
      "Binary fission",
      "Fertilization",
      "Transpiration",
      "Respiration"
    ],
    "answer": 0,
    "explanation": "Binary fission is a common asexual reproduction in bacteria."
  },
  {
    "id": "BIO-127",
    "question": "Which of these is a non-renewable resource?",
    "options": [
      "Petroleum",
      "Solar energy",
      "Wind",
      "Biomass"
    ],
    "answer": 0,
    "explanation": "Petroleum is a non-renewable fossil fuel."
  },
  {
    "id": "BIO-128",
    "question": "Which type of nutrition involves making food from simple substances?",
    "options": [
      "Autotrophic nutrition",
      "Heterotrophic nutrition",
      "Saprophytic nutrition",
      "Parasitic nutrition"
    ],
    "answer": 0,
    "explanation": "Autotrophs make their own food."
  },
  {
    "id": "BIO-129",
    "question": "Which blood component is most abundant in plasma?",
    "options": [
      "Water",
      "Red blood cells",
      "Platelets",
      "White blood cells"
    ],
    "answer": 0,
    "explanation": "Plasma is mostly water."
  },
  {
    "id": "BIO-130",
    "question": "Which of the following is a producer in a food chain?",
    "options": [
      "Grass",
      "Grasshopper",
      "Frog",
      "Hawk"
    ],
    "answer": 0,
    "explanation": "Producers are green plants such as grass."
  }
];
