async function searchAndPlay() {
  const term = document.getElementById("searchTerm").value;
  const audio = document.getElementById("audioPlayer");
  const title = document.getElementById("title");
  const albumArt = document.getElementById("albumArt");

  const response = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&limit=1`
  );
  const data = await response.json();

  if (data.results.length > 0) {
    const song = data.results[0];
    audio.src = song.previewUrl;
    title.textContent = `🎶 ${song.trackName} - ${song.artistName}`;
    albumArt.src = song.artworkUrl100.replace("100x100bb", "300x300bb");
    albumArt.style.display = "block";
    audio.play();
  } else {
    title.textContent = "Hech narsa topilmadi 😔";
    audio.src = "";
    albumArt.style.display = "none";
  }
}
let currentIndex = 0;
let currentResults = [];

async function searchAndPlay() {
  const term = document.getElementById("searchTerm").value;
  const audio = document.getElementById("audioPlayer");
  const title = document.getElementById("title");
  const albumArt = document.getElementById("albumArt");
  const videoFrame = document.getElementById("videoFrame");
  const videoBackground = document.getElementById("videoBackground");

  const response = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&limit=10`
  );
  const data = await response.json();
}

function playSong(index) {
  const song = currentResults[index];
  const audio = document.getElementById("audioPlayer");
  const title = document.getElementById("title");
  const albumArt = document.getElementById("albumArt");

  if (song) {
    audio.src = song.previewUrl;
    title.textContent = `🎶 ${song.trackName} - ${song.artistName}`;
    albumArt.src = song.artworkUrl100.replace("100x100bb", "300x300bb");
    albumArt.style.display = "block";
    audio.play();
  }
}

function nextSong() {
  if (currentResults.length > 0 && currentIndex < currentResults.length - 1) {
    currentIndex++;
    playSong(currentIndex);
  }
}

function prevSong() {
  if (currentResults.length > 0 && currentIndex > 0) {
    currentIndex--;
    playSong(currentIndex);
  }
}
const albumArt = document.getElementById("albumArt");
const audio = document.getElementById("audioPlayer");

audio.addEventListener("play", () => {
  albumArt.style.animationPlayState = "running";
});

audio.addEventListener("pause", () => {
  albumArt.style.animationPlayState = "paused";
});
