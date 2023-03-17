import express from 'express';

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const app = express();

const array = [];

app.use((req, res, next) => {

  array.push(grades[12]);
  array.push(grades[47]);
  array.push(grades[273]);

  res.json(array);
  next();
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
