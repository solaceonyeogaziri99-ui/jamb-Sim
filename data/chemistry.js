const chemistryQuestions = [
  {
    "id": "CHEM-001",
    "question": "What is the mass number of an atom?",
    "options": [
      "Number of electrons only",
      "Number of protons plus neutrons",
      "Number of protons only",
      "Number of shells"
    ],
    "answer": 1,
    "explanation": "Mass number is the total number of protons and neutrons in the nucleus."
  },
  {
    "id": "CHEM-002",
    "question": "Atoms of the same element with different numbers of neutrons are called?",
    "options": [
      "Ions",
      "Isotopes",
      "Allotropes",
      "Molecules"
    ],
    "answer": 1,
    "explanation": "Isotopes have the same proton number but different neutron numbers."
  },
  {
    "id": "CHEM-003",
    "question": "A positively charged ion is called a?",
    "options": [
      "Anion",
      "Cation",
      "Molecule",
      "Radical only"
    ],
    "answer": 1,
    "explanation": "A cation is an ion with a positive charge."
  },
  {
    "id": "CHEM-004",
    "question": "A negatively charged ion is called a?",
    "options": [
      "Cation",
      "Anion",
      "Proton",
      "Atom"
    ],
    "answer": 1,
    "explanation": "An anion is an ion with a negative charge."
  },
  {
    "id": "CHEM-005",
    "question": "What happens to an atom when it loses electrons?",
    "options": [
      "It becomes a negative ion",
      "It becomes a positive ion",
      "It becomes a neutron",
      "It becomes a new element"
    ],
    "answer": 1,
    "explanation": "Loss of electrons leaves more protons than electrons, producing a positive ion."
  },
  {
    "id": "CHEM-006",
    "question": "What happens to an atom when it gains electrons?",
    "options": [
      "It becomes a positive ion",
      "It becomes a negative ion",
      "It loses its nucleus",
      "It becomes a proton"
    ],
    "answer": 1,
    "explanation": "Gaining electrons gives the atom a net negative charge."
  },
  {
    "id": "CHEM-007",
    "question": "Which group of elements is generally least reactive and contains helium and neon?",
    "options": [
      "Alkali metals",
      "Halogens",
      "Noble gases",
      "Transition metals"
    ],
    "answer": 2,
    "explanation": "Noble gases have very stable outer electron arrangements and are generally unreactive."
  },
  {
    "id": "CHEM-008",
    "question": "Which element is a halogen?",
    "options": [
      "Sodium",
      "Chlorine",
      "Magnesium",
      "Calcium"
    ],
    "answer": 1,
    "explanation": "Chlorine belongs to Group 17, the halogens."
  },
  {
    "id": "CHEM-009",
    "question": "Which element is an alkali metal?",
    "options": [
      "Sodium",
      "Chlorine",
      "Neon",
      "Sulfur"
    ],
    "answer": 0,
    "explanation": "Sodium is a Group 1 alkali metal."
  },
  {
    "id": "CHEM-010",
    "question": "What is the valency of sodium in sodium chloride?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 0,
    "explanation": "Sodium loses one electron to form Na+, so its combining valency is 1."
  },
  {
    "id": "CHEM-011",
    "question": "What is the valency of oxygen in most simple compounds?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Oxygen commonly forms two bonds or has a combining capacity of 2."
  },
  {
    "id": "CHEM-012",
    "question": "Which acid is found in vinegar?",
    "options": [
      "Hydrochloric acid",
      "Ethanoic acid",
      "Nitric acid",
      "Sulfuric acid"
    ],
    "answer": 1,
    "explanation": "Vinegar contains dilute ethanoic (acetic) acid."
  },
  {
    "id": "CHEM-013",
    "question": "Which acid is present in the stomach?",
    "options": [
      "Hydrochloric acid",
      "Ethanoic acid",
      "Carbonic acid only",
      "Citric acid"
    ],
    "answer": 0,
    "explanation": "The stomach contains hydrochloric acid, which helps digestion and provides an acidic environment."
  },
  {
    "id": "CHEM-014",
    "question": "Which acid is commonly found in citrus fruits?",
    "options": [
      "Citric acid",
      "Sulfuric acid",
      "Hydrochloric acid",
      "Nitric acid"
    ],
    "answer": 0,
    "explanation": "Citric acid occurs naturally in citrus fruits such as oranges and lemons."
  },
  {
    "id": "CHEM-015",
    "question": "Which substance is commonly used to neutralise excess stomach acid?",
    "options": [
      "Antacid",
      "Bleach",
      "Petrol",
      "Kerosene"
    ],
    "answer": 0,
    "explanation": "Antacids contain basic substances that neutralise excess stomach acid."
  },
  {
    "id": "CHEM-016",
    "question": "A substance that changes colour depending on acidity or alkalinity is an?",
    "options": [
      "Indicator",
      "Electrolyte only",
      "Catalyst",
      "Solvent"
    ],
    "answer": 0,
    "explanation": "Indicators change colour over particular pH ranges."
  },
  {
    "id": "CHEM-017",
    "question": "What colour does phenolphthalein become in an alkaline solution?",
    "options": [
      "Pink",
      "Red",
      "Blue",
      "Yellow"
    ],
    "answer": 0,
    "explanation": "Phenolphthalein is colourless in acidic solution and pink in alkaline solution."
  },
  {
    "id": "CHEM-018",
    "question": "What colour does methyl orange become in an acidic solution?",
    "options": [
      "Yellow",
      "Red",
      "Green",
      "Blue"
    ],
    "answer": 1,
    "explanation": "Methyl orange is red in acidic conditions and yellow in alkaline conditions."
  },
  {
    "id": "CHEM-019",
    "question": "What is a solution?",
    "options": [
      "A pure element only",
      "A homogeneous mixture",
      "A solid metal",
      "A gas only"
    ],
    "answer": 1,
    "explanation": "A solution is a homogeneous mixture of solute and solvent."
  },
  {
    "id": "CHEM-020",
    "question": "In salt water, what is the solvent?",
    "options": [
      "Salt",
      "Water",
      "Both equally",
      "Chloride"
    ],
    "answer": 1,
    "explanation": "Water dissolves the salt and is therefore the solvent."
  },
  {
    "id": "CHEM-021",
    "question": "In salt water, what is the solute?",
    "options": [
      "Water",
      "Salt",
      "Oxygen",
      "Hydrogen"
    ],
    "answer": 1,
    "explanation": "Salt is the substance dissolved in water, so it is the solute."
  },
  {
    "id": "CHEM-022",
    "question": "A solution that cannot dissolve more solute at a given temperature is?",
    "options": [
      "Dilute",
      "Saturated",
      "Unsaturated",
      "Supersimple"
    ],
    "answer": 1,
    "explanation": "A saturated solution contains as much dissolved solute as it can hold under the stated conditions."
  },
  {
    "id": "CHEM-023",
    "question": "What is crystallisation mainly used for?",
    "options": [
      "Obtaining a solid solute from a solution",
      "Measuring temperature",
      "Separating gases by smell",
      "Producing sound"
    ],
    "answer": 0,
    "explanation": "Crystallisation can recover relatively pure crystals of a dissolved solid."
  },
  {
    "id": "CHEM-024",
    "question": "Which separation method is commonly used to separate coloured dyes in ink?",
    "options": [
      "Chromatography",
      "Filtration",
      "Decantation",
      "Magnetic separation"
    ],
    "answer": 0,
    "explanation": "Chromatography separates substances based on differences in their movement through a stationary phase."
  },
  {
    "id": "CHEM-025",
    "question": "What is the boiling point of pure water at standard atmospheric pressure?",
    "options": [
      "0°C",
      "50°C",
      "100°C",
      "212°C only"
    ],
    "answer": 2,
    "explanation": "Pure water boils at 100°C at standard atmospheric pressure; 212°F is the Fahrenheit equivalent."
  },
  {
    "id": "CHEM-026",
    "question": "What is the freezing point of pure water at standard atmospheric pressure?",
    "options": [
      "0°C",
      "10°C",
      "50°C",
      "100°C"
    ],
    "answer": 0,
    "explanation": "Pure water freezes at 0°C under standard atmospheric pressure."
  },
  {
    "id": "CHEM-027",
    "question": "Which gas is lighter than air and highly flammable?",
    "options": [
      "Hydrogen",
      "Carbon dioxide",
      "Chlorine",
      "Oxygen"
    ],
    "answer": 0,
    "explanation": "Hydrogen has a very low density and is highly flammable."
  },
  {
    "id": "CHEM-028",
    "question": "Which gas is commonly used to fill balloons because it is non-flammable and lighter than air?",
    "options": [
      "Helium",
      "Hydrogen",
      "Oxygen",
      "Carbon dioxide"
    ],
    "answer": 0,
    "explanation": "Helium is lighter than air and non-flammable."
  },
  {
    "id": "CHEM-029",
    "question": "Which gas supports burning but does not itself burn under ordinary conditions?",
    "options": [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "Helium"
    ],
    "answer": 0,
    "explanation": "Oxygen supports combustion but is not itself a fuel."
  },
  {
    "id": "CHEM-030",
    "question": "Which oxide is commonly described as an acidic oxide?",
    "options": [
      "Carbon dioxide",
      "Sodium oxide",
      "Calcium oxide",
      "Magnesium oxide"
    ],
    "answer": 0,
    "explanation": "Carbon dioxide reacts with water to form carbonic acid and is classified as an acidic oxide."
  },
  {
    "id": "CHEM-031",
    "question": "Which oxide is commonly described as a basic oxide?",
    "options": [
      "Carbon dioxide",
      "Sulfur dioxide",
      "Calcium oxide",
      "Nitrogen dioxide"
    ],
    "answer": 2,
    "explanation": "Calcium oxide is a basic metal oxide."
  },
  {
    "id": "CHEM-032",
    "question": "What is an exothermic reaction?",
    "options": [
      "A reaction that absorbs heat",
      "A reaction that releases heat",
      "A reaction that never changes temperature",
      "A reaction involving only gases"
    ],
    "answer": 1,
    "explanation": "Exothermic reactions release energy as heat to the surroundings."
  },
  {
    "id": "CHEM-033",
    "question": "What is an endothermic reaction?",
    "options": [
      "A reaction that releases heat",
      "A reaction that absorbs heat",
      "A reaction with no energy change",
      "A reaction involving only solids"
    ],
    "answer": 1,
    "explanation": "Endothermic reactions absorb energy from the surroundings."
  },
  {
    "id": "CHEM-034",
    "question": "What is the main purpose of electrolysis?",
    "options": [
      "Use electricity to drive a chemical change",
      "Measure pressure",
      "Separate liquids by boiling point only",
      "Measure mass"
    ],
    "answer": 0,
    "explanation": "Electrolysis uses electrical energy to drive a non-spontaneous chemical reaction."
  },
  {
    "id": "CHEM-035",
    "question": "Which substance conducts electricity when molten because it contains mobile ions?",
    "options": [
      "Sodium chloride",
      "Sugar",
      "Paraffin wax",
      "Pure oil"
    ],
    "answer": 0,
    "explanation": "Molten ionic compounds contain mobile ions that can carry electric current."
  },
  {
    "id": "CHEM-036",
    "question": "What is the process of coating an object with a thin metal layer using electricity called?",
    "options": [
      "Electroplating",
      "Distillation",
      "Neutralisation",
      "Fermentation"
    ],
    "answer": 0,
    "explanation": "Electroplating deposits a metal coating on an object using an electrolytic process."
  },
  {
    "id": "CHEM-037",
    "question": "Which metal is commonly used to make electrical wires because of its good conductivity?",
    "options": [
      "Copper",
      "Sulfur",
      "Carbon",
      "Phosphorus"
    ],
    "answer": 0,
    "explanation": "Copper is a good electrical conductor and is widely used in wiring."
  },
  {
    "id": "CHEM-038",
    "question": "What is an alloy?",
    "options": [
      "A mixture containing a metal and one or more other elements",
      "A pure gas",
      "A single atom",
      "An acid solution"
    ],
    "answer": 0,
    "explanation": "Alloys are mixtures designed to give metals useful properties."
  },
  {
    "id": "CHEM-039",
    "question": "Which alloy is mainly made from iron and carbon?",
    "options": [
      "Brass",
      "Steel",
      "Bronze",
      "Duralumin"
    ],
    "answer": 1,
    "explanation": "Steel is primarily iron with carbon and sometimes other elements."
  },
  {
    "id": "CHEM-040",
    "question": "Brass is mainly an alloy of?",
    "options": [
      "Copper and zinc",
      "Iron and carbon",
      "Copper and tin",
      "Aluminium and magnesium"
    ],
    "answer": 0,
    "explanation": "Brass is primarily copper and zinc."
  },
  {
    "id": "CHEM-041",
    "question": "What is the mass number of an atom?",
    "options": [
      "Electrons",
      "Protons + neutrons",
      "Protons only",
      "Shells"
    ],
    "answer": 1,
    "explanation": "Mass number is protons plus neutrons."
  },
  {
    "id": "CHEM-042",
    "question": "Atoms of the same element with different neutron numbers are?",
    "options": [
      "Ions",
      "Isotopes",
      "Alloys",
      "Molecules"
    ],
    "answer": 1,
    "explanation": "Isotopes have the same proton number but different neutron numbers."
  },
  {
    "id": "CHEM-043",
    "question": "A positively charged ion is a?",
    "options": [
      "Anion",
      "Cation",
      "Molecule",
      "Neutron"
    ],
    "answer": 1,
    "explanation": "Cations are positively charged ions."
  },
  {
    "id": "CHEM-044",
    "question": "A negatively charged ion is an?",
    "options": [
      "Cation",
      "Anion",
      "Proton",
      "Atom"
    ],
    "answer": 1,
    "explanation": "Anions are negatively charged ions."
  },
  {
    "id": "CHEM-045",
    "question": "What happens when an atom loses electrons?",
    "options": [
      "It becomes positive",
      "It becomes negative",
      "It becomes neutral",
      "It becomes a neutron"
    ],
    "answer": 0,
    "explanation": "Loss of electrons leaves a net positive charge."
  },
  {
    "id": "CHEM-046",
    "question": "What happens when an atom gains electrons?",
    "options": [
      "It becomes positive",
      "It becomes negative",
      "It loses its nucleus",
      "It becomes a proton"
    ],
    "answer": 1,
    "explanation": "Gain of electrons produces a net negative charge."
  },
  {
    "id": "CHEM-047",
    "question": "Which group contains helium and neon?",
    "options": [
      "Alkali metals",
      "Halogens",
      "Noble gases",
      "Transition metals"
    ],
    "answer": 2,
    "explanation": "Helium and neon are noble gases."
  },
  {
    "id": "CHEM-048",
    "question": "Which is a halogen?",
    "options": [
      "Sodium",
      "Chlorine",
      "Magnesium",
      "Calcium"
    ],
    "answer": 1,
    "explanation": "Chlorine is in Group 17, the halogens."
  },
  {
    "id": "CHEM-049",
    "question": "Which is an alkali metal?",
    "options": [
      "Sodium",
      "Chlorine",
      "Neon",
      "Sulfur"
    ],
    "answer": 0,
    "explanation": "Sodium is a Group 1 alkali metal."
  },
  {
    "id": "CHEM-050",
    "question": "What is the valency of sodium in sodium chloride?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 0,
    "explanation": "Sodium forms Na+, so its combining valency is 1."
  },
  {
    "id": "CHEM-051",
    "question": "What is the usual valency of oxygen?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Oxygen commonly has a combining capacity of 2."
  },
  {
    "id": "CHEM-052",
    "question": "Which acid is found in vinegar?",
    "options": [
      "Hydrochloric acid",
      "Ethanoic acid",
      "Nitric acid",
      "Sulfuric acid"
    ],
    "answer": 1,
    "explanation": "Vinegar contains dilute ethanoic acid."
  },
  {
    "id": "CHEM-053",
    "question": "Which acid is present in the stomach?",
    "options": [
      "Hydrochloric acid",
      "Ethanoic acid",
      "Nitric acid",
      "Citric acid"
    ],
    "answer": 0,
    "explanation": "Stomach acid is mainly hydrochloric acid."
  },
  {
    "id": "CHEM-054",
    "question": "Which acid occurs naturally in citrus fruits?",
    "options": [
      "Citric acid",
      "Sulfuric acid",
      "Hydrochloric acid",
      "Nitric acid"
    ],
    "answer": 0,
    "explanation": "Citrus fruits contain citric acid."
  },
  {
    "id": "CHEM-055",
    "question": "What is commonly used to neutralise excess stomach acid?",
    "options": [
      "Antacid",
      "Petrol",
      "Kerosene",
      "Bleach"
    ],
    "answer": 0,
    "explanation": "Antacids contain bases that neutralise excess acid."
  },
  {
    "id": "CHEM-056",
    "question": "What does phenolphthalein do in an alkaline solution?",
    "options": [
      "Turns pink",
      "Turns red",
      "Turns blue",
      "Turns black"
    ],
    "answer": 0,
    "explanation": "Phenolphthalein is pink in alkaline conditions."
  },
  {
    "id": "CHEM-057",
    "question": "What colour is methyl orange in acid?",
    "options": [
      "Yellow",
      "Red",
      "Blue",
      "Green"
    ],
    "answer": 1,
    "explanation": "Methyl orange is red in acidic solution."
  },
  {
    "id": "CHEM-058",
    "question": "In salt water, what is the solvent?",
    "options": [
      "Salt",
      "Water",
      "Chloride",
      "Oxygen"
    ],
    "answer": 1,
    "explanation": "Water dissolves the salt and is the solvent."
  },
  {
    "id": "CHEM-059",
    "question": "In salt water, what is the solute?",
    "options": [
      "Water",
      "Salt",
      "Oxygen",
      "Hydrogen"
    ],
    "answer": 1,
    "explanation": "Salt is dissolved in the water, making it the solute."
  },
  {
    "id": "CHEM-060",
    "question": "A solution that cannot dissolve more solute at a given temperature is?",
    "options": [
      "Saturated",
      "Dilute",
      "Unsaturated",
      "Neutral"
    ],
    "answer": 0,
    "explanation": "A saturated solution contains the maximum dissolved solute under stated conditions."
  },
  {
    "id": "CHEM-061",
    "question": "Which method separates coloured dyes in ink?",
    "options": [
      "Chromatography",
      "Filtration",
      "Decantation",
      "Magnetism"
    ],
    "answer": 0,
    "explanation": "Chromatography separates components based on different movement rates."
  },
  {
    "id": "CHEM-062",
    "question": "What is the boiling point of pure water at standard pressure?",
    "options": [
      "0°C",
      "50°C",
      "100°C",
      "150°C"
    ],
    "answer": 2,
    "explanation": "Water boils at 100°C at standard atmospheric pressure."
  },
  {
    "id": "CHEM-063",
    "question": "What is the freezing point of pure water at standard pressure?",
    "options": [
      "0°C",
      "10°C",
      "50°C",
      "100°C"
    ],
    "answer": 0,
    "explanation": "Water freezes at 0°C at standard atmospheric pressure."
  },
  {
    "id": "CHEM-064",
    "question": "Which gas is highly flammable and lighter than air?",
    "options": [
      "Hydrogen",
      "Carbon dioxide",
      "Chlorine",
      "Oxygen"
    ],
    "answer": 0,
    "explanation": "Hydrogen is very light and highly flammable."
  },
  {
    "id": "CHEM-065",
    "question": "Which gas is used in balloons because it is light and non-flammable?",
    "options": [
      "Helium",
      "Hydrogen",
      "Oxygen",
      "Carbon dioxide"
    ],
    "answer": 0,
    "explanation": "Helium is light and non-flammable."
  },
  {
    "id": "CHEM-066",
    "question": "Which gas supports combustion?",
    "options": [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "Helium"
    ],
    "answer": 0,
    "explanation": "Oxygen supports burning."
  },
  {
    "id": "CHEM-067",
    "question": "Which is an acidic oxide?",
    "options": [
      "Carbon dioxide",
      "Sodium oxide",
      "Calcium oxide",
      "Magnesium oxide"
    ],
    "answer": 0,
    "explanation": "Carbon dioxide is classified as an acidic oxide."
  },
  {
    "id": "CHEM-068",
    "question": "Which is a basic oxide?",
    "options": [
      "Carbon dioxide",
      "Sulfur dioxide",
      "Calcium oxide",
      "Nitrogen dioxide"
    ],
    "answer": 2,
    "explanation": "Calcium oxide is a basic metal oxide."
  },
  {
    "id": "CHEM-069",
    "question": "What is an exothermic reaction?",
    "options": [
      "Releases heat",
      "Absorbs heat",
      "Has no energy change",
      "Only occurs in gases"
    ],
    "answer": 0,
    "explanation": "Exothermic reactions release heat to surroundings."
  },
  {
    "id": "CHEM-070",
    "question": "What is an endothermic reaction?",
    "options": [
      "Releases heat",
      "Absorbs heat",
      "Has no energy change",
      "Only occurs in solids"
    ],
    "answer": 1,
    "explanation": "Endothermic reactions absorb energy."
  },
  {
    "id": "CHEM-071",
    "question": "What is electrolysis?",
    "options": [
      "Using electricity to drive a chemical change",
      "Separating by boiling",
      "Measuring pressure",
      "Filtering a liquid"
    ],
    "answer": 0,
    "explanation": "Electrolysis uses electrical energy to drive chemical reactions."
  },
  {
    "id": "CHEM-072",
    "question": "Which substance conducts electricity when molten because of mobile ions?",
    "options": [
      "Sodium chloride",
      "Sugar",
      "Wax",
      "Oil"
    ],
    "answer": 0,
    "explanation": "Molten ionic compounds contain mobile ions."
  },
  {
    "id": "CHEM-073",
    "question": "What is electroplating?",
    "options": [
      "Coating an object with metal using electricity",
      "Boiling a solution",
      "Mixing acids",
      "Filtering water"
    ],
    "answer": 0,
    "explanation": "Electroplating deposits a metal coating electrolytically."
  },
  {
    "id": "CHEM-074",
    "question": "Which metal is widely used for electrical wires?",
    "options": [
      "Copper",
      "Sulfur",
      "Phosphorus",
      "Carbon"
    ],
    "answer": 0,
    "explanation": "Copper is a good electrical conductor."
  },
  {
    "id": "CHEM-075",
    "question": "Which alloy is mainly iron and carbon?",
    "options": [
      "Brass",
      "Steel",
      "Bronze",
      "Duralumin"
    ],
    "answer": 1,
    "explanation": "Steel is primarily iron with carbon."
  },
  {
    "id": "CHEM-076",
    "question": "Brass is mainly an alloy of?",
    "options": [
      "Copper and zinc",
      "Iron and carbon",
      "Copper and tin",
      "Aluminium and magnesium"
    ],
    "answer": 0,
    "explanation": "Brass is mainly copper and zinc."
  },
  {
    "id": "CHEM-077",
    "question": "What is corrosion?",
    "options": [
      "Deterioration by chemical/electrochemical reaction",
      "Boiling",
      "Filtration",
      "Melting"
    ],
    "answer": 0,
    "explanation": "Corrosion is deterioration caused by reactions with the environment."
  },
  {
    "id": "CHEM-078",
    "question": "Coating iron with zinc to prevent corrosion is called?",
    "options": [
      "Galvanising",
      "Distillation",
      "Crystallisation",
      "Neutralisation"
    ],
    "answer": 0,
    "explanation": "Galvanising uses zinc as a protective coating."
  },
  {
    "id": "CHEM-079",
    "question": "What is the formula of ammonia?",
    "options": [
      "NH3",
      "NO2",
      "N2H4",
      "NH4"
    ],
    "answer": 0,
    "explanation": "Ammonia has formula NH3."
  },
  {
    "id": "CHEM-080",
    "question": "What is the formula of sulfuric acid?",
    "options": [
      "HCl",
      "HNO3",
      "H2SO4",
      "H2CO3"
    ],
    "answer": 2,
    "explanation": "Sulfuric acid is H2SO4."
  },
  {
    "id": "CHEM-081",
    "question": "Which gas is the most abundant in the atmosphere?",
    "options": [
      "Nitrogen",
      "Oxygen",
      "Carbon dioxide",
      "Argon"
    ],
    "answer": 0,
    "explanation": "Nitrogen makes up the greatest part of the atmosphere."
  },
  {
    "id": "CHEM-082",
    "question": "What is the valency of calcium?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Calcium forms Ca2+, so its valency is 2."
  },
  {
    "id": "CHEM-083",
    "question": "Which element is used to make pencils?",
    "options": [
      "Carbon",
      "Sodium",
      "Iron",
      "Oxygen"
    ],
    "answer": 0,
    "explanation": "Graphite, a form of carbon, is used in pencils."
  },
  {
    "id": "CHEM-084",
    "question": "Which gas turns limewater milky?",
    "options": [
      "Carbon dioxide",
      "Hydrogen",
      "Oxygen",
      "Nitrogen"
    ],
    "answer": 0,
    "explanation": "Carbon dioxide forms calcium carbonate with limewater."
  },
  {
    "id": "CHEM-085",
    "question": "The process of converting a liquid to gas at any temperature is called?",
    "options": [
      "Evaporation",
      "Condensation",
      "Sublimation",
      "Freezing"
    ],
    "answer": 0,
    "explanation": "Evaporation occurs at the surface of a liquid at temperatures below boiling point."
  },
  {
    "id": "CHEM-086",
    "question": "What is the chemical formula of sodium hydroxide?",
    "options": [
      "NaOH",
      "NaCl",
      "Na2CO3",
      "NaNO3"
    ],
    "answer": 0,
    "explanation": "Sodium hydroxide is NaOH."
  },
  {
    "id": "CHEM-087",
    "question": "What is the formula of hydrochloric acid?",
    "options": [
      "HCl",
      "H2SO4",
      "HNO3",
      "H2CO3"
    ],
    "answer": 0,
    "explanation": "Hydrochloric acid is HCl."
  },
  {
    "id": "CHEM-088",
    "question": "Which of these is a strong base?",
    "options": [
      "NaOH",
      "NH3",
      "CH3COOH",
      "H2O"
    ],
    "answer": 0,
    "explanation": "Sodium hydroxide is a strong alkali."
  },
  {
    "id": "CHEM-089",
    "question": "What is the pH of a neutral solution?",
    "options": [
      "7",
      "5",
      "9",
      "12"
    ],
    "answer": 0,
    "explanation": "A neutral solution has pH 7."
  },
  {
    "id": "CHEM-090",
    "question": "Which acid is present in orange juice?",
    "options": [
      "Citric acid",
      "Hydrochloric acid",
      "Sulphuric acid",
      "Nitric acid"
    ],
    "answer": 0,
    "explanation": "Citrus fruits contain citric acid."
  },
  {
    "id": "CHEM-091",
    "question": "What is the chemical name of common salt?",
    "options": [
      "Sodium chloride",
      "Calcium chloride",
      "Sodium carbonate",
      "Potassium bromide"
    ],
    "answer": 0,
    "explanation": "Common table salt is sodium chloride."
  },
  {
    "id": "CHEM-092",
    "question": "Which process is used to obtain pure water from seawater?",
    "options": [
      "Distillation",
      "Crystallisation",
      "Filtration",
      "Chromatography"
    ],
    "answer": 0,
    "explanation": "Distillation separates pure water from dissolved salts."
  },
  {
    "id": "CHEM-093",
    "question": "Which gas is produced when acids react with metals?",
    "options": [
      "Hydrogen",
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen"
    ],
    "answer": 0,
    "explanation": "Acids react with metals to produce hydrogen gas."
  },
  {
    "id": "CHEM-094",
    "question": "Which of the following is an example of a physical change?",
    "options": [
      "Melting ice",
      "Rusting iron",
      "Burning wood",
      "Digestion of food"
    ],
    "answer": 0,
    "explanation": "Melting ice changes state but not composition."
  },
  {
    "id": "CHEM-095",
    "question": "Which of the following is an example of a chemical change?",
    "options": [
      "Rusting of iron",
      "Boiling water",
      "Dissolving sugar",
      "Breaking glass"
    ],
    "answer": 0,
    "explanation": "Rusting forms a new substance, iron oxide."
  },
  {
    "id": "CHEM-096",
    "question": "Which gas is produced during fermentation?",
    "options": [
      "Carbon dioxide",
      "Oxygen",
      "Hydrogen",
      "Nitrogen"
    ],
    "answer": 0,
    "explanation": "Fermentation often releases carbon dioxide."
  },
  {
    "id": "CHEM-097",
    "question": "What is the formula of water?",
    "options": [
      "H2O",
      "CO2",
      "NaCl",
      "NH3"
    ],
    "answer": 0,
    "explanation": "Water is H2O."
  },
  {
    "id": "CHEM-098",
    "question": "Which element has atomic number 8?",
    "options": [
      "Oxygen",
      "Nitrogen",
      "Carbon",
      "Hydrogen"
    ],
    "answer": 0,
    "explanation": "Atomic number 8 is oxygen."
  },
  {
    "id": "CHEM-099",
    "question": "What is the colour of copper(II) sulfate solution?",
    "options": [
      "Blue",
      "Red",
      "Yellow",
      "Colourless"
    ],
    "answer": 0,
    "explanation": "Copper(II) sulfate solution is blue."
  },
  {
    "id": "CHEM-100",
    "question": "Which method separates insoluble solids from liquids?",
    "options": [
      "Filtration",
      "Distillation",
      "Decantation",
      "Chromatography"
    ],
    "answer": 0,
    "explanation": "Filtration removes insoluble particles from a liquid."
  },
  {
    "id": "CHEM-101",
    "question": "Which of these is a mixture?",
    "options": [
      "Salt solution",
      "Water",
      "Copper",
      "Oxygen"
    ],
    "answer": 0,
    "explanation": "Salt solution is a mixture of solute and solvent."
  },
  {
    "id": "CHEM-102",
    "question": "Which of these is a compound?",
    "options": [
      "Water",
      "Oxygen",
      "Iron",
      "Hydrogen"
    ],
    "answer": 0,
    "explanation": "Water is a compound made of hydrogen and oxygen."
  },
  {
    "id": "CHEM-103",
    "question": "The oxidation number of an element in its uncombined state is?",
    "options": [
      "0",
      "1",
      "2",
      "-1"
    ],
    "answer": 0,
    "explanation": "Any free element has oxidation state 0."
  },
  {
    "id": "CHEM-104",
    "question": "Which gas is given off when ammonium chloride is heated with sodium hydroxide?",
    "options": [
      "Ammonia",
      "Hydrogen",
      "Oxygen",
      "Carbon dioxide"
    ],
    "answer": 0,
    "explanation": "Ammonia is released in this reaction."
  },
  {
    "id": "CHEM-105",
    "question": "Which type of bond is formed by sharing electrons?",
    "options": [
      "Covalent bond",
      "Ionic bond",
      "Metallic bond",
      "Hydrogen bond"
    ],
    "answer": 0,
    "explanation": "Covalent bonds result from shared electron pairs."
  },
  {
    "id": "CHEM-106",
    "question": "Which type of bond is formed by transfer of electrons?",
    "options": [
      "Ionic bond",
      "Covalent bond",
      "Metallic bond",
      "Hydrogen bond"
    ],
    "answer": 0,
    "explanation": "Ionic bonding involves electron transfer."
  },
  {
    "id": "CHEM-107",
    "question": "Which particle is found in the nucleus of an atom?",
    "options": [
      "Proton and neutron",
      "Electron only",
      "Photon only",
      "Neutron only"
    ],
    "answer": 0,
    "explanation": "The nucleus contains protons and neutrons."
  },
  {
    "id": "CHEM-108",
    "question": "Which of the following is an alkali?",
    "options": [
      "Potassium hydroxide",
      "Sulfuric acid",
      "Carbon dioxide",
      "Sodium chloride"
    ],
    "answer": 0,
    "explanation": "Potassium hydroxide is an alkali."
  },
  {
    "id": "CHEM-109",
    "question": "Which of the following is a reducing agent?",
    "options": [
      "Hydrogen",
      "Oxygen",
      "Nitrogen",
      "Neon"
    ],
    "answer": 0,
    "explanation": "Hydrogen can act as a reducing agent."
  },
  {
    "id": "CHEM-110",
    "question": "What is the oxidation state of hydrogen in water?",
    "options": [
      "+1",
      "-1",
      "0",
      "+2"
    ],
    "answer": 0,
    "explanation": "Hydrogen is +1 in water."
  },
  {
    "id": "CHEM-111",
    "question": "Which gas is used to preserve fruits?",
    "options": [
      "Carbon dioxide",
      "Oxygen",
      "Helium",
      "Argon"
    ],
    "answer": 0,
    "explanation": "Carbon dioxide is used in modified atmosphere packaging."
  },
  {
    "id": "CHEM-112",
    "question": "What is the percentage composition of oxygen in water?",
    "options": [
      "88.9%",
      "11.1%",
      "50%",
      "75%"
    ],
    "answer": 0,
    "explanation": "Water is roughly 88.9% oxygen by mass."
  },
  {
    "id": "CHEM-113",
    "question": "What is a catalyst?",
    "options": [
      "A substance that speeds up a reaction without being consumed",
      "A reactant",
      "A product",
      "A solvent"
    ],
    "answer": 0,
    "explanation": "Catalysts increase reaction rate without being used up."
  },
  {
    "id": "CHEM-114",
    "question": "Which reaction is called neutralisation?",
    "options": [
      "Acid + base -> salt + water",
      "Metal + oxygen -> oxide",
      "Hydrocarbon + oxygen -> carbon dioxide + water",
      "Acid + metal -> salt + hydrogen"
    ],
    "answer": 0,
    "explanation": "Neutralisation forms salt and water."
  },
  {
    "id": "CHEM-115",
    "question": "What is the main gas in natural gas?",
    "options": [
      "Methane",
      "Ethane",
      "Propane",
      "Butane"
    ],
    "answer": 0,
    "explanation": "Methane is the primary component of natural gas."
  },
  {
    "id": "CHEM-116",
    "question": "Which property makes metals good conductors?",
    "options": [
      "Mobile electrons",
      "Large atoms",
      "Low density",
      "Non-reactivity"
    ],
    "answer": 0,
    "explanation": "Delocalised electrons allow metals to conduct electricity."
  },
  {
    "id": "CHEM-117",
    "question": "Which element is used in the manufacture of ammonia by the Haber process?",
    "options": [
      "Nitrogen",
      "Oxygen",
      "Chlorine",
      "Carbon"
    ],
    "answer": 0,
    "explanation": "Nitrogen combines with hydrogen to form ammonia under suitable conditions."
  },
  {
    "id": "CHEM-118",
    "question": "Which gas is used in fire extinguishers for flammable liquid fires?",
    "options": [
      "Carbon dioxide",
      "Oxygen",
      "Nitrogen",
      "Hydrogen"
    ],
    "answer": 0,
    "explanation": "Carbon dioxide can displace oxygen and smother flames."
  },
  {
    "id": "CHEM-119",
    "question": "Which statement about isotopes is correct?",
    "options": [
      "They have same atomic number but different mass numbers",
      "They have different atomic numbers",
      "They have equal numbers of electrons and protons",
      "They are different elements"
    ],
    "answer": 0,
    "explanation": "Isotopes differ in neutron number but share the same proton number."
  },
  {
    "id": "CHEM-120",
    "question": "What is the oxidation number of chlorine in NaCl?",
    "options": [
      "-1",
      "+1",
      "0",
      "+2"
    ],
    "answer": 0,
    "explanation": "Chlorine is -1 because sodium is +1 and the compound is neutral."
  },
  {
    "id": "CHEM-121",
    "question": "Which of the following is a non-metal?",
    "options": [
      "Sulphur",
      "Copper",
      "Magnesium",
      "Aluminium"
    ],
    "answer": 0,
    "explanation": "Sulphur is a non-metal element."
  },
  {
    "id": "CHEM-122",
    "question": "Which metal is used to galvanize iron?",
    "options": [
      "Zinc",
      "Copper",
      "Silver",
      "Gold"
    ],
    "answer": 0,
    "explanation": "Zinc is used to coat iron and protect it against corrosion."
  },
  {
    "id": "CHEM-123",
    "question": "Which of these is a hydrocarbon?",
    "options": [
      "Methane",
      "Ammonia",
      "Water",
      "Sodium chloride"
    ],
    "answer": 0,
    "explanation": "Methane is made of carbon and hydrogen only."
  },
  {
    "id": "CHEM-124",
    "question": "Which acid is used in car batteries?",
    "options": [
      "Sulphuric acid",
      "Hydrochloric acid",
      "Citric acid",
      "Acetic acid"
    ],
    "answer": 0,
    "explanation": "Lead-acid car batteries use sulphuric acid."
  },
  {
    "id": "CHEM-125",
    "question": "Which substance is commonly used as a drying agent?",
    "options": [
      "Calcium chloride",
      "Sodium chloride",
      "Sugar",
      "Sand"
    ],
    "answer": 0,
    "explanation": "Calcium chloride absorbs moisture well."
  },
  {
    "id": "CHEM-126",
    "question": "Which is a basic salt?",
    "options": [
      "Sodium carbonate",
      "Sodium chloride",
      "Potassium nitrate",
      "Ammonium chloride"
    ],
    "answer": 0,
    "explanation": "Sodium carbonate is a basic salt."
  },
  {
    "id": "CHEM-127",
    "question": "What is the colour of phenolphthalein in an alkali?",
    "options": [
      "Pink",
      "Red",
      "Blue",
      "Colourless"
    ],
    "answer": 0,
    "explanation": "Phenolphthalein turns pink in alkaline solution."
  },
  {
    "id": "CHEM-128",
    "question": "Which one is a liquid non-metal at room temperature?",
    "options": [
      "Bromine",
      "Iodine",
      "Sulphur",
      "Carbon"
    ],
    "answer": 0,
    "explanation": "Bromine is a liquid non-metal at room temperature."
  },
  {
    "id": "CHEM-129",
    "question": "Which gas is produced by heating limestone?",
    "options": [
      "Carbon dioxide",
      "Oxygen",
      "Hydrogen",
      "Nitrogen"
    ],
    "answer": 0,
    "explanation": "Heating limestone decomposes it to give carbon dioxide."
  },
  {
    "id": "CHEM-130",
    "question": "Which process is used to separate a liquid from a solution by boiling and condensation?",
    "options": [
      "Distillation",
      "Filtration",
      "Sedimentation",
      "Chromatography"
    ],
    "answer": 0,
    "explanation": "Distillation separates based on different boiling points."
  }
];
