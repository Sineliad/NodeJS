const express = require('express'),
      http = require('http'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use('/dishes', dishRouter);

app.post('/dishes/:dishId', (req , res, next)=>{
    res.statusCode = 403;
    res.end(`POST operation not supported on /dishes/ ${req.params.dishId}`);
});

app.put('/dishes/:dishId', (req, res, next) => {
    res.write(`Updating the dish ${req.params.dishId} `);
    res.end(`Will update the dish ${req.dishId} with description ${req.body.description}`);   
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});
  
const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
