var HttpClient = require('./HttpClient.js');

function EvolineAPI(acessToken) {
  this.options = {
    host: 'api.evoline.com.br',
    headers: {
      'Access-Token': acessToken
    }
  }

  this.http = new HttpClient(this.options);
}

/* CONTA */

EvolineAPI.prototype.consultaSaldo = function(){
  return this.http.request('/saldo', 'GET', {});
}

EvolineAPI.prototype.minhaConta = function(){
  return this.http.request('/conta', 'GET', {});
}

EvolineAPI.prototype.atualizaDadosConta = function(dados){
  var body = {
    nome: dados.nome,
    login: dados.login,
    senha: dados.senha,
    cpf_cnpj: dados.cpf_cnpj,
    telefone: dados.telefone
  };

  return this.http.request('/conta', 'PUT', body);
}

/* CHAMADA */

EvolineAPI.prototype.enviaChamada = function(numero_origem, numero_destino,
  gravar_audio, bina_origem){

  var body = {
    numero_origem: numero_origem,
    numero_destino: numero_destino,
    gravar_audio: !!gravar_audio,
    bina_origem: bina_origem
  }

  return this.http.request('/chamada', 'POST', body);
}

EvolineAPI.prototype.cancelaChamada = function(chamadaId){
  return this.http.request('/chamada/' + chamadaId, 'DELETE');
}

EvolineAPI.prototype.statusChamada = function(chamadaId){
  return this.http.request('/chamada/' + chamadaId, 'GET');
}

EvolineAPI.prototype.relatorioChamadas = function(chamadaId){
  return this.http.request('/chamada/relatorio?data_inicio=' + dataInicio +
                           '&data_fim=' + dataFim, 'GET');
}

/* SMS */

EvolineAPI.prototype.enviaSMS = function(numero_destino, mensagem){
  return this.http.request('/sms', 'POST', {
    numero_destino: numero_destino,
    mensagem: mensagem,
  });
}

EvolineAPI.prototype.statusSMS = function(smsId){
  return this.http.request('/sms/' + smsId);
}

EvolineAPI.prototype.relatorioSMS = function(dataInicio, dataFim){
  return this.http.request('/sms/relatorio?data_inicio=' + dataInicio +
                           '&data_fim=' + dataFim, 'GET');
}

/* TTS */

EvolineAPI.prototype.enviaTTS = function(numero_destino, mensagem, velocidade,
  resposta_usuario){

  var body = {
    numero_destino: numero_destino,
    mensagem: mensagem,
    velocidade: velocidade,
    resposta_usuario: resposta_usuario
  };

  return this.http.request('/tts/', 'POST', body);
}

EvolineAPI.prototype.statusTTS = function(ttsIs){
  return this.http.request('/tts/' + ttsIs, 'GET');
}

EvolineAPI.prototype.relatorioTTS = function(dataInicio, dataFim){
  return this.http.request('/tts/relatorio?data_inicio=' + dataInicio +
                           '&data_fim=' + dataFim, 'GET');
}

/* Audio */

EvolineAPI.prototype.enviaAudio = function(numero_destino, url_audio,
  resposta_usuario){

  var body = {
    numero_destino: numero_destino,
    url_audio: url_audio,
    resposta_usuario: !!resposta_usuario
  }

  return this.http.request('/audio/', 'POST', body);
}

EvolineAPI.prototype.statusAudio = function(audioId) {
  return this.http.request('/audio/' + audioId, 'GET');
}

EvolineAPI.prototype.relatorioAudio = function(dataInicio, dataFim) {
  return this.http.request('/audio/relatorio?data_inicio=' + dataInicio +
                          '&data_fim=' + dataFim, 'GET');
}

module.exports = EvolineAPI;
