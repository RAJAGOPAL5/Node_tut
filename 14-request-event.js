const http = require("http");
const server  = http.createServer();

    server.on('request',(req,res)=>
    {
        res.end("Welcome");
        console.log("your server start running on port 5000");
    });
server.listen(5000);