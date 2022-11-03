const forms1 = document.querySelector(".form1");
const forms2 = document.querySelector(".form2");
const forms3 = document.querySelector(".form3");
const botao = document.querySelector('#send');
const salvar = document.querySelector('#salvar');
forms1.classList.remove('form1');
document.onload = validar;

function validar(){
    var n, i, c;
    n = document.querySelector('#nome').value;
    i = document.querySelector('#idade').value;
    c = document.querySelector('#cpf').value;

    if (n && i && c){
        botao.disabled = false; 
        return
    }
    botao.disabled = true;
}
function validar2(){
    var p;
    p = document.querySelector('#pedido').value;
    if (p){
        botao.disabled = false;
        return
    }
    botao.disabled = true;
}
function validar3(){
    var cpf;
    cpf = document.querySelector('#pagamento').value;
    if (cpf){
        salvar.disabled = false;
        return
    }
    salvar.disabled = true;
}
function proximo() {
    var cliques = 0;
    var btn = document.getElementById('send');
    p = document.querySelector('#pedido').value;
    if (cliques = 1){
        forms1.classList.add('esconder');
        forms2.classList.remove('form2');
        btn.onclick = mostrarform2;
        botao.disabled = true;
        function mostrarform2(){
            forms2.classList.add('esconder');
            forms3.classList.remove('form3');
            botao.classList.add('esconder');
            btn.onclick = proxpagina;
            function proxpagina(){
                window.location.href = 'Final_Pedido.html'
            }
        }
    }
}