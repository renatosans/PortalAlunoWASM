import { createPool } from "mysql2/promise";


export const pool = createPool({
	host: 'localhost',
	user: 'root',
	password: 'p@ssw0rd',
	port: 3306,
	database: 'portal_aluno',
	// ssl: {}
})
