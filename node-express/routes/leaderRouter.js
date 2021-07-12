const express = require('express');
const bodyParser = require('body-parser');

const leadRouter = express.Router();

leadRouter.use(bodyParser.json());

leadRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Conten-Type', 'text/plain');
    next();
}).get((req, res, next)=>{
    res.end('Will send all the leaders to you!');
}).post((req, res, next)=> {
    res.end(`We will add the lead ${req.body.name} with detail ${req.body.description}` );
}).put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
 }).delete((req, res, next) => {
      res.end('Deleting all leaders');
});

leadRouter.route('/:leadId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Conten-Type', 'text/plain');
    next();
}).post((req , res, next)=>{
    res.statusCode = 403;
    res.end(`POST operation not supported on /leaders/ ${req.params.leadId}`);
}).put((req, res, next) => {
    res.write(`Updating the lead ${req.params.leadId} `);
    res.end(`Will update the lead ${req.leadId} with description ${req.body.description}`);   
}).delete((req, res, next) => {
    res.end('Deleting lead: ' + req.params.leadId);
});

module.exports = leadRouter;