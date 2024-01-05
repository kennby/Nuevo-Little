import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['524531287294', 'kennn', true], ['5217294888993']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['5214531287294']
global.suittag = ['5214531287294']
global.mods = []
global.prems = []

global.packname = '© 𝙾𝙽𝚈𝚇 𝙱𝙾𝚃'
global.author = '𝙺𝙴𝙽𝙽'
global.wm = '© 𝙾𝙽𝚈𝚇'
global.wm2 = '𝙾𝙽𝚈𝚇'
global.azami = '𝙺𝙴𝙽𝙽'
global.cb = '𝙺𝙴𝙽𝙽 𝙱𝙾𝚃 𝙼𝙳'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© Azami ~ Zam'
global.devnum = '𝙾𝙽𝚈𝚇'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
