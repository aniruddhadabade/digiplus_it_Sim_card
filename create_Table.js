const db = require('./db');

// SQL query to create a table
const createTableQuery = `
    CREATE TABLE sim_cards (
        sim_number VARCHAR(20) PRIMARY KEY,  
        phone_number VARCHAR(15) NOT NULL,  
        status ENUM('active', 'inactive') DEFAULT 'inactive',  
        activation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

db.query(createTableQuery, (error, results) => {
    if (error) {
        console.error('Error creating table: ', error);
        return;
    }
    console.log('Table created successfully');
});
