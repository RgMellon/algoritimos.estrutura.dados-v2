const Queue = require("../queue");
const player = require("play-sound")();

class MusicQueue extends Queue {
  processQueue() {
    const currentMusic = this.dequeue();

    if (!currentMusic?.title) return;

    console.log(`Processing music: ${currentMusic.title}`);
    const audioProcess = this.playSong(currentMusic);
    console.log(`Musica tocando ${currentMusic.title}`);

    setTimeout(() => {
      this.stopMusic(audioProcess);
      this.processQueue();
    }, currentMusic.time);
  }

  stopMusic(audioProcess) {
    if (audioProcess) {
      audioProcess.kill();
      console.log("Música parada.");
    } else {
      console.log("Nenhuma música está sendo reproduzida.");
    }
  }

  playSong({ music }) {
    const audioProcess = player.play(music, (err) => {
      if (err) {
        console.error("Erro ao tocar o áudio:", err);
      }
    });

    return audioProcess;
  }
}

module.exports = MusicQueue;
