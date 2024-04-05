// var logoImage = document.getElementById("logoImage");
// if (logoImage) {
// logoImage.addEventListener("click", function (e) {
//     // Please sync "Homepage" to the project
// });
// }


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

var passwordInput = document.getElementById("password");
var showHideBtn = document.getElementById("showHideBtn");

showHideBtn.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});