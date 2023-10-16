var lista = ['Laranja','Maçã','Pera','Jaca','Limão']

var listaUl = document.createElement('ul');

var body = document.getElementsByName('body');

console.log(body[0]);

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByName('ud');

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++) {
    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i]);

    console.log(lista[i]);
}

