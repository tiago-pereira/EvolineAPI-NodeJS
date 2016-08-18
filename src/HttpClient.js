var qs = require('querystring');
var https = require('https');
var Promise = require('bluebird');

function HttpClient(options){
    this.options = options;
}

HttpClient.prototype.request = function(path, method, body){
    var isGetDelete = method === 'GET' || method === 'DELETE';

    var options = JSON.parse(JSON.stringify(this.options));
    options.method = method;
    options.path = path;
    var data = qs.stringify(body);
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    options.headers['Content-Length'] = Buffer.byteLength(data);

    var promise = new Promise(function(resolve, reject){
      var req = https.request(options, function(res) {
          var response = '';

          res.on('data', function chunk(chunk) {
            response = response + chunk;
          });

          res.on('end', function end() {
              if (res.statusCode >= 500) {
                  reject(new Error('Oops unknown error!'));
              } else if (res.statusCode >= 400) {
                  var parsed = JSON.parse(response);
                  reject(new Error(parsed.message), parsed);
              } else if (res.statusCode == 204){
                  reject(null, {});
              }
              else {
                  resolve(JSON.parse(response));
              }
          })
      });

      req.on('error', function(e) {
        reject(e);
      });

      if (!isGetDelete) {
          req.write(data);
      }

      req.end();
    });

    return promise;
}

module.exports = HttpClient;
