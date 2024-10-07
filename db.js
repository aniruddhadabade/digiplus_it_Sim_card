const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Replace with your MySQL username
    password: 'Aniruddha@123',  // Replace with your MySQL password
    database: 'sim_infor'  // Replace with your database name
});

// Open the MySQL connection
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to the database: ', error);
        return;
    }
    console.log('Connected to the database.');
});

module.exports = connection;
