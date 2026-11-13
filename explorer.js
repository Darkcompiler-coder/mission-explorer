const missions = [
  { name: "Surveyor 3", destination: "Moon", year: 1967, status: "ended", place: "Oceanus Procellarum", info: "Robotic lander; later visited by Apollo 12 astronauts.", search: "soft landing sample returned parts robotic" },
  { name: "Apollo 11 EASEP", destination: "Moon", year: 1969, status: "passive", place: "Tranquility Base", info: "Surface experiment package; its laser reflector remains useful.", search: "seismometer laser retroreflector science package" },
  { name: "Apollo ALSEP stations", destination: "Moon", year: 1969, status: "ended", place: "Apollo 12, 14, 15, 16 and 17 sites", info: "Instrument stations studied moonquakes, heat flow and the lunar environment.", search: "seismometer heat flow magnetometer solar wind experiment" },
  { name: "Lunokhod 1 and 2", destination: "Moon", year: 1970, status: "ended", place: "Luna 17 and Luna 21 sites", info: "Soviet remote-controlled rovers that examined the lunar surface.", search: "robot rover Soviet" },
  { name: "Apollo Lunar Roving Vehicles", destination: "Moon", year: 1971, status: "ended", place: "Apollo 15, 16 and 17 sites", info: "Crewed electric rovers left parked at their final mission sites.", search: "rover astronauts vehicle" },
  { name: "Pioneer 10 and 11", destination: "Deep space", year: 1972, status: "ended", place: "Outward solar-system trajectories", info: "Early outer-planet probes; both have stopped communicating.", search: "Jupiter Saturn plaque silent signal" },
  { name: "Viking 1 and 2", destination: "Mars", year: 1976, status: "ended", place: "Chryse Planitia and Utopia Planitia", info: "Orbiter-lander missions that photographed, sampled and studied Mars.", search: "soil chemistry weather camera robotic arm lander" },
  { name: "Voyager 1 and 2", destination: "Deep space", year: 1977, status: "active", place: "Interstellar space", info: "Outer-planet explorers still returning limited science data.", search: "Golden Record Jupiter Saturn Uranus Neptune" },
  { name: "Mars Pathfinder and Sojourner", destination: "Mars", year: 1997, status: "ended", place: "Ares Vallis", info: "Lander and first Mars rover; tested a new airbag landing system.", search: "airbag first rover rocks weather" },
  { name: "Cassini and Huygens", destination: "Deep space", year: 1997, status: "disposed", place: "Saturn and Titan", info: "Cassini ended at Saturn; Huygens landed on Titan in 2005.", search: "Saturn rings moon lander Titan atmospheric probe" },
  { name: "Spirit", destination: "Mars", year: 2004, status: "ended", place: "Gusev Crater", info: "Mars Exploration Rover that searched for evidence of past water.", search: "rover water rocks geology" },
  { name: "Opportunity", destination: "Mars", year: 2004, status: "ended", place: "Meridiani Planum and Endeavour Crater", info: "Rover designed for 90 sols that operated for nearly 15 years.", search: "dust storm solar panels marathon rover" },
  { name: "New Horizons", destination: "Deep space", year: 2006, status: "active", place: "Kuiper Belt", info: "First close-up exploration of Pluto and Arrokoth; mission continues.", search: "Pluto dwarf planet Tombaugh ashes" },
  { name: "Phoenix", destination: "Mars", year: 2008, status: "ended", place: "Vastitas Borealis", info: "Stationary lander that dug into soil and confirmed water ice.", search: "polar arctic robotic arm ice laboratory" },
  { name: "InSight", destination: "Mars", year: 2018, status: "ended", place: "Elysium Planitia", info: "Lander that listened for marsquakes and studied the planet's interior.", search: "seismometer heat probe dust solar panels" },
  { name: "Ingenuity", destination: "Mars", year: 2021, status: "ended", place: "Jezero Crater", info: "Technology-demonstration helicopter; completed 72 flights.", search: "helicopter aircraft flight Perseverance" },
  { name: "Curiosity", destination: "Mars", year: 2012, status: "active", place: "Gale Crater", info: "Operating rover studying Martian rocks, climate and habitability.", search: "rover active chemistry geology" },
  { name: "Perseverance", destination: "Mars", year: 2021, status: "active", place: "Jezero Crater", info: "Operating rover studying geology and collecting samples.", search: "rover active samples Ingenuity" }
];

