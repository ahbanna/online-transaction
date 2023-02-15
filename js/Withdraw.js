// // ---------- USING COMMON FUNCTION -------------//
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdraw = getInputFieldById("withdraw-input");
  const preWithdraw = getElementValueById("pre-withdraw");
  const preBalance = getElementValueById("pre-balance");

  if (newWithdraw > preBalance) {
    alert("Insufficient Balance");
    return;
  }

  const totalWithdraw = preWithdraw + newWithdraw;
  setvalue("pre-withdraw", totalWithdraw);

  const totalBalance = preBalance - newWithdraw;
  setvalue("pre-balance", totalBalance);
});

// // ---------- NOT USING COMMON FUNCTION -------------//
// document.getElementById("withdraw-btn").addEventListener("click", function () {
//   // New withdraw
//   const getNewWithdraw = document.getElementById("withdraw-input");
//   const newWithdraw = parseFloat(getNewWithdraw.value);

//   //clear
//   getNewWithdraw.value = "";

//   // previous withdraw
//   const getPreWithdraw = document.getElementById("pre-withdraw");
//   const preWithdraw = parseFloat(getPreWithdraw.innerText);

//   // get previous balance
//   const getPreBalance = document.getElementById("pre-balance");
//   const preBalance = parseFloat(getPreBalance.innerText);

//   // if the desire withdraw amount is grater than balance
//   if (newWithdraw > preBalance) {
//     alert("Insufficient Balance");
//     return;
//   }

//   // total withdraw
//   const totalWithdraw = preWithdraw + newWithdraw;
//   // set total withdraw
//   getPreWithdraw.innerText = totalWithdraw;

//   // calculate total balance
//   const totalBalance = preBalance - newWithdraw;
//   // show total balance
//   getPreBalance.innerText = totalBalance;
// });
