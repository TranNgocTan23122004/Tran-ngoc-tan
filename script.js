const keys = document.querySelectorAll('.key');
const beatBar = document.querySelector('.beat-bar');
const scoreDisplay = document.querySelector('.score');
let score = 0;
let beat = 0;
const beatInterval = 1000;

function playBeat() {
  beatBar.style.transform = `translateY(${beat}%)`;
  beat += 20;
  if (beat > 100) {
    beat = 0;
  }
  setTimeout(playBeat, beatInterval);
}

function handleKeyPress(e) {
  const key = e.keyCode;
  const targetKey = document.querySelector(`.key[data-key="${key}"]`);
  if (!targetKey) return;
  targetKey.classList.add('pressed');
  if (beat > 0 && beat < 40) {
    score += 10;
    scoreDisplay.textContent = score;
  } else {
    score -= 5;
    scoreDisplay.textContent = score;
  }
}

function handleKeyRelease(e) {
  const key = e.keyCode;
  const targetKey = document.querySelector(`.key[data-key="${key}"]`);
  if (!targetKey) return;
  targetKey.classList.remove('pressed');
}

playBeat();
window.addEventListener('keydown', handleKeyPress);
window.addEventListener('keyup', handleKeyRelease);