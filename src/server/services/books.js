import { books as Books } from '@Server/db/models';

const books = {
  findAll() {
    return new Promise((resolve, reject) => {
      Books.findAll({
        attributes: ['id', 'title', 'item_url', 'image_url', 'description', 'completed_at']
      }).then((data) => {
        resolve({ books: JSON.parse(JSON.stringify(data)) });
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
};

export default books;