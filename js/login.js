// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getDatabase,set,ref,onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcicHvJR8SsPppjverjAVmWUbxz4fWRrU",
  authDomain: "final-venue-booking.firebaseapp.com",
  projectId: "final-venue-booking",
  storageBucket: "final-venue-booking.appspot.com",
  messagingSenderId: "130315557712",
  appId: "1:130315557712:web:10ee9fc8cea3aeb1d7ea55"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const auth = getAuth(app);
var currentemail;
document.getElementById("register").addEventListener('click',(e) =>{
  e.preventDefault()
  var email = document.getElementById('email1').value 
  var password = document.getElementById('password').value 
  var username = document.getElementById('username').value 
  var mis = document.getElementById('mis').value 
  var confirm_password = document.getElementById('confirm_password').value 

  if(password === confirm_password){
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    set(ref(database, 'users/' + user.uid), { 
      mis: mis,
      username: username,
      email: email,
      status : "Online" ,
      book1 : 0 ,
      book2 : 0
    });
    
    Swal.fire({
      title: "Good job!",
      text: "User Created!",
      icon: "success"
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
    // ..
  });
  }
  else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
  }

  
})

document.getElementById("login").addEventListener('click',(e) =>{
  e.preventDefault()
  var email_login = document.getElementById('email').value 
  var password_login = document.getElementById('pass_login').value 
  

  signInWithEmailAndPassword(auth, email_login
    , password_login)
  .then((userCredential) => {
    // Signed up 
    const user = auth.currentUser
    // console.log(user.uid)
   
    if(email_login == "admin2024@gmail.com"){
      window.location.href="admin.html"
    }
    else{
      window.location.href="ui.html"
    }
     
    // sessionStorage.setItem("cur_email",email_login)
    // user_ref = database.ref("users/" + )
    // window.location.href = "book.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: errorMessage,
    });
    // ..
  });
})





