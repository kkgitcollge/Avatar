const cardsContainer = document.getElementById("cardsContainer");
const newNameInput = document.getElementById("newNameInput");
const addBtn = document.getElementById("addBtn");

// Light pastel card colors
const pastelColors = [
  "#fdebd0", "#d6eaf8", "#f9e79f", "#e8daef",
  "#d5f5e3", "#f6ddcc", "#fce4ec", "#e3f2fd",
  "#f5eef8", "#fdf2e9"
];

// Add a default card
addCard("kk");

addBtn.addEventListener("click", () => {
  const name = newNameInput.value.trim();
  if (name !== "") {
    addCard(name);
    newNameInput.value = "";
  }
});

function addCard(name) {
  const letter = name.charAt(0).toUpperCase();
  const card = document.createElement("div");
  card.className = "card";
  card.style.setProperty('--card-color', getRandomColor());

  const letterEl = document.createElement("div");
  letterEl.className = "letter";
  letterEl.textContent = letter;

  const nameEl = document.createElement("div");
  nameEl.className = "name";
  nameEl.textContent = name;

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.textContent = "❌";
  removeBtn.addEventListener("click", () => {
    cardsContainer.removeChild(card);
  });

  card.appendChild(removeBtn);
  card.appendChild(letterEl);
  card.appendChild(nameEl);
  cardsContainer.appendChild(card);
}

function getRandomColor() {
  return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}
