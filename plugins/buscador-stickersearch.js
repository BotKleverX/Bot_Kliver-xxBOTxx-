/*By https://github.com/ALBERTO9883 */
import fs from 'fs'
import fetch from 'node-fetch'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, {text, usedPrefix, command, conn}) => {
try {  
const res2 = await googleImage(text)
let sfoto = res2.getRandom()
if (!text) throw `*[❗] أدخل اسم الحزمة التي تريد البحث عنها*`
let json = await fetch(`https://api.akuari.my.id/search/sticker?query=${text}`)
let jsons = await json.json()
let res = jsons.result.map((v, index) => `*🪴 • Resultado:* ${1 + index}\n*🌵 • Nombre:* ${v.title}\n*🍂 • Url:* ${v.url}`).join`\n\n───\n\n`
await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m)
} catch {
await m.reply('*[❗] خطأ, يرجى المحاولة مرة أخرى*')}}
handler.tags = ['sticker', 'search']
handler.command = ['stickersearch', 'ستيكر-بحث', 'ستيكر-سيرش','stickerssearch', 'searchstickers']
export default handler
