const audioUpload = document.getElementById('audioUpload');
const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');
const visualizer = document.getElementById('visualizer');

let intervalId = null;

// Create fake bars
const NUM_BARS = 30;
const bars = [];

for (let i = 0; i < NUM_BARS; i++) {
  const bar = document.createElement('div');
  bar.classList.add('bar');
  visualizer.appendChild(bar);
  bars.push(bar);
}

// Animate bars with random heights
function animateBars() {
  bars.forEach(bar => {
    const height = Math.floor(Math.random() * 150 + 20);
    bar.style.height = `${height}px`;
  });
}

// Upload audio
audioUpload.addEventListener('change', () => {
  const file = audioUpload.files[0];
  if (file) {
    audio.src = URL.createObjectURL(file);
  }
});

// Play and start fake visualization
playButton.addEventListener('click', () => {
  if (!audio.src) {
    alert('Please upload an audio file first!');
    return;
  }

  audio.play();

  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(animateBars, 200);
});
