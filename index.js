// const http=require("http");               ---old method for access  the modeule
// const fname = require("./feature");  ---old method  for access the file
//"type":"comman js"   ---The CommonJS module format specifies a way to define a module using a require()function
//                        to load modules and module.exports or exports object to expose functionality. Here is an example to demonstrate 
//                        how to use require()and module.exports :

// "type":"module"  ----The CommonJS module format specifies a way to define a module using a require()function to load modules and 
//                       module.exports or exports object to expose functionality. Here is an example to demonstrate 
//                       how to use require()and module.exports :

// import http from 'http' ;   //   ---new method for access the module
// import fs from 'fs';
// //import fname from './feature.js'
// //import { fname1,fname2 } from './feature.js'; //multiple import 
// //import fname,{fname1,fname2} from "./feature.js"  //another way to  multiple import

// // console.log(home)

// const server=http.createServer((req,res)=>{
//     // console.log("server in created")
//     // res.end('nice')
//     if(req.url==="/about"){
//         fs.readFile('./index.html',(err,home)=>{
//             console.log('read file')
//         res.end(home)})
//     }
//     else if(req.url==="/"){
//         res.end("<h1>home page</h1>")
//     }
//     else{
//         res.end("<h1>page not found</h1>")
//     }
// });
// server.listen(5000,()=>{
// console.log("server is working");
// })
