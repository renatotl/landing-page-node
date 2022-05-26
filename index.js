const express = require("express");// cria a variável express o require vai na pasta Node Modules procura a pasta express e traz tudo que ela tem
const path = require("path")//importando uma lib do proprio express atraves do app
const app = express();//cria a const app que é a aplicação e chama todaas as funções do express através deste app 
app.set("view engine", "ejs");//motor engine da view é o ejs
app.use(express.static(path.join(__dirname, "public")));//dizendo ao express  a pasta que ira guarda esses arquivos

app.get("/index", (req, res) => {//estamos chamando a rota get dentro domservidor que tem as rotas que o cliente está acessando e chamando os endpoints o cliente  as REQUISIÇÕES red que acessa o endpoint que é uma rota e dentro dessa rota é executaada uma função que RESPONDE res um cliente
  res.render("index");
});

app.listen(3000, () => console.log("Servido está rodando em htpp:localhost:3000"));//ouvindo a porta 3000, rodando essa porta 