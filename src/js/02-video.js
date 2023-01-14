import Player from '@vimeo/player';
const iframe = document.getElementById('vimeo-player');
// console.log("🚀 f", iframe)
const player = new Player(iframe);
player.on('timeupdate', function ({seconds}) {
    

    
    // localStorage.setItem("videoplayer-current-time")
    console.log(seconds);
});
