<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nosso Cantinho Especial</title>
    <style>
        /* Reset e configurações gerais */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #ffafbd, #ffc3a0);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .container {
            max-width: 900px;
            width: 100%;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 20px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            padding: 30px;
        }
        
        header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px dashed #ffafbd;
        }
        
        h1 {
            color: #ff6b6b;
            font-size: 2.5rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .subtitle {
            color: #666;
            font-size: 1.2rem;
        }
        
        .buttons-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .emo-btn {
            padding: 20px 15px;
            font-size: 1.1rem;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 120px;
            position: relative;
            overflow: hidden;
        }
        
        .emo-btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        
        .emo-btn:active {
            transform: translateY(0);
        }
        
        .emo-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.2);
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .emo-btn:hover::before {
            opacity: 1;
        }
        
        .emo-icon {
            font-size: 2rem;
            margin-bottom: 10px;
        }
        
        #nervosaBtn { 
            background: linear-gradient(135deg, #ffafbd, #ffdde1);
            color: #d3567e;
        }
        
        #raivaBtn { 
            background: linear-gradient(135deg, #ff9a9e, #fad0c4);
            color: #c44569;
        }
        
        #tristeBtn { 
            background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
            color: #4a69bd;
        }
        
        #saudadesBtn { 
            background: linear-gradient(135deg, #ffecd2, #fcb69f);
            color: #e17055;
        }
        
        .magic-area {
            background: white;
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            min-height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            transition: all 0.5s ease;
        }
        
        #magicText {
            font-size: 1.4rem;
            color: #666;
            margin-bottom: 20px;
            line-height: 1.6;
        }
        
        #magicImage {
            max-width: 100%;
            max-height: 300px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            margin: 15px 0;
            display: none;
        }
        
        #magicSound {
            width: 100%;
            max-width: 400px;
            margin: 15px 0;
            display: none;
        }
        
        .surpresa {
            text-align: center;
        }
        
        #surpresaBtn {
            padding: 15px 30px;
            font-size: 1.1rem;
            background: linear-gradient(135deg, #ff6b6b, #ffafbd);
            color: white;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
        }
        
        #surpresaBtn:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(255, 107, 107, 0.6);
        }
        
        .hearts {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }
        
        .heart {
            position: absolute;
            width: 20px;
            height: 20px;
            background: #ff6b6b;
            transform: rotate(45deg);
            opacity: 0.7;
        }
        
        .heart::before, .heart::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background: #ff6b6b;
            border-radius: 50%;
        }
        
        .heart::before {
            top: -10px;
            left: 0;
        }
        
        .heart::after {
            top: 0;
            left: -10px;
        }
        
        .footer {
            text-align: center;
            margin-top: 20px;
            color: #888;
            font-size: 0.9rem;
        }
        
        /* Animações */
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
        }
        
        .float {
            animation: float 3s ease-in-out infinite;
        }
        
        /* Responsividade */
        @media (max-width: 768px) {
            .buttons-grid {
                grid-template-columns: 1fr;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            .container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="hearts" id="heartsContainer"></div>
    
    <div class="container">
        <header>
            <h1 class="float">💖 Nosso Cantinho de Paz</h1>
            <p class="subtitle">Quando as emoções ficarem intensas, clique em um botão abaixo</p>
        </header>

        <div class="buttons-grid">
            <button class="emo-btn pulse" id="nervosaBtn">
                <span class="emo-icon">😤</span>
                Estou nervosa!
            </button>

            <button class="emo-btn pulse" id="raivaBtn">
                <span class="emo-icon">😠</span>
                Estou com raiva!
            </button>

            <button class="emo-btn pulse" id="tristeBtn">
                <span class="emo-icon">😔</span>
                Estou triste...
            </button>

            <button class="emo-btn pulse" id="saudadesBtn">
                <span class="emo-icon">💕</span>
                Estou com saudades!
            </button>
        </div>

        <div id="magicArea" class="magic-area">
            <p id="magicText">Clique em um botão acima para ver a mágica acontecer! ✨</p>
            <img id="magicImage" src="" alt="">
            <audio id="magicSound" controls></audio>
        </div>

        <div class="surpresa">
            <button id="surpresaBtn">💌 Clique para uma surpresa extra</button>
        </div>
        
        <div class="footer">
            Feito com 💖 especialmente para você
        </div>
    </div>

    <script>
        // Recursos para cada emoção
        const recursos = {
            nervosa: {
                textos: [
                    "Respira fundo comigo... 3... 2... 1... 💨",
                    "Lembra daquela vez que rimos até chorar? 😄",
                    "Você é mais forte do que qualquer aborrecimento! 💪",
                    "Que tal uma dança louca para liberar a energia? 💃",
                    "Tudo vai ficar bem, eu prometo! 🌈"
                ],
                imagens: [
                    "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ]
            },
            
            raiva: {
                textos: [
                    "RAIVA É PERMITIDA! Mas que tal esmagar virtualmente? 👊",
                    "Imagine a raiva saindo como fumaça... poof! 💨",
                    "Você é a pessoa mais incrível que eu conheço! ✨",
                    "Que tal contar até 10 comigo? 1... 2... 3... 🔢",
                    "Nada é mais importante do que sua paz interior! 🕊️"
                ],
                imagens: [
                    "https://images.unsplash.com/photo-1518481852459-0bbc655ae65b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ]
            },
            
            triste: {
                textos: [
                    "Estou aqui por você, sempre! 🤗",
                    "Lembra que toda tempestade passa... 🌈",
                    "Você merece todo o amor do mundo! 💖",
                    "Que tal um abraço virtual bem apertado? 🫂",
                    "Seus sentimentos são válidos e importantes! 💫"
                ],
                imagens: [
                    "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ]
            },
            
            saudades: {
                textos: [
                    "Eu também estou com saudades! 😔💕",
                    "Logo estaremos juntinhos de novo! 🥰",
                    "Pensa no nosso próximo abraço... 🤗",
                    "Meu coração está aí com você! 💓",
                    "Cada segundo longe de você é um segundo a mais de saudade! ⏳"
                ],
                imagens: [
                    "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                ]
            }
        };

        // Elementos DOM
        const magicText = document.getElementById('magicText');
        const magicImage = document.getElementById('magicImage');
        const magicSound = document.getElementById('magicSound');
        const magicArea = document.getElementById('magicArea');
        const heartsContainer = document.getElementById('heartsContainer');

        // Função para criar corações flutuantes
        function createHearts() {
            for (let i = 0; i < 15; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDelay = Math.random() * 5 + 's';
                heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
                heartsContainer.appendChild(heart);
            }
        }

        // Função para mostrar conteúdo baseado na emoção
        function showContent(emotion) {
            const recurso = recursos[emotion];
            const textoAleatorio = recurso.textos[Math.floor(Math.random() * recurso.textos.length)];
            
            // Atualizar texto
            magicText.textContent = textoAleatorio;
            
            // Mostrar imagem
            magicImage.style.display = 'block';
            const imgAleatoria = recurso.imagens[Math.floor(Math.random() * recurso.imagens.length)];
            magicImage.src = imgAleatoria;
            
            // Esconder áudio
            magicSound.style.display = 'none';
            
            // Efeito visual na área mágica
            magicArea.style.background = 'linear-gradient(135deg, #fff, #f9f9f9)';
            setTimeout(() => {
                magicArea.style.background = 'white';
            }, 500);
            
            // Criar corações extras
            createExtraHearts();
        }

        // Função para criar corações extras ao clicar
        function createExtraHearts() {
            for (let i = 0; i < 5; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = Math.random() * 100 + 'vh';
                heart.style.animation = 'none';
                heart.style.opacity = '0.9';
                
                document.body.appendChild(heart);
                
                // Animação personalizada
                let posX = Math.random() * window.innerWidth;
                let posY = window.innerHeight;
                let speed = Math.random() * 2 + 1;
                
                const fall = setInterval(() => {
                    posY -= speed;
                    heart.style.top = posY + 'px';
                    heart.style.left = posX + 'px';
                    
                    if (posY < -50) {
                        clearInterval(fall);
                        heart.remove();
                    }
                }, 50);
            }
        }

        // Event listeners para os botões
        document.getElementById('nervosaBtn').addEventListener('click', function() {
            showContent('nervosa');
        });

        document.getElementById('raivaBtn').addEventListener('click', function() {
            showContent('raiva');
        });

        document.getElementById('tristeBtn').addEventListener('click', function() {
            showContent('triste');
        });

        document.getElementById('saudadesBtn').addEventListener('click', function() {
            showContent('saudades');
        });

        // Botão surpresa extra
        document.getElementById('surpresaBtn').addEventListener('click', function() {
            const mensagens = [
                "Você é a pessoa mais incrível do mundo! 🌎",
                "Meu dia fica melhor só de pensar em você! ☀️",
                "Obrigado por ser exatamente quem você é! 💖",
                "Nada me faz mais feliz do que te ver feliz! 😊",
                "Cada detalhe seu me encanta! ✨",
                "Seu sorriso é minha fonte de energia! ⚡",
                "Você torna tudo mais especial! 🌟",
                "Eu te amo mais do que palavras podem expressar! 💞"
            ];
            
            const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
            magicText.textContent = mensagemAleatoria;
            magicImage.style.display = 'none';
            magicSound.style.display = 'none';
            
            // Efeito especial para a surpresa
            magicArea.style.background = 'linear-gradient(135deg, #ffafbd, #ffc3a0)';
            magicArea.style.color = 'white';
            
            // Criar muitos corações
            for (let i = 0; i < 20; i++) {
                setTimeout(() => createExtraHearts(), i * 100);
            }
            
            setTimeout(() => {
                magicArea.style.background = 'white';
                magicArea.style.color = 'inherit';
            }, 3000);
        });

        // Inicializar corações de fundo
        createHearts();
        
        // Efeito de digitação no título
        const title = document.querySelector('h1');
        const originalText = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Iniciar efeito de digitação após um breve delay
        setTimeout(typeWriter, 500);
    </script>
</body>
</html>
