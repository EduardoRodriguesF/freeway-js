let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318]
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3]
let comprimentoCarro = 50;
let alturaCarro = 40;

function showCar() {
  for (let i = 0; i < imagemCarros.length; i ++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function moveCars() {
  for (let i = 0; i < imagemCarros.length; i ++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function currentPosition(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouATela(xCarro){
  return xCarro < - 50;
}