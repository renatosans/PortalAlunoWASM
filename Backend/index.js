
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
	try {
		const [result] = await pool.query('SELECT * FROM professor WHERE id = ?', [req.params.id]);

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
});

// lista todos os registros da tabela
app.get('/listarProfessores', async (req, res) => {
	prisma.professor.findMany()
	.then((professores) => res.send(professores))
	.catch((error) => res.send("Error: " + error.message))
});
