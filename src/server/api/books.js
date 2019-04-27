import books from '@Server/service/books';

export default {
  getAllBooks(req, res) {
    try {
      books.findAll().then((data) => {
        console.log(data);
        res.send(data);
      });
    } catch(err) {
      res.send(err);
    }
  },
  addBook(req, res) {
    return res.send({ test: 'test' });
  },
};


