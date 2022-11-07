const PwEl = document.getElementById("password");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const splcharEl = document.getElementById("splchar");
const generateEl = document.getElementById("generate");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChar = "~!@#$%^&*()_+/*-";

function getUpperCase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}
function getlowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSpecialChar() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

function generatePass() {
  const len = lenEl.value;
  let password = "";
  for (let i = 0; i < len; i++) {
    const n = generateNew();
    password += n;
  }
  PwEl.innerText = password;
}

function generateNew() {
  const nx = [];
  if (upperEl.checked) {
    nx.push(getUpperCase());
  }
  if (lowerEl.checked) {
    nx.push(getlowerCase());
  }
  if (numberEl.checked) {
    nx.push(getNumbers());
  }
  if (splcharEl.checked) {
    nx.push(getSpecialChar());
  }
  if (nx.length === 0) return "";
  return nx[Math.floor(Math.random() * nx.length)];
}

generateEl.addEventListener("click", generatePass);
copyEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = PwEl.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
