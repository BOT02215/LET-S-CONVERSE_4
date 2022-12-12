const firebaseConfig = {
    apiKey: "AIzaSyA5x4U75DTZbx-OOgp6qz6FlrKgqgP87A8",
    authDomain: "let-s-converse-69e27.firebaseapp.com",
    databaseURL: "https://let-s-converse-69e27-default-rtdb.firebaseio.com",
    projectId: "let-s-converse-69e27",
    storageBucket: "let-s-converse-69e27.appspot.com",
    messagingSenderId: "961505166314",
    appId: "1:961505166314:web:a1c150d3d4ac0e8c7ae893"
};

firebase.initializeApp(firebaseConfig);

roomName = localStorage.getItem("nameOfTheRoom")
userName = localStorage.getItem("userName")

function send() {
    text = document.getElementById("message").value
    firebase.database().ref(roomName).push({
        Usuário: userName,
        Mensagem: text,
        Likes: 0
    })
    document.getElementById("message").value = ""
}

function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebaseMessageId = childKey;
                messageData = childData;
                //Início do código

                //Fim do código
            }
        });
    });
}
getData();