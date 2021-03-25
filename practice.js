  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBaduaOxgHgI9jMMrjbJBr6MSCAPdu2kIk",
    authDomain: "twitter-24808.firebaseapp.com",
    databaseURL: "https://twitter-24808-default-rtdb.firebaseio.com",
    projectId: "twitter-24808",
    storageBucket: "twitter-24808.appspot.com",
    messagingSenderId: "463331046351",
    appId: "1:463331046351:web:4482eddbf221929d4058ba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        KIDS CHAT : "What are you guys doing!"
  });
}