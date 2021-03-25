const fs = require('fs')


let stats =fs.statSync('./poem.txt') 
  console.log(`taille du fichier ${stats.size}`)
  console.log(`isDirectory , ${stats.isDirectory()}`)
  console.log(`isFile ? ${stats.isFile()}`)
 
