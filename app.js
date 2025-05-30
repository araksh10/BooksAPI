require('dotenv').config();
const cors = require('cors');
 const express = require('express');
 const app = express();
 const mongoose = require('mongoose');

 app.use(cors());
 
 app.use(express.json());

const PORT = process.env.PORT || 3000;
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL).then(() => console.log('MongoDB Connected Successfully!')).catch((err) => console.error('MongoDB Connection Error!', err));

const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);

app.use((req, res) => {
    res.status(404).send( 'The book is not available dear reader!' );
});

app.listen(PORT, () => {
    console.log(`Books API server running at: http://localhost:${PORT}`);
});