const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const conf = require('./conf');
// Connection URL
const url = conf.dsnmlab;

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
	assert.equal(null, err);
	console.log("Connected successfully to server");
	const cat = [{name :'livres'}, {name: 'jeux'}, {name: 'cadeaux'}];
	const collection = client.db('lami1a').collection('Category');
	// Insert some documents
collection.insertMany([...cat], function(err, result) {
		assert.equal(err, null);
		assert.equal(3, result.result.n);
		assert.equal(3, result.ops.length);
		console.log("Inserted 3 documents into the collection");
	});
	client.close();
});