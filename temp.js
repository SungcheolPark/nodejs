const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', (req, res) => res.send('Hello World!'))

var seq = 0

app.get('/update', function(req, res) {

        fs.appendFile('data.csv', Object.values(req.query) + "\r\n", function (err) {
                if (err) throw err
                console.log("%j", req.query)
		
		res.end("Got "+String(seq++) +" "+ JSON.stringify(req.query))
        });
})

app.get('/get', function(req, res) {

	fs.readFile('data.csv', 'utf8', function(err, data) {
		
		console.log(data)		
		res.send(data)
			
	});
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
