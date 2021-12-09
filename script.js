const button = document.querySelector('#send');
const caixaPrincial = document.querySelector('#CaixaPrincipal')
let valor = document.getElementById('textinput')
  
const exibirValor = () => {
    NumeroSorteado = valor.value;
    caixaPrincial.textContent = `${NumeroSorteado}`;  
    
 

 }

 
 function CriarCaixinha(item) {
     NumeroHistorico = valor.value;
    item = document.createElement('div');
    item.classList.add('caixinhas');
    item.innerHTML = `
    ${NumeroHistorico}
    `
    document.querySelector('.ultimosSelecionados').appendChild(item);

}

function LimparInput() {
    valor.value ='';
}


button.addEventListener('click', exibirValor)
button.addEventListener('click', CriarCaixinha)
button.addEventListener('click', LimparInput)






