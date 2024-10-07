const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the SIM Card Management API');
});


const db = mysql.createConnection({
    host: 'localhost',    
    user: 'root',         
    password: 'Aniruddha@123',        
    database: 'sim_infor' 
});

// Connect to MySQL
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

// Activate SIM Card
app.post('/activate', (req, res) => {
    const { sim_number } = req.body;

    const query = `
        UPDATE sim_cards 
        SET status = 'active', activation_date = NOW() 
        WHERE sim_number = ?`;
    
    db.query(query, [sim_number], (error, results) => {
        if (error) {
            console.error('Error activating SIM card:', error);
            return res.status(500).json({ error: 'Database error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'SIM card not found' });
        }

        res.status(200).json({ message: 'SIM card activated successfully' });
    });
});

app.post('/deactivate', (req, res) => {
    const { sim_number } = req.body;

    const query = `
        UPDATE sim_cards 
        SET status = 'inactive' 
        WHERE sim_number = ?`;
    
    db.query(query, [sim_number], (error, results) => {
        if (error) {
            console.error('Error deactivating SIM card:', error);
            return res.status(500).json({ error: 'Database error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'SIM card not found' });
        }

        res.status(200).json({ message: 'SIM card deactivated successfully' });
    });
});


app.get('/sim-details/:simNumber', (req, res) => {
    const { simNumber } = req.params;

    const query = `
        SELECT * FROM sim_cards 
        WHERE sim_number = ?`;

    db.query(query, [simNumber], (error, results) => {
        if (error) {
            console.error('Error retrieving SIM details:', error);
            return res.status(500).json({ error: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'SIM card not found' });
        }

        res.status(200).json(results[0]);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
