
// var frameContainer = document.getElementById("frameContainer");
// if (frameContainer) {
//   frameContainer.addEventListener("click", function (e) {
//     window.location.href = "./login-page.html";
//   });
// }

var frameContainer1 = document.getElementById("frameContainer1");
if (frameContainer1) {
  frameContainer1.addEventListener("click", function (e) {
    window.location.href = "./login.html";
  });
}

// var logoImage = document.getElementById("logoImage");
// if (logoImage) {
//   logoImage.addEventListener("click", function (e) {
//     // Please sync "Homepage" to the project
//   });
// }

// var frameContainer = document.getElementById("frameContainer");
// if (frameContainer) {
//   frameContainer.addEventListener("click", function (e) {
//     // window.location.href = "./sign-up-page.html";
//     window.location.href = "./index.html";
//   });
// }


// Lấy trường input email
var emailInput = document.getElementById("email");
// Thêm sự kiện blur (khi trường mất focus) vào trường email
emailInput.addEventListener("blur", function (event) {
  // Lấy giá trị của trường email
  var emailValue = event.target.value;
  // Kiểm tra nếu email không kết thúc bằng "@gmail.com"
  if (!emailValue.endsWith("@gmail.com")) {
      // Hiển thị thông báo lỗi
      // document.getElementById("emailError").innerText = "Email must end with '@gmail.com'";
      alert("Vui lòng nhập đúng định dạng");
      // Đặt giá trị của trường email thành rỗng
      emailInput.value = "";
  } 
});
var passwordInput = document.getElementById("password");
var showHideBtn = document.getElementById("showHideBtn");

showHideBtn.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD18a-7UuNVZ0_SuSe8iFgKXYjAy-3kI3w",
  authDomain: "demo1-aa2be.firebaseapp.com",
  databaseURL: "https://demo1-aa2be-default-rtdb.firebaseio.com/",
  projectId: "demo1-aa2be",
  storageBucket: "demo1-aa2be.appspot.com",
  messagingSenderId: "736186588162",
  appId: "1:736186588162:web:e8a00f86f17ef7f1a8db1b",
  measurementId: "G-HRTFM7859D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get ref to database services
const db = getDatabase(app);


document.getElementById("register").addEventListener('click', async function(e){
  e.preventDefault();

//   var username = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
var username = document.getElementById("username").value.trim();
var email = document.getElementById("email").value.trim();
var password = document.getElementById("password").value.trim();

  if (username === "" || email === "" || password === "") {
    alert("Vui lòng điền đầy đủ thông tin vào các trường");
    return;
  }
  await set(ref(db, 'user/' + document.getElementById("username").value),
  {
    Name: document.getElementById("username").value,
    Email: document.getElementById("email").value,
    Password: document.getElementById("password").value
  }).then(() => {
    alert("Sign up Sucessfull!");

  });


})