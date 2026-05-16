const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');

const app = express();


// Middleware
app.use(cors());

app.use(express.json());


// Static Folder
app.use(express.static('public'));


// Database Connection
connectDB();


// Routes
app.use('/api/users', userRoutes);


// Server
const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});