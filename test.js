
// create fizzbuzz function
function fizzbuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'fizzbuzz';
    } else if (n % 3 === 0) {
        return 'fizz';
    } else if (n % 5 === 0) {
        return 'buzz';
    } else {
        return n;
    }
}
// // create http port listening to 1234 localhost port
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(fizzbuzz(15));
// }).listen(1234, ');     // localhost port 1234  
