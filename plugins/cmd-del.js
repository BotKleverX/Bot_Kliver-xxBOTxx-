let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `*[❗𝐈𝐍𝐅𝐎❗] يمكنك فقط تعيين النصوص أو الأوامر المخصصة للملصقات أو الصور ، للحصول على الرمز المخصص ، استخدم الأمر${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] يمكن للمالك فقط إجراء الحذف*'
delete sticker[hash]
m.reply(`*[ ✔ ] تم حذف النص/الأوامر المعينة للملصق/الصورة من قاعدة البيانات بشكل صحيح*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
