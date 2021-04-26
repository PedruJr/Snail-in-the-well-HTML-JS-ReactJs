Introdução:
    Ola pessoal da raffinato! tudo bem? resolvi o desafio proposto utilizando html, css e react e utilizando o conceito mobile first!
sem o uso de outras bibliotecas apenas media querys.
    Se tiverem interesse em ler meus procedimentos de desenvolvimento e os conceitos aplicados vou deixar aqui em baixo. 
E tambem Agradeço a atenção!
    
Planejamento:
        Primeiro estruturei um arquivo txt com o planejamento de desenvolvimento, levantando os requisitos, os colocando em ordem
    de desenvolvimento, levantei tambem alguns metodos e logicas a serem aplicados antes de começar a codar.

Arquitetura:
    Defini a estrutura segregando em apenas um componente sendo chamado por sua tag "(<WormHole></WormHole>)" no App.JS,
   assim dentro da pasta "components" conseguimos encontrar a pasta do componente possuindo a estrutura Javascript e CSS do componente desenvolvido, obtendo uma
   organização ao estruturar e estilizar o componente.
        Então dentro do arquivo WormHole.js defini as variaveis a serem alteradas pelos valores colocados no inputs, defini os textos dinamicos a serem alterados na tela
    e tambem uma variavel dinamica para alterar o css em tags html atravez da função "useState()" do React Hooks.
        Definido tambem uma constante sleep com um promise, seguido de uma função chamando esta promise, alertando no console 1 segundo,
    para poder fazer a pausa de 1 segundo do desafio na estrutura do "For" logo em seguida.
        Setado uma estrutura de repetição "for" dentro de uma variavel "const" para poder utilizar uma "arrow function" com async e await,
    tornando possivel usar o metodo oneSec() para esperar este segundo dentro do "for".
        Utilizei uma estrutura de repetição e condições "if" para realizar a logica do desafio preenchido com variaveis dinamicas.
    Condicionando a mudar o texto e o fundo para apresentar o quadro e a frase conforme o percurso da minhoca, sendo os quadros amarelo na metade e verde ao sair do buraco.
    Estas condições if utilizam o metodo "setNomedavariavel" para alterar as variaveis. Mudando as variaveis dentro da estrutura logica e o 
    css das tags selecionadas, tornando assim possivel mudar as variaveis na estrutura atravez dos inputs

