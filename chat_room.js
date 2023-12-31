const firebaseConfig = {
    apiKey: "AIzaSyBDIIe9ED7gYk1PzLS2bz9W6uou3oZsPk4",
    authDomain: "chat-app-c9ef2.firebaseapp.com",
    projectId: "chat-app-c9ef2",
    storageBucket: "chat-app-c9ef2.appspot.com",
    messagingSenderId: "28441747829",
    appId: "1:28441747829:web:77dcf929ece6e2dd09b33c",
    databaseURL: "https://chat-app-c9ef2-default-rtdb.firebaseio.com"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "chat_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";
}
