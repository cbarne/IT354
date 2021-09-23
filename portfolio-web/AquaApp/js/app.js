var app = {
    apiKey: "AIzaSyDUEU0Adpa53W6KuOldiEL5aROPLrBqeGU",
    authDomain: "web-app-it354.firebaseapp.com",
    databaseURL: "https://web-app-it354.firebaseio.com",
    projectId: "web-app-it354",
    storageBucket: "web-app-it354.appspot.com",
    messagingSenderId: "89555943530",
    appId: "1:89555943530:web:a381dc228f251650e84a13"
  };

  firebase.initializeApp(config);

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
    const promise = auth.createUserWithEmailAndPassword(txtemail,txtpass);
    promise.catch (e => console.log(e.message));
  });
}


