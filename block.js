const SHA256 = require('crypto-js/sha256');
class Block{
    constructor(timestamp,lasthash,hash,data){
        this.timestamp=timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data= data;
    }

toString(){
    return `Block -
    timestamp : ${this.timestamp}
    last hash : ${this.lasthash.substring(0,10)}
    hash : ${this.hash.substring(0,10)}
    data: ${this.data}`;
    
}
 static genesis(){
     return new this('hey','00000','budddy',69);
 }
 static mineBlock(lastblock, data){
     const timestamp = Date.now();
     const lasthash = lastblock.hash;
     const hash= Block.hash(timestamp,lasthash,data);
     return new this(timestamp, lasthash,hash,data);

 }
 static hash(timestamp,lasthash,data){
     return SHA256(`${timestamp}${lasthash}${data}`).toString();
 }
}
module.exports = Block;