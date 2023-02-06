function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startButton: document.querySelector('.btn.start'),
  stopButton: document.querySelector('.btn.stop'),
};

let intervalId = null;

refs.startButton.addEventListener('click', onStartClick);
refs.stopButton.addEventListener('click', onStopClick);

function onStartClick() {
  toggleButton();
  intervalId = setInterval(changBgColor, 1000);
}

function onStopClick() {
  toggleButton();
  clearInterval(intervalId);
}

function toggleButton() {
  refs.startButton.toggleAttribute('disabled');
  refs.stopButton.toggleAttribute('disabled');
}

function changBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
