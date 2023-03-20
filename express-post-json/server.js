import express from 'express';

const grades = {};
const app = express();
let nextId = 1;

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const key in grades) {
    array.push(grades[key]);
  }
  res.json(array);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const object = req.body;
  object.Id = nextId;
  grades[nextId] = object;
  res.status(201).send(object);
  nextId++;
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
