// // ---------- USING COMMON FUNCTION -------------//
// input field function
function getInputFieldById(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputFieldValue;
}

// element function
function getElementValueById(id) {
  const element = document.getElementById(id);
  const elementValue = parseFloat(element.innerText);
  return elementValue;
}

// set value function
function setvalue(id, value) {
  const getElementToSetValue = document.getElementById(id);
  getElementToSetValue.innerText = value;
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  // new deposit
  const newDeposit = getInputFieldById("deposit-input");
  // pre deposit
  const preDeposit = getElementValueById("pre-deposit");
  // total deposit
  const totalDeposit = newDeposit + preDeposit;

  // set total deposit
  setvalue("pre-deposit", totalDeposit);
  // pre balance
  const preBalance = getElementValueById("pre-balance");
  // total balance
  const totalBalance = preBalance + newDeposit;
  //set total balance
  setvalue("pre-balance", totalBalance);
});

// // ---------- NOT USING COMMON FUNCTION -------------//
// document.getElementById("deposit-btn").addEventListener("click", function () {
//   // new deposit
//   const getNewDeposit = document.getElementById("deposit-input");
//   const newDeposit = parseFloat(getNewDeposit.value);

//   // previous deposit
//   const getPreDeposit = document.getElementById("pre-deposit");
//   const preDeposit = parseFloat(getPreDeposit.innerText);

//   // total deposit
//   const totalDeposit = preDeposit + newDeposit;
//   // set total deposit
//   getPreDeposit.innerText = totalDeposit;

//   // previous balance
//   const getPreBalance = document.getElementById("pre-balance");
//   const preBalance = parseFloat(getPreBalance.innerText);

//   // total balance
//   const totalBalance = preBalance + newDeposit;
//   // set total balance
//   getPreBalance.innerText = totalBalance;

//   // clear
//   getNewDeposit.value = "";
// });
