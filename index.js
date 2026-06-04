const fs = require('fs') // capturando e guardando o file system

 const dados = fs.readFileSync('dados.json','utf-8');
 const usuarios = JSON.parse(dados);

 console.log("usuarios cadastros:");
 console.log(usuarios);