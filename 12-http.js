const http = require('http');
const server = http.createServer((req,res)=>
{
    // console.log(req);
    // res.write('hello World');
    // res.end();

if(req.url === '/')
{
res.end('Welcome To The Home');
}
else if(req.url === '/about')
{
res.end('this is the about page')

}
else
{
res.end(`<h1>ooops!!!</h1>
<p>We can't find the page</p>
<a href='/'>Back Home</a>`)
}

})
server.listen(5000);
console.log("Welcome");