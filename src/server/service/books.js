import { sequelize } from '@Server/db/models';

export default {
  getAllBooks(req, res) {
    sequelize.query('SELECT * FROM books')
    .then((books) => {
      console.log(books);
      return res.send({ books });
    }).err((err) => {
      return res.send(err);
    });
  },
  addBook(req, res) {
    console.log(req.body);
    Books.create(req.body).then(() => {
      res.send({ test: 'test' });
    });
  },
};
