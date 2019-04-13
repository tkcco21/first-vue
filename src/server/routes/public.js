import express from 'express';

const router = express.Router();

router.get('/*', (req, res) => {
  res.render('public', { title: 'first-vue for public users'});
});

module.exports = router;
