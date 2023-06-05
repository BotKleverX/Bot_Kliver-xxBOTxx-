import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw `*[❗] أدخل اسم APK الذي تريد البحث عنه*`
try {
let enc = encodeURIComponent(text)
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()

let mystic = await translate(`${gPlay.descripcion}`, { to: 'es', autoCorrect: true })
if (!gPlay.titulo) return m.reply(`[ ! ] لا نتيجة`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`🔍 نتيجة: ${gPlay.titulo}
🧬 Identificador: ${gPlay.id}
⛓️ Link: ${gPlay.link}
🖼️ Imagen: ${gPlay.imagen}
✍️ Desarrollador: ${gPlay.desarrollador}
📜 Descripcion: ${mystic.text}
💲 Moneda: ${gPlay.moneda}
🎭 Gratis?: ${gPlay.gratis}
💸 Precio: ${gPlay.precio}
📈 Puntuacion: ${gPlay.puntuacion}`},{quoted:m})
} catch {
await m.reply('*[❗] خطأ, يرجى المحاولة مرة أخرى*')    
}}
handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore|برنامج|تطبيق|ابليكيشن|متجر-تطبيقات)$/i
export default handler
