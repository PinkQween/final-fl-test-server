import express from 'express';
const __dirname = import.meta.dir;

const app = express();

const port = process.env.PORT || 80;

app.use('/', express.static('www/dist'))

console.log(__dirname)
console.log(__dirname + '/www/dist/index.html')

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/www/dist/index.html')
})

app.listen(port, () => {
  console.log('Express server running on port: ' + port);
});