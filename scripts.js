//Personagens
Per1 = {
    nome: "Zhongli",
    img: "https://genshinpro.com.br/wp-content/uploads/2020/12/portrait-zhongli.jpg",
    golpe: "https://genshin.honeyhunterworld.com/audio/quotes/zhongli/1000400_03_jp.wav",
    atributos: {
        Vida: 36000,
        Ataque: 1800,
        Defesa: 800,
        DanoElemental: 91,
        
    }
}

Per2 = {
    nome: "Diluc",
    img: "https://genshinpro.com.br/wp-content/uploads/2020/11/portrait-diluc.jpg",
    golpe: "https://genshin.honeyhunterworld.com/audio/quotes/diluc/1000400_02_jp.wav",
    atributos: {
        Vida: 18000,
        Ataque: 3200,
        Defesa: 730,
        DanoElemental: 94,
        
    }
}

Per3 = {
    nome: "Hu Tao",
    img: "https://genshinpro.com.br/wp-content/uploads/2021/03/portrait-hutao.jpg",
    golpe: "https://genshin.honeyhunterworld.com/audio/quotes/hutao/1000400_03_jp.wav",
    atributos: {
        Vida: 31000,
        Ataque: 2900,
        Defesa: 700,
        DanoElemental: 102,
        
    }
}

Per4 = {
    nome: "Ganyu",
    img: "https://genshinpro.com.br/wp-content/uploads/2021/01/portrait-ganyu.jpg",
    golpe: "https://genshin.honeyhunterworld.com/audio/quotes/ganyu/1000400_04_jp.wav",
    atributos: {
        Vida: 22000,
        Ataque: 2450,
        Defesa: 815,
        DanoElemental: 90,
        
    }
}

Per5 = {
    nome: "Xiao",
    img: "https://genshinpro.com.br/wp-content/uploads/2020/11/portrait-xiao.jpg",
    golpe: "https://genshin.honeyhunterworld.com/audio/quotes/xiao/1000400_03_jp.wav",
    atributos: {
        Vida: 18000,
        Ataque: 3100,
        Defesa: 785,
        DanoElemental: 91,
        
    }  
}

Per6 = {
    nome: "Mona",
    img: "https://genshinpro.com.br/wp-content/uploads/2020/11/portrait-mona.jpg",
    golpe: "https://genshin.honeyhunterworld.com/audio/quotes/mona/1000400_03_jp.wav",
    atributos: {
        Vida: 17500,
        Ataque: 2700,
        Defesa: 900,
        DanoElemental: 91,
        
    }  
}

Per7 = {
    nome: "Tartaglia",
    img: "https://genshinpro.com.br/wp-content/uploads/2020/11/portrait-tartaglia.jpg",
    golpe: "https://genshin.honeyhunterworld.com/audio/quotes/tartaglia/1000401_03_jp.wav",
    atributos: {
        Vida: 18500,
        Ataque: 2450,
        Defesa: 780,
        DanoElemental: 92,
        
    }  
}

Per8 = {
    nome: "Venti",
    img: "https://genshinpro.com.br/wp-content/uploads/2020/11/portrait-venti.jpg",
    golpe: "https://genshin.honeyhunterworld.com/audio/quotes/venti/1000400_01_jp.wav",
    atributos: {
        Vida: 17800,
        Ataque: 1530,
        Defesa: 850,
        DanoElemental: 101,
        
    }  
}

var cartaMaquina
var cartaJogador
var cartas = [Per1, Per2, Per3, Per4, Per5, Per6, Per7, Per8]
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 8)
  cartaMaquina = cartas[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * 8)
  while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 8)
  }
  cartaJogador = cartas[numeroCartaJogador]

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  
  exibeCartaJogador()
  
}


function exibeCartaJogador(){
  var divCartaJogador = document.getElementById('carta-jogador')
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.img})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
  
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}


function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
  var divResultado = document.getElementById("resultado")  
  var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">VENCEU!</p>'
        var golpe = new Audio(cartaJogador.golpe)
        golpe.play()
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">PERDEU!</p>'
        var golpe = new Audio(cartaMaquina.golpe)
        golpe.play()
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
  divResultado.innerHTML = htmlResultado
  exibeCartaMaquina()  
  
}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById('carta-maquina')
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.img})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }
  
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
 

}
