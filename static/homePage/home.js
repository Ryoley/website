const $audioBg = document.querySelector('#audio-bg');
const $btnToggleAudio = document.querySelector('#toggle-audio');
let audioPaused = true;

$audioBg.volume = 0.25;

$btnToggleAudio.addEventListener('click', () => {

    audioPaused = !audioPaused;

    if (audioPaused) {
        $btnToggleAudio.classList.toggle('paused');
        $audioBg.pause();
    } else {
        $btnToggleAudio.classList.toggle('paused');
        $audioBg.play();
    }
});

document.querySelector('#callback')
    .addEventListener('click', () => open("https://fr.wikipedia.org/wiki/Synthwave"));