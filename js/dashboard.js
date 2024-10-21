
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

  get(child(ref(database),'books/'))
  .then((snapshot)=>{
    var Orders = snapshot.val();
    var order;
    var cnt = 0;
    var cnti = 0;
    var cntd = 0;
    var cntm = 0;
    var cntp = 0;
    var cntc = 0;
    var cntco = 0;
    var cnto = 0;
    var cnte = 0;
    const ls = Object.keys(Orders)
    for (order in Orders){
        order = Orders[ls[cnt]]

        
    
        

        
        if(order.status == "issued"){
          cnti++;
        }
        if(order.status == "Due"){
          cntd++;
        }

        if(order.cat == "computer"){
            cntco++;
          }
        else if(order.cat == "electrical"){
            cnte++;
          }
          
          else if(order.cat == "maths"){
            cntm++;
          }

          else if(order.cat == "physics"){
            cntp++;
          }

          else if(order.cat == "chemistry"){
            cntc++;
          }

          else{
            cnto++;
          }
        
        
        
        cnt++;
        }
        
        const ctx = document.getElementById('myChart').getContext('2d');
                    const issued_graph = [28,34,53,cnti];
                    const stock_graph = [45,55,87,cnt];
                    const due_graph = [4,2,8,cntd];
                    const myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        // labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
                        datasets: [{
                        label: 'Books Issued',
                        data: issued_graph,
                        borderColor: 'blue',
                        fill : false
                        }, {
                        label: 'Books in Stock',
                        data: stock_graph,
                        borderColor: 'green',
                        fill : false
                        }, {
                        label: 'Books in Due',
                        data: due_graph,
                        borderColor: 'red',
                        fill : false,
                        }]
                    },
                    options: {
                        responsive: false,
                        plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            align: 'center',
                            labels: {
                            color: 'black',
                            font: {
                                weight: 'bold'
                            }
                            }
                        }
                        },
                        scales: {
                        x: {
                            display: true,
                            scaleLabel: {
                            display: true,
                            labelString: 'Months'
                            }
                        },
                        y: {
                            display: true,
                            scaleLabel: {
                            display: true,
                            labelString: 'Number of Books'
                            }
                        }
                        }
                    }
                    });
                    
                    var xValues = ["Computer", "Electrical", "Physics", "Maths", "Others", "Chemistry"];
                    var yValues = [cntco,cnte,cntp,cntm,cnto,cntc];
                    var barColors = [
                    "#b91d47",
                    "#00aba9",
                    "#2b5797",
                    "#e8c3b9",
                    "#1e7145",
                    "#9ACD32",
                    
                    ];

                    new Chart("Chart", {
                    type: "pie",
                    data: {
                        labels: xValues,
                        datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                        }]
                    },
                    options: {
                        title: {
                        display: true,
                        text: "Branch Wise Analysis"
                        }
                    }
                    });
                    
        
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);})