import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
			command: "help",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}zerotwo`,
		        dm: true,
                        aliases: ['h','?','well','menu']
         })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/menu-02/zerotwo-help.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `🎀ʜᴇʟʟᴏ ᴅᴀʀʟɪɴ' !
🎗ɪ'ᴍ ᴢᴇʀᴏᴛᴡᴏ ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ-ʙᴏᴛ.
🌹ᴍʏ ᴘʀᴇꜰɪx ɪꜱ - " ${this.client.config.prefix} "
┈┈┈┈┈┈✁━━━━━━━━━
1 | ᴅᴏɴ'ᴛ ᴄᴀʟʟ ʙᴏᴛꜱ ᴛᴏ ᴀᴠᴏɪᴅ ʙʟᴏᴄᴋɪɴɢ.   
2 | ᴅᴏɴ'ᴛ ꜱᴘᴀᴍ ɪɴ ɢʀᴏᴜᴘꜱ&ᴘᴍ ᴛᴏ ᴀᴠᴏɪᴅ ʙʟᴏᴄᴋɪɴɢ.
┈┈┈┈┈┈✁━━━━━━━━━
-🄱🄾🅃 🄴🄰🅂🅈 🄻🄸🅂🅃

༻┉┉❰•𝙒𝙚𝙚𝙗•❱┉┉༺

〽 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴀɴɪᴍᴇ, ᴍᴀɴɢᴀ ꜱɪᴅᴇ.
🎊 ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ1 [${this.client.config.prefix}ʜ1]

༻┉┉❰•𝙁𝙪𝙣•❱┉┉༺

〽 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ꜰᴜɴ ꜱɪᴅᴇ.
🎊 ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ2 [${this.client.config.prefix}ʜ2]

༻┉┉❰•𝙂𝙚𝙣𝙚𝙧𝙖𝙡•❱┉┉༺

〽 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ɢᴇɴᴇʀᴀʟ ꜱɪᴅᴇ.
🎊 ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ3 [${this.client.config.prefix}ʜ3]

༻┉┉❰•𝙐𝙩𝙞𝙡𝙨•❱┉┉༺

〽 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴜᴛɪʟꜱ ꜱɪᴅᴇ.
🎊 ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ4 [${this.client.config.prefix}ʜ4]

༻┉┉❰•𝙈𝙚𝙙𝙞𝙖•❱┉┉༺

〽 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴍᴇᴅɪᴀ ꜱɪᴅᴇ.
🎊 ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ5 [${this.client.config.prefix}ʜ5]

༻┉┉❰•𝙀𝙙𝙪𝙘𝙖𝙩𝙞𝙫𝙚•❱┉┉༺

〽 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴇᴅᴜᴄᴀᴛɪᴠᴇ ꜱɪᴅᴇ.
🎊 ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ6 [${this.client.config.prefix}ʜ6]

༻┉┉❰•𝙈𝙤𝙙𝙚𝙧𝙖𝙩𝙞𝙤𝙣•❱┉┉༺

〽 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴍᴏᴅᴇʀᴀᴛɪᴏɴ ꜱɪᴅᴇ.
🎊 ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ7 [${this.client.config.prefix}ʜ7]

༻┉┉❰•𝙉𝙨𝙛𝙬•❱┉┉༺

〽 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ɴꜱꜰᴡ ꜱɪᴅᴇ.
🎊 ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ8 [${this.client.config.prefix}ʜ8]

༻┉┉❰•𝙇𝙤𝙜𝙤•❱┉┉༺

〽 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ: ʙʏ ᴜsɪɴɢ ᴛʜɪs ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ʟᴏɢᴏ ᴍᴀᴋɪɴɢ sɪᴅᴇ.
🎊 ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ9 [${this.client.config.prefix}ʜ9]

     🎕┈┈┈┈🎕❂⋯❋⋯❂🎕┈┈┈┈🎕
 🅃🄷🄰🄽🄺🅈🄾🅄 🄵🄾🅁 🅄🅂🄸🄽🄶 🅃🄷🄴 🄱🄾🅃
     🎕┈┈┈┈🎕❂⋯❋⋯❂🎕┈┈┈┈🎕` }
        )
    }
}
  
