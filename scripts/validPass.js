//Constante de usuários cadastrados
//Aprender a procurar itens em arrays que possuam determinada palavra como parâmetro;
let usuarios = [
    {
        name: "AdminTestes",
        email: "AdminTestes@teste.com",
        password: "Senha@123"
    },
    {
        name: "Luan",
        email:"LuanTeste@teste.com",
        password: "Senha@456",
    },
    {
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

let visitante = window.prompt("Olá, como você se chama?");
alert(`Seja bem vindo, ${visitante}!Para testar esse projeto, vc deve se inscrever e logar com o usuário e senha que criar... caso não consiga, existe um usuário de teste. User: Luan; Senha: Senha@123... Obrigado pela visita!`);

function startLogon(){
    let userLogin = document.getElementById("userLogin").value;
    let userPassLogin = document.getElementById("userPassLogin").value;

    for(controle =0; controle < usuarios.length;controle++){
        if(userLogin == usuarios[controle].name && userPassLogin == usuarios[controle].password){
            openSistema();
            controle = usuarios.length + 2;
        }
    }if(controle == usuarios.length){
        alert("Usuário não cadastrado!");
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
    
    senha1.toString();
    confirmaSenha1.toString();

    if(nome1.value == null && email1 == null && nickname1 == null && senha1 == null && confirmaSenha1 == null){
        alert("Dados vazios! Por favor, preencha o formulário...");
    }else if(senha1.length < 6 ){
        alert("Senha menor que 6 caracteres, por favor inserir uma senha forte e que contenha mais de 6 caracteres!");
    }else if(senha1 != confirmaSenha1){
        alert("As senhas não conferem!");
    }else{
        usuarios.push(
            {
                name: nickname1,
                email: email1,
                password: senha1
            }
        );
        alert("Usuário cadastrado! Indo para a tela de login...");
        openCloseNewAccountArea();
        console.log(usuarios);
    }
}

function openSistema(){
    let home = document.getElementById("homePage");
    if(home.classList.contains("homePage")){
        home.classList.remove("homePage");
        home.classList.add("homePageActivate");
    }else if(home.classList.contains("homePageActivate")){
        home.classList.remove("homePageActivate");
        home.classList.add("homePage");
    }
}


botaoDeCriarConta.addEventListener("click", openCloseNewAccountArea);
cancelCNACC.addEventListener("click", openCloseNewAccountArea);


