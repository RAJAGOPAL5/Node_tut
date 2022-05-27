const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on('response',(name,id)=>
{
    console.log(`The data received user name ${name} and age is ${id}.`);
});
customEmitter.on('response',() =>
{
    console.log("Some other logics here!!!");
});
customEmitter.emit('response','Rajagopal',25);