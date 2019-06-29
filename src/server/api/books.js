import moment from 'moment';
import books from '@Server/db/entity/books';

export default {
  getAllBooks(req, res) {
    books.findAll().then((data) => {
      const dateArray = data.books
        .map(book => moment(book.completedAt).format('YYYY'))
        .filter((book, index, self) => self.indexOf(book) === index)
        .sort((prev, next) => prev > next ? -1 : 1);

      let filteredBooksArray = {};

      dateArray.forEach(date => {
        Object.assign(filteredBooksArray, {
          [date]: data.books.filter(book =>
            moment(date).format('YYYY-MM') === moment(book.completedAt).format('YYYY-MM'))
        });
      });

      return res.send(filteredBooksArray);
    }).catch(({ message }) => res.status(404).send({ message }));
  },

  getBook(req, res) {
    const { id } = req.params;
    books.findOne(id).then(({ book }) => {
      const { title, imageUrl, itemUrl, description, completedAt } = book;
      const completedYear = parseInt(moment(completedAt).format('YYYY'), 10);
      const completedMonth = parseInt(moment(completedAt).format('MM'), 10);
      return res.send({
        id,
        title,
        imageUrl,
        itemUrl,
        description,
        completedYear,
        completedMonth,
      });
    }).catch(({ message }) => res.status(404).send({ message }));
  },

  addBook(req, res) {
    const {
      title,
      itemUrl,
      description,
      completedYear,
      completedMonth
    } = req.body;
    const year = completedYear;
    const month = completedMonth ? `-${completedMonth}` : '';
    const completedAt = `${year + month}`;

    books
      .create({ title, itemUrl, description, completedAt })
      .then((data) => res.send(data.book))
      .catch(({ message }) => res.status(404).send({ message }));
  },

  editBook(req, res) {
    const {
      id,
      title,
      imageUrl,
      itemUrl,
      description,
      completedYear,
      completedMonth,
    } = req.body;
    const year = completedYear;
    const month = completedMonth ? `-${completedMonth}` : '';
    const completedAt = `${year + month}`;

    books
      .update({ id, title, imageUrl, itemUrl, description, completedAt })
      .then(() => res.send({
        id,
        title,
        imageUrl,
        itemUrl,
        description,
        completedYear,
        completedMonth,
      }))
      .catch(({ message }) => res.status(404).send({ message }));
  },
};
