var firebaseConfig = {
    apiKey: "AIzaSyDGy_wp8shV1lfCbXgxjLj1ZzJ6Gq2fYkY",
    authDomain: "ui-chatapp.firebaseapp.com",
    projectId: "ui-chatapp",
    storageBucket: "ui-chatapp.appspot.com",
    messagingSenderId: "226361703881",
    appId: "1:226361703881:web:c5308a8a896398c791bc18",
    measurementId: "G-FM10DVG6NY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



 function logout()
  {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
         window.location = "index.html";
  }


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!!";

function addRoom()
{
    
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "room.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "room.html";
}





