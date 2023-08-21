const assignButton = document.querySelector(".assign");

const assignedItem = document.querySelector(".assigned-items");

// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  let listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 3) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  let potLuckItems = [
    "potato salad",
    "hummus",
    "cookies",
    "fruit",
    "pasta sald"
  ];

  const allGuests = document.querySelectorAll(".guest-list li"); //select individual guest items
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potLuckItems.length);
    let randomPotluckItem = potLuckItems[randomPotluckIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItem.append(listItem);
    potLuckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});

const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

