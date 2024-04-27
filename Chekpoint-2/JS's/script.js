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
    add+=1699
    cont++
    var um = cont>1?"Mais um":"Um";
    var total = cont
    alert(`Adicionado ao carrinho com sucesso!\n Total adicionado:${total}`);
    console.log(add)
    console.log(cont)
}
function desconto(){
    var desc = document.getElementById("cupom").value;
    var validacao = document.getElementById("validacao");
    var preco = document.getElementById("total");
    var vinhos = (cont>1)? "vinhos":"vinho";

    if (desc == "FIAP2024"){
    
        add = add - ((add*10)/100);
        validacao.innerText = `O cupom de desconto de 10% foi \n adicionado com sucesso! \n Ao adicionar o cupom clique em calcular o preco novamente para seu cupom ser adicionado!\n\n\nTotal da compra:R$${add.toFixed(2)}`
    }
    else {
        console.log('CUPOM INVÁLIDO')
        validacao.innerText = "CUPOM INVÁLIDO!"
    }
}

function calc(){
    
    var preco = document.getElementById("total");
    var vinhos = (cont>1)? "vinhos":"vinho"
    preco.innerText = `O valor das suas compras foi de R$${add.toFixed(2)} \n Com ${cont} ${vinhos} no carrinho!`;
}

function login(){
    var emai = parseInt(document.getElementById("email").value);
    var sena = parseInt(document.getElementById("senha").value);
    
    if (emai == 1234 && sena == 1234){
        window.location.href = "index.html";
    }
}

function voltar(){
    window.location.href = "index.html";
}

function sugestoes(){
    window.location.href = "sugestoes.html";
}

function Enviar(){
    var nome = document.getElementById("nome").value
    var telefone = document.getElementById("telefone").value
    var email = document.getElementById("email").value
    var mensagem = document.getElementById("mensagem").value

    if(nome != '' && telefone != '' && email != '' && mensagem != ''){
        alert("Mensagem enviada com sucesso!")
        window.location.href = "index.html";
    }
    else{
        alert("Precisa finalizar o cadastro")
    }
}

function form(){
    window.location.href = "form.html";
}

function semproduto(){
    window.location.href = "semproduto.html";
}
function carrinho(){
    window.location.href = "carrinho.html";
}
function logout(){
    window.location.href = "Pagina Inicial.html";
}

function comentar(){
    alert(`Comentário enviado com sucesso!`);
}
function favoritar(){
    alert(`Favoritado!`);
}
function desejos(){
alert(`Adicionado a lista de desejos!`);

}