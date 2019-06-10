import jwt from 'jsonwebtoken';
import config from '../db/config/config';
import adminUsers from '@Server/db/entity/adminUsers';

export default {
  postSignin(req, res) {
    const { username, password } = req.body;
    adminUsers.findOne(username).then(({ user }) => {
      if (!user) throw new Error('ユーザーが存在しません');

      if (user.username !== username || user.password !== password) {
        throw new Error('違います！！');
      }

      console.log('===============================');
      console.log('成功！！');

      const token = jwt.sign(
        { username },
        config.secretKey,
        { expiresIn: "2 days"}
      );

      console.log(token);
      console.log('===============================');

      if (!token) throw new Error('トークンが発行できません。');

      res
        .cookie('user-token', token, { maxAge: 172800 })
        .send({ token });
    }).catch(({ message }) => res.status(400).send({ message }));
  },
};
