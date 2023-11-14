const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const sequenceBtn = document.querySelector("#sequence");
const shuffleBtn = document.querySelector("#shuffle");
const repeatBtn = document.querySelector("#repeat");
const repeatCurrentBtn = document.querySelector("#repeat-current");
const audio = document.querySelector("#audio");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");
const progress = document.querySelector("progress");
const progressContainer = document.querySelector(".progress-container");
const popupText = document.querySelector(".popup-text");

// Song titles

const songs = [
  "birds",
  "greenbul",
  "morning-ambiance",
  "orogantuan",
  "parakeet",
  "rainforest",
  "waterfall",
  "wildlife",
];

let songIndex = 0;

// initially load song info DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.webp`;
}

// Play Function
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
}

// Pause Function
function pauseSong() {
  musicContainer.classList.remove("play");

  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
}

// shuffle function
function shuffle(){
    console.log('shuffle')
}
// repeat function
function repeat() {
  console.log('repeat');
}
// repeat current function
function repeatCurrent() {
  console.log('repeat current song');
}

// popup text function
function iconText(text) {
  popupText.innerText = text;
  popupText.classList.add("show");
}
function removeText() {
  popupText.classList.remove("show");
}
// Event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Sequence
sequenceBtn.addEventListener("mouseout", () => {
  removeText();
});
sequenceBtn.addEventListener("click", () => {
  sequenceBtn.classList.add("notActive");
  shuffleBtn.classList.add("active");
  shuffle();
});

sequenceBtn.addEventListener("mouseover", () => {
  iconText("Play in order");
});
// Shuffle
shuffleBtn.addEventListener("mouseout", () => {
  removeText();
});
shuffleBtn.addEventListener("click", () => {
  shuffleBtn.classList.remove("active");
  repeatBtn.classList.add("active");
  repeat();
  
});

shuffleBtn.addEventListener("mouseover", () => {
  iconText("Shuffle");
});
// Repeat
repeatBtn.addEventListener("mouseout", () => {
  removeText();
});
repeatBtn.addEventListener("click", () => {
  repeatBtn.classList.remove("active");
  repeatCurrentBtn.classList.add("active");
  repeatCurrent();
});

repeatBtn.addEventListener("mouseover", () => {
  iconText("Repeat");
});
// Repeat Current Song
repeatCurrentBtn.addEventListener("click", () => {
    repeatCurrentBtn.classList.remove("active");
    sequenceBtn.classList.remove("notActive");
    console.log('back to order')
});

repeatCurrentBtn.addEventListener("mouseover", () => {
    iconText("Repeat current");
});
repeatCurrentBtn.addEventListener("mouseout", () => {
  removeText();
});
