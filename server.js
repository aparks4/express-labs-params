// Require modules
const express = require('express');
	
// Create the Express app
const app = express();
	
// Configure the app (app.set)
	
	
// Mount middleware (app.use)
	
	
// Mount routes
app.get('/greeting', function(req, res) {
    res.send("Hello, stranger");
});
app.get('/greeting/:name', function(req, res, name) {
    res.send(`What's up, ${req.params.name}`);
});


app.get('/tip/:total/:tipPercentage', function(req, res) {
    // let total = req.params.total;
    // let tipPercentage = req.params.tipPercentage / 100;
    // let answer = (total * tipPercentage).toString();
    // res.send(`${answer}`);
    res.send((req.params.total * (req.params.tipPercentage / 100)).toString());
});





	
// Tell the app to listen on port 4000
app.listen(4000, function() {
    console.log('Listening on port 4000');
});
