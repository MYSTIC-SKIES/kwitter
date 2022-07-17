var firebaseConfig = {
  apiKey: "AIzaSyDgMDT9tDyKXrSItnnDAqeu5lRpsyTIqvk",
  authDomain: "kwitter-66ffc.firebaseapp.com",
  databaseURL: "https://kwitter-66ffc-default-rtdb.firebaseio.com",
  projectId: "kwitter-66ffc",
  storageBucket: "kwitter-66ffc.appspot.com",
  messagingSenderId: "876854792931",
  appId: "1:876854792931:web:4ffd291daa4f57407c2bd6",
  measurementId: "G-M5XK8JWQTH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "   !";

function addRoom()
{
 room_name=document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
   addingroomname:"roomnameadded"
 })
 localStorage.setItem("room_name",room_name);
 window.location="page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
   row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'> +" + Room_names+ "</div>" 
   //   row = "<div id =" +Room_names+" onclick = 'redirectToRoomName()'>" +Room_names+"</div>"
      console.log(row)
     
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room)_name");
  window.location="kwitter.html";
}


