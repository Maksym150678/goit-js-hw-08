import Player from '@vimeo/player';
// var throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
console.log('title:', title);
});

player.on('timeupdate', throttle(function(data) {
localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000));

const savedSeconds = localStorage.getItem("videoplayer-current-time");

if (savedSeconds) {
  player.setCurrentTime(JSON.parse(savedSeconds))  
}





