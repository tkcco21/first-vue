import moment from 'moment';
import books from '@Server/service/books';

export default {
  getAllBooks(req, res) {
    try {
      books.findAll({
        attributes: ['id', 'title', 'item_url', 'image_url', 'description', 'completed_at']
      }).then((data) => {
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
      });
    } catch(err) {
      res.send(err);
    }
  },
  addBook(req, res) {
    return res.send({ test: 'test' });
  },
};
