const {readFileSync , writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./folder/first.txt' , 'utf8')
const second = readFileSync('./folder/second.txt' , 'utf8')

writeFileSync(
    `./folder/firsts_2.js` ,
    `Here is the result : ${first} , ${second}` ,
    {flag:'a'}
);

console.log('done with this task');
console.log('starting the next one');

