async function handler(m, { command }) {
command = command.toLowerCase()
this.anonymous = this.anonymous ? this.anonymous : {}
switch (command) {
case 'التالي':
case 'خروج': {
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) return this.sendButton(m.chat, '*[❗] أنت لست في محادثة مجهولة*\n\n*¿هل تريد أن تبدأ واحده?*\n_انقر فوق الزر التالي_', author, null, [['بدأ المحادثه المجهولة', `.بدأ`]], m)
m.reply('*[ ✔ ] لقد تركت المحادثه المجهولة بنجاح [ ✔ ] *')
let other = room.other(m.sender) 
if (other) await this.sendButton(other, '*[❗]  المستخدم الآخر تخلى عن المحادثه المجهولة*\n\n*¿هل تريد الذهاب إلى دردشة أخرى مجهولة?*\n_انقر فوق الزر التالي_', author, null, [['بدأ المحادثه المجهولة', `.بدأ`]], m)
delete this.anonymous[room.id]
if (command === 'خروج') break
}
case 'بدأ': {
if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, '*[❗] لا تزال محادثة مجهولة أو تنتظر الانضمام إلى مستخدم آخر للانضمام للبدء*\n\n*¿هل تريد الخروج من الدردشة المجهولة?*\n_انقر فوق الزر التالي_', author, null, [['الخروج من الدردشة المجهولة', `.خروج`]], m)
let room = Object.values(this.anonymous).find(room => room.state === 'استني...!' && !room.check(m.sender))
if (room) {
await this.sendButton(room.a, '*[ ✔ ] انضم شخص إلى الدردشة المجهولة ، ويمكنه بدء الدردشة*', author, null, [['انتقل إلى المحادثه', `.التالي`]], m)
room.b = m.sender
room.state = 'الشات'
await this.sendButton(m.chat, '*[ ✔ ] انضم شخص إلى الدردشة المجهولة ، ويمكنه بدء الدردشة*', author, null, [['𝙸انتقل إلى المحادثه', `.التالي`]], m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'استني...!',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await this.sendButton(m.chat, '*[❗] في انتظار مستخدم آخر لبدء المحادثه المجهولة*\n\n*¿هل تريد الخروج من المحادثه?*\n_انقر فوق الزر التالي_', author, null, [['الخروج من المحادثه', `.خروج`]], m)
}
break
}}}
handler.help = ['بدأ', 'خروج', 'التالي']
handler.tags = ['محادثه/مجهوله']
handler.command = ['بدأ', 'خروج', 'التالي']
handler.private = true
export default handler
