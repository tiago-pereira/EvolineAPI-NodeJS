# EvolineAPI-NodeJS
Lib JavaScript para integração no NodeJS com a [API](https://api.evoline.com.br/doc/) [Evoline](http://www.evoline.com.br/).

### Instalação

```bash
npm install evoline-api --save
```

### Utilização
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

### License

MIT
