import config from '@Config';
import { decode } from '@Server/utils/jsonwebtoken';

export default (req, res, next) => {
  const decoded = decode(req.cookies[config.token.key]);
  if (!decoded) res.status(401).send({ message: 'サインインしてください' });

  next();
};
