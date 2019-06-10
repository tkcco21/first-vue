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
      console.log('===============================');
    }).catch(({ message }) => res.status(400).send({ message }));
  },
};
