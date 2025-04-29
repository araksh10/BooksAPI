 const Book = require('../models/Book');

 exports.getBooks = async (req, res) => {
    try{
        const books = await Book.find();
        
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
 };

exports.createBook = async (req, res) => {
    try{
        const { title, author, pages, published } = req.body;
        const newBook = new Book({ title, author, pages, published });
        const savedBook = await newBook.save();

        res.status(201).json({ message: 'Book added successfully!', savedBook });
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
 };

exports.updateBook = async (req, res) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        if(!updatedBook) return res.status(404).json({ error: 'Book not found' });

        res.status(201).json({ message: 'Book updated successfully!', book:updatedBook });
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
 };

exports.deleteBook = async (req, res) => {
    try{
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if(!deletedBook) return res.status(404).json({ error: 'Book not found!'});

        res.json({ message: 'Book deleted successfully!', deletedBook });
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
 };

