document.addEventListener("DOMContentLoaded", function () {
  // Welcome Message
  document.getElementById("welcome-msg").innerText =
    "Welcome! I'm happy to have you as a visitor.";

  // Admin Login Toggle
  let controlOfAdminLogin = document.getElementById("admin-login");
  window.showadminlogin = function () {
    controlOfAdminLogin.style.display = "block";
  };

  // Theme Toggle
  let controlOfThemeBtn = document.getElementById("switch-theme");
  controlOfThemeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
  });

  // Admin Login Logic
  let controlOfForm = document.getElementById("admin-form");
  controlOfForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let storedUsername = "first";
    let storedPassword = "unknown";

    let inputUsername = document.getElementById("usrnme").value;
    let inputPassword = document.getElementById("pwd").value;

    const loginMsg = document.getElementById("login-msg");

    if (storedUsername === inputUsername && storedPassword === inputPassword) {
      loginMsg.innerText = "Login Successful! Showing responses...";
      loginMsg.style.color = "green";
      document.getElementById("admin-login").style.display = "none";
      document.getElementById("user-responses").style.display = "block";
      displayUsersMessage();
    } else {
      loginMsg.innerText = "Access Denied. Please try again.";
      loginMsg.style.color = "red";
    }
  });

  // Contact Form Submission
  let controlOfContact = document.querySelector("#contact-me form");
  controlOfContact.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let message = document.getElementById("msg").value;
    let date = new Date().toLocaleString();

    let response = { name, email, message, date };
    let dummyDatabase = JSON.parse(localStorage.getItem("tempDB")) || [];
    dummyDatabase.push(response);
    localStorage.setItem("tempDB", JSON.stringify(dummyDatabase));

   
    alert("Thank you for your message. We'll get back to you shortly!");

    
    this.reset();
  });

  // Display Messages in Admin Panel
  function displayUsersMessage() {
    let controlOfMsg = document.getElementById("responses");
    controlOfMsg.innerHTML = ""; // Clear old messages

    let dummyDatabase = JSON.parse(localStorage.getItem("tempDB")) || [];

    dummyDatabase.forEach((response) => {
      let element = document.createElement("div");
      element.innerHTML = `
        <p><strong>Name:</strong> ${response.name}</p>
        <p><strong>Email:</strong> ${response.email}</p>
        <p><strong>Message:</strong> ${response.message}</p>
        <p><strong>Date:</strong> ${response.date}</p>
        <hr>
      `;
      controlOfMsg.appendChild(element);
    });
  }
});
