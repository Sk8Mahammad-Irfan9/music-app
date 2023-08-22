document.addEventListener("DOMContentLoaded", function () {
  const audioElements = document.querySelectorAll("audio");
  const playPauseButton = document.getElementById("play-pause");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentSongIndex = 0;
  let isPlaying = false;

  function togglePlayPause() {
    if (isPlaying) {
      audioElements[currentSongIndex].pause();
      isPlaying = false;
      playPauseButton.textContent = "▶️";
    } else {
      audioElements[currentSongIndex].play();
      isPlaying = true;
      playPauseButton.textContent = "⏸";
    }
  }

  playPauseButton.addEventListener("click", togglePlayPause);

  prevButton.addEventListener("click", () => {
    audioElements[currentSongIndex].pause();
    currentSongIndex =
      (currentSongIndex - 1 + audioElements.length) % audioElements.length;
    togglePlayPause();
  });

  nextButton.addEventListener("click", () => {
    audioElements[currentSongIndex].pause();
    currentSongIndex = (currentSongIndex + 1) % audioElements.length;
    togglePlayPause();
  });

  audioElements[currentSongIndex].addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % audioElements.length;
    togglePlayPause();
  });
  
});

// $(document).ready(() => {
//   const audioElements = document.querySelectorAll("audio");
//   const playPauseButtons = document.querySelectorAll(".play-pause");
//   const progressContainers = document.querySelectorAll(".progress-container");

//   let currentSongIndex = 0;

//   const playSong = (index) => {
//     audioElements[index].play();
//   };

//   const pauseSong = (index) => {
//     audioElements[index].pause();
//   };

//   const updateProgressBar = (index) => {
//     const progress =
//       (audioElements[index].currentTime / audioElements[index].duration) * 100;
//     progressContainers[index].querySelector(
//       ".progress"
//     ).style.width = `${progress}%`;
//   };

//   const playNextSong = () => {
//     pauseSong(currentSongIndex);
//     currentSongIndex = (currentSongIndex + 1) % audioElements.length;
//     playSong(currentSongIndex);
//   };

//   const playPreviousSong = () => {
//     pauseSong(currentSongIndex);
//     currentSongIndex =
//       (currentSongIndex - 1 + audioElements.length) % audioElements.length;
//     playSong(currentSongIndex);
//   };

//   const autoplayNextSong = () => {
//     playNextSong();
//     updateProgressBar(currentSongIndex);
//   };

//   playPauseButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const audioId = button.getAttribute("data-audio-id");
//       const audioIndex = Array.from(audioElements).findIndex(
//         (element) => element.getAttribute("id") === `audio-${audioId}`
//       );

//       if (audioIndex !== -1) {
//         if (audioElements[audioIndex].paused) {
//           playSong(audioIndex);
//         } else {
//           pauseSong(audioIndex);
//         }
//       }
//     });
//   });

//   audioElements[currentSongIndex].addEventListener("ended", autoplayNextSong);
//   audioElements[currentSongIndex].addEventListener("timeupdate", () => {
//     updateProgressBar(currentSongIndex);
//   });
// });
