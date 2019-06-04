import adminUsers from '@Server/db/entity/adminUsers';

export default {
  postSignin(req, res) {
    const { username } = req.body;
    adminUsers.findOne(username).then(({ user }) => {
      if (!user) throw new Error('ユーザーが存在しません');
      console.log('===========================');
      console.log(user);
      console.log('===========================');
    }).catch(({ message }) => res.status(400).send({ message }));
  },
};
