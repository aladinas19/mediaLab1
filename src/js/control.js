console.log("control.js loaded");

let video = document.getElementById("videoPlayer");
let hls;

let currentUrl = document.getElementById("url1").value;

function loadVideo(url) {

    if (hls) {
        hls.destroy();
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {

        video.src = url;

    } else if (Hls.isSupported()) {

        hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);

    } else {

        alert("HLS not supported in this browser");

    }
}

loadVideo(currentUrl);


document.getElementById("playBtn").onclick = function () {

    video.play();

};


document.getElementById("pauseBtn").onclick = function () {

    video.pause();

};


document.getElementById("stopBtn").onclick = function () {

    video.pause();
    video.currentTime = 0;

};


document.getElementById("forwardBtn").onclick = function () {

    video.currentTime += 5;

};


document.getElementById("backwardBtn").onclick = function () {

    video.currentTime -= 5;

};


document.getElementById("load1").onclick = function () {

    let url = document.getElementById("url1").value;
    loadVideo(url);

};


document.getElementById("load2").onclick = function () {

    let url = document.getElementById("url2").value;
    loadVideo(url);

};

document.getElementById("load3").onclick = function () {

    let url = document.getElementById("url3").value;
    loadVideo(url);

};

document.getElementById("load4").onclick = function () {

    let url = document.getElementById("url4").value;
    loadVideo(url);

};


document.getElementById("shuffleBtn").onclick = function () {

    let url1 = document.getElementById("url1").value;
    let url2 = document.getElementById("url2").value;
    let url3 = document.getElementById("url3").value;
    let url4 = document.getElementById("url4").value;

    let randomUrl = Math.random() < 0.25 ? url1 : Math.random() < 0.5 ? url2 : Math.random() < 0.75 ? url3 : url4;

    loadVideo(randomUrl);

};
