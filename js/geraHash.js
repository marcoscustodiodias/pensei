const privateKey = " f6503919e8cc051f57c52cf7cb7750685979997c ";
const publickey = " 7bd17ba682f6887e07c185e1bb2705ee ";

export function createHash(timeStamp) {

    const myHash = timeStamp + privateKey + publickey;
    const hashMessage = md5(myHash);
    return hashMessage;
}

import { createHash } from '.geraHash.js'
const timeStamp = Date.now().toString;
let hash = createHash(timeStamp); 