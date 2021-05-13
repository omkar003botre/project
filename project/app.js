var firebaseConfig = {
    apiKey: "AIzaSyAAzOtssxDNAjjvUSYir2LFJ6Ce3GMkEYo",
    authDomain: "university-project-f079e.firebaseapp.com",
    projectId: "university-project-f079e",
    storageBucket: "university-project-f079e.appspot.com",
    messagingSenderId: "753423651109",
    appId: "1:753423651109:web:a7c0c4df40e29a3ef1cacc",
    measurementId: "G-WQVR8C3C9L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ready data // 
var pname, page;
var er = document.getElementById('sub');
console.log(er);

// inser data// 
er.onclick = function() {
    pname = document.getElementById('name').value;
    page = document.getElementById('age').value;
    console.log(pname, page);

    firebase.database().ref("/personal information" + page).set({
        Name: pname,
        age: page
    });
}