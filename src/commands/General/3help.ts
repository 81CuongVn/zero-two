import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, MessageOptions, Mimetype } from '@adiwajshing/baileys' 
import request from '../../lib/request'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '3help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['3h']
        })
    }

const id = 'abcd@s.whatsapp.net' // the WhatsApp ID 
// send a simple text!
const sentMsg  = await conn.sendMessage (id, 'oh hello there', MessageType.text)
// send a location!
const sentMsg  = await conn.sendMessage(id, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221}, MessageType.location)
// send a contact!
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Jeff Singh\n' // full name
            + 'ORG:Ashoka Uni;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=917842346461:+91 78423 46461\n' // WhatsApp ID + phone number
            + 'END:VCARD'
const sentMsg  = await conn.sendMessage(id, {displayname: "Jeff", vcard: vcard}, MessageType.contact)
// send a list message!
const rows = [
 {title: 'Row 1', description: "Hello it's description 1", rowId:"rowid1"},
 {title: 'Row 2', description: "Hello it's description 2", rowId:"rowid2"}
]

const sections = [{title: "Section 1", rows: rows}]

const button = {
 buttonText: 'Click Me!',
 description: "Hello it's list message",
 sections: sections,
 listType: 1
}

const sendMsg = await conn.sendMessage(id, button, MessageType.listMessage)

// send a buttons message!
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
]

const buttonMessage = {
    contentText: "Hi it's button message",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}

const sendMsg = await conn.sendMessage(id, buttonMessage, MessageType.buttonsMessage);
