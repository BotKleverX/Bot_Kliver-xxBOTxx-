let handler = async (m, { conn }) => {
conn.reply(m.chat, `
*< قائمة الأوامر / عنوان النص />*

${Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}.-*\n*قانون:* ${value.locked ? `*(𝚋𝚕𝚘𝚚𝚞𝚎𝚊𝚍𝚘)* ${key}` : key}\n*𝙲𝙾𝙼𝙰𝙽𝙳𝙾/𝚃𝙴𝚇𝚃𝙾* ${value.text}`).join('\n\n')}
`.trim(), null, {mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])})
}
handler.command = ['listcmd', 'cmdlist']
handler.rowner = true
export default handler
