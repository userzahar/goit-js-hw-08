import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const throttled = throttle(setTime, 1000);

function setTime({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds);
};


player.on('timeupdate', throttled);
const currentTime = localStorage.getItem("videoplayer-current-time") || 0;
player.setCurrentTime(currentTime);


    
