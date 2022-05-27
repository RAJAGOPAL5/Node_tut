const {createReadStream} = require("fs");
const stream = createReadStream("./content/subfolder/big.txt",{HighWaterMark:90000});

stream.on('data',(result)=>
{
    console.log(result);
});