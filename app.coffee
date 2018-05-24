### Utilitários ###

# animation.start() -- Define o começo de uma animação

# layerA = new Layer()
#
# animationA = new Animation({
#     layer: layerA,
#     properties: {x:100}
# })
#animationA.start()

####--------------------------------------------#####

#animation.stop() -- Ponto final da animação

#animation.reverse() -- Reproduz a animação com os valores opostos aos originais

####--------------------------------------------#####

#device.rotateLeft()
#device.rotateRight()

#{InputLayer} = require "input"

# colocando os settings para o protótipo
Framer.Device.customize
	deviceType: Framer.Device.Type.Tablet
	screenWidth: 1024
	screenHeight: 600
	deviceImage: "http://f.cl.ly/items/001L0v3c1f120t0p2z24/custom.png"
	deviceImageWidth: 1024
	deviceImageHeight: 600
	devicePixelRatio: 1

# orientação da tela
#Framer.Device.orientationName = "portrait"
Framer.Device.setOrientation(0, true)

# definindo settings para todas as páginas
page = new PageComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false
	scrollVertical: false

###### Definindo CSS ######
inputTextStyle =
	"font-size": "14px"
	"font-style": "normal"
	"font-weight": "normal"
	"text-align": "left"
	"position": "absolute"
	"color": "#555555"
	"font-family": "'Roboto', sans-serif"
	"border-bottom-style": "solid"
	"border-bottom-color": "#FF6D00"
	"border-bottom-width": "1px"
	"height": "auto"
	"background": "#FFFFFF"

inputTextStyleWhite =
	"font-size": "14px"
	"font-style": "normal"
	"font-weight": "normal"
	"text-align": "left"
	"position": "absolute"
	"color": "#FFFFFF"
	"background": "transparent"
	"font-family": "'Roboto', sans-serif"
	"border-bottom-style": "solid"
	"border-bottom-color": "#FFFFFF"
	"border-bottom-width": "1px"
	"height": "auto"

text_button_orange =
	"font-family": "'Roboto', sans-serif"
	"font-style": "normal"
	"font-weight": "bold"
	"line-height": "normal"
	"font-size": "14px"
	"color": "#FF6D00"
	"height": "auto"
	"background": "transparent"
	"padding-top": "7px"

text_button_white =
	"font-family": "'Roboto', sans-serif"
	"font-style": "normal"
	"font-weight": "bold"
	"line-height": "normal"
	"font-size": "14px"
	"color": "#FFFFFF"
	"height": "auto"
	"background": "transparent"
	"padding-top": "7px"

text_login =
	"font-family": "'Roboto', sans-serif"
	"font-style": "normal"
	"font-weight": "bold"
	"line-height": "normal"
	"font-size": "14px"
	"color": "#FF6D00"
	"background": "#FFFFFF"

text_pass =
	"font-family": "'Roboto', sans-serif"
	"font-style": "normal"
	"font-weight": "bold"
	"line-height": "normal"
	"font-size": "14px"
	"color": "#FFFFFF"
	"background": "transparent"

background_login =
	"background": "linear-gradient(90deg, #FF3D00 0%, #FF6D00 100%)"


###### Classes ######

# Criando class para um button
class gero_btn_orange extends Layer
	constructor: (options) ->
		# Estabelecendo funcionalidade default para a layer
		super(options)

		# Estabelecendo propriedades default
		@height = 38
		@backgroundColor = "FF6D00"
		@borderRadius = 4

class gero_btn_white extends Layer
	constructor: (options) ->
		# Estabelecendo funcionalidade default para a layer
		super(options)

		# Estabelecendo propriedades default
		@height = 38
		@backgroundColor = "FFFFFF"
		@borderRadius = 4
		@borderWidth = 1
		@borderColor = "FF6D00"
		@borderStyle = "solid"
		@color = "FF6D00"
		#@fontFamily = ""

