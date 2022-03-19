const express = require('express');
const router = express.Router();
const {addBook,getBook} = require('../controllers/book');
const { getCategories } = require('../controllers/category');
const { uploadFile } = require('../middleware/uploadFile');

router.post('/addbook', uploadFile('image'), addBook)
router.get('/getbook/:id',getBook)
router.get('/getcategory',getCategories)
module.exports = router