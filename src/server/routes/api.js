import express from 'express';
import checkAccessToken from '@Server/middleware/checkAccessToken';
import books from '@Server/api/books';
import adminUsers from '@Server/api/adminUsers';

const router = express.Router();

router.post('/admin/signin', adminUsers.signin);
router.get('/admin/token', adminUsers.checkToken);

router.get('/books', books.getAllBooks);
router.post('/books', checkAccessToken, books.addBook);
router.get('/books/:id', checkAccessToken, books.getBook);
router.patch('/books/:id', checkAccessToken, books.editBook);


export default router;
