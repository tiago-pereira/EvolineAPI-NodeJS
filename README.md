# EvolineAPI-NodeJS
Lib JavaScript para integração com a API Evoline

### Exemplo
```javascript
var EvolineAPI = require('evoline-api');

var evoline = new EvolineAPI(accessToken);

evoline.consultaSaldo()
.then(function(response){
  //success
}, function(err){
  //error
});
```
