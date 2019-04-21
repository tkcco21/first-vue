import express from 'express';
import books from '@Server/service/books';

const router = express.Router();

router.get('/books', books.getAllBooks);
router.post('/books', books.addBook);
// router.patch('/todos/:id', todos.editTodo);
// router.put('/todos/:id', todos.deleteTodo);
// router.delete('/todos/:id', todos.destroyTodo);

export default router;
