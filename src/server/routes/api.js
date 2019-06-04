import express from 'express';
import books from '@Server/api/books';
import adminUsers from '@Server/api/adminUsers';

const router = express.Router();

router.post('/admin/signin', adminUsers.postSignin);

router.get('/books', books.getAllBooks);
router.post('/books', books.addBook);
router.get('/books/:id', books.getBook);
router.patch('/books/:id', books.editBook);


export default router;
