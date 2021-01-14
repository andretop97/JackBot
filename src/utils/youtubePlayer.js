const ytdl = require('ytdl-core');

const youtubeplayer = {
  queue: [],
};
// `https://www.youtube.com/watch?v=mz6DX1SAqVs&ab_channel=ZoioDodia`
youtubeplayer.connect = async function (voiceChannel) {
  youtubeplayer.connection = await voiceChannel.join();
  if (youtubeplayer.connection) {
    youtubeplayer.isConnected = false;
    // log de erro para o usuario
  } else {
    youtubeplayer.isConnected = true;
  }
};

youtubeplayer.serchVideo = async function (videoUrl) {
  const videoInfo = await ytdl.getInfo(videoUrl);

  const song = {
    title: videoInfo.videoDetails.title,
    url: videoInfo.videoDetails.video_url,
  };

  youtubeplayer.queue.push(song);
};

youtubeplayer.play = async function () {
  if (youtubeplayer.isConnected) {
    const song = youtubeplayer.queue.shift();

    if (song) {
      youtubeplayer.connection
        .play(ytdl(youtubeplayer.song.url))
        .on('finish', () => {
          youtubeplayer.play();
        })
        .on('error', (error) => console.error(error));
    } else {
      youtubeplayer.connection.leave();
    }
  }
};

youtubeplayer.next = async function () {};

youtubeplayer.stop = async function () {};

youtubeplayer.previous = async function () {};

module.exports = youtubeplayer;
