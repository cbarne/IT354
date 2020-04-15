
var firebaseConfig = {
    apiKey: "AIzaSyDUEU0Adpa53W6KuOldiEL5aROPLrBqeGU",
    authDomain: "web-app-it354.firebaseapp.com",
    databaseURL: "https://web-app-it354.firebaseio.com",
    projectId: "web-app-it354",
    storageBucket: "web-app-it354.appspot.com",
    messagingSenderId: "89555943530",
    appId: "1:89555943530:web:a381dc228f251650e84a13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(function (user){
if(user){
    var email = user.email;
    var user = firebase.auth().currentUser;
 
}


});


function login (){

//get elements
const txtemail = document.getElementById('txtemail').value;
const txtpass = document.getElementById('txtpass').value;
firebase.auth().signInWithEmailAndPassword(txtemail,txtpass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}




// //login stuff

// btnlogin.addEventListener('click', e => {
//     const email = txtemail.value;
//     const pass = txtpass.value;
//     const auth = firebase.auth();

//     auth.signInWithEmailAndPassword(email, pass);

//     const promise = auth.createUserWithEmailAndPassword(email,pass);
//     promise.catch (e => console.log(e.message));
// });
// //logout
//  btnlogout.addEventListener('click', e => {
//      firebase.auth().signOut();
// });

// //checkuser
// firebase.auth().onAuthStateChanged(firebaseUser => {
//     if (firebaseUser){
//         console.log(firebaseUser);
//         btnlogout.classList.remove('hide');
    
//     }
// else{
//     console.log("Not logged in");
//     btnlogout.classList.add('hide');
// }
// })});
