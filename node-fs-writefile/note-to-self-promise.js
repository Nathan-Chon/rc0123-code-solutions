import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

try {
  const controller = new AbortController();
  const { signal } = controller;
  const data = new Uint8Array(Buffer.from(`${process.argv[2]}\n`));
  const promise = writeFile('note2.txt', data, { signal });
  await promise;
} catch (err) {

  console.error(err);
}
