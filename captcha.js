let mensagem
let menu

let usuario = []
let senha = []
let novoUsuario, novaSenha

let figuras
let numAleatorio
let figAleatoria
let captcha 
let autenticacao 
let captchaUsuario
let contagem 
let falha

let listagem = ''


function mensagemInicial(){
    mensagem = 'Bem-vindo ao sistema de autenticação CAPTCHA! \nPara realizar o cadastro, será gerado uma sequência de figuras a qual o usuario deverá repetir em ordem. Caso contrário, o cadastro não será efetuado. '
    alert(mensagem)
    menuCaptcha()

}


function cadastrar(){
    novoUsuario = prompt('digite o seu usuario')
    novaSenha = prompt('Digite a sua senha')
    autentiCaptcha()
}


function autentiCaptcha(){
    figuras = ['círculo', 'triângulo', 'quadrado', 'retângulo', 'losango', 'pentagono', 'hexagono', 'trapézio']
    captcha = []
    autenticacao = []
    contagem = 0
    
        //Gera o captcha
    while(captcha.length < 4){
        numAleatorio = Math.floor(Math.random() * figuras.length)
        figAleatoria = figuras[numAleatorio]
        if(captcha.includes(figAleatoria) == false){
            captcha.push(figAleatoria)
        } 
    } 
    
        //faz a autenticação do captcha
    for(i=0; i<captcha.length; i++){ 
      captchaUsuario = prompt(`A sequência CAPTCHA é \n${captcha[0]}, ${captcha[1]}, ${captcha[2]}, ${captcha[3]}. \nDigite o elemento ${(i+1)}`)
      autenticacao.push(captchaUsuario)
        if(captcha[i] == autenticacao[i]){
            contagem ++
        }
    }
     
    if(contagem == 4){
        usuario.push(novoUsuario)
        senha.push(novaSenha)
        alert('Cadastro realizado')
    }else {
        alert('O cadastro falhou')
        falha = prompt('O que deseja fazer? \nA) Gerar novo CAPTCHA \nB)Voltar ao menu').toUpperCase()
        if(falha == 'A'){
            autentiCaptcha()
        }else{
            menuCaptcha()
        }
    }
   
}


function listar(){
    listagem = ''
    if(usuario.length != 0){
        for(i=0; i< usuario.length; i++){
            listagem += `Usuario: ${usuario[i]}, Senha: ${senha[i]} \n`
        }
        alert(listagem)
    }else{
        alert("Não existem usuários cadastrados!")
    }
}
   


function menuCaptcha(){
    do{
        menu = prompt('Escolha a opção desejada \nA) Cadastrar \nB) Listar usuários e senhas \nC) Sair').toUpperCase()

        switch(menu){
            case 'A':
                cadastrar()
                break
            case 'B':
                listar()
                break
            case 'C':
                alert('BYE BYE')
                break
        }


    }while(menu != 'C')
}


mensagemInicial()

