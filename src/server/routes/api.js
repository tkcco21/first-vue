import express from 'express';
import books from '@Server/api/books';

const router = express.Router();

router.get('/books', books.getAllBooks);
router.post('/books', books.addBook);
router.get('/books/:id', books.getBook);
router.patch('/books/:id', books.editBook);
// router.put('/todos/:id', todos.deleteTodo);
// router.delete('/todos/:id', todos.destroyTodo);

export default router;
