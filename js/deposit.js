// ---------- NOT USING COMMON FUNCTION -------------//
document.getElementById("deposit-btn").addEventListener("click", function () {
  // new deposit
  const getNewDeposit = document.getElementById("deposit-input");
  const newDeposit = parseFloat(getNewDeposit.value);

  // previous deposit
  const getPreDeposit = document.getElementById("pre-deposit");
  const preDeposit = parseFloat(getPreDeposit.innerText);

  // total deposit
  const totalDeposit = preDeposit + newDeposit;
  // set total deposit
  getPreDeposit.innerText = totalDeposit;

  // previous balance
  const getPreBalance = document.getElementById("pre-balance");
  const preBalance = parseFloat(getPreBalance.innerText);

  // total balance
  const totalBalance = preBalance + newDeposit;
  // set total balance
  getPreBalance.innerText = totalBalance;

  // clear
  getNewDeposit.value = "";
});
