/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `*[❗] منشن علي الفديو العاوز تحولو لـ (GIF) صوتي*`
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `*[❗] نوع الملف ${mime} إنه غير صحيح ، قم بالرد على مقطع فيديو تريد تحويله إلى GIF صوتي*`
m.reply(global.wait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: '*حصل...♥*' }, { quoted: m })}
handler.command = ['togifaud', 'GIF', 'GIFAUDIO',]
export default handler



