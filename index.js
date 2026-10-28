    let sasuke = document.getElementById("sasuke");
    let fundo = document.getElementById("fundo");
    let sakura = document.getElementById("sakura");

    let altura = window.innerHeight;
    let largura = window.innerWidth;
    let larguraPersonagem = 49;
    let qtdImagem = 8;
    let indiceImg = 0;

    let alturaTela = 0;
    let larguraTela = 0;

    let direcao = 'frente'
    fundo.style.backgroundImage = 'url(./imgs/konoha.png)'

    window.onload = desenhaPersonagem;
    document.onkeydown = manipulaTecla;

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

    }