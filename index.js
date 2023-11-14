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
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const popupText = document.querySelector(".popup-text");

// Song titles

const songs = [
  "birds",
  "greenbul",
  "harp-seal",
  "morning-ambiance",
  "orogantuan",
  "parakeet",
  "rainforest",
  "waterfall",
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

  audio.play();
}

// Pause Function
function pauseSong() {
  musicContainer.classList.remove("play");

  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

// Prev Function
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next Function
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Play in order
function playNextSong() {
  songIndex++;

  if (songIndex >= songs.length) {
    audio.pause();
    songIndex = 0;
  } else {
    loadSong(songs[songIndex]);
    playSong();
  }
}

// shuffle function
// Define a shuffle function using the Fisher-Yates algorithm
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// // Shuffle the array of indices and store it in a variable
// const shuffledIndices = [...Array(songs.length).keys()];
// shuffleArray(shuffledIndices);

// function shuffle() {
//   // Shuffle the array of indices using the Fisher-Yates algorithm
//   for (let i = shuffledIndices.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledIndices[i], shuffledIndices[j]] = [
//       shuffledIndices[j],
//       shuffledIndices[i],
//     ];
//   }

//   // Reset the current index to the beginning of the shuffled order
//   currentIndex = 0;

//   // Play the first song in the shuffled order
//   playNextShuffledSong();
// }

// Event listener for shuffle button
// shuffleBtn.addEventListener("click", shuffle);

// repeat function
let isRepeated = false;

// repeat function
function repeat() {
  if (!isRepeated) {
    // If it's the first repetition, play the current song
    loadSong(songs[songIndex]);
    playSong();
    isRepeated = true;
  } else {
    // After the first repetition, reset the flag and play the first song
    isRepeated = false;
    songIndex = 0;
    loadSong(songs[songIndex]);
    playSong();
  }
}





// Repeat current-song function
function repeatCurrent() {
  console.log("repeat current song");
}

// popup text function
function iconText(text) {
  popupText.innerText = text;
  popupText.classList.add("show");
}
function removeText() {
  popupText.classList.remove("show");
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercentage = (currentTime / duration) * 100;
  progress.style.width = `${progressPercentage}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
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

// Next Song
prevBtn.addEventListener("click", prevSong);

// Prev Song
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);

// play in sequence
audio.addEventListener("ended", playNextSong);

progressContainer.addEventListener("click", setProgress);

// Sequence
sequenceBtn.addEventListener("mouseout", () => {
  removeText();
});
sequenceBtn.addEventListener("click", () => {
  sequenceBtn.classList.add("notActive");
  shuffleBtn.classList.add("active");
//   shuffle();
});
// sequenceBtn.addEventListener('dblclick', shuffle)

sequenceBtn.addEventListener("mouseover", () => {
  iconText("Shuffle");
});


// Shuffle
shuffleBtn.addEventListener("mouseout", () => {
  removeText();
});
shuffleBtn.addEventListener("click", () => {
  shuffleBtn.classList.remove("active");
  repeatBtn.classList.add("active");
  // Event listener for the 'ended' event
  audio.addEventListener("ended", function () {
    repeat();
  });
});

shuffleBtn.addEventListener("mouseover", () => {
  iconText("Repeat");
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
  iconText("Repeat current");
});
// Repeat Current Song
repeatCurrentBtn.addEventListener("click", () => {
  repeatCurrentBtn.classList.remove("active");
  sequenceBtn.classList.remove("notActive");
  playInOrder();
});

repeatCurrentBtn.addEventListener("mouseover", () => {
  iconText("Play in order");
});
repeatCurrentBtn.addEventListener("mouseout", () => {
  removeText();
});
