function VisiblePl() {
    metroPause.className.replace(/\bdisplayFalse\b/, ""), metroPause.className = "displayTrue", MetroSpin.style.display = "block"
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player("Mplayer1511", {
        height: "330",
        width: "440",
        videoId: "H7QG9QVcyvw",
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    })
}

function stopVideo() {
    player.stopVideo()
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player("Mplayer1511", {
        height: "330",
        width: "440",
        videoId: "H7QG9QVcyvw",
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        },
        playerVars: {
            autoplay: 1,
            rel: 0,
            hl: "en_EN",
            controls: 0,
            autohide: 0,
            fs: 1,
            showsearch: 0,
            iv_load_policy: 3,
            showinfo: 0,
            modestbranding: 1,
            wmode: "transparent"
        }
    })
}

function onPlayerReady(e) {
    iOS2 ? (Redir2.style.display = "block", Redir.style.display = "none", MVolume.style.display = "none", player.style.zIndex = 4, document.getElementById("Mspin1").className = "limitSpin") : (e.target.mute(), timeout1 = window.setTimeout(VisiblePl, 250))
}

function onPlayerStateChange(e) {
    0 == e.data && (iOS2 ? mBigplay.style.display = "none" : ( /*mBigplay.style.display="block",*/ MetroPoster.className.replace(/\bdisplayFalse2\b/, ""), MetroPoster.className = "displayTrue2", mBigplay.className = "visiblePoster245", document.getElementById("MvolumeOn").style.display = "none", metroPause.className.replace(/\bdisplayTrue\b/, ""), document.getElementById("metro-On").style.display = "none", document.getElementById("metro-Off").style.display = "none", metroPause.className = "displayFalse"))
}

function endOpacity() {
    mBigplay.style.display = "none", document.getElementById("metro-On").style.display = "block", document.getElementById("metro-Off").style.display = "none", playVideo()
}

function VisiblePa() {
    metroPlay.className = "displayTrue"
}

function playVideo() {
    player.unMute(), player.playVideo(), metroPlay.className = "displayFalse", document.getElementById("metro-On").style.display = "block", MVolume.style.display = "none", MetroPoster.className.replace(/\bdisplayTrue2\b/, ""), MetroPoster.className = "displayFalse2", metroPause.className = "displayTrue", window.clearTimeout(timeout2)
}

function playVideoOs() {
    player.playVideo()
}

function stopVideo() {
    player.stopVideo()
}

function pauseVideo() {
    player.pauseVideo(), metroPause.className.replace(/\bdisplayTrue\b/, ""), metroPlay.className.replace(/\bdisplayFalse\b/, ""), metroPause.className = "displayFalse", window.clearTimeout(timeout1), timeout2 = window.setTimeout(VisiblePa, 250)
}

function reloadVideo() {
    metroPlay.className.replace(/\bdisplayTrue\b/, ""), metroPlay.className = "displayFalse", MetroPoster.className.replace(/\bdisplayTrue2\b/, ""), MetroPoster.className = "displayFalse2", metroPause.className.replace(/\bdisplayFalse\b/, ""), metroPause.className = "displayTrue", iOS2 ? player.seekTo(0, !0) : (player.seekTo(0, !0), player.unMute(), mBigplay.className.replace(/\visiblePoster245\b/, ""), document.getElementById("MvolumeOn").style.display = "none", timeout3 = window.setTimeout(endOpacity, 250))
}

function sonOn() {
    player.unMute(), document.getElementById("metro-Off").style.display = "none", document.getElementById("metro-On").style.display = "block", document.getElementById("MvolumeOn").style.display = "none"
}

function sonOff() {
    player.mute(), document.getElementById("metro-Off").style.display = "block", document.getElementById("metro-On").style.display = "none"
}
var tag = document.createElement("script");
var ImG = ['https://sigp.ca/wbm/loader.gif', 'https://sigp.ca/wbm/bt_play.png', 'https://sigp.ca/wbm/bigsong.png'];
var ImGsizes = [];

function MsetSizeImages(i) {
    var img = new Image();
    img.onload = function() {
        ImGsizes[i] = img.width + '/' + img.height;
        i++;
        if (i < ImG.length) MsetSizeImages(i);
        else {
            ImG.loaded = true;
            setTimeout(function() {
                tag.src = "https://www.youtube.com/iframe_api";
                var e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(tag, e), document.getElementById("metro-load").style.display = "none"
            }, 500), setTimeout(function() {
                document.getElementById("pub-metropole-bloc").style.display = "block"
            }, 250);
        };
    };
    img.src = ImG[i];
};
ImG.loaded = false;
MsetSizeImages(0);
var timeout1, timeout2, MetroPoster = document.getElementById("Mposter"),
    metroPause = document.getElementById("metro-pause"),
    MetroSpin = document.getElementById("Mspin1"),
    metroPlay = document.getElementById("metro-play"),
    metroOn = document.getElementById("metro-On"),
    metroOff = document.getElementById("metro-Off"),
    mBigplay = document.getElementById("metro-bigplay"),
    MVolume = document.getElementById("MvolumeOn"),
    Black2 = document.getElementById("black2"),
    Redir = document.getElementById("redir"),
    Redir2 = document.getElementById("redir2"),
    Replay = document.getElementById("replay"),
    iOS = /(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent),
    iOS2 = /(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i.test(navigator.userAgent),
    player;

function getParameterByName(idRef) {
    idRef = idRef.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + idRef + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var clickTag = "https://www.cinemamontreal.com/films/another-kind-of-wedding-2017"
//var clickTag = getParameterByName('clickTag');
var ord = Math.random() * 10000000000000000;
var p = getParameterByName('ord');
var conteneur = document.getElementById('px2');
var monImg = document.createElement('img');