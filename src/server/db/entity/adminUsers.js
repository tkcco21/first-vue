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
};
