import moment from 'moment';
import books from '@Server/db/entity/books';

export default {
  getAllBooks(req, res) {
    books.findAll().then((data) => {
      const dateArray = data.books
        .map(book => moment(book.completedAt).format('YYYY-MM'))
        .filter((book, index, self) => self.indexOf(book) === index)
        .sort((prev, next) => prev > next ? 1 : -1);

      let filteredBooksArray = {};

      dateArray.forEach(date => {
        Object.assign(filteredBooksArray, {
          [date]: data.books.filter(book =>
            moment(date).format('YYYY-MM') === moment(book.completedAt).format('YYYY-MM'))
        });
      });

      res.send(filteredBooksArray);
    }).catch(({ message }) => {
      res.status(500).send({ message });
    });
  },
  getBook(req, res) {
    const { id } = req.param;
    books.findOne(id).then(({ book }) => {
      res.send(book);
    }).catch(({ message }) => {
      res.status(400).send({ message });
    });
  },
  addBook(req, res) {
    const { title, imageUrl, itemUrl, description, completedAt } = req.body;

    books
      .create({ title, itemUrl, imageUrl, description, completedAt })
      .then((data) => {
        res.send(data.book);
      })
      .catch(({ message }) => {
        res.status(500).send({ message })
      });
  },
};
