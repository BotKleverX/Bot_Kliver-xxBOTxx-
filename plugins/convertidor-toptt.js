import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] منشن علي الفديو او المقطع الصوتي العاوز تحولو لريكورد*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] أنا آسف ، حدث خطأ أثناء تنزيل الفيديو الخاص بك ، يرجى المحاولة مرة أخرى*'
if (!media && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] أنا آسف ، حدث خطأ أثناء تنزيل ملف الصوتي الخاص بك ، يرجى المحاولة مرة أخرى*'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] معذرة ، حدث خطأ أثناء تحويل المقطع الصوتي الخاص بك إلى ريكورد ، يرجى المحاولة مرة أخرى*'
if (!audio.data && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] معذرة ، حدث خطأ أثناء تحويل الفيديو الخاص بك إلى ريكورد ، يرجى المحاولة مرة أخرى*'
let aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
if (!aa) return conn.sendMessage(m.chat, { audio: { url: media }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
handler.help = ['vn (منشن)']
handler.tags = ['audio']
handler.command = /^(vn|(ptt)|لريكور|لريك|ريكورد|فويس|لفويس?)$/i
export default handler
