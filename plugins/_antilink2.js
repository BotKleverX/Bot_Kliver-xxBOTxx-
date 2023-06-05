let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
let user = `@${m.sender.split`@`[0]}`
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}    
await this.sendMessage(m.chat, { text: `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n* وداعا يا حبيبي 👋🏻${user} لقد كسرت قواعد المجموعة التي سيتم إبادتك منها...!!*`, mentions: [m.sender] })  
if (!isBotAdmin) return m.reply('*[❗] البوت ليس مشرفا ،')
//await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n`*وداعا حبيبي 👋, ${انتظر هذا. احصل على الاسم (م.المرسل) لقد كسرت قواعد المجموعة التي سيتم إبادتك بها...!!*${isBotAdmin ? '' : '\n\n*[❗] البوت ليس مشرفا*}`}`, author, ['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚂', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return
} else if (!bot.restrict) return m.reply('*[❗] لم يتم تمكين القيود لمالك البوت (#تمكين التقييد) اتصل بالمالك ليتم تمكينه*')
}
return !0
}
