let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `https://wa.me/${nomorown.split`@`[0]}`
  let teksnomor = `${htki} *OWNER* ${htka}
โฆ https://wa.me/${nomorown.split`@`[0]} โฆ
------- ${nameown} -------

๐ฎ *Note:*
โข Biasakan memulai chat dengan salam bukan dengan 'P'
โข Berbicaralah yang baik, sopan & dilarang SPAM
โข Dilarang Telepon/Video Call tanpa ada alasan yang jelas
โข Jika tidak mengikuti aturan yang ada di atas, saya tidak segan-segan untuk memblokir anda
โข No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *๐ Nama* : Aryasatya R.S.
${htjava} *๐ช Nomor* : +62 812-1244-8859
${htjava} *โ๏ธ Gender* : Laki-laki
${htjava} *๐ Agama* : Islam
${htjava} *โฐ Tanggal lahir* : 9 Oktober 2007
${htjava} *๐จ Umur* : 15
${htjava} *๐งฎ Pendidikan* : SMKN 13 Bandung
${htjava} *๐งฉ Hobby* : Nge Jurlap, main game, ngoding, turu
${htjava} *๐ฌ Sifat* : COOL ๐ฅถ๏ธ
${htjava} *๐บ๏ธ Tinggal* : Jawa Barat, Kota Bandung

โขยทโโโโโโโโโโโโโโโโโโโโโโโโโโยทโข
`
  let teks = `Silahkan di pilih, *${await conn.getName(m.sender)}* ! `
const sections = [
   {
	title: `${htjava} OWNER NEUTRON BOT โโโโโโโโโยทโข`,
	rows: [
	    {title: "๐ฑ โข Creator", rowId: ".nomor"},
	{title: "๐จ โข Biodata", rowId: ".owner bio"},
	{title: "๐ โข Script Bot", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME โโโโโโโยทโข`,
	rows: [
	    {title: "๐น โข Donasi", rowId: ".donasi"},
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
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "๐ท Instagram", nomorown, '๐น Nomor', [[null, null], [null, null],[null,null]], m)

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
          return conn.sendButton( m.chat, caption, wm, null, [`โฎโฐ Menu`, `.menu`], m)
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