
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase,ref,child,get,update} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 const database = getDatabase();


const phy = document.getElementById('physics')
const chem = document.getElementById('chemistry')
const math = document.getElementById('maths')
const comp = document.getElementById('computer')
const elec = document.getElementById('electrical')
const oth = document.getElementById('others')

phy.addEventListener('click',()=>{
    get(child(ref(database),'books/'))
  .then((snapshot)=>{
    var Orders = snapshot.val();
    var order;
    var cnt = 0;
    const ls = Object.keys(Orders)
    for (order in Orders){
        order = Orders[ls[cnt]]
        if(order.cat == 'physics'){
            const tr = document.createElement('tr');
          const trContent = `
              <td>${order.id}</td>
              <td>${order.name}</td>
              <td>${order.cat}</td>
              <td>${order.Qty}</td>
              
              
          `;
          tr.innerHTML = trContent;
          document.querySelector('table tbody').prepend(tr);
        }
          
          
    
    cnt++;};
})
})

chem.addEventListener('click',()=>{
    get(child(ref(database),'books/'))
  .then((snapshot)=>{
    var Orders = snapshot.val();
    var order;
    var cnt = 0;
    const ls = Object.keys(Orders)
    for (order in Orders){
        order = Orders[ls[cnt]]
        if(order.cat == 'chemistry'){
            const tr = document.createElement('tr');
          const trContent = `
              <td>${order.id}</td>
              <td>${order.name}</td>
              <td>${order.cat}</td>
              
              
              
          `;
          tr.innerHTML = trContent;
          document.querySelector('table tbody').prepend(tr);
        }
          
          
    
    cnt++;};
})
})

math.addEventListener('click',()=>{
    get(child(ref(database),'books/'))
  .then((snapshot)=>{
    var Orders = snapshot.val();
    var order;
    var cnt = 0;
    const ls = Object.keys(Orders)
    for (order in Orders){
        order = Orders[ls[cnt]]
        if(order.cat == 'maths'){
            const tr = document.createElement('tr');
          const trContent = `
              <td>${order.id}</td>
              <td>${order.name}</td>
              <td>${order.cat}</td>
              <td>${order.Qty}</td>
              
              
              
          `;
          tr.innerHTML = trContent;
          document.querySelector('table tbody').prepend(tr);
        }
          
          
    
    cnt++;};
})
})

comp.addEventListener('click',()=>{
    get(child(ref(database),'books/'))
  .then((snapshot)=>{
    var Orders = snapshot.val();
    var order;
    var cnt = 0;
    const ls = Object.keys(Orders)
    for (order in Orders){
        order = Orders[ls[cnt]]
        if(order.cat == 'computer'){
            const tr = document.createElement('tr');
          const trContent = `
              <td>${order.id}</td>
              <td>${order.name}</td>
              <td>${order.cat}</td>
              <td>${order.Qty}</td>
              
              
              
          `;
          tr.innerHTML = trContent;
          document.querySelector('table tbody').prepend(tr);
        }
          
          
    
    cnt++;};
})
})

elec.addEventListener('click',()=>{
    get(child(ref(database),'books/'))
  .then((snapshot)=>{
    var Orders = snapshot.val();
    var order;
    var cnt = 0;
    const ls = Object.keys(Orders)
    for (order in Orders){
        order = Orders[ls[cnt]]
        if(order.cat == 'electrical'){
            const tr = document.createElement('tr');
          const trContent = `
              <td>${order.id}</td>
              <td>${order.name}</td>
              <td>${order.cat}</td>
              <td>${order.Qty}</td>
              
              
              
          `;
          tr.innerHTML = trContent;
          document.querySelector('table tbody').prepend(tr);
        }
          
          
    
    cnt++;};
})
})

oth.addEventListener('click',()=>{
    get(child(ref(database),'books/'))
  .then((snapshot)=>{
    var Orders = snapshot.val();
    var order;
    var cnt = 0;
    const ls = Object.keys(Orders)
    for (order in Orders){
        order = Orders[ls[cnt]]
        if(order.cat == 'others'){
            const tr = document.createElement('tr');
          const trContent = `
              <td>${order.id}</td>
              <td>${order.name}</td>
              <td>${order.cat}</td>
              <td>${order.Qty}</td>
             
              
              
          `;
          tr.innerHTML = trContent;
          document.querySelector('table tbody').prepend(tr);
        }
          
          
    
    cnt++;};
})
})

