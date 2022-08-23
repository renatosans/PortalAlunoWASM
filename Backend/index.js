
const express = require('express');
const prisma = require('./config/db');


const port = 3000;
const app = express();
const staticRoot = '../Frontend/publish/wwwroot'; // diretório produzido por:   dotnet publish -o publish


app.use("/", express.static(staticRoot));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// setHeader('Access-Control-Allow-Origin', '*')


// inicia a API escutando na porta 3000
app.listen(port, () => console.log('Express escutando chamadas na porta ' + port));


// recupera o cadastro
app.get('/recuperarProfessor/:id', async (req, res) => {
	const { id } = req.params || req.query;
	// Elvis Operator ?   nunca ouvi esse nome na minha vida, isso é novidade, kkkkkk
	// É uns memes que ninguem entende,  só o criador dos memes que entende o que ele posta, kkkkkk

	prisma.professor.findUnique({ where: { id: Number(id) } })
	.then((professor) => res.send(professor))
	.catch((error) => res.send("Error: " + error.message))
});


// lista todos os registros da tabela
app.get('/listarProfessores', async (req, res) => {
	prisma.professor.findMany()
	.then((professores) => res.send(professores))
	.catch((error) => res.send("Error: " + error.message))
});
