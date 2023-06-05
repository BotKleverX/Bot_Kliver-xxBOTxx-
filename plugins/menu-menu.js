import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let تاج-منشنuser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *˚₊· ͟͟͞͞➳❥❬ 𝒌𝒍𝒆𝒗𝒆𝒓﴾𝒃𝒐𝒕﴿ ❭•* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Owner:* Mahmoudᴷᴸᴱᵛᴱᴿ
║➤ *Numero:* wa.me/201016948771
║➤ *Bot ofc:* wa.me/201225655220
║➤ *Fecha:* ${date}
║➤ *Tiempo activo:* ${uptime}
║➤ *Usuarios:* ${rtotalreg}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ Nivel:* ${level}
┣ *🧰 Experiencia:* ${exp}
┣ *⚓ Rango:* ${role}
┣ *💎 Diamantes:* ${limit}
┣ *👾 MysticCoins:* ${money}
┣ *🪙 Tokens:* ${joincount}
┣ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
┗━━━━━━━━━━━━━━━━┛
${readMore}
┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕆𝕋 𝕆𝔽ℂ 𝕆 𝕊𝕌𝔹 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💟 _${usedPrefix}estado_
┣ ඬ⃟ 💟 _${usedPrefix}infobot_
┣ ඬ⃟ 💟 _${usedPrefix}speedtest_
┣ ඬ⃟ 💟 _${usedPrefix}donar_
┣ ඬ⃟ 💟 _${usedPrefix}رومات-البوت_
┣ ඬ⃟ 💟 _${usedPrefix}owner_
┣ ඬ⃟ 💟 _${usedPrefix}script_
┣ ඬ⃟ 💟 _${usedPrefix}listprem_
┣ ඬ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 _${usedPrefix}join *<enlace / لينك / رابط>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝔼ℝ𝔹𝕆𝕋 - 𝕁𝔸𝔻𝕀𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🤖 _${usedPrefix}serbot_
┣ ඬ⃟ 🤖 _${usedPrefix}stop_
┣ ඬ⃟ 🤖 _${usedPrefix}bots_
┗━━━━━━━━━━━━━━━━┛  

