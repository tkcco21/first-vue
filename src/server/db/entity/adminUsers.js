import { adminUsers as AdminUsers } from '@Server/db/models';

export default {
  findOne(username) {
    return new Promise((resolve, reject) => {
      AdminUsers.findOne({ where: { username } }).then(user => {
        resolve({ user: JSON.parse(JSON.stringify(user)) });
      }).catch(err => {
        reject(new Error(err.message));
      });
    });
  },

  create(user) {
    return new Promise(() => {
      AdminUsers.create(user).then((data) => {
        console.log(JSON.parse(JSON.stringify(data)));
      }).catch((err) => {
        console.error(err.message);
      })
    });
  }
};
