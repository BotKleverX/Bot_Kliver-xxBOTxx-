import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q || q.msg).mimetype || q.mediaType || ''
if (!/video|audio/.test(mime)) throw `*[❗] منشن على الفيديو أو الفويس العاوز تحويلها إلى صوت / mp3*`
let media = await q.download()
if (!media) throw '*[❗] معلش حصل مشكله حاول تاني كدا...*'
let audio = await toAudio(media, 'mp4')
if (!audio.data) throw '*[❗] معلش حصل مشكله حاول تاني كدا...*'
conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.alias = ['mp3', 'audio', 'لصوت', 'صوت', 'صوتي', 'اغنيه',]
handler.command = /^(mp3|audio|لصوت|صوتي|صوت|اغنيه|)$/i
export default handler
