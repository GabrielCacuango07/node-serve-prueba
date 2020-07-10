// Puerto 

process.env.PORT = process.env.PORT || 3000;


// Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//base de dadtos 

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/impresora'
} else {
    urlDB = 'mongodb+srv://cafe-user:5e82q05vauqrfDry@cafe.gayll.mongodb.net/impresora'
}

process.env.URLDB = urlDB;