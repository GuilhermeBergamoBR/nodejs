// Esse é o arquivo que starta a aplicação!!!
const express = require('express'); // importa o express para requisições http
const consign = require('consign'); // importa o consign para compactar as rotas e a conexão om o banco de dados

const app = express(); // chama a funcão do express
app.set('view engine', 'ejs'); // seta como engine de views o ejs
app.set('views', './app/views'); //seta como diretório de views  o "./app/views"

// chama o método do consign compactando todo o diretório de rotas e, em seguida, compactando a conexão com o banco de dados, direciona o que foi compactado para dentro da aplicação
consign()
	.include('../../../projects/personal/nodejs/app/routes')
	.then('../../../../../../../home/guilherme/Documents/projects/personal/nodejs/config/dbConnection.js')
	.then('../../../../../../../home/guilherme/Documents/projects/personal/nodejs/app/models')
	.into(app);
module.exports = app; // exporta como módulo as configurações do servidor e nossa aplicação
