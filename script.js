// Sons e conteúdos para cada botão
const recursos = {
    nervosa: {
        textos: [
            "Respira fundo comigo... 3... 2... 1... 💨",
            "Lembra daquela vez que rimos até chorar? 😄",
            "Você é mais forte do que qualquer aborrecimento! 💪",
            "Que tal uma dança louca para liberar a energia? 💃"
        ],
        sons: ["sons/risada.mp3", "sons/respiracao.mp3"],
        imagens: ["fotos/engracada1.jpg", "fotos/momento_feliz.jpg"]
    },
    
    raiva: {
        textos: [
            "RAIVA É PERMITIDA! Mas que tal esmagar virtualmente? 👊",
            "Imagine a raiva saindo como fumaça... poof! 💨",
            "Você é a pessoa mais incrível que eu conheço! ✨",
            "Que tal contar até 10 comigo? 1... 2... 3... 🔢"
        ],
        sons: ["sons/explosao.mp3", "sons/alivio.mp3"],
        imagens: ["fotos/abraço.jpg", "fotos/paz.jpg"]
    },
    
    triste: {
        textos: [
            "Estou aqui por você, sempre! 🤗",
            "Lembra que toda tempestade passa... 🌈",
            "Você merece todo o amor do mundo! 💖",
            "Que tal um abraço virtual bem apertado? 🫂"
        ],
        sons: ["sons/musica_triste.mp3", "sons/voz_conforto.mp3"],
        imagens: ["fotos/conforto.jpg", "fotos/amor.jpg"]
    },
    
    saudades: {
        textos: [
            "Eu também estou com saudades! 😔💕",
            "Logo estaremos juntinhos de novo! 🥰",
            "Pensa no nosso próximo abraço... 🤗",
            "Meu coração está aí com você! 💓"
        ],
        sons: ["sons/nossa_musica.mp3", "sons/te_amo.mp3"],
        imagens: ["fotos/melhor_momento.jpg", "fotos/nos.jpg"]
    }
};

// Função para tocar som
function tocarSom(src) {
    const audio = document.getElementById('magicSound');
    audio.src = src;
    audio.style.display = 'block';
    audio.play();
}

// Função para mostrar imagem
function mostrarImagem(src) {
    const img = document.getElementById('magicImage');
    img.src = src;
    img.style.display = 'block';
    img.style.maxWidth = '300px';
    img.style.margin = '20px auto';
}

// Eventos para os botões
document.getElementById('nervosaBtn').addEventListener('click', function() {
    const recurso = recursos.nervosa;
    const textoAleatorio = recurso.textos[Math.floor(Math.random() * recurso.textos.length)];
    
    document.getElementById('magicText').textContent = textoAleatorio;
    document.getElementById('magicImage').style.display = 'none';
    document.getElementById('magicSound').style.display = 'none';
    document.getElementById('magicVideo').style.display = 'none';
    
    // 70% de chance de mostrar imagem, 30% de tocar som
    if (Math.random() > 0.3 && recurso.imagens.length > 0) {
        const imgAleatoria = recurso.imagens[Math.floor(Math.random() * recurso.imagens.length)];
        mostrarImagem(imgAleatoria);
    } else if (recurso.sons.length > 0) {
        const somAleatorio = recurso.sons[Math.floor(Math.random() * recurso.sons.length)];
        tocarSom(somAleatorio);
    }
});

// Repetir para os outros botões (raivaBtn, tristeBtn, saudadesBtn)
document.getElementById('raivaBtn').addEventListener('click', function() {
    // Código similar ao acima, usando recursos.raiva
});

document.getElementById('tristeBtn').addEventListener('click', function() {
    // Código similar ao acima, usando recursos.triste
});

document.getElementById('saudadesBtn').addEventListener('click', function() {
    // Código similar ao acima, usando recursos.saudades
});

// Botão surpresa extra
document.getElementById('surpresaBtn').addEventListener('click', function() {
    const mensagens = [
        "Você é a pessoa mais incrível do mundo! 🌎",
        "Meu dia fica melhor só de pensar em você! ☀️",
        "Obrigado por ser exatamente quem você é! 💖",
        "Nada me faz mais feliz do que te ver feliz! 😊"
    ];
    
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById('magicText').textContent = mensagemAleatoria;
});
