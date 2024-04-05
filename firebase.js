//! firebase
// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

const auth = getAuth();
const db = getFirestore();

// ! register
const formRegister = document.querySelector('.signup-form');
const submitRegisterBtn = document.querySelector('.submitRegisterBtn');
if (formRegister && submitRegisterBtn) {
    submitRegisterBtn.addEventListener('click', async () => {
        const email = formRegister.querySelector("input[name='email']").value;
        const name = document.querySelector("input#nameRegister").value;
        const password = formRegister.querySelector("input[name='password']").value;
        const checkBoxRegister = document.querySelector(".checkBoxRegister");

        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            alert('Email không đúng định dạng!');
            return;
        }

        const passwordRegex = /^.{6,}$/;
        if (!passwordRegex.test(password)) {
            alert('Mật khẩu ít nhất 6 kí tự!');
            return;
        }

        if (!checkBoxRegister.checked) {
            alert("Vui lòng đồng ý điều khoản!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: name
            })
            alert("Đăng kí thành công!");
            window.location.href = '/login.html';
        } catch (error) {
            alert("Đăng kí lỗi!");
        }
    });
}

// ! login
const formLogin = document.querySelector('.login-form');
const submitLoginBtn = document.querySelector(".submitLoginBtn");
if (formLogin && submitLoginBtn) {
    submitLoginBtn.addEventListener('click', async () => {
        const email = formLogin.querySelector(".emailLogin").value;
        const password = formLogin.querySelector(".passwordLogin").value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            alert("Đăng nhập thành công!");
            window.location.href = '/homepage.html';            
        } catch (error) {
            console.log(error)
            alert("Đăng nhập lỗi!");
            return;
        }
    });
}

// ! logout
const logout = document.querySelector('.logout');
if (logout) {
  logout.addEventListener('click', async () => {
    try {
      await signOut(auth);
      alert('Đăng xuất thành công');
      window.location.href = '/login.html'
    } catch (error) {
      alert('Đăng xuất thất bại');
    }
  })
}

// ! check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        const usernameHeader = document.querySelector(".usernameHeader");
        usernameHeader.innerHTML = user.displayName;

        console.log('Logged in');
    } else {
        const usernameHeader = document.querySelector(".usernameHeader");
        usernameHeader.innerHTML = `<a href= "/login.html"> Login </a>`;
        const dropdownContent = usernameHeader.parentNode.querySelector(".dropdown-content");
        dropdownContent.remove();
        console.log('Logged out');
    }
})

// ! get data
// const getData = async () => {
//   const querySnapshot = await getDocs(collection(db, "products"));
//   querySnapshot.forEach((doc) => {
//     console.log(${doc.id} => ${JSON.stringify(doc.data())});
//   });
// }
// getData();
//! end firebase
