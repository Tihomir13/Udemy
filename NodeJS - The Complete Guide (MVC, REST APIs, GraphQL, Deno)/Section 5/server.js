import express from 'express';

const app = express();

app.use((req, res, next) => {
  res.send('MIddle');
  next();
});

app.listen(3000, () => {
  console.log(`Listening to ${3000} port`);
});
