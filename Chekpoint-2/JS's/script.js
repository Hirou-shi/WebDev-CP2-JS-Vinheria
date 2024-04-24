function sim_18(){
    window.location.href = "login.html";


}

function nao_18(){
    window.location.href = "https://www.instagram.com/roblox/";

}

var add = 0;
var cont = 0;

function verMais(){
    window.location.href = "info.html";
}
function adicionar(){
    add+=1.699
    cont++
    var um = cont>1?"Mais um":"Um";
    alert(`${um} vinho adicionado ao carrinho!`);
    console.log(add)
    console.log(cont)
}
function calc(){
    var preco = document.getElementById("preco");
    var res = add*cont;
    preco.innerText = `O valor das suas compras foi de R$${res}`;
}
function desconto(){
    var desc = document.getElementById("des").value;
    
    if (desc == "FIAP2024"){
        res = res - ((res*10)/100);
    }
}

function login(){
    var emai = parseInt(document.getElementById("email").value);
    var sena = parseInt(document.getElementById("senha").value);
    
    if (emai == 1234 && sena == 1234){
        window.location.href = "index.html";
    }
}
