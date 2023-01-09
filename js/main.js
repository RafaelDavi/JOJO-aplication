// menu(1)

// function menu(X) {



//     document.getElementById("home").classList.remove("menuAtivo");
//     document.getElementById("about").classList.remove("menuAtivo");
//     document.getElementById("info").classList.remove("menuAtivo");
//     document.getElementById("char").classList.remove("menuAtivo");


//     switch (X) {
//         case 1:
//             document.getElementById("home").classList.add("menuAtivo");
//             document.getElementById("homeDIV").style.display = 'block';
//             document.getElementById("aboutDIV").style.display = 'none';
//             document.getElementById("infoDIV").style.display = 'none';
//             document.getElementById("charDIV").style.display = 'none';
//             break;
//         case 2:
//             document.getElementById("about").classList.add("menuAtivo");
//             document.getElementById("homeDIV").style.display = 'none';
//             document.getElementById("aboutDIV").style.display = 'block';
//             document.getElementById("infoDIV").style.display = 'none';
//             document.getElementById("charDIV").style.display = 'none';
//             break;
//         case 3:
//             document.getElementById("info").classList.add("menuAtivo");
//             document.getElementById("homeDIV").style.display = 'none';
//             document.getElementById("aboutDIV").style.display = 'none';
//             document.getElementById("infoDIV").style.display = 'block';
//             document.getElementById("charDIV").style.display = 'none';
//             break;
//         case 4:
//             document.getElementById("char").classList.add("menuAtivo");
//             document.getElementById("homeDIV").style.display = 'none';
//             document.getElementById("aboutDIV").style.display = 'none';
//             document.getElementById("infoDIV").style.display = 'none';
//             document.getElementById("charDIV").style.display = 'block';
//             break;
//         default:
//             alert("F")
//             break;
//     }


// }


///Dados dos personagens para a finalizada de apresentação das imagens
info = [
    { "nome": "Jotaro Kujo", "imagem": "Star_platinum", "stand": "Star Platinum", "descricao": "Jotaro Kujo (空 条 承太郎 Kujō Jotaro) É o protagonista de Stardust Crusaders, a Parte 3 do anime e tem aparições nas Partes 4-6. Jotaro é o terceiro Jojo e é o mais famoso da série." },
    { "nome": "Josuke Higashikata", "imagem": "soft", "stand": "Soft & Wet", "descricao": "Josuke Higashikata (東方 定助 Higashikata Jōsuke) é o protagonista da oitava parte de JoJo's Bizarre Adventure, JoJolion, e o oitavo JoJo da série." },
    { "nome": "Joseph Joestar", "imagem": "", "stand": "Hermit Purple", "descricao": "Joseph Joestar (ジョセフ・ジョースター Josefu Jōsutā) é o protagonista da segunda parte de JoJo's Bizarre Adventure, Battle Tendency, e o segundo JoJo da série. Ele também aparece como um aliado primário em Stardust Crusaders, e como um personagem neutro em Diamond is Unbreakable." },
    { "nome": "Dio Brando", "imagem": "mundo", "stand": "Za Warudo", "descricao": "é o principal antagonista de ambos Parte I: Phantom Blood e Parte III: Stardust Crusaders. Por conta de acontecimentos nas outras partes, Dio, acaba influenciando indiretamente nos principais acontecimentos da Parte VI: Stone Ocean." }]


char(0)
function char(X) {
    //Dados para apresentar o personagem
    user = info[X].nome
    stand = info[X].stand
    descricao = info[X].descricao
    imagem = info[X].imagem
    //Separar o nome do personagem por intervalo, por exemplo tmp[0] primeiro nome
    var tmp = user.split(" ");

    
    //Com innerHTML insiro as tags com os textos
    document.getElementById("infoChar").innerHTML = "<h1>" + tmp[0] + "<br>" + tmp[1] + "</h1><h2>" + stand + "</h2><h3>" + descricao + "</h3><hr style='margin-bottom: 10px;'>"
    //Com innerHTML insiro as tags com as imagens
    document.getElementById("perso").innerHTML = "<img id='stand' src='imagens/" + imagem + ".png' alt=''><img id='user' src='imagens/" + tmp[0] + ".png' alt=''>"

    //chamo a função para arrumar os cards dos personagens
    geraCard(X)
}

function geraCard(X) {

    cards = ""
    for (const key in info) {
        user = info[key].nome
        stand = info[key].stand
        //Separar o nome do personagem por intervalo, por exemplo tmp[0] primeiro nome
        tmp = user.split(" ");
        
        //Teste para verificar o personagem sendo apresentado na tela não vai aparecer com card embaixo.
        if (X != key) {
            cards = cards + "<div class='card'><img src='imagens/" + tmp[0] + "Card.png' alt=''><h2>" + user + "</h2><h3>" + stand + "</h3><a href='#infoChar'><button onclick='char(" + key + ")'>read more</button></a>      </div>"

        }
    }

    document.getElementById("cardPai").innerHTML = cards;
}
