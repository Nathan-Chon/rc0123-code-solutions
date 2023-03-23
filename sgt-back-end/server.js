import pg from 'pg';
import express from 'express';

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false
  }
});
const app = express();

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    // validate the "inputs" FIRST
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      // there is no way that a matching grade could be found
      // so we immediately respond to the client and STOP the code
      // with a return statement
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }
    // Ok, the input is reasonable, time to query the database.
    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;
    // 👆 We are NOT putting the user input directly into our query
    const params = [gradeId];
    // 👆 instead, we are sending the user input in a separate array.
    /*
    * Review the documentation on parameterized queries here:
    * https://node-postgres.com/features/queries#parameterized-query
    * You'll be using this technique to prevent SQL injection attacks.
    *
    * https://www.youtube.com/watch?v=_jKylhJtPmI
    */
    const result = await db.query(sql, params)
    // The query succeeded, even if nothing was found.
    // The Result object will include an array of rows.
    // See the docs on results: https://node-postgres.com/api/result
    const grade = result.rows[0];
    if (grade) {
      // the specific grade was found in the database, yay!
      res.json(grade);
    } else {
      // We could not have known ahead of time without actually querying the db,
      // but the specific grade being requested was not found in the database.
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    // the query failed for some reason
    // possibly due to a syntax error in the SQL statement
    // print the error to STDERR (the terminal) for debugging purposes
    console.error(err);
    // respond to the client with a generic 500 error message
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const array = [];
    const result = await db.query(sql)
    for (const key in result.rows) {
      array.push(result.rows[key]);
    }
    res.status(200).json(array);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occurred.'});
  }
});


app.use(express.json());

app.post('/api/grades', async (req, res) => {
  try {
    const { name, course } = req.body;
    const score = Number(req.body.score);
    if (!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('course') || !req.body.hasOwnProperty('score') || score > 100 || score < 0) {
      res.status(400).json({  error: 'Invalid content field' });
      return;
    }
    const sql = `
      insert into "grades" ("course", "name", "score")
      values ($1, $2, $3)
      returning *;
    `;
    const params = [course, name, score];
    const result = await db.query(sql, params);
    res.status(201).send(result.rows[0]);
} catch (err) {
  console.log(err);
  res.status(500).json({ error: 'An unexpected error occurred.' });
}
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const { name, course } = req.body;
    const score = Number(req.body.score);
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    } else if (!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('course') || !req.body.hasOwnProperty('score') || score > 100 || score < 0) {
      res.status(400).json({ error: 'Invalid content field' });
      return;
    }

    const sql = `
      update "grades"
        set "course" = $1,
            "name" = $2,
            "score" = $3
      where "gradeId" = $4
      returning *;
    `;
    const params = [course, name, score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0]

    if (grade) {

      res.json(grade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
})

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }
    const sql = `
      delete
      from "grades"
      where "gradeId" = $1
      returning *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params)
    const grade = result.rows[0];
    if (grade) {
      res.status(204).json(grade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
})

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