class gero_btn_null extends Layer
	constructor: (options) ->
		# Estabelecendo funcionalidade default para a layer
		super(options)

		# Estabelecendo propriedades default
		@height = 38
		@backgroundColor = "transparent"
		@borderRadius = 4
		@borderWidth = 1
		@borderColor = "FFFFFF"
		@borderStyle = "solid"
		#@fontFamily = ""

class form_text extends Layer
	constructor: (options) ->
		# Estabelecendo funcionalidade default para a layer
		super(options)

		# Estabelecendo propriedades default
		@height = 30
		@background = "FFFFFF"

class form_text_white extends Layer
	constructor: (options) ->
		# Estabelecendo funcionalidade default para a layer
		super(options)

		# Estabelecendo propriedades default
		@height = 30
		@backgroundColor = "transparent"

# Página 1
homepage = new Layer
	width: page.width
	height: page.height
	parent: page.content
	image: "images/homepage.png"

login_btn = new Layer
	width: 100
	height: 40
	x: 913
	y: 35
	opacity: 0
	parent: homepage

# Avançar para a página seguinte
login_btn.on Events.Click, ->
  page.snapToPage(login, animationOptions={curve:"Spring (damping: 0.5)", time:0.5})


# Página 2
login = new Layer
	width: page.width
	height: page.height

login.style = background_login

rectangle = new Layer
	x: 337
	y: 140
	width: 350
	height: 320
	parent: login
	backgroundColor: "FFFFFF"

gero_logo = new Layer
	width: 196
	height: 102
	x: 414
	y: 157
	image: "images/gero-logo-orange.png"
	parent: login

input_user = new form_text
	x: 362
	y: 269
	width: 300
	html: "E-mail"
	parent: login

input_user.style = inputTextStyle

input_senha = new form_text
	x: 362
	y: 319
	width: 300
	html: "Senha"
	parent: login

input_senha.style = inputTextStyle

action_forgot = new Layer
	width: 150
	height: 14
	x: 362
	y: 425
	parent: login
	html: "Esqueceu a senha?"

action_forgot.style = text_login

action_new_account = new Layer
	width: 78
	height: 14
	x: 584
	y: 425
	parent: login
	html: "Nova conta"

action_new_account.style = text_login

btn_login = new gero_btn_orange
	width: 300
	x: 362
	y: 365
	parent: login

texto = new form_text_white
	width: 50
	parent: btn_login
	html: "LOGIN"

texto.style = text_button_white

texto.center()

# avançar para a próxima página
action_forgot.on Events.Click, ->
  page.snapToPage(pass_recover, false)

# avançar para a página de nova conta
action_new_account.on Events.Click, ->
  page.snapToPage(cadastro_1, false)

#Página 3
pass_recover = new Layer
	width: page.width
	height: page.height

pass_recover.style = background_login

gero_logo_white = new Layer
	width: 190
	height: 102
	x: 417
	y: 117
	image: "images/gero-logo-white.png"
	parent: pass_recover

text = new Layer
	width: 150
	height: 14
	x: 401
	y: 227
	parent: pass_recover
	html: "Esqueceu a senha?"

text.style = text_pass

text_big = new Layer
	width: 240
	height: 30
	x: 401
	y: 251
	parent: pass_recover
	html: "Preencha seu e-mail, te enviaremos um link para criar uma nova senha."

text_big.style = text_pass

input_forget = new form_text_white
	width: 240
	x: 401
	y: 287
	parent: pass_recover

texto = new form_text_white
	width: 240
	parent: input_forget
	html: "E-mail"

texto.style = inputTextStyleWhite

nova_senha = new gero_btn_white
	width: 100
	x: 542
	y: 337
	parent: pass_recover


texto = new form_text_white
	width: 93
	parent: nova_senha
	html: "NOVA SENHA"

texto.style = text_button_orange

texto.center()

voltar = new gero_btn_null
	width: 100
	x: 401
	y: 337
	parent: pass_recover

texto = new form_text_white
	width: 50
	parent: voltar
	html: "VOLTAR"

texto.style = text_button_white

texto.center()

# voltar para página anterior
voltar.on Events.Click, ->
  page.snapToPage(login, false)

