let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somTrilha;
let somColisao;
let somPonto;

function preload() {
  imagemDaEstrada = loadImage("/src/assets/images/estrada.png");
  imagemDoAtor = loadImage("/src/assets/images/ator-1.png")
  imagemCarro = loadImage("/src/assets/images/carro-1.png")
  imagemCarro2 = loadImage("/src/assets/images/carro-2.png")
  imagemCarro3 = loadImage("/src/assets/images/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]

   somTrilha = loadSound("sons/trilha.mp3")
   somColisao = loadSound("sons/colidiu.mp3")
   somPonto = loadSound("sons/pontos.wav")

}