const statusNames = {
  active: "Operating / communicating",
  passive: "Passive science",
  ended: "Mission ended / silent",
  disposed: "Deliberately disposed"
};
const queryInput = document.getElementById("mission-search");
const destinationSelect = document.getElementById("destination-filter");
const statusSelect = document.getElementById("status-filter");
const resultsElement = document.getElementById("mission-results");
const countElement = document.getElementById("results-count");

function renderMissions() {
  const query = queryInput.value.trim().toLocaleLowerCase();
  const destination = destinationSelect.value;
  const status = statusSelect.value;
  const filtered = missions
    .filter((mission) => destination === "all" || mission.destination === destination)
    .filter((mission) => status === "all" || mission.status === status)
    .filter((mission) => `${mission.name} ${mission.destination} ${mission.place} ${mission.info} ${mission.search}`.toLocaleLowerCase().includes(query))
    .sort((a, b) => a.year - b.year || a.name.localeCompare(b.name));

  countElement.textContent = `${filtered.length} ${filtered.length === 1 ? "mission" : "missions"} found`;
  resultsElement.replaceChildren();
  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No missions match those filters. Try another word or choose “All” for a filter.";
    resultsElement.appendChild(empty);
    return;
  }
  for (const mission of filtered) {
    const article = document.createElement("article");
    article.className = "mission-card explorer-card";
    const meta = document.createElement("div");
    meta.className = "card-meta";
    const statusTag = document.createElement("span");
    statusTag.className = `status ${mission.status}`;
    statusTag.textContent = statusNames[mission.status];
    const year = document.createElement("span");
    year.textContent = mission.year;
    meta.append(statusTag, year);
    const heading = document.createElement("h3");
    heading.textContent = mission.name;
    const location = document.createElement("p");
    location.className = "card-location";
    location.textContent = `${mission.destination} · ${mission.place}`;
    const details = document.createElement("p");
    details.textContent = mission.info;
    article.append(meta, heading, location, details);
    resultsElement.appendChild(article);
  }
}

queryInput.addEventListener("input", renderMissions);
destinationSelect.addEventListener("change", renderMissions);
statusSelect.addEventListener("change", renderMissions);
renderMissions();

const questions = [
  { prompt: "Which Apollo instrument can still help measure the distance to the Moon without electricity?", choices: ["A laser retroreflector", "A heat-flow probe", "A rover camera"], correct: 0 },
  { prompt: "Which Mars rover was designed for 90 sols and worked for nearly 15 years?", choices: ["Sojourner", "Opportunity", "Curiosity"], correct: 1 },
  { prompt: "Where did the Huygens probe land?", choices: ["The Moon", "Mars", "Titan"], correct: 2 },
  { prompt: "How many flights did Ingenuity complete?", choices: ["5", "22", "72"], correct: 2 }
];
let quizIndex = 0;
let quizScore = 0;
let quizLocked = false;
const quizQuestion = document.getElementById("quiz-question");
const quizAnswers = document.getElementById("quiz-answers");
const quizFeedback = document.getElementById("quiz-feedback");
const quizRestart = document.getElementById("quiz-restart");

function showQuizQuestion() {
  quizLocked = false;
  quizQuestion.textContent = `${quizIndex + 1}. ${questions[quizIndex].prompt}`;
  quizFeedback.textContent = "";
  quizAnswers.replaceChildren();
  questions[quizIndex].choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = choice;
    button.addEventListener("click", () => answerQuiz(index));
    quizAnswers.appendChild(button);
  });
}

function answerQuiz(index) {
  if (quizLocked) return;
  if (index !== questions[quizIndex].correct) {
    quizFeedback.textContent = "Not quite. Choose another answer and try again.";
    return;
  }
  quizLocked = true;
  quizScore += 1;
  quizFeedback.textContent = "Correct. Nice work!";
  window.setTimeout(() => {
    quizIndex += 1;
    if (quizIndex === questions.length) {
      quizQuestion.textContent = `You scored ${quizScore} out of ${questions.length}.`;
      quizFeedback.textContent = "Explore the mission pages to learn more.";
      quizAnswers.replaceChildren();
      quizRestart.hidden = false;
      return;
    }
    showQuizQuestion();
  }, 450);
}

quizRestart.addEventListener("click", () => {
  quizIndex = 0;
  quizScore = 0;
  quizRestart.hidden = true;
  showQuizQuestion();
});
showQuizQuestion();
