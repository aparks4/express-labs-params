// Require modules
const { response } = require('express');
const express = require('express');
	
// Create the Express app
const app = express();
	
// Configure the app (app.set)
	
	
// Mount middleware (app.use)
	
	
// Mount routes
app.get('/greeting', function(req, res) {
    res.send("Hello, stranger");
});
app.get('/greeting/:name', function(req, res) {
    res.send(`What's up, ${req.params.name}`);
});


app.get('/tip/:total/:tipPercentage', function(req, res) {
    // let total = req.params.total;
    // let tipPercentage = req.params.tipPercentage / 100;
    // let answer = (total * tipPercentage).toString();
    // res.send(`${answer}`);
    res.send((req.params.total * (req.params.tipPercentage / 100)).toString());
});

app.get('/magic/:question', function(req, res) {
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let random = Math.floor(Math.random() * responses.length);
    res.send(`${req.params.question}` + '... ' + `${responses[random]}`);
    res.send(`${req.params.question}`);
});



	
// Tell the app to listen on port 4000
app.listen(4000, function() {
    console.log('Listening on port 4000');
});