┏━━━━━━━━━━━━━━━━┓
┃ *< games />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🎖️ _${usedPrefix}mates *<noob / سهل / متوسط / صعب / شديد /شديد جدا /غير ممكن>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}ppt *<حجر / ورقه /مقص>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}prostituto *<الاسم / @تاج-منشن>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}prostituta *<الاسم / @تاج-منشن>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}gay2 *<الاسم / @تاج-منشن>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}lesbiana *<الاسم / @تاج-منشن>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pajero *<الاسم / @تاج-منشن>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pajera *<الاسم / @تاج-منشن>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}manco *<الاسم / @تاج-منشن>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}manca *<الاسم / @تاج-منشن>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}love *<الاسم / @تاج-منشن>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}doxear *<الاسم / @تاج-منشن>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pregunta *<نص>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}suitpvp *<@تاج-منشن>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}slot *<apuesta>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}ttt *<الاسم sala>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}delttt_
┣ ඬ⃟ 🎖️ _${usedPrefix}acertijo_
┣ ඬ⃟ 🎖️ _${usedPrefix}simi *<نص>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}top *<نص>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}topgays_
┣ ඬ⃟ 🎖️ _${usedPrefix}topotakus_
┣ ඬ⃟ 🎖️ _${usedPrefix}formarpareja_
┣ ඬ⃟ 🎖️ _${usedPrefix}verdad_
┣ ඬ⃟ 🎖️ _${usedPrefix}reto_
┣ ඬ⃟ 🎖️ _${usedPrefix}cancion_
┣ ඬ⃟ 🎖️ _${usedPrefix}pista_
┣ ඬ⃟ 🎖️ _${usedPrefix}akinator_
┣ ඬ⃟ 🎖️ _${usedPrefix}wordfind_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _${usedPrefix}enable *welcome*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *welcome*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *modohorny*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *modohorny*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antilink*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antilink*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antilink2*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antilink2*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *detect*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *detect*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *مقطع صوتيs*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *مقطع صوتيs*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *autosticker*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antitraba*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antitraba*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antiarabes*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antiarabes*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *modoadmin*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *modoadmin*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┣ *< ℝ𝔼ℙ𝕆ℝ𝕋𝔸ℝ 𝔼ℝℝ𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔰 _${usedPrefix}reporte *<نص>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📥 _${usedPrefix}insتاج-منشنram *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}mediafire *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}gitclone *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}gdrive *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}tiktok *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}twitter *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}fb *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3 *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4 *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3doc *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4doc *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}videodoc *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}dapk2 *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}stickerpack *<enlace / لينك / رابط>*_
┣ ඬ⃟ 📥 _${usedPrefix}play *<نص>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.1 *<نص>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.2 *<نص>*_
┣ ඬ⃟ 📥 _${usedPrefix}playdoc *<نص>*_
┣ ඬ⃟ 📥 _${usedPrefix}playlist *<نص>*_
┣ ඬ⃟ 📥 _${usedPrefix}playlist2 *<نص>*_
┣ ඬ⃟ 📥 _${usedPrefix}spotify *<نص>*_
┣ ඬ⃟ 📥 _${usedPrefix}ringtone *<نص>*_
┣ ඬ⃟ 📥 _${usedPrefix}soundcloud *<نص>*_
┣ ඬ⃟ 📥 _${usedPrefix}صوره *<نص>*_
┣ ඬ⃟ 📥 _${usedPrefix}pinterest *<نص>*_
┣ ඬ⃟ 📥 _${usedPrefix}wallpaper *<نص>*_
┣ ඬ⃟ 📥 _${usedPrefix}wallpaper2 *<نص>*_
┣ ඬ⃟ 📥 _${usedPrefix}pptiktok *<الاسم de usuario>*_
┣ ඬ⃟ 📥 _${usedPrefix}igstalk *<الاسم de usuario>*_
┣ ඬ⃟ 📥 _${usedPrefix}igstory *<الاسم de usuario>*_
┣ ඬ⃟ 📥 _${usedPrefix}tiktokstalk *<username>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔾ℝ𝕌ℙ𝕆𝕊 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 _${usedPrefix}add *<numero>*_
┣ ඬ⃟ 💎 _${usedPrefix}kick *<@تاج-منشن>*_
┣ ඬ⃟ 💎 _${usedPrefix}kick2 *<@تاج-منشن>*_
┣ ඬ⃟ 💎 _${usedPrefix}listanum *<نص>*_
┣ ඬ⃟ 💎 _${usedPrefix}kicknum *<نص>*_
┣ ඬ⃟ 💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣ ඬ⃟ 💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ ඬ⃟ 💎 _${usedPrefix}promote *<@تاج-منشن>*_
┣ ඬ⃟ 💎 _${usedPrefix}demote *<@تاج-منشن>*_
┣ ඬ⃟ 💎 _admins *<نص>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 💎 _${usedPrefix}demote *<@تاج-منشن>*_
┣ ඬ⃟ 💎 _${usedPrefix}infogroup_
┣ ඬ⃟ 💎 _${usedPrefix}resetlink_
┣ ඬ⃟ 💎 _${usedPrefix}link_
┣ ඬ⃟ 💎 _${usedPrefix}setname *<نص>*_
┣ ඬ⃟ 💎 _${usedPrefix}setdesc *<نص>*_
┣ ඬ⃟ 💎 _${usedPrefix}invocar *<نص>*_
┣ ඬ⃟ 💎 _${usedPrefix}setwelcome *<نص>*_
┣ ඬ⃟ 💎 _${usedPrefix}setbye *<نص>*_
┣ ඬ⃟ 💎 _${usedPrefix}hideتاج-منشن *<نص>*_
┣ ඬ⃟ 💎 _${usedPrefix}hideتاج-منشن *<مقطع صوتي>*_
┣ ඬ⃟ 💎 _${usedPrefix}hideتاج-منشن *<فيديو>*_
┣ ඬ⃟ 💎 _${usedPrefix}hideتاج-منشن *<صوره>*_
┣ ඬ⃟ 💎 _${usedPrefix}warn *<@تاج-منشن>*_
┣ ඬ⃟ 💎 _${usedPrefix}unwarn *<@تاج-منشن>*_
┣ ඬ⃟ 💎 _${usedPrefix}listwarn_
┣ ඬ⃟ 💎 _${usedPrefix}fantasmas_
┣ ඬ⃟ 💎 _${usedPrefix}destraba_
┣ ඬ⃟ 💎 _${usedPrefix}setpp *<صوره>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧧 _${usedPrefix}GIF*<فيديو>*_
┣ ඬ⃟ 🧧 _${usedPrefix}لصوره *<ستيكر>*_
┣ ඬ⃟ 🧧 _${usedPrefix}لصوت *<فيديو/ريكورد>*_
┣ ඬ⃟ 🧧 _${usedPrefix}لريكورد *<فيديو / مقطع صوتي>*_
┣ ඬ⃟ 🧧 _${usedPrefix}لفيديو *<ستيكر>*_
┣ ඬ⃟ 🧧 _${usedPrefix}لرابط *<فيديو / صوره / مقطع صوتي>*_
┣ ඬ⃟ 🧧 _${usedPrefix}قول *<نص>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️ _${usedPrefix}phmaker *<opcion> <صوره>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logos *<efecto> <نص>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logochristmas *<نص>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logocorazon *<نص>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}ytcomment *<نص>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}hornycard *<@تاج-منشن>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}simpcard *<@تاج-منشن>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}lolice *<@تاج-منشن>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}itssostupid_
┣ ඬ⃟ 🖍️ _${usedPrefix}pixelar_
┣ ඬ⃟ 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🥀 _${usedPrefix}piropo_
┣ ඬ⃟ 🥀 _${usedPrefix}consejo_
┣ ඬ⃟ 🥀 _${usedPrefix}fraseromantica_
┣ ඬ⃟ 🥀 _${usedPrefix}historiaromantica_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣ ඬ⃟ 👾 _${usedPrefix}cristianoronaldo_
┣ ඬ⃟ 👾 _${usedPrefix}messi_
┣ ඬ⃟ 👾 _${usedPrefix}cat_
┣ ඬ⃟ 👾 _${usedPrefix}dog_
┣ ඬ⃟ 👾 _${usedPrefix}meme_
┣ ඬ⃟ 👾 _${usedPrefix}itzy_
┣ ඬ⃟ 👾 _${usedPrefix}blackpink_
┣ ඬ⃟ 👾 _${usedPrefix}lolivid_
┣ ඬ⃟ 👾 _${usedPrefix}loli_
┣ ඬ⃟ 👾 _${usedPrefix}navidad_
┣ ඬ⃟ 👾 _${usedPrefix}ppcouple_
┣ ඬ⃟ 👾 _${usedPrefix}wpmontaña_
┣ ඬ⃟ 👾 _${usedPrefix}pubg_
┣ ඬ⃟ 👾 _${usedPrefix}wpgaming_
┣ ඬ⃟ 👾 _${usedPrefix}wpaesthetic_
┣ ඬ⃟ 👾 _${usedPrefix}wpaesthetic2_
┣ ඬ⃟ 👾 _${usedPrefix}wprandom_
┣ ඬ⃟ 👾 _${usedPrefix}wallhp_
┣ ඬ⃟ 👾 _${usedPrefix}wpvehiculo_
┣ ඬ⃟ 👾 _${usedPrefix}wpmoto_
┣ ඬ⃟ 👾 _${usedPrefix}coffee_
┣ ඬ⃟ 👾 _${usedPrefix}pentol_
┣ ඬ⃟ 👾 _${usedPrefix}caricatura_
┣ ඬ⃟ 👾 _${usedPrefix}ciberespacio_
┣ ඬ⃟ 👾 _${usedPrefix}technology_
┣ ඬ⃟ 👾 _${usedPrefix}doraemon_
┣ ඬ⃟ 👾 _${usedPrefix}hacker_
┣ ඬ⃟ 👾 _${usedPrefix}planeta_
┣ ඬ⃟ 👾 _${usedPrefix}randomprofile_
┣ ඬ⃟ 👾 _${usedPrefix}neko_
┣ ඬ⃟ 👾 _${usedPrefix}waifu_
┣ ඬ⃟ 👾 _${usedPrefix}akira_
┣ ඬ⃟ 👾 _${usedPrefix}akiyama_
┣ ඬ⃟ 👾 _${usedPrefix}anna_
┣ ඬ⃟ 👾 _${usedPrefix}asuna_
┣ ඬ⃟ 👾 _${usedPrefix}ayuzawa_
┣ ඬ⃟ 👾 _${usedPrefix}boruto_
┣ ඬ⃟ 👾 _${usedPrefix}chiho_
┣ ඬ⃟ 👾 _${usedPrefix}chitoge_
┣ ඬ⃟ 👾 _${usedPrefix}deidara_
┣ ඬ⃟ 👾 _${usedPrefix}erza_
┣ ඬ⃟ 👾 _${usedPrefix}elaina_
┣ ඬ⃟ 👾 _${usedPrefix}eba_
┣ ඬ⃟ 👾 _${usedPrefix}emilia_
┣ ඬ⃟ 👾 _${usedPrefix}hestia_
┣ ඬ⃟ 👾 _${usedPrefix}hinata_
┣ ඬ⃟ 👾 _${usedPrefix}inori_
┣ ඬ⃟ 👾 _${usedPrefix}isuzu_
┣ ඬ⃟ 👾 _${usedPrefix}itachi_
┣ ඬ⃟ 👾 _${usedPrefix}itori_
┣ ඬ⃟ 👾 _${usedPrefix}kaga_
┣ ඬ⃟ 👾 _${usedPrefix}kagura_
┣ ඬ⃟ 👾 _${usedPrefix}kaori_
┣ ඬ⃟ 👾 _${usedPrefix}keneki_
┣ ඬ⃟ 👾 _${usedPrefix}kotori_
┣ ඬ⃟ 👾 _${usedPrefix}kurumi_
┣ ඬ⃟ 👾 _${usedPrefix}madara_
┣ ඬ⃟ 👾 _${usedPrefix}mikasa_
┣ ඬ⃟ 👾 _${usedPrefix}miku_
┣ ඬ⃟ 👾 _${usedPrefix}minato_
┣ ඬ⃟ 👾 _${usedPrefix}naruto_
┣ ඬ⃟ 👾 _${usedPrefix}nezuko_
┣ ඬ⃟ 👾 _${usedPrefix}sagiri_
┣ ඬ⃟ 👾 _${usedPrefix}sasuke_
┣ ඬ⃟ 👾 _${usedPrefix}sakura_
┣ ඬ⃟ 👾 _${usedPrefix}cosplay_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ඬ⃟ 🎤 _${usedPrefix}earrape_
┣ ඬ⃟ 🎤 _${usedPrefix}fast_
┣ ඬ⃟ 🎤 _${usedPrefix}fat_
┣ ඬ⃟ 🎤 _${usedPrefix}nightcore_
┣ ඬ⃟ 🎤 _${usedPrefix}reverse_
┣ ඬ⃟ 🎤 _${usedPrefix}robot_
┣ ඬ⃟ 🎤 _${usedPrefix}slow_
┣ ඬ⃟ 🎤 _${usedPrefix}smooth_
┣ ඬ⃟ 🎤 _${usedPrefix}tupai_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📳 _${usedPrefix}بدأ_
┣ ඬ⃟ 📳 _${usedPrefix}التالي_
┣ ඬ⃟ 📳 _${usedPrefix}خروج_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔍 _${usedPrefix}فيلم *<نص>*_
┣ ඬ⃟ 🔍 _${usedPrefix}modapk *<نص>*_
┣ ඬ⃟ 🔍 _${usedPrefix}سيرش-ستيكر *<نص>*_
┣ ඬ⃟ 🔍 _${usedPrefix}جوجل *<نص>*_
┣ ඬ⃟ 🔍 _${usedPrefix}letra *<نص>*_
┣ ඬ⃟ 🔍 _${usedPrefix}wikipedia *<نص>*_
┣ ඬ⃟ 🔍 _${usedPrefix}يوتيوب *<نص>*_
┣ ඬ⃟ 🔍 _${usedPrefix}ابليكيشن *<نص>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔸𝕌𝔻𝕀𝕆𝕊 />*   
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃ *- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
┃ _- (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔊 _Quien es tu sempai botsito 7w7_
┣ ඬ⃟ 🔊 _Te diagnostico con gay_
┣ ඬ⃟ 🔊 _A nadie le importa_
┣ ඬ⃟ 🔊 _Fiesta del admin_
┣ ඬ⃟ 🔊 _Fiesta del administrador_ 
┣ ඬ⃟ 🔊 _Vivan los novios_
┣ ඬ⃟ 🔊 _Feliz cumpleaños_
┣ ඬ⃟ 🔊 _Noche de paz_
┣ ඬ⃟ 🔊 _Buenos dias_
┣ ඬ⃟ 🔊 _Buenos tardes_
┣ ඬ⃟ 🔊 _Buenos noches_
┣ ඬ⃟ 🔊 _Audio hentai_
┣ ඬ⃟ 🔊 _Chica lgante_
┣ ඬ⃟ 🔊 _Feliz navidad_
┣ ඬ⃟ 🔊 _Vete a la vrg_
┣ ඬ⃟ 🔊 _Pasa pack Bot_
┣ ඬ⃟ 🔊 _Atencion grupo_
┣ ඬ⃟ 🔊 _Marica quien_
┣ ඬ⃟ 🔊 _Murio el grupo_
┣ ඬ⃟ 🔊 _Oh me vengo_
┣ ඬ⃟ 🔊 _tio que rico_
┣ ඬ⃟ 🔊 _Viernes_
┣ ඬ⃟ 🔊 _Baneado_
┣ ඬ⃟ 🔊 _Sexo_
┣ ඬ⃟ 🔊 _Hola_
┣ ඬ⃟ 🔊 _Un pato_
┣ ඬ⃟ 🔊 _Nyanpasu_
┣ ඬ⃟ 🔊 _Te amo_
┣ ඬ⃟ 🔊 _Yamete_
┣ ඬ⃟ 🔊 _Bañate_
┣ ඬ⃟ 🔊 _Es puto_
┣ ඬ⃟ 🔊 _La biblia_
┣ ඬ⃟ 🔊 _Onichan_
┣ ඬ⃟ 🔊 _Mierda de Bot_
┣ ඬ⃟ 🔊 _Siuuu_
┣ ඬ⃟ 🔊 _Epico_
┣ ඬ⃟ 🔊 _Shitpost_
┣ ඬ⃟ 🔊 _Rawr_
┣ ඬ⃟ 🔊 _UwU_
┣ ඬ⃟ 🔊 _:c_
┣ ඬ⃟ 🔊 _a_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛠️ _${usedPrefix}chatgpt *<نص>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}chatgpt2 *<نص>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}delchatgpt
┣ ඬ⃟ 🛠️ _${usedPrefix}dall-e *<نص>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}spamwa *<numero|نص|cantidad>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}tamaño *<cantidad> <صوره / فيديو>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readviewonce *<صوره / فيديو>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}clima *<país> <ciudad>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}encuesta *<نص1|نص2...>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}ocr *<responde a صوره>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}hd *<responde a صوره>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}acortar *<enlace / لينك / رابط>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}calc *<operacion math>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}del *<mensaje>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}whatmusic *<مقطع صوتي>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readqr *<صوره (QR)>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}qrcode *<نص>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readmore *<نص1| نص2>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}styletext *<نص>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}traducir *<نص>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}nowa *<numero>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}covid *<pais>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}horario_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💵 _${usedPrefix}adventure_
┣ ඬ⃟ 💵 _${usedPrefix}cazar_
┣ ඬ⃟ 💵 _${usedPrefix}cofre_
┣ ඬ⃟ 💵 _${usedPrefix}balance_
┣ ඬ⃟ 💵 _${usedPrefix}claim_
┣ ඬ⃟ 💵 _${usedPrefix}heal_
┣ ඬ⃟ 💵 _${usedPrefix}lb_
┣ ඬ⃟ 💵 _${usedPrefix}levelup_
┣ ඬ⃟ 💵 _${usedPrefix}myns_
┣ ඬ⃟ 💵 _${usedPrefix}perfil_
┣ ඬ⃟ 💵 _${usedPrefix}work_
┣ ඬ⃟ 💵 _${usedPrefix}minar_
┣ ඬ⃟ 💵 _${usedPrefix}minar2_
┣ ඬ⃟ 💵 _${usedPrefix}buy_
┣ ඬ⃟ 💵 _${usedPrefix}buyall_
┣ ඬ⃟ 💵 _${usedPrefix}verificar_
┣ ඬ⃟ 💵 _${usedPrefix}robar *<cantidad> <@تاج-منشن>*_
┣ ඬ⃟ 💵 _${usedPrefix}transfer *<tipo> <cantidad> <@تاج-منشن>*_
┣ ඬ⃟ 💵 _${usedPrefix}unreg *<numero de serie>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<ريبلاي a صوره o فيديو>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<enlace / لينك / رابط>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker2 *<ريبلاي a صوره o فيديو>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker2 *<enlace / لينك / رابط>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<ريبلاي a صوره o فيديو>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<enlace / لينك / رابط>*_
┣ ඬ⃟ 👽 _${usedPrefix}s2 *<ريبلاي a صوره o فيديو>*_
┣ ඬ⃟ 👽 _${usedPrefix}s2 *<enlace / لينك / رابط>*_
┣ ඬ⃟ 👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟ 👽 _${usedPrefix}scircle *<صوره>*_
┣ ඬ⃟ 👽 _${usedPrefix}sremovebg *<صوره>*_
┣ ඬ⃟ 👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp *<نص>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp2 *<نص>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp3 *<نص>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp *<نص>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp2 *<نص>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp3 *<نص>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp4 *<نص>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp5 *<نص>*_
┣ ඬ⃟ 👽 _${usedPrefix}pat *<@تاج-منشن>*_
┣ ඬ⃟ 👽 _${usedPrefix}slap *<@تاج-منشن>*_
┣ ඬ⃟ 👽 _${usedPrefix}kiss *<@تاج-منشن>*_
┣ ඬ⃟ 👽 _${usedPrefix}dado_
┣ ඬ⃟ 👽 _${usedPrefix}wm *<packname> <author>*_
┣ ඬ⃟ 👽 _${usedPrefix}stickermarker *<efecto> <صوره>*_
┣ ඬ⃟ 👽 _${usedPrefix}stickerfilter *<efecto> <صوره>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👑 > *<funcion>*
┣ ඬ⃟ 👑 => *<funcion>*
┣ ඬ⃟ 👑 $ *<funcion>*
┣ ඬ⃟ 👑 _${usedPrefix}setprefix *<prefijo>*_
┣ ඬ⃟ 👑 _${usedPrefix}desactivarwa *<numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}resetprefix_
┣ ඬ⃟ 👑 _${usedPrefix}autoadmin_
┣ ඬ⃟ 👑 _${usedPrefix}leavegc_
┣ ඬ⃟ 👑 _${usedPrefix}cajafuerte_
┣ ඬ⃟ 👑 _${usedPrefix}blocklist_
┣ ඬ⃟ 👑 _${usedPrefix}بلوك *<@تاج-منشن / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}unblock *<@تاج-منشن / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *public*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *public*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *modejadibot*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *modejadibot*_
┣ ඬ⃟ 👑 _${usedPrefix}msg *<نص>*_
┣ ඬ⃟ 👑 _${usedPrefix}banchat_
┣ ඬ⃟ 👑 _${usedPrefix}unbanchat_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@تاج-منشن>*_
┣ ඬ⃟ 👑 _${usedPrefix}unbanuser *<@تاج-منشن>*_
┣ ඬ⃟ 👑 _${usedPrefix}dardiamantes *<@تاج-منشن>*_
┣ ඬ⃟ 👑 _${usedPrefix}añadirxp *<@تاج-منشن>*_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@تاج-منشن>*_
┣ ඬ⃟ 👑 _${usedPrefix}bc *<نص>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcchats *<نص>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc *<نص>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc2 *<مقطع صوتي>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc2 *<فيديو>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc2 *<صوره>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcbot *<نص>*_
┣ ඬ⃟ 👑 _${usedPrefix}cleartpm_
┣ ඬ⃟ 👑 _${usedPrefix}restart_
┣ ඬ⃟ 👑 _${usedPrefix}update_
┣ ඬ⃟ 👑 _${usedPrefix}banlist_
┣ ඬ⃟ 👑 _${usedPrefix}addprem *<@تاج-منشن> <tiempo>*_
┣ ඬ⃟ 👑 _${usedPrefix}addprem2 *<@تاج-منشن> <tiempo>*_
┣ ඬ⃟ 👑 _${usedPrefix}addprem3 *<@تاج-منشن> <tiempo>*_
┣ ඬ⃟ 👑 _${usedPrefix}addprem4 *<@تاج-منشن> <tiempo>*_
┣ ඬ⃟ 👑 _${usedPrefix}delprem *<@تاج-منشن>*_
┣ ඬ⃟ 👑 _${usedPrefix}listcmd_
┣ ඬ⃟ 👑 _${usedPrefix}setppbot *<ريبلاي a صوره>*_
┣ ඬ⃟ 👑 _${usedPrefix}addcmd *<نص> <ريبلاي a ستيكر/صوره>*_
┣ ඬ⃟ 👑 _${usedPrefix}delcmd *<ريبلاي a ستيكر/صوره con comando o نص asignado>*_
┗━━━━━━━━━━━━━━━━┛
`.trim()
if (m.isGroup) {
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: m })    
} else {    
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|اوامر|الاوامر|قائمة|القائمه|قائمه|القائمة|help|info|menu1)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

/*let buttons = [
{ buttonId: '#donar', buttonText: { displayText: '📮 𝙳𝙾𝙽𝙰𝚁 📮' }, type: 1 },
//{ buttonId: '#terminosycondiciones', buttonText: { displayText: '📋 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂 📋' }, type: 1 }]
{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 KᒪEᐯEᖇ﴾ᗷOT﴿ 👑',
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/TheShadowBrokers133`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })*/
