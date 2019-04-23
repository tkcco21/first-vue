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
