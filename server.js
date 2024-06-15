import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

//config env
dotenv.config()

//rest object
const app = express();

//rest api
app.get("/", (req, res) => {
    res.send('<h1>Welcome to ecommerse app using MERN</h1>');
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`.bgCyan.white);
});