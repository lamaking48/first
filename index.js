//ПЕРВАЯ ЧАСТЬ

// console.log('здарова пЧелы');
//let a = function sosisBiby(){
//    console.log( 9007199254740991+ 1);
//
//}
//setTimeout(() => {
//    console.log('Обэма');
//    a();
//    b();
//},)
//let b = function(){
//        console.log('bebra');
//}




//const namess = require('./name');
//
//const sus = require('./utils');
//
//const lose = require('./alternative-flavor');
//
//require('./mind-generate').;



//console.log(lose.singlePerson.name , lose.items[1]);
//sus('ssssas');
//sus(namess.juan);
//sus(namess.peter);

//ВТОРАЯ ЧАСТЬ

//const os = require('os');
//
//
////info about current user
//const user = os.userInfo();
//
//console.log(user);
//
////method returns the system uptime in seconds
//
//console.log(`The system uptime is ${os.uptime()} second`);
//
//
//
//const currenOS = {
//    name: os.type(),
//    release: os.release(),
//    totalMem:os.totalmem(),
//    freeMem: os.freemem()
//}
//
//console.log(currenOS);


//ТРЕТЬЯ ЧАСТЬ


//const path = require('path');
//
//console.log(path.sep)
//
//const filePath = path.join('/folder' , 'subfolder' , 'test.txt')
//
//console.log(filePath);
//
//const base = path.basename(filePath);
//console.log(base);
//
//
//const absolute = path.resolve(__dirname , '/folder' , 'subfolder' , 'test.txt');
//console.log(absolute);


//const fs = require('fs');
//fs.read


//const fs = require('fs');

//fs.readFile('./first.txt' , 'utf8', function(err , data){
//    fs.readFile('../index.js' , 'utf8' , function(err , data){
//        console.log(data);
//    });
//});

//fs.writeFile('./folder/firsts_2.js', 'console.log("sas")' , function(err){
//    console.log("Data Saved");
//
//});



//ЧЕТВЕРТАЯ ЧАСТЬ HTTP


//const http = require('http')
//
//
//const server = http.createServer((req,res)=>{
//    if(req.url === '/'){
//        res.end('Welcome to our home page');
//    };
//    if(req.url === '/about'){
//        res.end('eto about');
//    };
//    res.end(`
//    <h1>Oops!</h1>
//    <p>We can't to seem to find the page you are looking for</p>
//    <a href="/">back</a>
//    `);
//});
//
//server.listen(3000, 'localhost');


//ЧАСТЬ ПЯТАЯ

const lodash = require('lodash');

const items = [1, [2 , [3 , [4]]]];

const newItems = lodash.flattenDeep(items);

console.log(newItems);




















