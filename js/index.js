document.getElementById("login-btn").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email");
  const email = userEmail.value;

  const userPass = document.getElementById("user-pass");
  const password = userPass.value;

  // verify email and password
  if (email === "ahbanna@gmail.com" && password === "123456") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid Username or Password");
  }
});
