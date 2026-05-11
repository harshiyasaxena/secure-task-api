const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

dotenv.config();

if (process.env.NODE_ENV !== 'test') {
    connectDB();
}

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send('Secure Task API Running...');
});

const PORT = process.env.PORT || 5000;

let server;

if (process.env.NODE_ENV !== 'test') {

    server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

}

module.exports = app;