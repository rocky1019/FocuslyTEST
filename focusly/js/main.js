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
  document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}