# voltar para página anterior
nova_senha.on Events.Click, ->
  page.snapToPage(reenvio, false)

# Página 4
reenvio = new Layer
	width: page.width
	height: page.height
	image: "images/reenvio.png"

envelope = new Layer
	width: 83
	height: 76
	x: 690
	y: 404
	image: "images/envelope.png"
	parent: reenvio

voltar_login = new gero_btn_white
	width: 210
	x: 407
	y: 326
	parent: reenvio

texto = new form_text_white
	width: 165
	parent: voltar_login
	html: "VOLTAR PARA O LOGIN"

texto.style = text_button_orange

texto.center()

# voltar para página de login
voltar_login.on Events.Click, ->
  page.snapToPage(login, false)

# avançar para página seguinte
envelope.on Events.Click, ->
  page.snapToPage(confirmacao, false)

# Página 5
confirmacao = new Layer
	width: page.width
	height: page.height

confirmacao.style = background_login

input_nova_senha = new form_text_white
	width: 300
	x: 405
	y: 254
	parent: confirmacao

texto = new form_text_white
	width: 300
	parent: input_nova_senha
	html: "Nova senha"

texto.style = inputTextStyleWhite

input_repetir_senha = new form_text_white
	width: 300
	x: 405
	y: 304
	parent: confirmacao

texto = new form_text_white
	width: 300
	parent: input_repetir_senha
	html: "Repetir nova senha"
    
texto.style = inputTextStyleWhite

confirmar = new gero_btn_white
	width: 300
	x: 406
	y: 354
	parent: confirmacao

texto = new form_text_white
	width: 100
	parent: confirmar
	html: "CONFIRMAR"
	
texto.style = text_button_orange

texto.center()

gero_logo_white = new Layer
	width: 190
	height: 102
	x: 417
	y: 117
	image: "images/gero-logo-white.png"
	parent: confirmacao

# voltar para página de login
confirmar.on Events.Click, ->
  page.snapToPage(login, false)

# Página 6
cadastro_1 = new Layer
	width: page.width
	height: page.height

cadastro_1.style = background_login

rectangle = new Layer
	x: 337
	y: 77
	width: 350
	height: 447
	parent: cadastro_1
	backgroundColor: "FFFFFF"

action_have_account = new Layer
	width: 130
	height: 14
	x: 444
	y: 491
	parent: cadastro_1
	html: "Já tem uma conta?"

action_have_account.style = text_login

cnpj = new form_text
	width: 300
	x: 362
	y: 204
	parent: cadastro_1

texto = new form_text
	width: 300
	parent: cnpj
	html: "Cnpj"

texto.style = inputTextStyle

razao_social = new form_text
	width: 300
	x: 362
	y: 254
	parent: cadastro_1

texto = new form_text
	width: 300
	parent: razao_social
	html: "Razão social"

texto.style = inputTextStyle

nome = new form_text
	width: 300
	x: 362
	y: 304
	parent: cadastro_1

texto = new form_text
	width: 300
	parent: nome
	html: "Nome"
	
texto.style = inputTextStyle

data = new form_text
	width: 300
	x: 362
	y: 354
	parent: cadastro_1

texto = new form_text
	width: 300
	parent: data
	html: "Data de fundação"
	
texto.style = inputTextStyle

gero_logo = new Layer
	width: 196
	height: 102
	x: 414
	y: 92
	image: "images/gero-logo-orange.png"
	parent: cadastro_1

progress_1 = new Layer
	width: 215
	height: 10
	x: 394
	y: 404
	image: "images/progress_1.png"
	parent: cadastro_1

back = new gero_btn_white
	width: 100
	x: 362
	y: 434
	parent: cadastro_1

texto = new form_text_white
	width: 50
	parent: back
	html: "VOLTAR"

texto.style = text_button_orange

texto.center()

next = new gero_btn_orange
	width: 100
	x: 562
	y: 434
	parent: cadastro_1

texto = new form_text_white
	width: 70
	parent: next
	html: "AVANÇAR"

texto.style = text_button_white

texto.center()

