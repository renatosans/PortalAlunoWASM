
import mysql from "mysql2";
import express from "express";


var app = express();
const staticRoot = '../Frontend/publish/wwwroot'; // diretório produzido por:   dotnet publish -o publish
const port = 3000;

// configura os parametros de conexão
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'p@ssw0rd',
    database: 'portal_aluno'
});

// conecta ao banco de dados
mysqlConnection.connect(
    err => {
        if (!err) {
            console.log("Conectado ao MySQL!");
        } else {
            console.log("Falha na conexao com o MySQL !\n Error: " + JSON.stringify(err, undefined, 2));
        }
    }
);

app.use("/", express.static(staticRoot));

// inicia a API escutando na porta 3000
app.listen(port, () => console.log('Express escutando chamadas na porta ' + port));

// recupera o cadastro
app.get('/recuperarProfessor/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM professor WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Error: " + JSON.stringify(err, undefined, 2));
        }
    })
});

// lista todos os registros da tabela
app.get('/listarProfessores', (req, res) => {
    mysqlConnection.query('SELECT * FROM professor', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Error: " + JSON.stringify(err, undefined, 2));
        }
    })
});
