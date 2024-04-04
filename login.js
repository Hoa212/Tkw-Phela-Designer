// var logoImage = document.getElementById("logoImage");
// if (logoImage) {
// logoImage.addEventListener("click", function (e) {
//     // Please sync "Homepage" to the project
// });
// }

var frameContainer = document.getElementById("frameContainer");
if (frameContainer) {
frameContainer.addEventListener("click", function (e) {
    window.location.href = "./sign-up-page.html";
});
}

// var frameContainer = document.getElementById("frameContainer");
// if (frameContainer) {
// frameContainer.addEventListener("click", function (e) {
//     // Please sync "Homepage" to the project
// });
// }

var dontHaveAn = document.getElementById("dontHaveAn");
if (dontHaveAn) {
dontHaveAn.addEventListener("click", function (e) {
    window.location.href = "./sign-up-page.html";
});
}
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
        alert("Vui lòng điền đầy đủ thông tin vào các trường");
        // Đặt giá trị của trường email thành rỗng
        emailInput.value = "";
    } 
    else {
        // Nếu email hợp lệ, xóa thông báo lỗi
        //document.getElementById("emailError").innerText = "";
        alert("sign up Sucessfull!");
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