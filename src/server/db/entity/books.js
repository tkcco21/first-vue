import { books as Books } from '@Server/db/models';

export default {
  findAll() {
    return new Promise((resolve, reject) => {
      Books.findAll({
        attributes: ['id', 'title', 'itemUrl', 'description', 'completedAt']
      }).then((data) => {
        resolve({ books: JSON.parse(JSON.stringify(data)) });
      }).catch((err) => {
        reject(new Error(err.message));
      });
    });
  },

  findOne(id) {
    return new Promise((resolve, reject) => {
      Books.findOne({
        where: { id },
        attributes: [
          'id',
          'title',
          'itemUrl',
          'description',
          'completedAt',
        ],
      }).then((book) => {
        resolve({ book: JSON.parse(JSON.stringify(book)) });
      }).catch((err) => {
        reject(new Error(err.message));
      });
    });
  },

  create(book) {
    return new Promise((resolve, reject) => {
      Books.create(book).then((data) => {
        resolve({ book: JSON.parse(JSON.stringify(data)) });
      }).catch((err) => {
        reject(new Error(err.message));
      });
    });
  },

  update(book) {
    return new Promise((resolve, reject) => {
      Books
        .update(book, { where: { id: book.id } })
        .then((data) => {
          resolve();
        }).catch((err) => {
          reject(new Error(err.message));
        });
    });
  },
};
