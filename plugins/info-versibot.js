import fs from "fs";
import fetch from "node-fetch";
let handler = async (m, { conn, usedPrefix: _p }) => {
  const ultah = new Date("October 9 2023 00:00:01");
  const sekarat = new Date().getTime();
  const Kurang = ultah - sekarat;
  const ohari = Math.floor(Kurang / (1000 * 60 * 60 * 24));
  const ojam = Math.floor((Kurang % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const onet = Math.floor((Kurang % (1000 * 60 * 60)) / (1000 * 60));
  const detek = Math.floor((Kurang % (1000 * 60)) / 1000);
  let info = `Bot ini menggunakan NeuroScript by\n Arya Sukresno\n\n*Version:* ${global.version}`;

  let td =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  const message = {
    document: { url: thumb },
    jpegThumbnail: await (await fetch(thumb)).buffer(),
    fileName: global.wm,
    mimetype: td,
    fileLength: "9999999",
    pageCount: "999",
    caption: titlebot,
    footer: wm,
    templateButtons: [
      {
        urlButton: {
          displayText: "Beli Sc? Klik",
          url: "https://wa.me/6285876501859?text=Hai+Bang,+Saya+Berminat+Untuk+Beli+Sc+SasukeBotz",
        },
      },
      {
        urlButton: {
          displayText: "Ke YouTube",
          url: "https://youtube.com/@RizkyEditz556",
        },
      },
    ],
  };
  conn.sendMessage(m.chat, message);
  conn.reply(m.chat, info, m, {
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        // sourceUrl: "https://youtu.be/nlRwaCO6lB4",
        mediaType: 2,
        description: `Create Arya Sukresno`,
        title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
        body: `Create Arya Sukresno`,
        previewType: 0,
        thumbnail: await (await fetch(giflogo2)).buffer(),
        // mediaUrl: "https://youtu.be/nlRwaCO6lB4",
      },
    },
  });
};
handler.help = ["cekversi"];
handler.tags = ["info"];
handler.command = /^(cekversi)$/i;

handler.register = true;
handler.premium = false;
handler.limit = false;

export default handler;
