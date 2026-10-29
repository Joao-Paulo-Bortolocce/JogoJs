    let sasuke = document.getElementById("sasuke");
    let fundo = document.getElementById("fundo");
    let sakura = document.getElementById("sakura");

    let altura = window.innerHeight;
    let largura = window.innerWidth;
    let larguraPersonagem = 49;
    let qtdImagem = 8;

    let indiceImg = 0;
    let indiceImgSakura = 0;

    let alturaTela = 0;
    let larguraTela = 0;

    let alturaTelaSakura = 0;
    let larguraTelaSakura = 0;

    let direcao = 'frente'

    let direcaoSakura = 'frente'


    fundo.style.backgroundImage = 'url(./imgs/konoha.png)'

    window.onload = desenhaDois;
    document.onkeydown = manipulaTecla;

    function desenhaDois() {
        desenhaPersonagem();
        desenhaPersonagemSakura();
    }


    function desenhaPersonagem() {
        sasuke.style.backgroundImage = 'url(./imgs/sasuke-' + direcao + '.png)'
        sasuke.style.backgroundPosition = indiceImg * larguraPersonagem + 'px'
        sasuke.style.top = alturaTela + 'px'
        sasuke.style.left = larguraTela + 'px'
    }


    function animarPersonagem() {
        indiceImg = (indiceImg + 1) % 8;
        desenhaPersonagem();
    }

    function desenhaPersonagemSakura() {
        sakura.style.backgroundImage = 'url(./imgs/sakura-' + direcaoSakura + '.png)'
        sakura.style.backgroundPosition = indiceImgSakura * larguraPersonagem + 'px'
        sakura.style.top = alturaTelaSakura + 'px'
        sakura.style.left = larguraTelaSakura + 'px'
    }

    function animarPersonagemSakura() {
        indiceImgSakura = (indiceImgSakura + 1) % 8;
        desenhaPersonagemSakura();
    }


    function manipulaTecla(evento) {

        if (evento.keyCode == 40) {
            direcao = 'frente';
            alturaTela += 10;
            if (alturaTela > altura - 12) {
                alturaTela = 0;
            }
            animarPersonagem();
        }

        if (evento.keyCode == 38) {
            direcao = 'costas';
            alturaTela -= 10;
            if (alturaTela < 12) {
                alturaTela = altura;
            }
            animarPersonagem();
        }

        if (evento.keyCode == 37) {
            direcao = 'esquerda';
            larguraTela -= 10;
            if (larguraTela < 12) {
                larguraTela = largura;
            }
            animarPersonagem();
        }

        if (evento.keyCode == 39) {
            direcao = 'direita';
            larguraTela += 10;
            if (larguraTela > largura - 12) {
                larguraTela = 0;
            }
            animarPersonagem();
        }


        if (evento.keyCode == 83 || evento.keyCode == 115) {
            direcaoSakura = 'frente';
            alturaTelaSakura += 10;
            if (alturaTelaSakura > largura - 12) {
                alturaTelaSakura = 0;
            }
            animarPersonagemSakura();
        }
        if (evento.keyCode == 87 || evento.keyCode == 119) {
            direcaoSakura = 'costas';
            alturaTelaSakura -= 10;
            if (alturaTelaSakura < 12) {
                alturaTelaSakura = altura;
            }
            animarPersonagemSakura();
        }
        if (evento.keyCode == 68 || evento.keyCode == 100) {
            direcaoSakura = 'direita';
            larguraTelaSakura += 10;
            if (larguraTelaSakura > largura - 12) {
                larguraTelaSakura = 0;
            }
            animarPersonagemSakura();
        }
        if (evento.keyCode == 65 || evento.keyCode == 97) {
            direcaoSakura = 'esquerda';
            larguraTelaSakura -= 10;
            if (larguraTelaSakura < 12) {
                larguraTelaSakura = largura;
            }
            animarPersonagemSakura();
        }


    }