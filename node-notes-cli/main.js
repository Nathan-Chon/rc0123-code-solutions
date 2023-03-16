import { readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

const data = JSON.parse(readFileSync('./data.json'));

if (process.argv[2] === 'read') {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
} else if (process.argv[2] === 'create') {
  data.notes[data.nextId.toString()] = process.argv[3];
  data.nextId++;
  try {
    await writeFile('./data.json', JSON.stringify(data, null, 2), { encoding: 'utf-8' });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
} else if (process.argv[2] === 'update') {
  data.notes[process.argv[3].toString()] = process.argv[4];
  try {
    await writeFile('./data.json', JSON.stringify(data, null, 2), { encoding: 'utf-8' });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
} else if (process.argv[2] === 'delete') {
  delete data.notes[process.argv[3].toString()];
  data.nextId--;
  try {
    await writeFile('./data.json', JSON.stringify(data, null, 2), { encoding: 'utf-8' });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
