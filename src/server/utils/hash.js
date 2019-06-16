import crypto from 'crypto';

export default (str) => {
  const sha256 = crypto.createHash('sha256');

  sha256.update(str);
  return sha256.digest('hex');
}