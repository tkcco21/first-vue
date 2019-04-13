import express from 'express';

const router = express.Router();

router.get('/*', (req, res) => {
  res.render('admin', { title: 'first-vue for admin users'});
});

module.exports = router;
