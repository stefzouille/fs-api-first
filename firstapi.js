const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')


const txt = fs.readFileSync('blabla.txt', 'utf-8')

const op = readlineSync.question(chalk.yellow(`type enter to see the txt ?`))

fs.copyFileSync('blabla.txt', 'text.txt')

console.log(chalk.red(txt, op))