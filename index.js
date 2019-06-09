// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World 324\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

// router.get('/', (req, res) => res.sendFile('/Users/laurenabramsky/code/portfolio/index.html'));

app.use('/', router);
// app.listen(process.env.port || 3000);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
