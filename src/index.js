import apiRoutes from './routes/api.js';
import express from 'express';

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);

// Set the server to listen on port 8000 and log a message once it starts
app.listen(8000, () => {
    console.log('Server running');
});