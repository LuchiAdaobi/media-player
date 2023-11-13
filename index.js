const musicContainer = document.querySelector('.#music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')

// Song titles

const songs = ['birds', 'greenbul', 'morning-ambiance', 'orogantuan', 'parakeet', 'rainforest', 'waterfall', 'wildlife']

let songIndex = 7

// initially load song info DOM
loadSong(songs[songIndex])
