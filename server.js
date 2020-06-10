const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var request = require('request');

// console.log that your server is up and running





app.use(express.static('../public'));

app.get('/token', function (req, res) {

  	var nf_token_url = "https://www.iconfinder.com/api/v3/oauth2/token";

  	request.post(nf_token_url, {
        form: {
			grant_type:'jwt_bearer',
			client_id: '2RhkwZuNXGoZFtsjGiMchUJ6xzSuWDRMPOHymKXu6zXwCsBYuRrLdBYhOGzUm1Zj',
			client_secret: 'FGi5GZBa9UDemnT9ZxhbX8l0za1g73FYaBaAXRUQgec1jTGJbAzU99jX3pT8KN6s'
	    }
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
			console.log(body);
			delete body.token_type;
			res.send(body);
		} else {
			console.log(error, response, body);
		}
	});

});

app.listen(port, function () {
  console.log('Example app listening on port 5000');
});