function convertMillisecondsToDate(milliseconds) {
    // Create a new Date object with milliseconds
    const date = new Date(milliseconds);

    // Get the various components of the date
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding 1 because getMonth() returns zero-based index
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    // Format the date as YYYY-MM-DD HH:MM:SS
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
}
 
 
get(child(ref(database),'books/'))
  .then((snapshot)=>{
    var Orders = snapshot.val();
    var order;
    var cnt = 1;
    for (order in Orders){
        order = Orders[cnt]
        
        var date = convertMillisecondsToDate(order.doi)
        var date2 = convertMillisecondsToDate(order.doi + 86400000 * 7)
        
          const tr = document.createElement('tr');
          const trContent = `
              <td>${order.id}</td>
              <td>${order.name}</td>
              <td>${order.cat}</td>
              <td>${order.Qty}</td>
              
              
              
          `;
          tr.innerHTML = trContent;
          document.querySelector('table tbody').appendChild(tr);
          
    
    cnt++;};
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage);})

document.getElementById('issue').addEventListener('click',issueBook)
document.getElementById('search').addEventListener('click',search)
  
function issueBook(){
    const user = auth.currentUser;
    console.log(user)
    const userId = user.uid;
    const userRef = ref(database, 'users/' + userId);
  
    get(userRef).then((snapshot) => {
        var opt = document.getElementById('opt').value;
          if (snapshot.exists()) {
            const userData = snapshot.val();
            const username = userData.username;
            const book1 = userData.book1;
            const book2 = userData.book2;
            if(book1 == 0){
                const bookRef = ref(database, "books/"+opt);
                get(bookRef).then((snapshot) =>{
                    const bookData = snapshot.val();
                    const bookStatus = bookData.status;
                    if(bookData.Qty>0){
                        update(userRef, { book1:opt}).then(() => {
                            
                            }).catch((error) => {
                            console.error('Error issuing book:', error);
                            });
                        update(bookRef, { doi: Date.now(),dor : Date.now() + 86400000 * 7,user: username, status: 'issued' ,Qty:bookData.Qty-1}).then(() => {
                        alert('Book issued successfully.');
                        }).catch((error) => {
                        console.error('Error issuing book:', error);
                });}
                    else{
                        alert('book already issued')
                    }
            })
            }
            else if(book2 == 0){
                const bookRef = ref(database, "books/"+opt);
                get(bookRef).then((snapshot) =>{
                    const bookData = snapshot.val();
                    const bookStatus = bookData.status;
                    if(bookData.Qty>0){
                        update(userRef, { book2:opt}).then(() => {
                            
                            }).catch((error) => {
                            console.error('Error issuing book:', error);
                            });
                        update(bookRef, { doi: Date.now(),dor : Date.now() + 86400000 * 7,user: username, status: 'issued',Qty:bookData.Qty-1 }).then(() => {
                        alert('Book issued successfully.');
                        }).catch((error) => {
                        console.error('Error issuing book:', error);
                });}
                    else{
                        alert('book not available')
                    }
            })
            }
            else{
                alert('max limit of books reached, return to issue more')
            }
          } else {
            console.error('User data not found.');
          }
        }).catch((error) => {
          console.error('Error retrieving user data:', error);
        });
    
   
   
  
  }
 function search(){
    var opt = document.getElementById('opt').value;
    const bookRef = ref(database, "books/"+opt);
                get(bookRef).then((snapshot) =>{
                    const order = snapshot.val();
                    const tr = document.createElement('tr');
                    const trContent = `
                        <td>${order.id}</td>
                        <td>${order.name}</td>
                        <td>${order.cat}</td>
                        <td>${order.Qty}</td>
                        
                    `;
                    tr.innerHTML = trContent;
                    tr.style.background = 'rgb(218,246,148)';
                    document.querySelector('table tbody').prepend(tr);
                    

          })
 }




// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const booksRef = ref(database, 'books');
// onValue(booksRef, (snapshot) => {
//   snapshot.forEach((childSnap) => {
//     const book = childSnap.val();
//     const status = book.status;

//     if (status === 'available') {
//       const tr = document.createElement('tr');
//       const trContent = `
//         <td>${childSnap.key}</td>
//         <td>${book.name}</td>
//         <td class="${status === 'Due' ? 'danger' : status === 'available' ? 'success' : 'primary'}">${status}</td>
//         <td><button class="issue">Issue</button></td>
//       `;
//       tr.innerHTML = trContent;
//       document.querySelector('table tbody').appendChild(tr);
//     }
//   });
// }, function(error) {
//   console.log("Error occurred:", error);
// });
// Initialize Firebase

  