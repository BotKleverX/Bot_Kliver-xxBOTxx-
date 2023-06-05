let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] قم بالرد على الملصق أو الصورة التي تريد إضافة أمر أو نص إليها*'
if (!m.quoted.fileSha256) throw '*[❗𝐈𝐍𝐅𝐎❗] يمكنك فقط تعيين أوامر أو نصوص للملصقات والصور*'
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] خطأ في الاستخدام أو نص أو مفقود:*\n*—◉ ${usedPrefix + command} <نص> <الرد على الملصق أو الصورة>*\n\n*مثال على الاستخدام الصحيح للأمر:*\n*—◉ ${usedPrefix + command} <#الاوامر> <الرد على الملصق أو الصورة>*`
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] يمكن للمالك فقط إجراء التعديل*'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`*[ ✔ ] تمت إضافة النص / الأمر المعين إلى الملصق / الصورة إلى قاعدة البيانات بشكل صحيح*`)
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
