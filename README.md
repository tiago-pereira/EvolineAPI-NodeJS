# TotalVoice-NodeJS
Lib JavaScript para integração no NodeJS com a [API](https://api.evoline.com.br/doc/) [TotalVoice](http://www.evoline.com.br/).

### Instalação

```bash
npm install evoline-api --save
```

### Utilização
```javascript
var TotalVoice = require('evoline-api');

var totalVoice = new TotalVoice(accessToken);

totalVoice.consultaSaldo()
.then(function(response){
  //success
}, function(err){
  //error
});
```

### License

MIT
