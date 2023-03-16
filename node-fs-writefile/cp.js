import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import { readFile } from 'node:fs/promises';

try {
  const controller = new AbortController();
  const { signal } = controller;
  const filePath = new URL(`./${process.argv[2]}`, import.meta.url)
  const contents = await readFile(filePath, { encoding: 'utf8' });
  const data = new Uint8Array(Buffer.from(`${contents}`));
  const promise = writeFile(`${process.argv[3]}`, data, { signal });
  await promise;
} catch (err) {

  console.error(err);
}
