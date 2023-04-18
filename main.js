const Block = require('./Block');
const Blockchain = require('./Blockchain');


const blockchain = new Blockchain("cadenita","000");
blockchain.addBlock("texto"); 
console.log(blockchain);