# voltar para página de login
action_have_account.on Events.Click, ->
  page.snapToPage(login, false)

# voltar para página de login
back.on Events.Click, ->
  page.snapToPage(login, false)

# avançar para a etapa seguinte
next.on Events.Click, ->
  page.snapToPage(cadastro_2, false)

# Página 7

cadastro_2 = new Layer
	width: page.width
	height: page.height

cadastro_2.style = background_login

rectangle = new Layer
	x: 337
	y: 77
	width: 350
	height: 447
	parent: cadastro_2
	backgroundColor: "FFFFFF"

action_have_account = new Layer
	width: 130
	height: 14
	x: 444
	y: 491
	parent: cadastro_2
	html: "Já tem uma conta?"
	
action_have_account.style = text_login

cep = new form_text
	width: 300
	x: 362
	y: 204
	parent: cadastro_2

texto = new form_text
	width: 300
	parent: cep
	html: "Cep"

texto.style = inputTextStyle

logradouro = new form_text
	width: 300
	x: 362
	y: 254
	parent: cadastro_2

texto = new form_text
	width: 300
	parent: logradouro
	html: "Endereço"

texto.style = inputTextStyle

cidade = new form_text
	width: 140
	x: 362
	y: 304
	parent: cadastro_2

texto = new form_text
	width: 140
	parent: cidade
	html: "Cidade"
	
texto.style = inputTextStyle

estado = new form_text
	width: 140
	x: 522
	y: 304
	parent: cadastro_2

texto = new form_text
	width: 140
	parent: estado
	html: "Estado"
	
texto.style = inputTextStyle

pais = new form_text
	width: 300
	x: 362
	y: 354
	parent: cadastro_2

texto = new form_text
	width: 300
	parent: pais
	html: "País"

texto.style = inputTextStyle

gero_logo = new Layer
	width: 196
	height: 102
	x: 414
	y: 92
	image: "images/gero-logo-orange.png"
	parent: cadastro_2

progress_2 = new Layer
	width: 215
	height: 10
	x: 394
	y: 404
	image: "images/progress_2.png"
	parent: cadastro_2


back = new gero_btn_white
	width: 100
	x: 362
	y: 434
	parent: cadastro_2

texto = new form_text_white
	width: 50
	parent: back
	html: "VOLTAR"

texto.style = text_button_orange

texto.center()

next = new gero_btn_orange
	width: 100
	x: 562
	y: 434
	parent: cadastro_2

texto = new form_text_white
	width: 70
	parent: next
	html: "AVANÇAR"
	
texto.style = text_button_white

texto.center()

# voltar para página de login
action_have_account.on Events.Click, ->
  page.snapToPage(login, false)

# voltar para página de login
back.on Events.Click, ->
  page.snapToPage(cadastro_1,false)

# avançar para a etapa seguinte
next.on Events.Click, ->
  page.snapToPage(cadastro_3, false)

# Página 8
cadastro_3 = new Layer
	width: page.width
	height: page.height

cadastro_3.style = background_login

rectangle = new Layer
	x: 337
	y: 77
	width: 350
	height: 447
	parent: cadastro_3
	backgroundColor: "FFFFFF"

action_have_account = new Layer
	width: 130
	height: 14
	x: 444
	y: 491
	parent: cadastro_3
	html: "Já tem uma conta?"

action_have_account.style = text_login

tel_1 = new form_text
	width: 300
	x: 362
	y: 204
	parent: cadastro_3

texto = new form_text
	width: 300
	parent: tel_1
	html: "Telefone 1"

texto.style = inputTextStyle

tel_2 = new form_text
	width: 300
	x: 362
	y: 254
	parent: cadastro_3

texto = new form_text
	width: 300
	parent: tel_2
	html: "Telefone 2"

texto.style = inputTextStyle

fax = new form_text
	width: 300
	x: 362
	y: 304
	parent: cadastro_3

texto = new form_text
	width: 300
	parent: fax
	html: "Fax"

texto.style = inputTextStyle

