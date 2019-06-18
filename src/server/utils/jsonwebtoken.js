import config from 'config';
import jwt from 'jsonwebtoken';

export function sign(username) {
  return jwt.sign(
    { username },
    config.secretKey,
    { expiresIn: '2 days' },
  )
};

export function decode(token) {
  return jwt.decode(token);
}
