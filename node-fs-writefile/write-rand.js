import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const data = new Uint8Array(Buffer.from(`${Math.floor(Math.random() * 100)}`));
writeFile('random.txt', data, err => {
  if (err) throw err;
});
