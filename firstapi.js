const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const txt = fs.readFileSync('blabla.txt', 'utf-8')


const op = readlineSync.question(chalk.yellow(`click enter to see the txt and copy in new file ?`))


fs.copyFileSync('blabla.txt', 'text.txt')
fs.copyFileSync('blabla.txt', 'text.md')

console.log(chalk.red(txt, op))


const startUsage = process.cpuUsage();
const now = Date.now();
while (Date.now() - now < 500);

console.log(process.cpuUsage(startUsage));