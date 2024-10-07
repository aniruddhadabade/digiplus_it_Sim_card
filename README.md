# digiplus_it_Sim_card

# SIM Card Management API

## Project Overview
This project implements a RESTful API for managing SIM cards. It allows users to activate or deactivate SIM cards and retrieve their details. The API is built using Node.js and Express, and it connects to a MySQL relational database to store SIM card information.


## Features
- Activate SIM card
- Deactivate SIM card
- Retrieve SIM card details

## Technologies Used
- Node.js
- Express
- MySQL
- Postman (for testing the API)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sim-card-management-api.git

# testing using postman
for get the information of sim number - http://localhost:3000/sim-details/sim_number
for activate the sim - post request in postman http://localhost:3000/activate and write 
example{
    "sim_number": "12345678901234567890"
}
for deactivate
post request in postman http://localhost:3000/deactivate and write 
example{
    "sim_number": "12345678901234567890"
}

