import express from 'express';
import checkAccessToken from '@Server/middleware/checkAccessToken';
import books from '@Server/api/books';
import adminUsers from '@Server/api/adminUsers';

const router = express.Router();

router.post('/admin/signin', adminUsers.signin);
router.get('/admin/token', adminUsers.checkToken);

router.post('/books', checkAccessToken, books.addBook);
router.patch('/books/:id', checkAccessToken, books.editBook);
router.get('/books', books.getAllBooks);
router.get('/books/:id', books.getBook);


export default router;
