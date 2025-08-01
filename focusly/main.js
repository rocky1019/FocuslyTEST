// 🔹 Page Navigation Functions
function createRoom() {
  const roomID = Math.floor(Math.random() * 100000);
  localStorage.setItem("roomID", roomID);
  window.location.href = "room.html";
}

function joinRoom() {
  const roomID = prompt("Enter Room ID:");
  if (roomID) {
    localStorage.setItem("roomID", roomID);
    window.location.href = "room.html";
  }
}

function guestContinue() {
  const guestID = Math.floor(Math.random() * 99999);
  localStorage.setItem("roomID", guestID);
  window.location.href = "room.html";
}

function goToSignup() {
  window.location.href = "signup.html";
}

function goToLogin() {
  window.location.href = "login.html";
}

function learnMore() {
  const features = document.getElementById("features");
  if (features) {
    features.scrollIntoView({ behavior: "smooth" });
  }
}

// 🔹 Firebase Auth Setup
console.log("🔥 main.js is running");

const firebaseConfig = {
  apiKey: "AIzaSyCrqad_1R9l322_Rg0K-UtKImEMn2nqWcE",
  authDomain: "atharva19focusly.firebaseapp.com",
  projectId: "atharva19focusly",
  storageBucket: "atharva19focusly.appspot.com",
  messagingSenderId: "277269253347",
  appId: "1:277269253347:web:20b6f3cc29473f3093c9d6"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("login.html")) {
    const form = document.querySelector("form");
    if (!form) {
      console.warn("⚠️ Login form not found.");
      return;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector("input[type='email']").value;
      const password = form.querySelector("input[type='password']").value;

      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          alert("✅ Login successful!");
          window.location.href = "room.html";
        })
        .catch((error) => {
          alert("❌ Login failed: " + error.message);
        });
    });
  }
});



