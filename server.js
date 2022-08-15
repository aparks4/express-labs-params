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








	
// Tell the app to listen on port 4000
app.listen(4000, function() {
    console.log('Listening on port 4000');
});
