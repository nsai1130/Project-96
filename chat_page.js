const firebaseConfig = {
      apiKey: "AIzaSyBDIIe9ED7gYk1PzLS2bz9W6uou3oZsPk4",
      authDomain: "chat-app-c9ef2.firebaseapp.com",
      projectId: "chat-app-c9ef2",
      storageBucket: "chat-app-c9ef2.appspot.com",
      messagingSenderId: "28441747829",
      appId: "1:28441747829:web:77dcf929ece6e2dd09b33c",
      databaseURL: "https://chat-app-c9ef2-default-rtdb.firebaseio.com"
    };
    
    firebase.initializeApp(firebaseConfig);
    
    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }