const express = require('express');//cria variável express, o require vai na pasta node modules procura a pasta express e traz tudo que ela tem ali dentro
const path = require("path");//importando uma lib do proprio express chamada path  essencial
const app = express();//cria a const app que é a aplicação e chama todas as funções do express atrasvés desse app

app.set("view engine", "ejs"); //mortor engine da view é o ejs essencial
app.use(express.static(path.join(__dirname,"public")));//dizendo ao express a pasta que irá guardar esses arquivos   ecencial  express estatico path se junta 
// O EXPRESS eu guardei todos os arquivos em public por isso não precisou ../ na hora de linkar



//http://localhost:3000/index
app.get('/index', (req, res) => {//chamando a rota get, dentro do servidor que tem as rotas que o cliente está acessando o que chamamos de endpoints, o cliente faz a requisição e acessa o endpoint que é uma rota e dentro dessa rota é executada uma função e responde o meu cliente
    const devList = ["BackEnd", "FrontEnd", "FullStack"];//arrey
    const analyticsList = ["Engenharia de Dados", "Ciência de dados"];//arrey

    //passando devlist e chamando devlist
    res.render('index',{titulo: "Blue", devList: devList, analyticsList: analyticsList});//interpolando BLUE  é um valor json e sempre entre aspas 
    //renderezando pela rota que vamos utilizar no projeto 
});// renderizar = render
//rotas, sempre tem 1 aplicaçao, meethodo, requisição que sempre vem do usuário e uma reposta que sem da gente e uma função para que possamos responder
app.post('/subscription', (req, res) => {// sempre tem res e req
    res.send("Formulário recebido!")// res de responsta dizendo  enviando formulário recebido
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));//ouvindo a porta 3000, rodando nessa porta


