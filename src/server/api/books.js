import moment from 'moment';
import books from '@Server/db/entity/books';

export default {
  getAllBooks(req, res) {
    books.findAll().then((data) => {
      // =========================================
      // console.time('books')
      const books = {};
      data.books
        .forEach((book) => {
          const year = moment(book.completedAt).format('YYYY');
          const month = moment(book.completedAt).format('MM');
          const array = books[year] &&
            books[year][parseInt(month)] &&
            books[year][parseInt(month)].length
              ? books[year][parseInt(month)]
              : [];
          Object.assign(books, {
            [year]: Object.assign({}, books[year], {
              [parseInt(month)]: array.concat(book)
            })
          });
        });
      const booksArray = Object.keys(books)
        .map(year => ({ [year]: Object.keys(books[year])
          .map(
            month => ({
              [month]: {
                books: books[year][month],
                count: books[year][month].length,
              }
            })
          )
          .sort((prev, next) =>
            parseInt(Object.keys(prev)[0]) > parseInt(Object.keys(next)[0])
              ? -1
              : 1
          )
        }))
        .sort((prev, next) =>
          parseInt(Object.keys(prev)[0]) > parseInt(Object.keys(next)[0]) ? -1 : 1
        );
      // console.log(booksArray);
      // console.timeEnd('books')

      return res.send(booksArray);
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
        itemUrl,
        imageUrl,
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
      imageUrl,
      description,
      completedYear,
      completedMonth
    } = req.body;
    const year = completedYear;
    const month = completedMonth ? `-${completedMonth}` : '';
    const completedAt = `${year + month}`;

    books
      .create({ title, itemUrl, imageUrl, description, completedAt })
      .then((data) => res.send(data.book))
      .catch(({ message }) => res.status(404).send({ message }));
  },

  editBook(req, res) {
    const {
      id,
      title,
      itemUrl,
      imageUrl,
      description,
      completedYear,
      completedMonth,
    } = req.body;
    const year = completedYear;
    const month = completedMonth ? `-${completedMonth}` : '';
    const completedAt = `${year + month}`;

    books
      .update({ id, title, itemUrl, imageUrl, description, completedAt })
      .then(() => res.send({
        id,
        title,
        itemUrl,
        imageUrl,
        description,
        completedYear,
        completedMonth,
      }))
      .catch(({ message }) => res.status(404).send({ message }));
  },
};
