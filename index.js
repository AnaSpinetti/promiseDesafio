const { rejects } = require('assert')
const fs = require('fs')
const { stringify } = require('querystring')

const caminho = __dirname + '/dados.txt'

function lerArquivo(caminho){
    return new Promise(resolve =>{
        fs.readFile(caminho, 'utf-8', (err, content) => {
            //convertendo o conteudo para string
            resolve (content.toString())
        })
        //console.log(content)
    })
}

//pegando a Promise convertida para ler no console
lerArquivo(caminho)
    .then(content => console.log(content))



