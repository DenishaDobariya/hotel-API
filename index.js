import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js'; 
import db from './config/db.js';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3005
const URL = process.env.URL || 'http://localhost:'

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error starting server:", err);
    } else {
        console.log(`Server is running on: ${URL}${PORT}`);
    }
});
