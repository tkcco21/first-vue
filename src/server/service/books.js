import { books as Books } from '@Server/db/models';

export default {
  getAllBooks(req, res) {
    try {
      Books.findAll().then((data) => {
        return res.send({ books: JSON.parse(JSON.stringify(data)) });
      });
    } catch(err) {
      return res.send(new Error(err.message));
    }
  },
  addBook(req, res) {
    console.log(req.body);
    Books.create(req.body).then(() => {
      res.send({ test: 'test' });
    });
  },
};
