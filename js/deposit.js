document.getElementById("deposit-btn").addEventListener("click", function () {
  //new deposit
  const depositInput = document.getElementById("deposit-input");
  const newDeposit = parseFloat(depositInput.value);

  //previous deposit
  const preDepo = document.getElementById("pre-deposit");
  const previousDeposit = parseFloat(preDepo.innerText);

  // total deposit
  const totalDeposit = previousDeposit + newDeposit;
  // total deposit show in deposit
  preDepo.innerText = totalDeposit;

  // previous balance
  const preBal = document.getElementById("pre-balance");
  const previousBalance = parseFloat(preBal.innerText);
  // total balance
  const totalBalance = previousBalance + newDeposit;
  // Set total balance
  preBal.innerText = totalBalance;

  // clear deposit input
  depositInput.value = "";
});
