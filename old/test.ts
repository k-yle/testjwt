import * as util from 'util';
import * as jwt from 'jsonwebtoken';


const func = util.promisify(jwt.verify);

async function main() {
  await func('my token', 'my secret');
}

main();
