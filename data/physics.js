const physicsQuestions = [
  {
    "id": "PHY-001",
    "question": "What is the formula for average speed?",
    "options": [
      "Time ÷ distance",
      "Distance ÷ time",
      "Distance × time",
      "Mass ÷ volume"
    ],
    "answer": 1,
    "explanation": "Average speed equals total distance divided by total time."
  },
  {
    "id": "PHY-002",
    "question": "What is velocity?",
    "options": [
      "Speed with direction",
      "Distance only",
      "Mass per volume",
      "Force per area"
    ],
    "answer": 0,
    "explanation": "Velocity is a vector quantity describing speed in a specified direction."
  },
  {
    "id": "PHY-003",
    "question": "What is displacement?",
    "options": [
      "Total path length only",
      "Straight-line change in position with direction",
      "Time taken",
      "Mass moved"
    ],
    "answer": 1,
    "explanation": "Displacement is the vector change from initial to final position."
  },
  {
    "id": "PHY-004",
    "question": "Which quantity is measured in kilograms?",
    "options": [
      "Force",
      "Mass",
      "Weight",
      "Power"
    ],
    "answer": 1,
    "explanation": "The kilogram is the SI base unit of mass."
  },
  {
    "id": "PHY-005",
    "question": "Weight is calculated using?",
    "options": [
      "W = mg",
      "W = m/g",
      "W = g/m",
      "W = mv"
    ],
    "answer": 0,
    "explanation": "Weight is the gravitational force on a mass: W = mg."
  },
  {
    "id": "PHY-006",
    "question": "What happens to an object's weight if gravitational field strength increases while its mass stays constant?",
    "options": [
      "It decreases",
      "It increases",
      "It becomes zero",
      "It stays necessarily identical"
    ],
    "answer": 1,
    "explanation": "Since W = mg, greater g gives greater weight for the same mass."
  },
  {
    "id": "PHY-007",
    "question": "Which law states that an object remains at rest or in uniform motion unless acted on by a resultant external force?",
    "options": [
      "Newton's first law",
      "Newton's second law",
      "Newton's third law",
      "Hooke's law"
    ],
    "answer": 0,
    "explanation": "Newton's first law is the law of inertia."
  },
  {
    "id": "PHY-008",
    "question": "Newton's second law is commonly written as?",
    "options": [
      "F = ma",
      "V = IR",
      "P = VI",
      "E = mc²"
    ],
    "answer": 0,
    "explanation": "Force equals mass multiplied by acceleration."
  },
  {
    "id": "PHY-009",
    "question": "What is inertia?",
    "options": [
      "The tendency of an object to resist changes in its motion",
      "The ability to produce electricity",
      "The speed of light",
      "The force of friction"
    ],
    "answer": 0,
    "explanation": "Inertia is resistance to changes in velocity."
  },
  {
    "id": "PHY-010",
    "question": "What is friction?",
    "options": [
      "A force that opposes relative motion between surfaces",
      "A force that always accelerates objects",
      "A type of energy",
      "A measure of mass"
    ],
    "answer": 0,
    "explanation": "Friction acts against relative motion or attempted motion between surfaces."
  },
  {
    "id": "PHY-011",
    "question": "Which surface generally produces greater friction?",
    "options": [
      "Rough surface",
      "Perfectly smooth surface",
      "Vacuum",
      "Ice-free air only"
    ],
    "answer": 0,
    "explanation": "Rougher surfaces generally provide greater resistance to sliding."
  },
  {
    "id": "PHY-012",
    "question": "What is the mechanical advantage of a machine?",
    "options": [
      "Load ÷ effort",
      "Effort ÷ load",
      "Distance ÷ time",
      "Mass ÷ volume"
    ],
    "answer": 0,
    "explanation": "Mechanical advantage is the ratio of load to effort."
  },
  {
    "id": "PHY-013",
    "question": "What is efficiency?",
    "options": [
      "Useful output ÷ input × 100%",
      "Input ÷ output × 100%",
      "Load × effort",
      "Mass × acceleration"
    ],
    "answer": 0,
    "explanation": "Efficiency compares useful output energy/work to input energy/work, expressed as a percentage."
  },
  {
    "id": "PHY-014",
    "question": "Which simple machine is a sloping surface used to raise a load?",
    "options": [
      "Inclined plane",
      "Pulley",
      "Wheel and axle",
      "Lever only"
    ],
    "answer": 0,
    "explanation": "An inclined plane reduces the effort needed to raise a load by increasing the distance over which the effort acts."
  },
  {
    "id": "PHY-015",
    "question": "A lever turns around a fixed point called the?",
    "options": [
      "Pivot or fulcrum",
      "Load",
      "Effort",
      "Spring"
    ],
    "answer": 0,
    "explanation": "The fulcrum is the fixed point about which a lever rotates."
  },
  {
    "id": "PHY-016",
    "question": "What is the unit of frequency?",
    "options": [
      "Hertz",
      "Newton",
      "Watt",
      "Volt"
    ],
    "answer": 0,
    "explanation": "Frequency is measured in hertz, equal to cycles per second."
  },
  {
    "id": "PHY-017",
    "question": "What is wavelength?",
    "options": [
      "Distance between corresponding points on successive waves",
      "Number of waves per second",
      "Time for one wave only",
      "Wave speed divided by mass"
    ],
    "answer": 0,
    "explanation": "Wavelength is the distance between successive points in phase, such as crest to crest."
  },
  {
    "id": "PHY-018",
    "question": "The speed of a wave is given by?",
    "options": [
      "v = fλ",
      "v = f/λ",
      "v = λ/f",
      "v = m/a"
    ],
    "answer": 0,
    "explanation": "Wave speed equals frequency multiplied by wavelength."
  },
  {
    "id": "PHY-019",
    "question": "Which electromagnetic radiation has the shortest wavelength among these?",
    "options": [
      "Radio waves",
      "Microwaves",
      "Visible light",
      "Gamma rays"
    ],
    "answer": 3,
    "explanation": "Gamma rays have extremely short wavelengths and high frequencies."
  },
  {
    "id": "PHY-020",
    "question": "Which electromagnetic radiation is commonly used for thermal imaging?",
    "options": [
      "Infrared",
      "Ultraviolet",
      "Gamma rays",
      "Radio waves"
    ],
    "answer": 0,
    "explanation": "Infrared radiation is strongly associated with thermal emission and is used in thermal imaging."
  },
  {
    "id": "PHY-021",
    "question": "Which electromagnetic radiation can cause sunburn?",
    "options": [
      "Infrared",
      "Ultraviolet",
      "Radio",
      "Microwave"
    ],
    "answer": 1,
    "explanation": "Ultraviolet radiation can damage skin and cause sunburn."
  },
  {
    "id": "PHY-022",
    "question": "What is the unit of electric current?",
    "options": [
      "Ampere",
      "Volt",
      "Ohm",
      "Coulomb"
    ],
    "answer": 0,
    "explanation": "Electric current is measured in amperes (A)."
  },
  {
    "id": "PHY-023",
    "question": "What is the unit of potential difference?",
    "options": [
      "Volt",
      "Ampere",
      "Ohm",
      "Watt"
    ],
    "answer": 0,
    "explanation": "Potential difference is measured in volts (V)."
  },
  {
    "id": "PHY-024",
    "question": "Electrical power can be calculated using?",
    "options": [
      "P = VI",
      "P = m/v",
      "P = F/a",
      "P = d/t"
    ],
    "answer": 0,
    "explanation": "Electrical power is voltage multiplied by current."
  },
  {
    "id": "PHY-025",
    "question": "What happens to total resistance when identical resistors are connected in series?",
    "options": [
      "It increases by the sum of their resistances",
      "It becomes zero",
      "It is always lower than each resistor",
      "It cannot be calculated"
    ],
    "answer": 0,
    "explanation": "For series resistors, total resistance is the sum of individual resistances."
  },
  {
    "id": "PHY-026",
    "question": "In a parallel circuit, the potential difference across each branch is generally?",
    "options": [
      "The same as the supply potential difference",
      "Always zero",
      "Always doubled",
      "Different from the supply in every branch"
    ],
    "answer": 0,
    "explanation": "Each parallel branch is connected across the same two supply points, so it has the same potential difference."
  },
  {
    "id": "PHY-027",
    "question": "What is a conductor?",
    "options": [
      "A material that allows charge to move relatively easily",
      "A material that never conducts heat",
      "A vacuum",
      "A type of battery"
    ],
    "answer": 0,
    "explanation": "Conductors contain charge carriers that can move relatively freely."
  },
  {
    "id": "PHY-028",
    "question": "What is an insulator?",
    "options": [
      "A material that strongly resists electric current",
      "A perfect conductor",
      "A current meter",
      "A source of voltage"
    ],
    "answer": 0,
    "explanation": "Insulators have very high electrical resistance."
  },
  {
    "id": "PHY-029",
    "question": "Which component stores electrical energy chemically?",
    "options": [
      "Battery",
      "Resistor",
      "Switch",
      "Fuse"
    ],
    "answer": 0,
    "explanation": "A battery stores chemical energy and converts it to electrical energy during discharge."
  },
  {
    "id": "PHY-030",
    "question": "Which component is used to open or close an electrical circuit?",
    "options": [
      "Switch",
      "Resistor",
      "Ammeter",
      "Lamp only"
    ],
    "answer": 0,
    "explanation": "A switch controls whether the circuit is open or closed."
  },
  {
    "id": "PHY-031",
    "question": "What is a short circuit?",
    "options": [
      "A low-resistance unintended path for current",
      "A circuit with no source",
      "A circuit with infinite resistance",
      "A circuit containing only a lamp"
    ],
    "answer": 0,
    "explanation": "A short circuit provides an unintended low-resistance path that can cause excessive current."
  },
  {
    "id": "PHY-032",
    "question": "What is the main purpose of a resistor?",
    "options": [
      "Limit or control current",
      "Produce oxygen",
      "Measure temperature",
      "Store magnetic fields only"
    ],
    "answer": 0,
    "explanation": "A resistor opposes current and can be used to control circuit current and voltage."
  },
  {
    "id": "PHY-033",
    "question": "What type of energy does a moving object possess?",
    "options": [
      "Kinetic energy",
      "Chemical energy only",
      "Nuclear energy only",
      "Elastic energy only"
    ],
    "answer": 0,
    "explanation": "Kinetic energy is energy due to motion."
  },
  {
    "id": "PHY-034",
    "question": "Gravitational potential energy increases when an object is?",
    "options": [
      "Raised higher",
      "Moved horizontally only",
      "Cooled",
      "Made smaller without height change"
    ],
    "answer": 0,
    "explanation": "Near Earth's surface, gravitational potential energy increases with height."
  },
  {
    "id": "PHY-035",
    "question": "What is the principle of conservation of energy?",
    "options": [
      "Energy cannot be created or destroyed, but can be transferred or transformed",
      "Energy disappears during friction",
      "Energy can only exist as heat",
      "Energy is created whenever a force acts"
    ],
    "answer": 0,
    "explanation": "Energy is conserved; it changes form or moves between systems."
  },
  {
    "id": "PHY-036",
    "question": "Which instrument measures atmospheric humidity?",
    "options": [
      "Hygrometer",
      "Barometer",
      "Ammeter",
      "Voltmeter"
    ],
    "answer": 0,
    "explanation": "A hygrometer measures humidity."
  },
  {
    "id": "PHY-037",
    "question": "Which instrument is used to detect and record earthquakes?",
    "options": [
      "Seismograph",
      "Barometer",
      "Thermometer",
      "Ammeter"
    ],
    "answer": 0,
    "explanation": "A seismograph records ground motion associated with earthquakes."
  },
  {
    "id": "PHY-038",
    "question": "What is the centre of mass of a uniform circular object at rest?",
    "options": [
      "At its geometric centre",
      "At its edge",
      "Outside the object",
      "Always at the top"
    ],
    "answer": 0,
    "explanation": "For a uniform circular object, the centre of mass lies at its geometric centre."
  },
  {
    "id": "PHY-039",
    "question": "What is the turning effect of a force called?",
    "options": [
      "Moment",
      "Pressure",
      "Density",
      "Power"
    ],
    "answer": 0,
    "explanation": "The moment of a force measures its turning effect about a pivot."
  },
  {
    "id": "PHY-040",
    "question": "Moment of a force equals?",
    "options": [
      "Force × perpendicular distance from pivot",
      "Force ÷ distance",
      "Mass × volume",
      "Power × time"
    ],
    "answer": 0,
    "explanation": "Moment = force multiplied by the perpendicular distance from the pivot."
  },
  {
    "id": "PHY-041",
    "question": "What is the SI unit of length?",
    "options": [
      "Metre",
      "Kilometre",
      "Centimetre",
      "Millimetre"
    ],
    "answer": 0,
    "explanation": "The metre is the SI base unit of length."
  },
  {
    "id": "PHY-042",
    "question": "What is the SI unit of time?",
    "options": [
      "Second",
      "Minute",
      "Hour",
      "Day"
    ],
    "answer": 0,
    "explanation": "The second is the SI base unit of time."
  },
  {
    "id": "PHY-043",
    "question": "What is the SI unit of temperature?",
    "options": [
      "Kelvin",
      "Celsius",
      "Fahrenheit",
      "Joule"
    ],
    "answer": 0,
    "explanation": "Kelvin is the SI base unit of thermodynamic temperature."
  },
  {
    "id": "PHY-044",
    "question": "What is the SI unit of amount of substance?",
    "options": [
      "Mole",
      "Gram",
      "Litre",
      "Newton"
    ],
    "answer": 0,
    "explanation": "The mole is the SI base unit for amount of substance."
  },
  {
    "id": "PHY-045",
    "question": "One kilometre equals how many metres?",
    "options": [
      "10",
      "100",
      "1,000",
      "10,000"
    ],
    "answer": 2,
    "explanation": "1 km = 1,000 m."
  },
  {
    "id": "PHY-046",
    "question": "One hour equals how many seconds?",
    "options": [
      "60",
      "600",
      "3,600",
      "36,000"
    ],
    "answer": 2,
    "explanation": "60 × 60 = 3,600 seconds."
  },
  {
    "id": "PHY-047",
    "question": "An object moving with constant velocity has what acceleration?",
    "options": [
      "Zero",
      "Positive",
      "Negative",
      "Infinite"
    ],
    "answer": 0,
    "explanation": "Constant velocity means no change in velocity."
  },
  {
    "id": "PHY-048",
    "question": "What is uniform motion?",
    "options": [
      "Motion at constant velocity",
      "Motion with changing mass",
      "Motion without time",
      "Motion with increasing acceleration"
    ],
    "answer": 0,
    "explanation": "Uniform motion means constant velocity."
  },
  {
    "id": "PHY-049",
    "question": "What is terminal velocity?",
    "options": [
      "Constant maximum speed when opposing forces balance",
      "Initial speed",
      "Zero speed",
      "Speed of light"
    ],
    "answer": 0,
    "explanation": "At terminal velocity, resultant force and acceleration are zero."
  },
  {
    "id": "PHY-050",
    "question": "What provides centripetal force for a satellite orbiting Earth?",
    "options": [
      "Gravity",
      "Sound",
      "Air friction",
      "Heat"
    ],
    "answer": 0,
    "explanation": "Earth's gravity supplies the inward force."
  },
  {
    "id": "PHY-051",
    "question": "What is inertia?",
    "options": [
      "Resistance to change in motion",
      "Ability to conduct electricity",
      "A form of heat",
      "A type of force"
    ],
    "answer": 0,
    "explanation": "Inertia is an object's resistance to changes in velocity."
  },
  {
    "id": "PHY-052",
    "question": "What is friction?",
    "options": [
      "A force opposing relative motion",
      "A force that always accelerates",
      "A form of energy",
      "A measure of mass"
    ],
    "answer": 0,
    "explanation": "Friction opposes relative motion between surfaces."
  },
  {
    "id": "PHY-053",
    "question": "Mechanical advantage is calculated as?",
    "options": [
      "Load ÷ effort",
      "Effort ÷ load",
      "Distance ÷ time",
      "Mass ÷ volume"
    ],
    "answer": 0,
    "explanation": "Mechanical advantage = load/effort."
  },
  {
    "id": "PHY-054",
    "question": "Efficiency is?",
    "options": [
      "Useful output ÷ input × 100%",
      "Input ÷ output",
      "Load × effort",
      "Mass × acceleration"
    ],
    "answer": 0,
    "explanation": "Efficiency compares useful output with input."
  },
  {
    "id": "PHY-055",
    "question": "A sloping surface used to raise a load is an?",
    "options": [
      "Inclined plane",
      "Pulley",
      "Lever",
      "Wheel"
    ],
    "answer": 0,
    "explanation": "An inclined plane reduces required effort by increasing distance."
  },
  {
    "id": "PHY-056",
    "question": "The fixed point around which a lever turns is the?",
    "options": [
      "Fulcrum",
      "Load",
      "Effort",
      "Spring"
    ],
    "answer": 0,
    "explanation": "The fulcrum is the pivot."
  },
  {
    "id": "PHY-057",
    "question": "What is the unit of frequency?",
    "options": [
      "Hertz",
      "Newton",
      "Watt",
      "Volt"
    ],
    "answer": 0,
    "explanation": "Frequency is measured in hertz."
  },
  {
    "id": "PHY-058",
    "question": "What is wavelength?",
    "options": [
      "Distance between corresponding points on successive waves",
      "Waves per second",
      "Time for one wave",
      "Wave mass"
    ],
    "answer": 0,
    "explanation": "Wavelength is the spatial period of a wave."
  },
  {
    "id": "PHY-059",
    "question": "Wave speed is given by?",
    "options": [
      "v=fλ",
      "v=f/λ",
      "v=λ/f",
      "v=m/a"
    ],
    "answer": 0,
    "explanation": "Wave speed equals frequency times wavelength."
  },
  {
    "id": "PHY-060",
    "question": "Which has the shortest wavelength among these?",
    "options": [
      "Radio waves",
      "Microwaves",
      "Visible light",
      "Gamma rays"
    ],
    "answer": 3,
    "explanation": "Gamma rays have extremely short wavelengths."
  },
  {
    "id": "PHY-061",
    "question": "Which radiation is commonly used in thermal imaging?",
    "options": [
      "Infrared",
      "Ultraviolet",
      "Gamma",
      "Radio"
    ],
    "answer": 0,
    "explanation": "Thermal cameras detect infrared radiation."
  },
  {
    "id": "PHY-062",
    "question": "Which radiation can cause sunburn?",
    "options": [
      "Infrared",
      "Ultraviolet",
      "Radio",
      "Microwave"
    ],
    "answer": 1,
    "explanation": "UV radiation can damage skin and cause sunburn."
  },
  {
    "id": "PHY-063",
    "question": "What is the unit of electric current?",
    "options": [
      "Ampere",
      "Volt",
      "Ohm",
      "Coulomb"
    ],
    "answer": 0,
    "explanation": "Current is measured in amperes."
  },
  {
    "id": "PHY-064",
    "question": "What is the unit of potential difference?",
    "options": [
      "Volt",
      "Ampere",
      "Ohm",
      "Watt"
    ],
    "answer": 0,
    "explanation": "Potential difference is measured in volts."
  },
  {
    "id": "PHY-065",
    "question": "Electrical power can be calculated as?",
    "options": [
      "P=VI",
      "P=m/v",
      "P=F/a",
      "P=d/t"
    ],
    "answer": 0,
    "explanation": "Electrical power equals voltage times current."
  },
  {
    "id": "PHY-066",
    "question": "What happens to total resistance when resistors are connected in series?",
    "options": [
      "It is the sum of their resistances",
      "It becomes zero",
      "It is lower than each",
      "It cannot be found"
    ],
    "answer": 0,
    "explanation": "Series resistances add."
  },
  {
    "id": "PHY-067",
    "question": "In a parallel circuit, the voltage across each branch is generally?",
    "options": [
      "The same as the supply voltage",
      "Zero",
      "Doubled",
      "Always different"
    ],
    "answer": 0,
    "explanation": "Parallel branches share the same two supply nodes."
  },
  {
    "id": "PHY-068",
    "question": "What is a conductor?",
    "options": [
      "A material that allows charge to move easily",
      "A perfect insulator",
      "A battery",
      "A vacuum"
    ],
    "answer": 0,
    "explanation": "Conductors have mobile charge carriers."
  },
  {
    "id": "PHY-069",
    "question": "What is an insulator?",
    "options": [
      "A material that strongly resists current",
      "A perfect conductor",
      "A current meter",
      "A voltage source"
    ],
    "answer": 0,
    "explanation": "Insulators have high electrical resistance."
  },
  {
    "id": "PHY-070",
    "question": "Which component stores electrical energy chemically?",
    "options": [
      "Battery",
      "Resistor",
      "Switch",
      "Fuse"
    ],
    "answer": 0,
    "explanation": "A battery stores chemical energy and converts it to electrical energy."
  },
  {
    "id": "PHY-071",
    "question": "Which component opens or closes a circuit?",
    "options": [
      "Switch",
      "Resistor",
      "Ammeter",
      "Lamp"
    ],
    "answer": 0,
    "explanation": "A switch controls circuit continuity."
  },
  {
    "id": "PHY-072",
    "question": "What is a short circuit?",
    "options": [
      "An unintended low-resistance path for current",
      "A circuit with no source",
      "Infinite resistance",
      "A circuit with one lamp"
    ],
    "answer": 0,
    "explanation": "A short circuit can cause excessive current."
  },
  {
    "id": "PHY-073",
    "question": "What is the main purpose of a resistor?",
    "options": [
      "Limit or control current",
      "Produce oxygen",
      "Measure temperature",
      "Store food"
    ],
    "answer": 0,
    "explanation": "Resistance opposes current."
  },
  {
    "id": "PHY-074",
    "question": "Moving objects possess which energy?",
    "options": [
      "Kinetic",
      "Chemical",
      "Nuclear",
      "Elastic"
    ],
    "answer": 0,
    "explanation": "Kinetic energy is energy due to motion."
  },
  {
    "id": "PHY-075",
    "question": "Gravitational potential energy increases when an object is?",
    "options": [
      "Raised higher",
      "Moved horizontally only",
      "Cooled",
      "Made smaller"
    ],
    "answer": 0,
    "explanation": "Near Earth's surface, gravitational potential energy increases with height."
  },
  {
    "id": "PHY-076",
    "question": "The conservation of energy states that energy?",
    "options": [
      "Cannot be created or destroyed, only transferred/transformed",
      "Disappears through friction",
      "Exists only as heat",
      "Is created by force"
    ],
    "answer": 0,
    "explanation": "Total energy is conserved."
  },
  {
    "id": "PHY-077",
    "question": "Which instrument measures humidity?",
    "options": [
      "Hygrometer",
      "Barometer",
      "Ammeter",
      "Voltmeter"
    ],
    "answer": 0,
    "explanation": "A hygrometer measures humidity."
  },
  {
    "id": "PHY-078",
    "question": "Which instrument records earthquakes?",
    "options": [
      "Seismograph",
      "Barometer",
      "Thermometer",
      "Ammeter"
    ],
    "answer": 0,
    "explanation": "A seismograph records ground motion."
  },
  {
    "id": "PHY-079",
    "question": "The turning effect of a force is called?",
    "options": [
      "Moment",
      "Pressure",
      "Density",
      "Power"
    ],
    "answer": 0,
    "explanation": "Moment measures the turning effect of a force."
  },
  {
    "id": "PHY-080",
    "question": "Moment equals?",
    "options": [
      "Force × perpendicular distance",
      "Force ÷ distance",
      "Mass × volume",
      "Power × time"
    ],
    "answer": 0,
    "explanation": "Moment = force × perpendicular distance from pivot."
  },
  {
    "id": "PHY-081",
    "question": "Which of these is the correct SI unit of force?",
    "options": [
      "Newton",
      "Watt",
      "Joule",
      "Pascal"
    ],
    "answer": 0,
    "explanation": "Force is measured in newtons."
  },
  {
    "id": "PHY-082",
    "question": "A body at rest remains at rest unless acted upon by a net force. This is Newton?s?",
    "options": [
      "First law",
      "Second law",
      "Third law",
      "Law of gravitation"
    ],
    "answer": 0,
    "explanation": "This is Newton?s first law of motion."
  },
  {
    "id": "PHY-083",
    "question": "The rate of change of momentum is proportional to?",
    "options": [
      "Applied force",
      "Velocity",
      "Acceleration",
      "Distance"
    ],
    "answer": 0,
    "explanation": "Newton?s second law states force is proportional to the rate of change of momentum."
  },
  {
    "id": "PHY-084",
    "question": "What is the unit of pressure?",
    "options": [
      "Pascal",
      "Newton",
      "Joule",
      "Watt"
    ],
    "answer": 0,
    "explanation": "Pressure is measured in pascals."
  },
  {
    "id": "PHY-085",
    "question": "The force that opposes motion between two surfaces is called?",
    "options": [
      "Friction",
      "Gravity",
      "Tension",
      "Lift"
    ],
    "answer": 0,
    "explanation": "Friction opposes relative motion between surfaces."
  },
  {
    "id": "PHY-086",
    "question": "A lever with the load between the fulcrum and effort is a?",
    "options": [
      "Second-class lever",
      "First-class lever",
      "Third-class lever",
      "Pulley system"
    ],
    "answer": 0,
    "explanation": "A second-class lever has the load between fulcrum and effort."
  },
  {
    "id": "PHY-087",
    "question": "The work done by a force is maximum when the angle between force and displacement is?",
    "options": [
      "0?",
      "30?",
      "60?",
      "90?"
    ],
    "answer": 0,
    "explanation": "Work is maximum when force and displacement are in the same direction."
  },
  {
    "id": "PHY-088",
    "question": "Potential energy depends on?",
    "options": [
      "Position",
      "Velocity",
      "Temperature",
      "Volume"
    ],
    "answer": 0,
    "explanation": "Potential energy is due to position or state."
  },
  {
    "id": "PHY-089",
    "question": "Which quantity is measured in joules?",
    "options": [
      "Energy",
      "Current",
      "Power",
      "Resistance"
    ],
    "answer": 0,
    "explanation": "Energy is measured in joules."
  },
  {
    "id": "PHY-090",
    "question": "Which instrument is used to measure current?",
    "options": [
      "Ammeter",
      "Voltmeter",
      "Thermometer",
      "Barometer"
    ],
    "answer": 0,
    "explanation": "An ammeter measures electric current."
  },
  {
    "id": "PHY-091",
    "question": "Which device converts electrical energy to mechanical energy?",
    "options": [
      "Motor",
      "Generator",
      "Transformer",
      "Cell"
    ],
    "answer": 0,
    "explanation": "An electric motor converts electrical energy to mechanical motion."
  },
  {
    "id": "PHY-092",
    "question": "A generator converts?",
    "options": [
      "Mechanical energy to electrical energy",
      "Electrical to mechanical",
      "Heat to electrical",
      "Chemical to heat"
    ],
    "answer": 0,
    "explanation": "Generators convert mechanical energy into electrical energy."
  },
  {
    "id": "PHY-093",
    "question": "The tendency of a body to resist changes in its motion is called?",
    "options": [
      "Inertia",
      "Momentum",
      "Pressure",
      "Velocity"
    ],
    "answer": 0,
    "explanation": "Inertia is resistance to changes in motion."
  },
  {
    "id": "PHY-094",
    "question": "The SI unit of temperature is?",
    "options": [
      "Kelvin",
      "Celsius",
      "Fahrenheit",
      "Newton"
    ],
    "answer": 0,
    "explanation": "The SI unit of temperature is kelvin."
  },
  {
    "id": "PHY-095",
    "question": "Which of these is a scalar quantity?",
    "options": [
      "Mass",
      "Velocity",
      "Force",
      "Acceleration"
    ],
    "answer": 0,
    "explanation": "Mass has magnitude only and no direction."
  },
  {
    "id": "PHY-096",
    "question": "Which of these is a vector quantity?",
    "options": [
      "Displacement",
      "Speed",
      "Distance",
      "Energy"
    ],
    "answer": 0,
    "explanation": "Displacement has magnitude and direction."
  },
  {
    "id": "PHY-097",
    "question": "The product of mass and velocity is called?",
    "options": [
      "Momentum",
      "Force",
      "Power",
      "Work"
    ],
    "answer": 0,
    "explanation": "Momentum = mass ? velocity."
  },
  {
    "id": "PHY-098",
    "question": "A body moving with uniform velocity has acceleration equal to?",
    "options": [
      "Zero",
      "One",
      "Two",
      "Nine point eight"
    ],
    "answer": 0,
    "explanation": "Uniform velocity means zero acceleration."
  },
  {
    "id": "PHY-099",
    "question": "The SI unit of power is?",
    "options": [
      "Watt",
      "Volt",
      "Ampere",
      "Ohm"
    ],
    "answer": 0,
    "explanation": "Power is measured in watts."
  },
  {
    "id": "PHY-100",
    "question": "The speed of sound in air is approximately?",
    "options": [
      "340 m/s",
      "3 m/s",
      "3000 m/s",
      "34 m/s"
    ],
    "answer": 0,
    "explanation": "Sound travels at roughly 340 m/s in air."
  },
  {
    "id": "PHY-101",
    "question": "A freely falling object near the Earth?s surface accelerates at about?",
    "options": [
      "9.8 m/s?",
      "1.6 m/s?",
      "3.0 m/s?",
      "6.8 m/s?"
    ],
    "answer": 0,
    "explanation": "Free fall acceleration near Earth is approximately 9.8 m/s?."
  },
  {
    "id": "PHY-102",
    "question": "What is the SI unit of resistance?",
    "options": [
      "Ohm",
      "Volt",
      "Ampere",
      "Watt"
    ],
    "answer": 0,
    "explanation": "Resistance is measured in ohms."
  },
  {
    "id": "PHY-103",
    "question": "The brightness of a lamp depends mainly on?",
    "options": [
      "Power",
      "Length",
      "Mass",
      "Volume"
    ],
    "answer": 0,
    "explanation": "Lamp brightness is related to its electrical power."
  },
  {
    "id": "PHY-104",
    "question": "Which colour has the longest wavelength in visible light?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Violet"
    ],
    "answer": 0,
    "explanation": "Red light has the longest wavelength in the visible spectrum."
  },
  {
    "id": "PHY-105",
    "question": "Which material is a good thermal conductor?",
    "options": [
      "Metal",
      "Wood",
      "Plastic",
      "Rubber"
    ],
    "answer": 0,
    "explanation": "Metals conduct heat efficiently."
  },
  {
    "id": "PHY-106",
    "question": "The image formed by a plane mirror is?",
    "options": [
      "Virtual and upright",
      "Inverted and real",
      "Real and magnified",
      "Diminished and real"
    ],
    "answer": 0,
    "explanation": "Plane mirrors produce virtual, upright, same-size images."
  },
  {
    "id": "PHY-107",
    "question": "A lens that is thicker at the centre is called a?",
    "options": [
      "Convex lens",
      "Concave lens",
      "Plane lens",
      "Cylindrical lens"
    ],
    "answer": 0,
    "explanation": "Convex lenses are thicker in the middle."
  },
  {
    "id": "PHY-108",
    "question": "Light bends when it passes from one medium to another because of?",
    "options": [
      "Refraction",
      "Reflection",
      "Diffraction",
      "Dispersion"
    ],
    "answer": 0,
    "explanation": "Refraction is bending due to change in speed."
  },
  {
    "id": "PHY-109",
    "question": "Which device is used to detect electric charge?",
    "options": [
      "Electroscope",
      "Thermometer",
      "Voltmeter",
      "Barometer"
    ],
    "answer": 0,
    "explanation": "An electroscope detects charge."
  },
  {
    "id": "PHY-110",
    "question": "An object that allows light to pass through without clear images is?",
    "options": [
      "Translucent",
      "Opaque",
      "Transparent",
      "Reflective"
    ],
    "answer": 0,
    "explanation": "Translucent materials allow some light through but not a clear image."
  },
  {
    "id": "PHY-111",
    "question": "The SI unit of electric charge is?",
    "options": [
      "Coulomb",
      "Newton",
      "Volt",
      "Ampere"
    ],
    "answer": 0,
    "explanation": "Electric charge is measured in coulombs."
  },
  {
    "id": "PHY-112",
    "question": "When two like charges are brought near each other, they?",
    "options": [
      "Repel",
      "Attract",
      "Neutralise",
      "Disappear"
    ],
    "answer": 0,
    "explanation": "Like charges repel."
  },
  {
    "id": "PHY-113",
    "question": "Which radiation has the highest penetrating power?",
    "options": [
      "Gamma ray",
      "Alpha particle",
      "Beta particle",
      "Infrared ray"
    ],
    "answer": 0,
    "explanation": "Gamma radiation penetrates most deeply."
  },
  {
    "id": "PHY-114",
    "question": "The ability of a material to be stretched and return to its original shape is called?",
    "options": [
      "Elasticity",
      "Plasticity",
      "Conductivity",
      "Viscosity"
    ],
    "answer": 0,
    "explanation": "Elasticity allows a material to regain shape after deformation."
  },
  {
    "id": "PHY-115",
    "question": "The force acting on a unit area is called?",
    "options": [
      "Pressure",
      "Density",
      "Weight",
      "Volume"
    ],
    "answer": 0,
    "explanation": "Pressure equals force divided by area."
  },
  {
    "id": "PHY-116",
    "question": "Which quantity is measured in hertz?",
    "options": [
      "Frequency",
      "Current",
      "Resistance",
      "Energy"
    ],
    "answer": 0,
    "explanation": "Frequency is measured in hertz."
  },
  {
    "id": "PHY-117",
    "question": "The Sun is a major source of?",
    "options": [
      "Solar energy",
      "Nuclear fuel",
      "Coal",
      "Petrol"
    ],
    "answer": 0,
    "explanation": "The Sun supplies solar energy."
  },
  {
    "id": "PHY-118",
    "question": "The SI unit of volume is?",
    "options": [
      "m?",
      "kg",
      "N",
      "J"
    ],
    "answer": 0,
    "explanation": "Volume is measured in cubic metres in SI."
  },
  {
    "id": "PHY-119",
    "question": "Which instrument measures atmospheric pressure?",
    "options": [
      "Barometer",
      "Ammeter",
      "Thermometer",
      "Hydrometer"
    ],
    "answer": 0,
    "explanation": "A barometer measures atmospheric pressure."
  },
  {
    "id": "PHY-120",
    "question": "In which state do particles have the greatest kinetic energy?",
    "options": [
      "Gas",
      "Solid",
      "Liquid",
      "All equal"
    ],
    "answer": 0,
    "explanation": "Gas particles move most freely and have the greatest kinetic energy."
  },
  {
    "id": "PHY-121",
    "question": "Which colour absorbs heat most strongly?",
    "options": [
      "Black",
      "White",
      "Yellow",
      "Blue"
    ],
    "answer": 0,
    "explanation": "Black surfaces absorb more radiant energy."
  },
  {
    "id": "PHY-122",
    "question": "Which statement about sound is correct?",
    "options": [
      "Sound needs a material medium",
      "Sound travels in vacuum",
      "Sound is electromagnetic",
      "Sound is not a wave"
    ],
    "answer": 0,
    "explanation": "Sound needs a material medium to travel."
  },
  {
    "id": "PHY-123",
    "question": "The repeated back-and-forth motion of a particle about a mean position is?",
    "options": [
      "Vibration",
      "Translation",
      "Rotation",
      "Expansion"
    ],
    "answer": 0,
    "explanation": "Vibration is repeated oscillation about a mean position."
  },
  {
    "id": "PHY-124",
    "question": "Which is a renewable source of energy?",
    "options": [
      "Hydroelectric power",
      "Coal",
      "Natural gas",
      "Petroleum"
    ],
    "answer": 0,
    "explanation": "Hydroelectric power is renewable."
  },
  {
    "id": "PHY-125",
    "question": "A body in circular motion has?",
    "options": [
      "Centripetal force",
      "No force",
      "Only friction",
      "Only gravity"
    ],
    "answer": 0,
    "explanation": "Centripetal force keeps an object moving in a circular path."
  },
  {
    "id": "PHY-126",
    "question": "The SI unit of electric potential difference is?",
    "options": [
      "Volt",
      "Ohm",
      "Watt",
      "Ampere"
    ],
    "answer": 0,
    "explanation": "Potential difference is measured in volts."
  },
  {
    "id": "PHY-127",
    "question": "The process by which a liquid turns into a solid is?",
    "options": [
      "Freezing",
      "Melting",
      "Condensation",
      "Evaporation"
    ],
    "answer": 0,
    "explanation": "Freezing is liquid to solid."
  },
  {
    "id": "PHY-128",
    "question": "The force that keeps planets in orbit around the Sun is?",
    "options": [
      "Gravitational force",
      "Magnetic force",
      "Centrifugal force",
      "Frictional force"
    ],
    "answer": 0,
    "explanation": "Gravitational force keeps planets in orbit."
  },
  {
    "id": "PHY-129",
    "question": "The lowest possible temperature is called?",
    "options": [
      "Absolute zero",
      "Room temperature",
      "Boiling point",
      "Freezing point"
    ],
    "answer": 0,
    "explanation": "Absolute zero is the lowest theoretical temperature."
  },
  {
    "id": "PHY-130",
    "question": "Which device converts sunlight directly to electricity?",
    "options": [
      "Solar cell",
      "Generator",
      "Motor",
      "Electroscope"
    ],
    "answer": 0,
    "explanation": "A solar cell converts light energy directly to electrical energy."
  }
];
