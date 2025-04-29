 const mongoose = require('mongoose');

 const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    published: {
        type: Boolean,
        default: false
    }
 }, { timestamps: true });


 const Book = mongoose.model('Book', bookSchema);

 module.exports = Book;