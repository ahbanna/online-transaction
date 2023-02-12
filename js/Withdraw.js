document.getElementById("withdraw-btn").addEventListener("click", function () {
  // new withdraw
  const withdrawInput = document.getElementById("withdraw-input");
  const newWithdraw = parseFloat(withdrawInput.value);

  // clear withdraw input
  withdrawInput.value = "";

  // check if the input number is not a number
  if (isNaN(newWithdraw)) {
    alert("Please input valid number");
    return;
  }

  // previous withdraw
  const preWithdraw = document.getElementById("pre-withdraw");
  const previousWithdraw = parseFloat(preWithdraw.innerText);

  // previosu balance
  const preBal = document.getElementById("pre-balance");
  const previousBalance = parseFloat(preBal.innerText);

  // if the desire withdraw amount is grater than balance
  if (newWithdraw > previousBalance) {
    alert("Insufficient Balance");
    return;
  }

  // total withdraw
  const totalWithdraw = previousWithdraw + newWithdraw;
  // total withdraw show in withdraw
  preWithdraw.innerText = totalWithdraw;

  // New balance
  const newBalance = previousBalance - newWithdraw;
  // Set new balance
  preBal.innerText = newBalance;
});
