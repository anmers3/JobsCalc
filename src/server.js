//Apos instalar o Express (npm i express) deve ser chamado por meio do require
const express = require("express")
const server = express()
//Chamando o script para definir as rotas
const routes = require("./routes")
//Apos instalar o EJS (npm i ejs), deve ser chamado para fazer o mmotor do html (todos arquivos html foram renomeados para extenção ejs)
server.set('view engine', 'ejs')

//habilitar arquivos estaticos
server.use(express.static('public'))
server.use(routes)

server.listen(3000, () => console.log('Server está rodando'))

//request, response (retornado a pagina inicial ao executar o servidor)
/*server.get('/', (request, response) => {
    //console.log(__dirname + "/views/index.html")
    return response.sendFile(__dirname + "/views/index.")
})*/
//mensagem de log 
