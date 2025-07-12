import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet'; 
import genres from './routes/genres.mts'; 


const env = process.env.NODE_ENV || 'development';
dotenv.config({path: `./config/.env.${env}` });

const app = express();
app.use(express.json()); 
app.use('/api/genres', genres);
app.use(helmet()); 



const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});