const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Conten-Type', 'text/plain');
    next();
}).get((req, res, next)=>{
    res.end('Will send all the promotion to you!');
}).post((req, res, next)=> {
    res.end(`We will add the promo ${req.body.name} with detail ${req.body.description}` );
}).put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotion');
 }).delete((req, res, next) => {
      res.end('Deleting all promotion');
});

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Conten-Type', 'text/plain');
    next();
}).post((req , res, next)=>{
    res.statusCode = 403;
    res.end(`POST operation not supported on /promotion/ ${req.params.promoId}`);
}).put((req, res, next) => {
    res.write(`Updating the promo ${req.params.promoId} `);
    res.end(`Will update the promo ${req.promoId} with description ${req.body.description}`);   
}).delete((req, res, next) => {
    res.end('Deleting promo: ' + req.params.promoId);
});

module.exports = promoRouter;