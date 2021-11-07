const Block = require('./block.js');

const foo = Block.mineBlock(Block.genesis(),'data69');
console.log(foo.toString());