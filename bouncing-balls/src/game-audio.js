export class GameAudio extends HTMLElement {

  constructor() {
    super();

    this.isPlay = false;
    this.innerHTML = "<img src='media/mute.png'>";

    const gameAudio = new Audio("media/happy.mp3");
    gameAudio.loop = true;
    gameAudio.muted = true;

    this.onclick = function () {
      if (this.isPlay) {
        this.innerHTML = "<img src='media/mute.png'>";
        gameAudio.muted = true;
        gameAudio.pause();
      } else {
        this.innerHTML = "<img src='media/play.png'>";
        gameAudio.muted = false;
        gameAudio.play().catch((err) => {
          console.log(err);
        });
      }
      this.isPlay = !this.isPlay;
    };
  }

}
