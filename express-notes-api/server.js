import express from 'express';

const notes = {
  1: {
    content: 'The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.',
    id: 1
  },
  2: {
    content: 'Prototypal inheritance is how JavaScript objects delegate behavior.',
    id: 2
  },
  3: {
    content: 'In JavaScript, the value of `this` is determined when a function is called; not when it is defined.',
    id: 3
  },
  4: {
    content: 'A closure is formed when a function retains access to variables in its lexical scope.',
    id: 4
  }

};

const app = express();
let nextId = 5;

app.get('/api/notes', (req, res) => {
  const array = [];
  for (const key in notes) {
    array.push(notes[key]);
  }
  res.json(array);
});

app.get('/api/notes/:id', (req, res) => {
  if (Number(req.params.id) <= 0 || isNaN(Number(req.params.id))) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  } else if (!notes[Number(req.params.id)]) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    return;
  }
  res.status(200).json(notes[Number(req.params.id)]);

});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (Object.keys(req.body).toString() !== 'content') {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  const object = req.body;
  object.Id = nextId;
  notes[nextId] = object;
  res.status(201).send(object);
  nextId++;
});

app.delete('/api/notes/:id', (req, res) => {
  if (Number(req.params.id) <= 0 || isNaN(Number(req.params.id))) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  } else if (!notes[Number(req.params.id)]) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    return;
  }
  delete notes[Number(req.params.id)];
  res.sendStatus(204);
});

app.put('/api/notes/:id', (req, res) => {
  if (Number(req.params.id) <= 0 || isNaN(Number(req.params.id))) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  } else if (!notes[Number(req.params.id)]) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    return;
  } else if (Object.keys(req.body).toString() !== 'content') {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  notes[Number(req.params.id)].content = req.body.content;
  res.status(200).json(notes[Number(req.params.id)]);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
