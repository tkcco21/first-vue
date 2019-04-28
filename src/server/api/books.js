import moment from 'moment';
import books from '@Server/services/books';

export default {
  getAllBooks(req, res) {
    books.findAll().then((data) => {
      const dateArray = data.books
        .map(book => moment(book.completed_at).format('YYYY-MM'))
        .filter((book, index, self) => self.indexOf(book) === index)
        .sort((prev, next) => prev > next ? 1 : -1);

      let filteredBooksArray = {};

      dateArray.forEach(date => {
        Object.assign(filteredBooksArray, {
          [date]: data.books.filter(book =>
            moment(date).format('YYYY-MM') === moment(book.completed_at).format('YYYY-MM'))
        });
      });

      res.send(filteredBooksArray);
    }).catch(({ message }) => {
      res.status(500).send({ message })
    });
  },
  addBook(req, res) {
    return res.send({ test: 'test' });
  },
};
