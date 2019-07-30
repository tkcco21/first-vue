import config from '@Config';
import encrypt from '@Server/utils/hash';
import { sign, decode } from '@Server/utils/jsonwebtoken';
import adminUsers from '@Server/db/entity/adminUsers';

export default {
  checkToken(req, res) {
    const token = req.cookies[config.token.key]
    const decoded = decode(token);

    if (!decoded) return res.status(401).send({ message: 'ログインしてください。' });

    const { username } = decoded;

    adminUsers.findOne(username).then(({ user }) => {
      if (!user) throw new Error('ログインしてください。');
      res.send({ token });
    }).catch(({ message }) => res.status(400).send({ message }));
  },

  signin(req, res) {
    const { username, password } = req.body;

    // console.log(username, password);
    // const postUser = {
    //   username,
    //   password: encrypt(password),
    // };
    // adminUsers.create(postUser);

    adminUsers.findOne(username).then(({ user }) => {
      const reqEncryptedPassword = encrypt(password);

      if (!user || user.password !== reqEncryptedPassword) {
        throw new Error('違います！！');
      }

      const token = sign(username);

      if (!token) throw new Error('トークンが発行できません。');

      res
        .cookie(config.token.key, token, { maxAge: 2 * 24 * 60 * 60 * 1000 })
        .send({ token });
    }).catch(({ message }) => res.status(400).send({ message }));
  },
};
