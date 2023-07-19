//* importar mysql
import mysql from 'mysql';

//* Crear la conexion
const conector = mysql.createConnection({
    host: '127.0.0.1',
    port: 3301,
    user: 'root',
    password: '',
    database: 'test'
})

const conectar = () => {
    conector.connect(err => {
        if(err) {
            console.log(err);
        } else {
            console.log('conectado');

        }
        // if(err) throw err 
    })
}

export {conectar};