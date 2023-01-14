import mysql from 'mysql'

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'teste_pratico'
})

export default db