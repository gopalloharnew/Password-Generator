import { RandomPassword } from "./RandomPassword.js";

const passwordGeneratorForm = document.querySelector(
  ".password-generator-form"
);
const includeCheckboxes = [...document.querySelectorAll(".include-checkbox")];
const includeLowercaseCheckbox = document.querySelector("#includeLowercase");
const includeUppercaseCheckbox = document.querySelector("#includeUppercase");
const includeNumbersCheckbox = document.querySelector("#includeNumbers");
const includeSymbolsCheckbox = document.querySelector("#includeSymbols");
const passwordDisplay = document.querySelector(".password-display");
const characterAmountInput = document.querySelector(".character-amount-input");
const decreaseCharacterAmountButton = document.querySelector(
  ".decrease-character-amount"
);
const increaseCharacterAmountButton = document.querySelector(
  ".increase-character-amount"
);

includeCheckboxes.forEach((includeCheckbox) => {
  includeCheckbox.addEventListener("input", (e) => {
    if (
      includeCheckboxes.every((includeCheckbox) => {
        return !includeCheckbox.checked;
      })
    ) {
      includeCheckboxes[0].checked = true;
    }
  });
});

increaseCharacterAmountButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    parseInt(characterAmountInput.value) < parseInt(characterAmountInput.max)
  ) {
    characterAmountInput.value = parseInt(characterAmountInput.value) + 1;
  }
});

decreaseCharacterAmountButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    parseInt(characterAmountInput.value) > parseInt(characterAmountInput.min)
  ) {
    characterAmountInput.value = parseInt(characterAmountInput.value) - 1;
  }
});

passwordGeneratorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let includeLowercase = includeLowercaseCheckbox.checked;
  let includeUppercase = includeUppercaseCheckbox.checked;
  let includeNumbers = includeNumbersCheckbox.checked;
  let includeSymbols = includeSymbolsCheckbox.checked;
  let passwordLength = characterAmountInput.value;

  let password = new RandomPassword(
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols,
    passwordLength
  ).password;

  passwordDisplay.textContent = password;
});
