# EvolineAPI-NodeJS
Lib JavaScript para integração no NodeJS  com a API Evoline

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
