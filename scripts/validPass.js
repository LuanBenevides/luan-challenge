//Constante de usuários cadastrados
let usuarios = [
    {
        id: 0,
        name: "AdminTestes",
        email: "AdminTestes@teste.com",
        password: "Senha@123"
    },
    {
        id: 1,
        name: "Luan",
        email:"LuanTeste@teste.com",
        password: "Senha@456",
    },
    {   
        id: 2,
        name: "Lucas",
        email: "LucasTeste@teste.com",
        password: "Senha@789"
    }
]
let userName = document.getElementById("userName");
let userMail = document.getElementById("userMail");
let userNickName = document.getElementById("userNickName");
let userPassword = document.getElementById("userPassword");
let confirmUserPassword = document.getElementById("confirmUserPassword");
let abrir = document.getElementById("createAccount");
let botaoDeCriarConta = document.getElementById("newAccount");
let cancelCNACC= document.getElementById("cancelNewAccountCreate");

function interacaoBoasVindas(){
    let visitante = window.prompt("Olá, como você se chama?");
    window.alert(`Seja bem vindo, ${visitante}!Para testar esse projeto, vc deve se inscrever e logar com o usuário e senha que criar... caso não consiga, existe um usuário de teste. User: Luan; Senha: Senha@456... Obrigado pela visita!`);
}


function startLogon(){
    let userLogin = document.getElementById("userLogin").value;
    let userPassLogin = document.getElementById("userPassLogin").value;

    for(controle =0; controle < usuarios.length;controle++){
        if(userLogin == usuarios[controle].name && userPassLogin == usuarios[controle].password){
            openSistema();
            controle = usuarios.length + 2;
        }
    }if(controle == usuarios.length){
        alert("Usuário não identificado!");
        controle = 0;
    }
}
function openCloseNewAccountArea(){
    if(abrir.classList.contains("createAccount")){
        abrir.classList.remove("createAccount");
        abrir.classList.add("createAccountActivate");
    }else if(abrir.classList.contains("createAccountActivate")){
        abrir.classList.remove("createAccountActivate");
        abrir.classList.add("createAccount");
    }
}

function cadastroSolicitado(){
    let nome1 = userName.value;
    let email1 = userMail.value;
    let senha1 = userPassword.value;
    let confirmaSenha1 = confirmUserPassword.value;
    let nickname1 = userNickName.value;
    let idNovo = usuarios.length;
    senha1.toString();
    confirmaSenha1.toString();
    cleanListaUsuarios();
    if(nome1.value == null && email1 == null && nickname1 == null && senha1 == null && confirmaSenha1 == null){
        alert("Dados vazios! Por favor, preencha o formulário...");
    }else if(senha1.length < 6 ){
        alert("Senha menor que 6 caracteres, por favor inserir uma senha forte e que contenha mais de 6 caracteres!");
    }else if(senha1 != confirmaSenha1){
        alert("As senhas não conferem!");
    }else{
        usuarios.push(
            {
                id: idNovo,
                name: nickname1,
                email: email1,
                password: senha1
            }
        );
        alert("Usuário cadastrado! Retornando para a tela de login...");
        openCloseNewAccountArea();
        console.log(usuarios);
    }
}

function openSistema(){
    cleanListaUsuarios();
    let home = document.getElementById("homePage");
    let userLogin = document.getElementById("userLogin").value;
    let userLogado = document.getElementById("logado");
    userLogado.innerText = `Usuário logado: ${userLogin}`

    if(home.classList.contains("homePage")){
        home.classList.remove("homePage");
        home.classList.add("homePageActivate");
    }else if(home.classList.contains("homePageActivate")){
        home.classList.remove("homePageActivate");
        home.classList.add("homePage");
    }
    carregarUsuariosExistentes();
}
function carregarUsuariosExistentes(){
    let usuariosExistentes = document.getElementById("usuariosExistentes");
    usuariosExistentes.innerHTML += `<h3 class="homeOutsetTableh3">Lista de usuários cadastrados</h3>
        <table class="homeOutsetTable">
            <tr>
                <th>Id: </th>
                <th>Nome de usuário: </th>
                <th>Alterar</th>
                <th>Excluir</th>
            </tr>
        </table>
    `
    for(iterador = 0;iterador <= usuarios.length;iterador++){
        usuariosExistentes.innerHTML += `<table class="homeOutsetTable">
            <tr>
                <td>${usuarios[iterador].id}</td>
                <td>${usuarios[iterador].name}</td>
                <td><button onclick="alterar(${usuarios[iterador].id})">Alterar</button></td>
                <td><button>Excluir</button></td>
            </tr>
        </table>`;
    }
}

function cleanListaUsuarios(){
    usuariosExistentes.innerHTML = ` `;
}

function alterar(userID = usuarios[iterador].id){
    console.log(userID);   
    let divAlteracao = document.getElementById("pageReaduser");
    let iterador2;
    for(iterador2 = 0;iterador2 < usuarios.length;iterador2++){
        limpaAlterar();
        if(userID == usuarios[iterador2].id){
            divAlteracao.innerHTML += `
                <form method="post" action="#">
                    <label>Nome de usuário:</label><br>
                    <input type="text" id="novoNome" placeholder="${usuarios[iterador2].name}"><br>
                    <label>E-mail: </label><br>
                    <input type="email" id="novoEmail" placeholder="${usuarios[iterador2].email}"><br>
                    <label>Nova senha: </label><br>
                    <input type="password" id="novaSenha" placeholder="${usuarios[iterador2].password}"><br>
                </form><br>
                <div class="buttonsAlter">
                    <button onclick="exibeAlteradorDeUsuario()">Cancelar</button><button type="button" onclick="dataModifyer(${userID})">Confirmar</button>
                </div>
            `
            iterador2 = usuarios.length + 3;
            exibeAlteradorDeUsuario();
        }else if(userID != usuarios[iterador2].id){
            limpaAlterar();
        }
    }
}
function dataModifyer(userIDAlter = userID){
    console.log(userIDAlter)
    let novoNomeAlter = document.getElementById("novoNome").value;
    let novoEmailAlter = document.getElementById("novoEmail").value;
    let novaSenhaAlter = document.getElementById("novaSenha").value;

    for(iterador3 = 0;iterador3 < usuarios.length;iterador3++){
        if(userIDAlter == usuarios[iterador3].id){
            usuarios[iterador3].name = novoNomeAlter;
            usuarios[iterador3].email = novoEmailAlter;
            usuarios[iterador3].password = novaSenhaAlter;
            alert("Usuário alterado com sucesso!");
            cleanListaUsuarios();
            iterador3 = usuarios.length + 4;
        }  
        exibeAlteradorDeUsuario();
        carregarUsuariosExistentes();
    }
    
}
function limpaAlterar(){
    let divAlteracao = document.getElementById("pageReaduser");
    divAlteracao.innerHTML = ` `;
}

function exibeAlteradorDeUsuario(){
    let divAlteracao = document.getElementById("pageReaduser");
    if(divAlteracao.classList.contains("pageReaduser")){
        divAlteracao.classList.remove("pageReaduser");
        divAlteracao.classList.add("pageReaduserActived");
    }else if(divAlteracao.classList.contains("pageReaduserActived")){
        divAlteracao.classList.remove("pageReaduserActived");
        divAlteracao.classList.add("pageReaduser");
    }
}


//alteração de usuário

botaoDeCriarConta.addEventListener("click", openCloseNewAccountArea());
cancelCNACC.addEventListener("click", openCloseNewAccountArea());
document.addEventListener("load", interacaoBoasVindas());


