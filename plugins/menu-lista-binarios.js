import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
wm = global.wm
vs = global.vs
let { exp, limit, level, money, role } = global.db.data.users[m.sender]
let { min, xp, hades, max } = xpRange(level, global.multiplier)
const sections = [  
{
title: `π»πΈπππ° π³π΄π» π±πΈπ½π°ππΈπΎπ`,
rows: [
  {title: "βπ§¬οΈβπ±πΎπΌπ±π°ππ³π΄πΎ-π±πΈπ½π°ππΈπΎπ1", description: "α΄α΄α΄Η«α΄α΄ α΄α΄sΙͺα΄ α΄ α΄α΄ 5 ΚΙͺΙ΄α΄ΚΙͺα΄s", rowId: `${usedPrefix}virtex1`},
  {title: "βπΉοΈβπ±πΎπΌπ±π°ππ³π΄πΎ-π±πΈπ½π°ππΈπΎπ2", description: "α΄α΄α΄Η«α΄α΄ α΄α΄sΙͺα΄ α΄ α΄α΄ 10 ΚΙͺΙ΄α΄ΚΙͺα΄s", rowId: `${usedPrefix}virtex2`},
  {title: "βπ€‘οΈβπ±πΎπΌπ±π°ππ³π΄πΎ-π±πΈπ½π°ππΈπΎπ3", description: "α΄α΄α΄Η«α΄α΄ α΄α΄sΙͺα΄ α΄ α΄α΄ 15 ΚΙͺΙ΄α΄ΚΙͺα΄s", rowId: `${usedPrefix}virtex3`},
  {title: "βποΈβπ±πΎπΌπ±π°ππ³π΄πΎ-π±πΈπ½π°ππΈπΎπ4", description: "α΄α΄α΄Η«α΄α΄ α΄α΄sΙͺα΄ α΄ α΄α΄ 20 ΚΙͺΙ΄α΄ΚΙͺα΄s", rowId: `${usedPrefix}virtex4`},
  {title: "βπβπ±πΎπΌπ±π°ππ³π΄πΎ-π±πΈπ½π°ππΈπΎπ5", description: "α΄α΄α΄Η«α΄α΄ α΄α΄sΙͺα΄ α΄ α΄α΄ 25 ΚΙͺΙ΄α΄ΚΙͺα΄s", rowId: `${usedPrefix}virtex5`}, 
  {title: "βπ§¬βπ±πΎπΌπ±π°ππ³π΄πΎ-π±πΈπ½π°ππΈπΎπ6", description: "α΄α΄α΄Η«α΄α΄ α΄α΄sΙͺα΄ α΄ α΄α΄ 30 ΚΙͺΙ΄α΄ΚΙͺα΄s", rowId: `${usedPrefix}virtex6`},
  {title: "βπΉβπ±πΎπΌπ±π°ππ³π΄πΎ-π±πΈπ½π°ππΈπΎπ7", description: "α΄α΄α΄Η«α΄α΄ α΄α΄sΙͺα΄ α΄ α΄α΄ 35 ΚΙͺΙ΄α΄ΚΙͺα΄s", rowId: `${usedPrefix}virtex7`},
  {title: "βπ€‘οΈβπ±πΎπΌπ±π°ππ³π΄πΎ-π±πΈπ½π°ππΈπΎπ8", description: "α΄α΄α΄Η«α΄α΄ α΄α΄sΙͺα΄ α΄ α΄α΄ 40 ΚΙͺΙ΄α΄ΚΙͺα΄s", rowId: `${usedPrefix}virtex8`},
  {title: "βπβπ±πΎπΌπ±π°ππ³π΄πΎ-π±πΈπ½π°ππΈπΎπ9", description: "α΄α΄α΄Η«α΄α΄ α΄α΄sΙͺα΄ α΄ α΄α΄ 45 ΚΙͺΙ΄α΄ΚΙͺα΄s", rowId: `${usedPrefix}virtex9`},
  {title: "βπβπ±πΎπΌπ±π°ππ³π΄πΎ-π±πΈπ½π°ππΈπΎπ10", description: "α΄α΄α΄Η«α΄α΄ α΄α΄sΙͺα΄ α΄ α΄α΄ 50 ΚΙͺΙ΄α΄ΚΙͺα΄s", rowId: `${usedPrefix}virtex10`}, 
]}, ] 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length  
let name = '@' + m.sender.split("@s.whatsapp.net")[0]
const listMessage = {
text: `β­βββββΒ°.β‘.Β°β§βββββ
ββ«·α­Κα΄α΄α΄s-Κα΄α΄-α΄α΄οΉβ
β${ucapan()} 
βΰΉΫ£ΫΝ‘ΝΫπ·πΎπ»π°β¨${name}π 
ββοΈΚΙͺα΄Ι΄α΄ α΄Ι΄Ιͺα΄α΄ α΄Κ α΄α΄Ι΄α΄
βπΚα΄Ι΄Ι’α΄β${role}
βπΉπ»πΈπππ° π³π΄π» π±πΈπ½π°ππΈπΎπ
ββα΄Ιͺα΄α΄α΄α΄ α΄α΄α΄Ιͺα΄ α΄β${uptime}
β°βββββΒ°.β‘.Β°β§βββββΧ`, mentions: [m.sender],
footer: `${wm}`,
title: null,
buttonText: "ππππππππππ ππππ’", 
sections }

await conn.sendMessage(m.chat, listMessage, { quoted: fkontak })
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(binarios|virus|Binarios|trabas\?)$/i
handler.exp = 20
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')
  let res = "πΚα΄α΄Ι΄α΄s α΄α΄α΄Κα΄Ι’α΄α΄α΄s|Ι’α΄α΄α΄ α΄α΄ΚΚΚ α΄α΄ΚΙ΄ΙͺΙ΄Ι’π "
  if (time >= 4) {
    res = "πΚα΄α΄Ι΄α΄s α΄Γ­α΄s|Ι’α΄α΄α΄ α΄α΄ΚΙ΄ΙͺΙ΄Ι’β"
  }
  if (time >= 11) {
    res = "ποΈΚα΄α΄Ι΄α΄s α΄α΄Κα΄α΄s|Ι’α΄α΄α΄ α΄?α΄α΄ΚΙ΄α΄α΄Ι΄π€οΈ"
  }
  if (time >= 15) {
    res = "πΚα΄α΄Ι΄α΄s α΄α΄Κα΄α΄s|Ι’α΄α΄α΄ α΄?α΄α΄ΚΙ΄α΄α΄Ι΄π₯οΈ"
  }
  if (time >= 17) {
    res = "πΚα΄α΄Ι΄α΄s Ι΄α΄α΄Κα΄s|Ι’α΄α΄α΄ α΄α΄ α΄Ι΄ΙͺΙ΄Ι’π«"
  }
  return res
}
