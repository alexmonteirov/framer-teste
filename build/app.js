(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/* Utilitários */
var InputLayer, action_forgot, action_have_account, action_new_account, back, background_login, btn_login, cadastro_1, cadastro_2, cadastro_3, cadastro_4, cep, checkbox, cidade, cnpj, confirmacao, confirmar, data, email, envelope, estado, fax, final, form_text, form_text_white, gero_btn_null, gero_btn_orange, gero_btn_white, gero_logo, gero_logo_white, homepage, inputTextStyle, inputTextStyleWhite, input_forget, input_nova_senha, input_repetir_senha, input_senha, input_user, login, login_btn, logradouro, next, nome, nova_senha, page, pais, pass_recover, progress_1, progress_2, progress_3, progress_4, razao_social, rectangle, reenvio, repetir_senha, senha, tel_1, tel_2, termos, text, text_big, text_button_orange, text_button_white, text_login, text_pass, texto, voltar, voltar_login, website,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

InputLayer = require("input").InputLayer;

Framer.Device.customize({
  deviceType: Framer.Device.Type.Tablet,
  screenWidth: 1024,
  screenHeight: 600,
  deviceImage: "http://f.cl.ly/items/001L0v3c1f120t0p2z24/custom.png",
  deviceImageWidth: 1024,
  deviceImageHeight: 600,
  devicePixelRatio: 1
});

Framer.Device.setOrientation(0, true);

page = new PageComponent({
  width: Screen.width,
  height: Screen.height,
  scrollHorizontal: false,
  scrollVertical: false
});

inputTextStyle = {
  "font-size": "14px",
  "font-style": "normal",
  "font-weight": "normal",
  "text-align": "left",
  "position": "absolute",
  "color": "#555555",
  "font-family": "'Roboto', sans-serif",
  "border-bottom-style": "solid",
  "border-bottom-color": "#FF6D00",
  "border-bottom-width": "1px",
  "height": "auto",
  "background": "#FFFFFF"
};

inputTextStyleWhite = {
  "font-size": "14px",
  "font-style": "normal",
  "font-weight": "normal",
  "text-align": "left",
  "position": "absolute",
  "color": "#FFFFFF",
  "background": "transparent",
  "font-family": "'Roboto', sans-serif",
  "border-bottom-style": "solid",
  "border-bottom-color": "#FFFFFF",
  "border-bottom-width": "1px",
  "height": "auto"
};

text_button_orange = {
  "font-family": "'Roboto', sans-serif",
  "font-style": "normal",
  "font-weight": "bold",
  "line-height": "normal",
  "font-size": "14px",
  "color": "#FF6D00",
  "height": "auto",
  "background": "transparent",
  "padding-top": "7px"
};

text_button_white = {
  "font-family": "'Roboto', sans-serif",
  "font-style": "normal",
  "font-weight": "bold",
  "line-height": "normal",
  "font-size": "14px",
  "color": "#FFFFFF",
  "height": "auto",
  "background": "transparent",
  "padding-top": "7px"
};

text_login = {
  "font-family": "'Roboto', sans-serif",
  "font-style": "normal",
  "font-weight": "bold",
  "line-height": "normal",
  "font-size": "14px",
  "color": "#FF6D00",
  "background": "#FFFFFF"
};

text_pass = {
  "font-family": "'Roboto', sans-serif",
  "font-style": "normal",
  "font-weight": "bold",
  "line-height": "normal",
  "font-size": "14px",
  "color": "#FFFFFF",
  "background": "transparent"
};

background_login = {
  "background": "linear-gradient(90deg, #FF3D00 0%, #FF6D00 100%)"
};

gero_btn_orange = (function(superClass) {
  extend(gero_btn_orange, superClass);

  function gero_btn_orange(options) {
    gero_btn_orange.__super__.constructor.call(this, options);
    this.height = 38;
    this.backgroundColor = "FF6D00";
    this.borderRadius = 4;
  }

  return gero_btn_orange;

})(Layer);

gero_btn_white = (function(superClass) {
  extend(gero_btn_white, superClass);

  function gero_btn_white(options) {
    gero_btn_white.__super__.constructor.call(this, options);
    this.height = 38;
    this.backgroundColor = "FFFFFF";
    this.borderRadius = 4;
    this.borderWidth = 1;
    this.borderColor = "FF6D00";
    this.borderStyle = "solid";
    this.color = "FF6D00";
  }

  return gero_btn_white;

})(Layer);

gero_btn_null = (function(superClass) {
  extend(gero_btn_null, superClass);

  function gero_btn_null(options) {
    gero_btn_null.__super__.constructor.call(this, options);
    this.height = 38;
    this.backgroundColor = "transparent";
    this.borderRadius = 4;
    this.borderWidth = 1;
    this.borderColor = "FFFFFF";
    this.borderStyle = "solid";
  }

  return gero_btn_null;

})(Layer);

form_text = (function(superClass) {
  extend(form_text, superClass);

  function form_text(options) {
    form_text.__super__.constructor.call(this, options);
    this.height = 30;
    this.background = "FFFFFF";
  }

  return form_text;

})(Layer);

form_text_white = (function(superClass) {
  extend(form_text_white, superClass);

  function form_text_white(options) {
    form_text_white.__super__.constructor.call(this, options);
    this.height = 30;
    this.backgroundColor = "transparent";
  }

  return form_text_white;

})(Layer);

homepage = new Layer({
  width: page.width,
  height: page.height,
  parent: page.content,
  image: "images/homepage.png"
});

login_btn = new Layer({
  width: 100,
  height: 40,
  x: 913,
  y: 35,
  opacity: 0,
  parent: homepage
});

login_btn.on(Events.Click, function() {
  var animationOptions;
  return page.snapToPage(login, animationOptions = {
    curve: "Spring (damping: 0.5)",
    time: 0.5
  });
});

login = new Layer({
  width: page.width,
  height: page.height
});

login.style = background_login;

rectangle = new Layer({
  x: 337,
  y: 140,
  width: 350,
  height: 320,
  parent: login,
  backgroundColor: "FFFFFF"
});

gero_logo = new Layer({
  width: 196,
  height: 102,
  x: 414,
  y: 157,
  image: "images/gero-logo-orange.png",
  parent: login
});

input_user = new InputLayer({
  x: 362,
  y: 269,
  width: 300,
  text: "E-mail"
});

input_senha = new form_text({
  x: 362,
  y: 319,
  width: 300,
  html: "Senha",
  style: inputTextStyle,
  originY: 1
});

action_forgot = new Layer({
  width: 150,
  height: 14,
  x: 362,
  y: 425,
  parent: login
});

action_forgot.html = "Esqueceu a senha?";

action_forgot.style = text_login;

action_new_account = new Layer({
  width: 78,
  height: 14,
  x: 584,
  y: 425,
  parent: login
});

action_new_account.html = "Nova conta";

action_new_account.style = text_login;

btn_login = new gero_btn_orange({
  width: 300,
  x: 362,
  y: 365,
  parent: login
});

texto = new form_text_white({
  width: 50,
  parent: btn_login
});

texto.center();

texto.html = "LOGIN";

texto.style = text_button_white;

action_forgot.on(Events.Click, function() {
  return page.snapToPage(pass_recover, false);
});

action_new_account.on(Events.Click, function() {
  return page.snapToPage(cadastro_1, false);
});

pass_recover = new Layer({
  width: page.width,
  height: page.height
});

pass_recover.style = background_login;

gero_logo_white = new Layer({
  width: 190,
  height: 102,
  x: 417,
  y: 117,
  image: "images/gero-logo-white.png",
  parent: pass_recover
});

text = new Layer({
  width: 150,
  height: 14,
  x: 401,
  y: 227,
  parent: pass_recover
});

text.html = "Esqueceu a senha?";

text.style = text_pass;

text_big = new Layer({
  width: 240,
  height: 30,
  x: 401,
  y: 251,
  parent: pass_recover
});

text_big.html = "Preencha seu e-mail, te enviaremos um link para criar uma nova senha.";

text_big.style = text_pass;

input_forget = new form_text_white({
  width: 240,
  x: 401,
  y: 287,
  parent: pass_recover
});

texto = new form_text_white({
  width: 240,
  parent: input_forget
});

texto.html = "E-mail";

texto.style = inputTextStyleWhite;

nova_senha = new gero_btn_white({
  width: 100,
  x: 542,
  y: 337,
  parent: pass_recover
});

texto = new form_text_white({
  width: 93,
  parent: nova_senha
});

texto.center();

texto.html = "NOVA SENHA";

texto.style = text_button_orange;

voltar = new gero_btn_null({
  width: 100,
  x: 401,
  y: 337,
  parent: pass_recover
});

texto = new form_text_white({
  width: 50,
  parent: voltar
});

texto.center();

texto.html = "VOLTAR";

texto.style = text_button_white;

voltar.on(Events.Click, function() {
  return page.snapToPage(login, false);
});

nova_senha.on(Events.Click, function() {
  return page.snapToPage(reenvio, false);
});

reenvio = new Layer({
  width: page.width,
  height: page.height,
  image: "images/reenvio.png"
});

envelope = new Layer({
  width: 83,
  height: 76,
  x: 690,
  y: 404,
  image: "images/envelope.png",
  parent: reenvio
});

voltar_login = new gero_btn_white({
  width: 210,
  x: 407,
  y: 326,
  parent: reenvio
});

texto = new form_text_white({
  width: 165,
  parent: voltar_login
});

texto.center();

texto.html = "VOLTAR PARA O LOGIN";

texto.style = text_button_orange;

voltar_login.on(Events.Click, function() {
  return page.snapToPage(login, false);
});

envelope.on(Events.Click, function() {
  return page.snapToPage(confirmacao, false);
});

confirmacao = new Layer({
  width: page.width,
  height: page.height
});

confirmacao.style = background_login;

input_nova_senha = new form_text_white({
  width: 300,
  x: 405,
  y: 254,
  parent: confirmacao
});

texto = new form_text_white({
  width: 300,
  parent: input_nova_senha
});

texto.html = "Nova senha";

texto.style = inputTextStyleWhite;

input_repetir_senha = new form_text_white({
  width: 300,
  x: 405,
  y: 304,
  parent: confirmacao
});

texto = new form_text_white({
  width: 300,
  parent: input_repetir_senha
});

texto.html = "Repetir nova senha";

texto.style = inputTextStyleWhite;

confirmar = new gero_btn_white({
  width: 300,
  x: 406,
  y: 354,
  parent: confirmacao
});

texto = new form_text_white({
  width: 100,
  parent: confirmar
});

texto.center();

texto.html = "CONFIRMAR";

texto.style = text_button_orange;

gero_logo_white = new Layer({
  width: 190,
  height: 102,
  x: 417,
  y: 117,
  image: "images/gero-logo-white.png",
  parent: confirmacao
});

confirmar.on(Events.Click, function() {
  return page.snapToPage(login, false);
});

cadastro_1 = new Layer({
  width: page.width,
  height: page.height
});

cadastro_1.style = background_login;

rectangle = new Layer({
  x: 337,
  y: 77,
  width: 350,
  height: 447,
  parent: cadastro_1,
  backgroundColor: "FFFFFF"
});

action_have_account = new Layer({
  width: 130,
  height: 14,
  x: 444,
  y: 491,
  parent: cadastro_1
});

action_have_account.html = "Já tem uma conta?";

action_have_account.style = text_login;

cnpj = new form_text({
  width: 300,
  x: 362,
  y: 204,
  parent: cadastro_1
});

texto = new form_text({
  width: 300,
  parent: cnpj
});

texto.html = "Cnpj";

texto.style = inputTextStyle;

razao_social = new form_text({
  width: 300,
  x: 362,
  y: 254,
  parent: cadastro_1
});

texto = new form_text({
  width: 300,
  parent: razao_social
});

texto.html = "Razão social";

texto.style = inputTextStyle;

nome = new form_text({
  width: 300,
  x: 362,
  y: 304,
  parent: cadastro_1
});

texto = new form_text({
  width: 300,
  parent: nome
});

texto.html = "Nome";

texto.style = inputTextStyle;

data = new form_text({
  width: 300,
  x: 362,
  y: 354,
  parent: cadastro_1
});

texto = new form_text({
  width: 300,
  parent: data
});

texto.html = "Data de fundação";

texto.style = inputTextStyle;

gero_logo = new Layer({
  width: 196,
  height: 102,
  x: 414,
  y: 92,
  image: "images/gero-logo-orange.png",
  parent: cadastro_1
});

progress_1 = new Layer({
  width: 215,
  height: 10,
  x: 394,
  y: 404,
  image: "images/progress_1.png",
  parent: cadastro_1
});

back = new gero_btn_white({
  width: 100,
  x: 362,
  y: 434,
  parent: cadastro_1
});

texto = new form_text_white({
  width: 50,
  parent: back
});

texto.center();

texto.html = "VOLTAR";

texto.style = text_button_orange;

next = new gero_btn_orange({
  width: 100,
  x: 562,
  y: 434,
  parent: cadastro_1
});

texto = new form_text_white({
  width: 70,
  parent: next
});

texto.center();

texto.html = "AVANÇAR";

texto.style = text_button_white;

action_have_account.on(Events.Click, function() {
  return page.snapToPage(login, false);
});

back.on(Events.Click, function() {
  return page.snapToPage(login, false);
});

next.on(Events.Click, function() {
  return page.snapToPage(cadastro_2, false);
});

cadastro_2 = new Layer({
  width: page.width,
  height: page.height
});

cadastro_2.style = background_login;

rectangle = new Layer({
  x: 337,
  y: 77,
  width: 350,
  height: 447,
  parent: cadastro_2,
  backgroundColor: "FFFFFF"
});

action_have_account = new Layer({
  width: 130,
  height: 14,
  x: 444,
  y: 491,
  parent: cadastro_2
});

action_have_account.html = "Já tem uma conta?";

action_have_account.style = text_login;

cep = new form_text({
  width: 300,
  x: 362,
  y: 204,
  parent: cadastro_2
});

texto = new form_text({
  width: 300,
  parent: cep
});

texto.html = "Cep";

texto.style = inputTextStyle;

logradouro = new form_text({
  width: 300,
  x: 362,
  y: 254,
  parent: cadastro_2
});

texto = new form_text({
  width: 300,
  parent: logradouro
});

texto.html = "Endereço";

texto.style = inputTextStyle;

cidade = new form_text({
  width: 140,
  x: 362,
  y: 304,
  parent: cadastro_2
});

texto = new form_text({
  width: 140,
  parent: cidade
});

texto.html = "Cidade";

texto.style = inputTextStyle;

estado = new form_text({
  width: 140,
  x: 522,
  y: 304,
  parent: cadastro_2
});

texto = new form_text({
  width: 140,
  parent: estado
});

texto.html = "Estado";

texto.style = inputTextStyle;

pais = new form_text({
  width: 300,
  x: 362,
  y: 354,
  parent: cadastro_2
});

texto = new form_text({
  width: 300,
  parent: pais
});

texto.html = "País";

texto.style = inputTextStyle;

gero_logo = new Layer({
  width: 196,
  height: 102,
  x: 414,
  y: 92,
  image: "images/gero-logo-orange.png",
  parent: cadastro_2
});

progress_2 = new Layer({
  width: 215,
  height: 10,
  x: 394,
  y: 404,
  image: "images/progress_2.png",
  parent: cadastro_2
});

back = new gero_btn_white({
  width: 100,
  x: 362,
  y: 434,
  parent: cadastro_2
});

texto = new form_text_white({
  width: 50,
  parent: back
});

texto.center();

texto.html = "VOLTAR";

texto.style = text_button_orange;

next = new gero_btn_orange({
  width: 100,
  x: 562,
  y: 434,
  parent: cadastro_2
});

texto = new form_text_white({
  width: 70,
  parent: next
});

texto.center();

texto.html = "AVANÇAR";

texto.style = text_button_white;

action_have_account.on(Events.Click, function() {
  return page.snapToPage(login, false);
});

back.on(Events.Click, function() {
  return page.snapToPage(cadastro_1, false);
});

next.on(Events.Click, function() {
  return page.snapToPage(cadastro_3, false);
});

cadastro_3 = new Layer({
  width: page.width,
  height: page.height
});

cadastro_3.style = background_login;

rectangle = new Layer({
  x: 337,
  y: 77,
  width: 350,
  height: 447,
  parent: cadastro_3,
  backgroundColor: "FFFFFF"
});

action_have_account = new Layer({
  width: 130,
  height: 14,
  x: 444,
  y: 491,
  parent: cadastro_3
});

action_have_account.html = "Já tem uma conta?";

action_have_account.style = text_login;

tel_1 = new form_text({
  width: 300,
  x: 362,
  y: 204,
  parent: cadastro_3
});

texto = new form_text({
  width: 300,
  parent: tel_1
});

texto.html = "Telefone 1";

texto.style = inputTextStyle;

tel_2 = new form_text({
  width: 300,
  x: 362,
  y: 254,
  parent: cadastro_3
});

texto = new form_text({
  width: 300,
  parent: tel_2
});

texto.html = "Telefone 2";

texto.style = inputTextStyle;

fax = new form_text({
  width: 300,
  x: 362,
  y: 304,
  parent: cadastro_3
});

texto = new form_text({
  width: 300,
  parent: fax
});

texto.html = "Fax";

texto.style = inputTextStyle;

website = new form_text({
  width: 300,
  x: 362,
  y: 354,
  parent: cadastro_3
});

texto = new form_text({
  width: 300,
  parent: website
});

texto.html = "Website";

texto.style = inputTextStyle;

gero_logo = new Layer({
  width: 196,
  height: 102,
  x: 414,
  y: 92,
  image: "images/gero-logo-orange.png",
  parent: cadastro_3
});

progress_3 = new Layer({
  width: 215,
  height: 10,
  x: 394,
  y: 404,
  image: "images/progress_3.png",
  parent: cadastro_3
});

back = new gero_btn_white({
  width: 100,
  x: 362,
  y: 434,
  parent: cadastro_3
});

texto = new form_text_white({
  width: 50,
  parent: back
});

texto.center();

texto.html = "VOLTAR";

texto.style = text_button_orange;

next = new gero_btn_orange({
  width: 100,
  x: 562,
  y: 434,
  parent: cadastro_3
});

texto = new form_text_white({
  width: 70,
  parent: next
});

texto.center();

texto.html = "AVANÇAR";

texto.style = text_button_white;

action_have_account.on(Events.Click, function() {
  return page.snapToPage(login, false);
});

back.on(Events.Click, function() {
  return page.snapToPage(cadastro_2, false);
});

next.on(Events.Click, function() {
  return page.snapToPage(cadastro_4, false);
});

cadastro_4 = new Layer({
  width: page.width,
  height: page.height
});

cadastro_4.style = background_login;

rectangle = new Layer({
  x: 337,
  y: 77,
  width: 350,
  height: 447,
  parent: cadastro_4,
  backgroundColor: "FFFFFF"
});

action_have_account = new Layer({
  width: 130,
  height: 14,
  x: 444,
  y: 491,
  parent: cadastro_4
});

action_have_account.html = "Já tem uma conta?";

action_have_account.style = text_login;

email = new form_text({
  width: 300,
  x: 362,
  y: 204,
  parent: cadastro_4
});

texto = new form_text({
  width: 300,
  parent: email
});

texto.html = "E-mail";

texto.style = inputTextStyle;

senha = new form_text({
  width: 300,
  x: 362,
  y: 254,
  parent: cadastro_4
});

texto = new form_text({
  width: 300,
  parent: senha
});

texto.html = "Senha";

texto.style = inputTextStyle;

repetir_senha = new form_text({
  width: 300,
  x: 362,
  y: 304,
  parent: cadastro_4
});

texto = new form_text({
  width: 300,
  parent: repetir_senha
});

texto.html = "Repetir senha";

texto.style = inputTextStyle;

checkbox = new Layer({
  width: 120,
  height: 20,
  x: 364,
  y: 359,
  image: "images/termos.png",
  parent: cadastro_4
});

termos = new Layer({
  x: 459,
  y: 353,
  width: 140,
  height: 14,
  parent: cadastro_4
});

termos.html = "Termos e Condições";

termos.style = text_button_orange;

gero_logo = new Layer({
  width: 196,
  height: 102,
  x: 414,
  y: 92,
  image: "images/gero-logo-orange.png",
  parent: cadastro_4
});

progress_4 = new Layer({
  width: 215,
  height: 10,
  x: 394,
  y: 404,
  image: "images/progress_4.png",
  parent: cadastro_4
});

back = new gero_btn_white({
  width: 100,
  x: 362,
  y: 434,
  parent: cadastro_4
});

texto = new form_text_white({
  width: 50,
  parent: back
});

texto.center();

texto.html = "VOLTAR";

texto.style = text_button_orange;

final = new gero_btn_orange({
  width: 100,
  x: 562,
  y: 434,
  parent: cadastro_4
});

texto = new form_text_white({
  width: 70,
  parent: final
});

texto.center();

texto.html = "FINALIZAR";

texto.style = text_button_white;

action_have_account.on(Events.Click, function() {
  return page.snapToPage(login, false);
});

back.on(Events.Click, function() {
  return page.snapToPage(cadastro_3, false);
});

final.on(Events.Click, function() {
  return page.snapToPage(login, false);
});

page.addPage(login, "bottom");

page.addPage(pass_recover);

page.addPage(reenvio);

page.addPage(confirmacao);

page.addPage(cadastro_1);

page.addPage(cadastro_2);

page.addPage(cadastro_3);

page.addPage(cadastro_4);


},{"input":2}],2:[function(require,module,exports){
var wrapInput,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Events.EnterKey = "EnterKey";

Events.SpaceKey = "SpaceKey";

Events.BackspaceKey = "BackspaceKey";

Events.CapsLockKey = "CapsLockKey";

Events.ShiftKey = "ShiftKey";

Events.ValueChange = "ValueChange";

Events.InputFocus = "InputFocus";

Events.InputBlur = "InputBlur";

exports.InputLayer = (function(superClass) {
  extend(InputLayer, superClass);

  function InputLayer(options) {
    var base, currentValue, property, textProperties, value;
    if (options == null) {
      options = {};
    }
    this._setTextProperties = bind(this._setTextProperties, this);
    this._setPlaceholder = bind(this._setPlaceholder, this);
    _.defaults(options, {
      backgroundColor: "#FFF",
      width: 375,
      height: 60,
      padding: {
        left: 20
      },
      text: "Type something...",
      fontSize: 40,
      fontWeight: 300
    });
    if (options.multiLine) {
      if ((base = options.padding).top == null) {
        base.top = 20;
      }
    }
    this._inputElement = document.createElement("input");
    this._inputElement.style.position = "absolute";
    InputLayer.__super__.constructor.call(this, options);
    this._background = void 0;
    this._placeholder = void 0;
    this._isDesignLayer = false;
    this.input = new Layer({
      backgroundColor: "transparent",
      name: "input",
      width: this.width,
      height: this.height,
      parent: this
    });
    if (this.multiLine) {
      this._inputElement = document.createElement("textarea");
    }
    this.input._element.appendChild(this._inputElement);
    this._setTextProperties(this);
    this._inputElement.autocomplete = "off";
    this._inputElement.autocorrect = "off";
    this._inputElement.spellcheck = false;
    this._inputElement.className = "input" + this.id;
    textProperties = {
      text: this.text,
      fontFamily: this.fontFamily,
      fontSize: this.fontSize,
      lineHeight: this.lineHeight,
      fontWeight: this.fontWeight,
      color: this.color,
      backgroundColor: this.backgroundColor,
      width: this.width,
      height: this.height,
      padding: this.padding,
      parent: this.parent
    };
    for (property in textProperties) {
      value = textProperties[property];
      this.on("change:" + property, (function(_this) {
        return function(value) {
          _this._elementHTML.children[0].textContent = "";
          if (_this._isDesignLayer) {
            return;
          }
          _this._setTextProperties(_this);
          return _this._setPlaceholderColor(_this._id, _this.color);
        };
      })(this));
    }
    this._setPlaceholder(this.text);
    this._setPlaceholderColor(this._id, this.color);
    this._elementHTML.children[0].textContent = "";
    this._isFocused = false;
    this._inputElement.onfocus = (function(_this) {
      return function(e) {
        if (_this.focusColor == null) {
          _this.focusColor = "#000";
        }
        _this.emit(Events.InputFocus, event);
        return _this._isFocused = true;
      };
    })(this);
    this._inputElement.onblur = (function(_this) {
      return function(e) {
        _this.emit(Events.InputBlur, event);
        return _this._isFocused = false;
      };
    })(this);
    currentValue = void 0;
    this._inputElement.onkeydown = (function(_this) {
      return function(e) {
        currentValue = _this.value;
        if (e.which === 20) {
          _this.emit(Events.CapsLockKey, event);
        }
        if (e.which === 16) {
          return _this.emit(Events.ShiftKey, event);
        }
      };
    })(this);
    this._inputElement.onkeyup = (function(_this) {
      return function(e) {
        if (currentValue !== _this.value) {
          _this.emit("change:value", _this.value);
          _this.emit(Events.ValueChange, _this.value);
        }
        if (e.which === 13) {
          _this.emit(Events.EnterKey, event);
        }
        if (e.which === 8) {
          _this.emit(Events.BackspaceKey, event);
        }
        if (e.which === 32) {
          _this.emit(Events.SpaceKey, event);
        }
        if (e.which === 20) {
          return _this.emit(Events.CapsLockKey, event);
        }
      };
    })(this);
  }

  InputLayer.prototype._setPlaceholder = function(text) {
    return this._inputElement.placeholder = text;
  };

  InputLayer.prototype._setPlaceholderColor = function(id, color) {
    return document.styleSheets[0].addRule(".input" + id + "::-webkit-input-placeholder", "color: " + color);
  };

  InputLayer.prototype._checkDevicePixelRatio = function() {
    var dpr, ratio;
    ratio = Screen.width / Framer.Device.screen.width;
    if (Utils.isDesktop()) {
      if (ratio < 0.5 && ratio > 0.25) {
        dpr = 1 - ratio;
      } else if (ratio === 0.25) {
        dpr = 1 - (ratio * 2);
      } else {
        dpr = Utils.devicePixelRatio();
      }
      if (Framer.Device.deviceType === "fullscreen") {
        dpr = 2;
      }
    } else {
      if (ratio < 0.5 && ratio > 0.25) {
        dpr = 1 - ratio;
      } else if (ratio === 0.25) {
        dpr = 1 - (ratio * 2);
      } else if (ratio === 0.5) {
        dpr = 1;
      }
    }
    return dpr;
  };

  InputLayer.prototype._setTextProperties = function(layer) {
    var dpr, ref;
    dpr = this._checkDevicePixelRatio();
    if (!this._isDesignLayer) {
      this._inputElement.style.fontFamily = layer.fontFamily;
      this._inputElement.style.fontSize = (layer.fontSize / dpr) + "px";
      this._inputElement.style.fontWeight = (ref = layer.fontWeight) != null ? ref : "normal";
      this._inputElement.style.paddingTop = (layer.padding.top * 2 / dpr) + "px";
      this._inputElement.style.paddingRight = (layer.padding.bottom * 2 / dpr) + "px";
      this._inputElement.style.paddingBottom = (layer.padding.right * 2 / dpr) + "px";
      this._inputElement.style.paddingLeft = (layer.padding.left * 2 / dpr) + "px";
    }
    this._inputElement.style.width = ((layer.width - layer.padding.left * 2) * 2 / dpr) + "px";
    this._inputElement.style.height = (layer.height * 2 / dpr) + "px";
    this._inputElement.style.outline = "none";
    this._inputElement.style.backgroundColor = "transparent";
    this._inputElement.style.cursor = "auto";
    this._inputElement.style.webkitAppearance = "none";
    this._inputElement.style.resize = "none";
    this._inputElement.style.overflow = "hidden";
    return this._inputElement.style.webkitFontSmoothing = "antialiased";
  };

  InputLayer.prototype.addBackgroundLayer = function(layer) {
    this._background = layer;
    this._background.parent = this;
    this._background.name = "background";
    this._background.x = this._background.y = 0;
    this._background._element.appendChild(this._inputElement);
    return this._background;
  };

  InputLayer.prototype.addPlaceHolderLayer = function(layer) {
    var dpr;
    this._isDesignLayer = true;
    this._inputElement.className = "input" + layer.id;
    this.padding = {
      left: 0,
      top: 0
    };
    this._setPlaceholder(layer.text);
    this._setTextProperties(layer);
    this._setPlaceholderColor(layer.id, layer.color);
    this.on("change:color", (function(_this) {
      return function() {
        return _this._setPlaceholderColor(layer.id, _this.color);
      };
    })(this));
    layer.visible = false;
    this._elementHTML.children[0].textContent = "";
    dpr = this._checkDevicePixelRatio();
    this._inputElement.style.fontSize = (layer.fontSize * 2 / dpr) + "px";
    this._inputElement.style.paddingTop = (layer.y * 2 / dpr) + "px";
    this._inputElement.style.paddingLeft = (layer.x * 2 / dpr) + "px";
    this._inputElement.style.width = ((this._background.width - layer.x * 2) * 2 / dpr) + "px";
    if (this.multiLine) {
      this._inputElement.style.height = (this._background.height * 2 / dpr) + "px";
    }
    this.on("change:padding", (function(_this) {
      return function() {
        _this._inputElement.style.paddingTop = (_this.padding.top * 2 / dpr) + "px";
        return _this._inputElement.style.paddingLeft = (_this.padding.left * 2 / dpr) + "px";
      };
    })(this));
    return this._placeholder;
  };

  InputLayer.prototype.focus = function() {
    return this._inputElement.focus();
  };

  InputLayer.define("value", {
    get: function() {
      return this._inputElement.value;
    },
    set: function(value) {
      return this._inputElement.value = value;
    }
  });

  InputLayer.define("focusColor", {
    get: function() {
      return this._inputElement.style.color;
    },
    set: function(value) {
      return this._inputElement.style.color = value;
    }
  });

  InputLayer.define("multiLine", InputLayer.simpleProperty("multiLine", false));

  InputLayer.wrap = function(background, placeholder, options) {
    return wrapInput(new this(options), background, placeholder, options);
  };

  InputLayer.prototype.onEnterKey = function(cb) {
    return this.on(Events.EnterKey, cb);
  };

  InputLayer.prototype.onSpaceKey = function(cb) {
    return this.on(Events.SpaceKey, cb);
  };

  InputLayer.prototype.onBackspaceKey = function(cb) {
    return this.on(Events.BackspaceKey, cb);
  };

  InputLayer.prototype.onCapsLockKey = function(cb) {
    return this.on(Events.CapsLockKey, cb);
  };

  InputLayer.prototype.onShiftKey = function(cb) {
    return this.on(Events.ShiftKey, cb);
  };

  InputLayer.prototype.onValueChange = function(cb) {
    return this.on(Events.ValueChange, cb);
  };

  InputLayer.prototype.onInputFocus = function(cb) {
    return this.on(Events.InputFocus, cb);
  };

  InputLayer.prototype.onInputBlur = function(cb) {
    return this.on(Events.InputBlur, cb);
  };

  return InputLayer;

})(TextLayer);

wrapInput = function(instance, background, placeholder) {
  var input, ref;
  if (!(background instanceof Layer)) {
    throw new Error("InputLayer expects a background layer.");
  }
  if (!(placeholder instanceof TextLayer)) {
    throw new Error("InputLayer expects a text layer.");
  }
  input = instance;
  if (input.__framerInstanceInfo == null) {
    input.__framerInstanceInfo = {};
  }
  if ((ref = input.__framerInstanceInfo) != null) {
    ref.name = instance.constructor.name;
  }
  input.frame = background.frame;
  input.parent = background.parent;
  input.index = background.index;
  input.addBackgroundLayer(background);
  input.addPlaceHolderLayer(placeholder);
  return input;
};


},{}]},{},[1])

//# sourceMappingURL=app.js.map
