let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `https://wa.me/${nomorown.split`@`[0]}`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ https://wa.me/${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Biasakan memulai chat dengan salam bukan dengan 'P'
• Berbicaralah yang baik, sopan & dilarang SPAM
• Dilarang Telepon/Video Call tanpa ada alasan yang jelas
• Jika tidak mengikuti aturan yang ada di atas, saya tidak segan-segan untuk memblokir anda
• No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : Aryasatya R.S.
${htjava} *🪀 Nomor* : +62 812-1244-8859
${htjava} *♂️ Gender* : Laki-laki
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : 9 Oktober 2007
${htjava} *🎨 Umur* : 15
${htjava} *🧮 Pendidikan* : SMKN 13 Bandung
${htjava} *🧩 Hobby* : Nge Jurlap, main game, ngoding, turu
${htjava} *💬 Sifat* : COOL 🥶️
${htjava} *🗺️ Tinggal* : Jawa Barat, Kota Bandung

•·––––––––––––––––––––––––––·•
`
  let teks = `Silahkan di pilih, *${await conn.getName(m.sender)}* ! `
const sections = [
   {
	title: `${htjava} OWNER NEUTRON BOT –––––––––·•`,
	rows: [
	    {title: "📱 • Creator", rowId: ".nomor"},
	{title: "🎨 • Biodata", rowId: ".owner bio"},
	{title: "🌏 • Script Bot", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".donasi"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm3, ppown, [
                // ['Grup Bot', `${usedPrefix}groupbot`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler