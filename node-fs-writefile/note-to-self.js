import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const data = new Uint8Array(Buffer.from(`${process.argv[2]}\n`));
writeFile('note.txt', data, err => {
  if (err) throw err;
});
