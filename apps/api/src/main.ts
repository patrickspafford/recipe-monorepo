import * as express from 'express';
import { Recipe } from '@patandzeb/api-interfaces';

const app = express();
app.use(express.json())

const greeting: Recipe[] = [
  { 'MySecondRecipe': ['Welcome to api!', 'Yes'] },
];

app.get('/api', (req, res) => {
  res.send(greeting);
});

app.post('/api', (req, res) => {
  const addedRecipe = req.body
  greeting.push(addedRecipe)
  console.log(greeting)
  res.send(JSON.stringify(addedRecipe))
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
