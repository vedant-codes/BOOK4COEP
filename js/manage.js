import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase,ref,child,get,update} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
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
document.getElementById("show").addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("hello")
  var opt = document.getElementById('opt').value;
  get(child(ref(database),'books/'+opt))
  .then((snapshot)=>{
    var data = snapshot.val();
    const userid = data.user;
    
    
    if(data.status == "Due"){
      var DOI = data.doi;
      const minute = 1000 * 60;
      const hour = minute * 60;
      const day = hour * 24;

    let days_elapsed= Math.round(Date.now() / day)- Math.round(DOI / day);
    var lf = ((days_elapsed - 7) * 5);
      
    }
    else{
        var lf = 0;
    }
    
;
    document.getElementById('r11').innerText=data.id
    document.getElementById('r12').innerText=data.name
    document.getElementById('r13').innerText=lf;
    document.getElementById('r16').innerText=data.status
    
    
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage);})
})


document.getElementById("approve").addEventListener('click',(e)=>{
    e.preventDefault()
    var opt = document.getElementById('opt').value;
    get(child(ref(database),'books/'+opt))
    .then((snapshot)=>{
    var data = snapshot.val();
    const userid = data.user
    console.log(data)
    var qty = data.Qty
    qty = qty + 1;
    console.log(qty)
    var updates = {
        status : "available",
        user : "",
        doi:'',
        dor:'',
        Qty : qty
      }
      
      update(ref(database,"books/" + opt),updates)
      .then(()=>{
        
        window.location.href = "manage.html"
      })

      update(ref(database,"users/" + userid),{book1:0,book2:0})
      .then(()=>{
        alert("updated!")
        window.location.href = "manage.html"
      })
    ;})
    

    
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);})
});


  
  


















    








