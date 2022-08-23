
import express from 'express';
import { pool } from './config/db.js';


var app = express();
const staticRoot = '../Frontend/publish/wwwroot'; // diretório produzido por:   dotnet publish -o publish
const port = 3000;

app.use("/", express.static(staticRoot));


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
	try {
		const [result] = await pool.query('SELECT * FROM professor');

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
});
