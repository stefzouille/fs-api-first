const fs = require('fs')


// Check Line command
if (process.argv.length !== 3) { // 1 argument
  console.log('Usage : node ls.js Directory')
  process.exit(1)
}

// Check if Directory existe 
if (!fs.existsSync(process.argv[2])) { // Verification Direcotry si il existe
  console.log(`Error: ${process.argv[2]} does not exist`)
  process.exit(1)
}

// Check if folder ? 
const stats = fs.statSync(process.argv[2])
if (!stats.isDirectory()) { // SI ce n'est pas un repertoire alors affiche moi une erreur
  console.log(`Error : ${process.argv[2]} is not a folder`)
  process.exit(1)
}

// Code Programme 

let dirTab = fs.readdirSync(process.argv[2])

dirTab.forEach(
  (elem) => {
    console.log(elem)
  })