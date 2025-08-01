let time = 25 * 60;
let timerInterval;

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  time = 25 * 60;
  updateTimer();
}

function updateTimer() {
  const mins = Math.floor(time / 60);
  const secs = time % 60;
  document.getElementById("timer").textContent =
    `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  if (time > 0) {
    time--;
  } else {
    clearInterval(timerInterval);
    alert("Focus session over!");
  }
}

updateTimer(); // Initial display
