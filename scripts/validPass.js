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

function startLogon(){
    let userLogin = document.getElementById("userLogin").value;
    let userPassLogin = document.getElementById("userPassLogin").value;

    for(controle =0; controle < usuarios.length;controle++){
        if(userLogin == usuarios[controle].name && userPassLogin == usuarios[controle].password){
            alert("Usuário logado com sucesso!");
            controle = usuarios.length + 1;
        }
    }if(controle == usuarios.length){
        alert("Usuário não cadastrado!");
        controle = 0;
    }
}




