import { books as Books } from '@Server/db/models';

const books = {
  findAll(req, res) {
    return new Promise((resolve, reject) => {
      try {
        Books.findAll().then((data) => {
          resolve({ books: JSON.parse(JSON.stringify(data)) });
        });
      } catch(err) {
        reject(new Error(err.message));
      }
    });
  },
  create(req, res) {
    try {
      const { item_url, description, completed_at } = req.body;
      Books.create({
        item_url,
        description,
        completed_at,
      }).then((data) => {
        console.log(data);
        return res.send({ test: 'test' });
      });
    } catch(err) {
      res.send(err);
    }
  },
};

export default books;
