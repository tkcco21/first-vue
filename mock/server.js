// server.js
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
server.use(jsonServer.bodyParser);

// Add custom routes before JSON Server router
server.get('/books/:id', (req, res) => {
  const book = router.db.__wrapped__.bookDetail.find(item => req.params.id == item.id);
  res.jsonp(book);
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
