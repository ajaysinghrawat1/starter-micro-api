var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('ajay rawat');
    res.end();
}).listen(process.env.PORT || 3000);



// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the first number: ', (num1) => {
//   rl.question('Enter the second number: ', (num2) => {
//     const result = parseFloat(num1) + parseFloat(num2);
//     console.log(`The sum of ${num1} and ${num2} is: ${result}`);
//     rl.close();
//   });
// });
