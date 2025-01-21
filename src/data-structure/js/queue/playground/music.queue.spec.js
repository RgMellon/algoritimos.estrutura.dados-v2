const MusicQueue = require("./music.queue");

const player = require("play-sound")();

// Mock da função 'play' do play-sound
jest.mock("play-sound", () =>
  jest.fn(() => ({
    play: jest.fn().mockImplementation((music, callback) => {
      setTimeout(() => callback(music), 100);
      return {
        kill: jest.fn(), // Simula o método kill para parar a música
      };
    }),
  }))
);

describe("MusicQueue", () => {
  let musicQueue;

  beforeEach(() => {
    musicQueue = new MusicQueue();
  });

  test("Deve parar a música corretamente", () => {
    const audioProcessMock = {
      kill: jest.fn(),
    };

    musicQueue.stopMusic(audioProcessMock);

    expect(audioProcessMock.kill).toHaveBeenCalledTimes(1);
  });

  test("Deve chamar processQueue após a execução do timeout", () => {
    // Adicionando músicas para a fila
    musicQueue.enqueue({
      title: "Música 1",
      music: "path/to/music1.mp3",
      time: 50,
    });
    musicQueue.enqueue({
      title: "Música 2",
      music: "path/to/music2.mp3",
      time: 50,
    });

    // Espionar o método stopMusic
    const stopSpy = jest.spyOn(musicQueue, "stopMusic");

    // Chama o processQueue
    musicQueue.processQueue();

    // Espera o tempo do timeout
    setTimeout(() => {
      expect(stopSpy).toHaveBeenCalledTimes(1); // Verifica se o stop foi chamado após a primeira música
    }, 100);
  });

  test("Não deve processar música se o título não estiver presente", () => {
    // Enfileirando um item sem título
    musicQueue.enqueue({ music: "path/to/music.mp3", time: 100 });

    // Espionar a execução do método processQueue
    const playSpy = jest.spyOn(musicQueue, "playSong");

    // Chama o processQueue
    musicQueue.processQueue();

    // Verifica que o método playSong não foi chamado
    expect(playSpy).not.toHaveBeenCalled();
  });

  test("Deve tratar erro ao tocar a música", () => {
    // Modifica o mock para simular erro na reprodução
    player.play.mockImplementationOnce((music, callback) => {
      callback(new Error("Erro de reprodução"));
    });

    // Adiciona uma música com erro
    musicQueue.enqueue({
      title: "Música com erro",
      music: "path/to/music.mp3",
      time: 100,
    });

    // Chama o processQueue
    musicQueue.processQueue();

    // Verifica se o erro foi registrado no console
    console.error = jest.fn();
    setTimeout(() => {
      expect(console.error).toHaveBeenCalledWith(
        "Erro ao tocar o áudio:",
        expect.any(Error)
      );
    }, 50);
  });
});
