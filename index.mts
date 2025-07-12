import express from 'express';
import dotenv from 'dotenv';
import genres from './routes/genres.mts'; 

const env = process.env.NODE_ENV || 'development';
dotenv.config({path: `./config/.env.${env}` });

const app = express();

app.use('/api/genres', genres);

const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});