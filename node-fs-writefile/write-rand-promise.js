import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

try {
  const controller = new AbortController();
  const { signal } = controller;
  const data = new Uint8Array(Buffer.from(`${Math.floor(Math.random() * 100)}`));
  const promise = writeFile('random2.txt', data, { signal });
  await promise;
} catch (err) {

  console.error(err);
}
