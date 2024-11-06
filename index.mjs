import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

// Connect to DB when the server is initialized
db.connection.once('open', () => {
  console.log('db connected successfully!');
});

// Export the app for the Vercel serverless function
export default app;