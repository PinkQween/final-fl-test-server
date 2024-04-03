import express from 'express';
import path from 'path';

const app = express();

__dirname = path.resolve(path.dirname(''));

const port = process.env.PORT || 80;

app.use('/', express.static('public'))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/vite-app/dist/index.html')
})

app.listen(port, () => {
  console.log('Express server running on port: ' + port);
});