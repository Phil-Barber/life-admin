const querystring = require('querystring');
//var http = require('http');

const host = 'http://127.0.0.1:5000';

const optionsBase = {
  host: 'http://127.0.0.1:5000',
  port: '80',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
}

export async function submitTaskToServer(task) {
  const data = {'task': task}
  const path = '/task'
  return sendRequest('POST', path, data)
}

async function sendRequest(method, path, data = {}) {
  const result = await fetch(host+path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  }); 
  
  console.log(result);
  return result;
/*
  const req = http.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(data);
  post_req.end();
*/
}