website = new form_text
	width: 300
	x: 362
	y: 354
	parent: cadastro_3

texto = new form_text
	width: 300
	parent: website
	html: "Website"

texto.style = inputTextStyle

gero_logo = new Layer
	width: 196
	height: 102
	x: 414
	y: 92
	image: "images/gero-logo-orange.png"
	parent: cadastro_3

progress_3 = new Layer
	width: 215
	height: 10
	x: 394
	y: 404
	image: "images/progress_3.png"
	parent: cadastro_3

back = new gero_btn_white
	width: 100
	x: 362
	y: 434
	parent: cadastro_3

texto = new form_text_white
	width: 50
	parent: back
	html: "VOLTAR"

texto.style = text_button_orange

texto.center()


next = new gero_btn_orange
	width: 100
	x: 562
	y: 434
	parent: cadastro_3

texto = new form_text_white
	width: 70
	parent: next
	html: "AVANÇAR"

texto.style = text_button_white

texto.center()

# voltar para página de login
action_have_account.on Events.Click, ->
  page.snapToPage(login, false)

# voltar para página de login
back.on Events.Click, ->
  page.snapToPage(cadastro_2, false)

# avançar para a etapa seguinte
next.on Events.Click, ->
  page.snapToPage(cadastro_4, false)

# Página 9
cadastro_4 = new Layer
	width: page.width
	height: page.height

cadastro_4.style = background_login

rectangle = new Layer
	x: 337
	y: 77
	width: 350
	height: 447
	parent: cadastro_4
	backgroundColor: "FFFFFF"

action_have_account = new Layer
	width: 130
	height: 14
	x: 444
	y: 491
	parent: cadastro_4
	html: "Já tem uma conta?"

action_have_account.style = text_login

email = new form_text
	width: 300
	x: 362
	y: 204
	parent: cadastro_4

texto = new form_text
	width: 300
	parent: email
	html: "E-mail"
	
texto.style = inputTextStyle

senha = new form_text
	width: 300
	x: 362
	y: 254
	parent: cadastro_4

texto = new form_text
	width: 300
	parent: senha
	html: "Senha"
    
texto.style = inputTextStyle

repetir_senha = new form_text
	width: 300
	x: 362
	y: 304
	parent: cadastro_4

texto = new form_text
	width: 300
	parent: repetir_senha
	html: "Repetir senha"

texto.style = inputTextStyle

checkbox = new Layer
	width: 120
	height: 20
	x: 364
	y: 359
	image: "images/termos.png"
	parent: cadastro_4

termos = new Layer
	x: 459
	y: 353
	width: 140
	height: 14
	parent: cadastro_4
	html: "Termos e Condições"

termos.style= text_button_orange

gero_logo = new Layer
	width: 196
	height: 102
	x: 414
	y: 92
	image: "images/gero-logo-orange.png"
	parent: cadastro_4

progress_4 = new Layer
	width: 215
	height: 10
	x: 394
	y: 404
	image: "images/progress_4.png"
	parent: cadastro_4

back = new gero_btn_white
	width: 100
	x: 362
	y: 434
	parent: cadastro_4

texto = new form_text_white
	width: 50
	parent: back
	html: "VOLTAR"

texto.style = text_button_orange

texto.center()

final = new gero_btn_orange
	width: 100
	x: 562
	y: 434
	parent: cadastro_4

texto = new form_text_white
	width: 70
	parent: final
	html: "FINALIZAR"

texto.style = text_button_white

texto.center()

# voltar para página de login
action_have_account.on Events.Click, ->
  page.snapToPage(login, false)

# voltar para página de login
back.on Events.Click, ->
  page.snapToPage(cadastro_3, false)

# avançar para a etapa seguinte
final.on Events.Click, ->
  page.snapToPage(login, false)



# adição de páginas
page.addPage(login, "bottom")
page.addPage(pass_recover)
page.addPage(reenvio)
page.addPage(confirmacao)
page.addPage(cadastro_1)
page.addPage(cadastro_2)
page.addPage(cadastro_3)
page.addPage(cadastro_4)
