const fs = require('fs');

//sync
// fs.writeFileSync('./demo.txt', 'Hello World');

//Async
// fs.writeFile('./demo.txt', "Hello World Async", (err) => { console.log(err); }); 

// let content = fs.readFileSync("./contact.txt", "utf-8");

// console.log(content);

// fs.readFile("./contact.txt", "utf-8", (err, data) => {
//     if (err)
//         throw err;
//     console.log(data);
// });

// fs.appendFile('./demo.txt', '\tTrying to append data\n', (err) => console.log(err));


// fs.cp("./demo.txt", "./copyDemo2.txt", (err) => console.log(err));

// fs.unlinkSync("./copyDemo2.txt");

// console.log(fs.statSync("./demo.txt"));

// fs.mkdirSync("Practice");

fs.mkdirSync("create-dir-demo/x/y/", { recursive: true });