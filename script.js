// ===== 1. DATOS DE LA GALERÍA =====
const galleryData = {
    // 🌷 SECCIÓN "GUSTOS" (botón del menú)
    'cosas-meli': [
        { src: 'meli/loto.jfif', poem: 'Como la flor de loto, te elevas sobre cualquier obstáculo, hermosa y radiante en medio de todo. Eres pura y bella.' },
        { src: 'meli/astro.jpeg', poem: 'Aunque el universo sea infinito y esté lleno de estrellas, mi lugar favorito siempre será a tu lado.' },
        { src: 'meli/ger.jpg', poem: 'Tus colores favoritos iluminan mis días, recordándome lo mucho que te amo y lo feliz que me haces.' },
        { src: 'meli/pai.jpeg', poem: 'Cada momento a tu lado es un regalo, y cada recuerdo es un tesoro que guardo en mi corazón.' },
        { src: 'meli/regal1.jpeg', poem: 'Cada regalo es un pedacito de mi corazón que te entrego con todo mi amor. Espero que te guste mucho.' },

        // 🍫 Su dulce favorito de ella: Kinder Delice
        { src: 'meli/gus_com.jfif', poem: 'El Kinder Delice es tu dulce favorito,\ncapas de chocolate y crema sin igual.\nY a mí me encanta verte sonreír\ncuando lo disfrutas sin pensar.\n\nCada bocado que te llevas a la boca\nme recuerda lo dulce que es tu corazón.\nPorque tú eres el dulce más perfecto\nque la vida me ha dado, mi amor.\n\nTe amo más que al Kinder Delice,\nmás que al azúcar, más que a la miel.\nY si tuviera que elegir un dulce para siempre,\nsin dudarlo, te elegiría a ti, mi bien.' },

        // 🥭 Su bebida favorita de ella: Arizona de mango
        { src: 'meli/gus-b.jfif', poem: 'El Arizona de mango es tu bebida favorita,\nsu color dorado te hace sonreír.\nY a mí me encanta verte feliz,\ncon cada sorbo que das por ahí.\n\nCada trago te refresca la tarde,\ny a mí me refresca el alma verte así.\nPorque tú eres mi bebida preferida,\nla que me calma y me hace vivir.\n\nNo necesito lata ni botella,\nsolo tenerte cerca para ser feliz.\nTú eres mi elixir de cada día,\nmi Arizona de mango, mi amor sin fin.' },

        // 🏐 Su deporte favorito de ella: Voleibol
        { src: 'meli/gus_dep.jfif', poem: 'En la cancha de voleibol tú brillas,\ncada saque, cada remate es pura magia.\nNo importa el marcador ni la estrategia,\nporque para mí tú ya eres la victoria.\n\nCuando saltas a la red, cuando bloqueas,\nmi corazón late al ritmo de tu pasión.\nEl voleibol es tu deporte favorito,\ny verte jugar es mi mayor adicción.\n\nCada punto que anotas es un latido,\ncada set que ganas, una emoción.\nPero el verdadero trofeo eres tú,\nmi campeona, la dueña de mi corazón.' },

        // 💃 La danza de ella
        { src: 'meli/gus_danza.jfif', poem: 'Cuando bailas, el mundo se detiene,\ntus pies dibujan estrellas en el suelo.\nCada paso, cada giro, cada movimiento\nes un poema que llega hasta el cielo.\n\nBailaría contigo toda la vida,\naunque no sepa los pasos, aunque falle,\nporque lo importante no es la coreografía,\nsino el amor que en cada abrazo se instala.\n\nBailamos juntos el ritmo del corazón,\ntú y yo, sin música, sin prisa.\nPorque la mejor danza del mundo\nes la que bailamos con la mirada y con la risa.' }
    ],

    'mi-prioridad': [
        { src: 'meli/ft1.jpeg', poem: 'Eres mi prioridad número uno, mi pensamiento constante y la razón de mi sonrisa.' },
        { src: 'meli/ft2.jpeg', poem: 'Cada momento a tu lado es un regalo que atesoro en mi corazón.' },
        { src: 'meli/ft3.jpeg', poem: 'Cada vez que te miro, me enamoro de nuevo de la persona tan maravillosa que eres.' },
        { src: 'meli/ft4.jpeg', poem: 'Eres la dueña de mis pensamientos y la reina de mi corazón. Te amo muchísimo.' },
        { src: 'meli/ft5.jpeg', poem: 'No importa cuánto tiempo pase, siempre quiero estar a tu lado, mi amor.' },
        { src: 'meli/ft6.jpeg', poem: 'Eres mi mundo entero, la persona que le da sentido a todo lo que hago.' },
        { src: 'meli/ft7.jpeg', poem: 'Mi todo, mi nada, mi universo. Eres el mejor regalo que la vida me ha dado.' },
        { src: 'meli/ft8.jpeg', poem: 'La más hermosa de todas. Tu belleza no solo es exterior, sino también la de tu corazón.' },
        { src: 'meli/ft11.jpeg', poem: 'Eres la razón por la que creo en el amor verdadero. Gracias por existir.' },
        { src: 'meli/ft13.jpeg', poem: 'Tus ojos son mi lugar favorito para perderme, y tu sonrisa mi motivo para sonreír.' },
        { src: 'meli/ft14.jpeg', poem: 'Cada momento contigo es un tesoro que guardo en el alma. Te amo infinitamente.' },
        { src: 'meli/ft15.jpeg', poem: 'Me encanta cada detalle de ti, desde tu forma de hablar hasta tu hermosa sonrisa.' },
        { src: 'meli/ft16.jpeg', poem: 'Si pudiera pedir un deseo, pediría pasar toda una eternidad a tu lado.' },
        { src: 'meli/ft17.jpeg', poem: 'Gracias por llegar a mi vida y llenarla de luz, de amor y de momentos inolvidables.' },
        { src: 'meli/ft18.jpeg', poem: 'Contigo he aprendido que el amor verdadero existe y que se siente tan bonito como esto.' },
        { src: 'meli/ft19.jfif', poem: 'Eres esa persona especial que hace que todo lo malo desaparezca cuando estoy contigo.' },
        { src: 'meli/ft20.jfif', poem: 'Te amo no solo por lo que eres, sino por lo que soy cuando estoy a tu lado.' },
        { src: 'meli/ft21.jfif', poem: 'Nuestro amor es mi historia favorita, y espero seguir escribiendo páginas contigo.' },
        { src: 'meli/ft22.jfif', poem: 'A tu lado, el tiempo vuela y cada segundo se convierte en un recuerdo hermoso.' },
        { src: 'meli/ft23.jfif', poem: 'Eres mi inspiración diaria, la razón por la que sonrío sin darme cuenta.' },
        { src: 'meli/ft24.jfif', poem: 'No hay distancia ni obstáculo que pueda apagar lo que siento por ti.' },
        { src: 'meli/ft25.jfif', poem: 'Me encanta perderme en tus ojos y encontrar mi lugar seguro en tus brazos.' },
        { src: 'meli/ft26.jfif', poem: 'Cada día a tu lado es una aventura que quiero repetir por siempre.' },
        { src: 'meli/ft27.jfif', poem: 'Eres el sueño que no sabía que tenía y la realidad que supera cualquier fantasía.' },
        { src: 'meli/ft28.jfif', poem: 'Gracias por ser mi compañera, mi amiga y mi amor. Eres todo para mí.' },
        { src: 'meli/ft29.jfif', poem: 'Tu amor es el motor que impulsa mi vida. Te amo con todo mi ser.' },
        { src: 'meli/ft30.jfif', poem: 'A tu lado he aprendido el verdadero significado de la felicidad.' },
        { src: 'meli/ft31.jfif', poem: 'Eres la persona más especial que he conocido y la que quiero a mi lado siempre.' },
        { src: 'meli/ft32.jpeg', poem: 'Cada foto tuya es una obra de arte que admiro con todo mi corazón.' },
        { src: 'meli/ft33.jpeg', poem: 'Me encanta verte sonreír, es mi paisaje favorito en todo el mundo.' },
        { src: 'meli/ft34.jpeg', poem: 'Eres la razón por la que creo en los finales felices.' },
        { src: 'meli/ft35.jpeg', poem: 'No importa cuántas veces te vea, siempre me pareces la más hermosa.' },
        { src: 'meli/ft36.jpeg', poem: 'Tu belleza exterior es solo un reflejo de la hermosa persona que eres por dentro.' },
        { src: 'meli/ft37.jpeg', poem: 'Gracias por existir y por permitirme amarte cada día más.' },
        { src: 'meli/ft38.jpeg', poem: 'Cada instante a tu lado vale más que mil palabras.' },
        { src: 'meli/ft39.jpeg', poem: 'Eres mi persona favorita en todo el universo.' },
        { src: 'meli/ft40.jpeg', poem: 'Me encanta la forma en que iluminas mi vida sin siquiera intentarlo.' },
        { src: 'meli/ft41.jpeg', poem: 'A tu lado, todo tiene sentido. Te amo con locura.' },
        { src: 'meli/ft42.jpeg', poem: 'Gracias por ser mi novia, mi amiga y mi todo. Te amo.' }
    ],
    'dibujo': [
        { src: 'meli/d1.jpeg', poem: 'Tu arte refleja la belleza de tu alma, y yo soy muy afortunado de poder admirarlo.' },
        { src: 'meli/d2.jpeg', poem: 'Cada trazo que haces está lleno de magia, al igual que cada momento que compartimos.' },
        { src: 'meli/d3.jpeg', poem: 'Me fascina tu creatividad y la forma en que ves el mundo. Eres increíble.' },
        { src: 'meli/d.jpeg', poem: 'Dibujas maravillas, pero la obra de arte más hermosa eres tú misma.' },
        { src: 'meli/c1.jpeg', poem: 'Un regalito hecho con mucho esfuerzo y amor, pensando siempre en hacerte feliz.' },
        { src: 'meli/c2.jpeg', poem: 'Todo lo que hago por ti está hecho con amor, porque te lo mereces todo.' },
        { src: 'meli/c3.jpeg', poem: 'Eres mi persona amada, mi estrella favorita en este vasto universo.' }
    ],
    'regalos': [
        { src: 'meli/c4.jpeg', poem: 'Nuestros momentos juntos son el mejor regalo de todos, y este es solo un pequeño detalle.' },
        { src: 'meli/c5.jpeg', poem: 'Espero que este detalle te recuerde lo mucho que te amo y lo importante que eres para mí.' },
        { src: 'meli/c6.jpeg', poem: 'Cada detalle que tengo contigo es un reflejo de mi amor por ti.' },
        { src: 'meli/c7.jpeg', poem: 'Me encanta verte feliz, y haré todo lo posible por sacarte una sonrisa siempre.' },
        { src: 'meli/r1.jpeg', poem: 'Un pequeño obsequio para una persona gigante en mi corazón.' },
        { src: 'meli/r2.jpeg', poem: 'Gracias por recibir cada uno de mis detalles con tanto amor. Te amo.' },
        { src: 'meli/r3.jpeg', poem: 'Cada regalo es una excusa para recordarte lo especial que eres para mí.' },
        { src: 'meli/r4.jpeg', poem: 'No importa el tamaño del regalo, lo importante es el amor con el que se da.' },
        { src: 'meli/r5.jpeg', poem: 'Quiero llenar tu vida de detalles bonitos, así como tú llenas la mía.' },
        { src: 'meli/r6.jpeg', poem: 'Eres mi persona favorita, y me encanta consentirte siempre que puedo.' },
        { src: 'meli/r7.jpeg', poem: 'Espero que cada detalle te haga sonreír tanto como tú me haces sonreír a mí.' },
        { src: 'meli/r8.jpeg', poem: 'Te amo más de lo que las palabras pueden expresar, y estos detalles son una pequeña muestra.' }
    ]
};

// ===== 2. CANCIONES =====
const songs = [
    { title: 'Love Rapa', src: 'Love Rapa.mp3' },
    { title: 'I Like Me Better', src: 'I Like Me Better.mp3' },
    { title: 'NADIE MÁS', src: 'NADIE MÁS.mp3' },
    { title: '309', src: '309.mp3' },
    { title: 'neo roneo', src: 'neo roneo.mp3' }
];
let currentSongIndex = 0;
let isPlaying = false;

// ===== 3. NAVEGACIÓN =====
function showView(viewId) {
    document.querySelectorAll('.view-section').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);
}

function goToMenu() {
    showView('main-menu');
    document.getElementById('photo-grid').innerHTML = '';
}

function openCategory(category) {
    if (category === 'inicio') {
        showView('inicio-view');
        typeWriter();
        return;
    }
    if (category === 'cartas') {
        showView('cartas-view');
        return;
    }

    const grid = document.getElementById('photo-grid');
    const title = document.getElementById('category-title');
    
    const titles = {
        'cosas-meli': '🌷 Cosas que te gustan',
        'mi-prioridad': '👑 Mi Prioridad',
        'dibujo': '🎨 Tus Dibujos',
        'regalos': '🎁 Nuestros Regalos'
    };
    title.textContent = titles[category] || 'Galería';

    grid.innerHTML = '';
    if (galleryData[category]) {
        galleryData[category].forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${item.src}" alt="Recuerdo" data-poem="${item.poem}" onclick="showPoem(this)">
            `;
            grid.appendChild(card);
        });
    }

    showView('category-view');
}

// ===== 4. POEMA Y CORAZONES =====
function showPoem(imgElement) {
    const overlay = document.getElementById('poem-overlay');
    const poemImg = document.getElementById('poem-img');
    const poemText = document.getElementById('poem-text');
    const heartContainer = document.getElementById('heart-container');

    poemImg.src = imgElement.src;
    const poem = imgElement.getAttribute('data-poem') || "Eres lo más hermoso que me ha pasado. Te amo con todo mi corazón.";
    poemText.innerText = poem;

    overlay.classList.add('active');

    heartContainer.querySelectorAll('.heart-particle').forEach(h => h.remove());

    const heartEmojis = ['❤️', '💖', '💕', '💗', '💓', '♥️'];
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        heart.style.left = '50%';
        heart.style.top = '50%';
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        heart.style.setProperty('--tx', `${tx}px`);
        heart.style.setProperty('--ty', `${ty}px`);
        heart.style.animationDelay = `${Math.random() * 0.3}s`;
        
        heartContainer.appendChild(heart);
    }

    triggerConfetti();
}

function closePoem() {
    document.getElementById('poem-overlay').classList.remove('active');
}

// ===== 5. MÚSICA =====
function toggleMusic() {
    const modal = document.getElementById('music-modal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) {
        renderMusicList();
        updateCurrentSongDisplay();
    }
}

function renderMusicList() {
    const list = document.getElementById('music-list');
    list.innerHTML = '';
    songs.forEach((song, index) => {
        const btn = document.createElement('button');
        btn.className = 'music-item' + (index === currentSongIndex && isPlaying ? ' playing' : '');
        
        let icon = '🎵';
        if (index === currentSongIndex) {
            icon = isPlaying ? '⏸️' : '▶️';
        }
        
        btn.innerHTML = `<span>${song.title}</span> <span>${icon}</span>`;
        btn.onclick = () => selectSong(index);
        list.appendChild(btn);
    });
}

function updateCurrentSongDisplay() {
    const display = document.getElementById('current-song-display');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const floatBtn = document.getElementById('music-btn');
    
    display.innerText = `Reproduciendo: ${songs[currentSongIndex].title}`;
    
    if (isPlaying) {
        playPauseBtn.innerHTML = '⏸️ Pausar';
        floatBtn.textContent = '⏸️';
    } else {
        playPauseBtn.innerHTML = '▶️ Reproducir';
        floatBtn.textContent = '🎵';
    }
}

function selectSong(index) {
    const music = document.getElementById('bg-music');
    currentSongIndex = index;
    music.src = songs[index].src;
    music.play().catch(e => console.log("El navegador bloqueó el autoplay"));
    isPlaying = true;
    updateCurrentSongDisplay();
    renderMusicList();
    closeMusicModal();
}

function togglePlayCurrent() {
    const music = document.getElementById('bg-music');
    if (isPlaying) {
        music.pause();
        isPlaying = false;
    } else {
        music.play().catch(e => console.log("El navegador bloqueó el autoplay"));
        isPlaying = true;
    }
    updateCurrentSongDisplay();
    renderMusicList();
}

function closeMusicModal() {
    document.getElementById('music-modal').classList.remove('active');
}

// ===== 6. PALETA =====
function togglePalette() {
    const modal = document.getElementById('palette-modal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) {
        highlightActivePalette();
    }
}

function closePalette() {
    document.getElementById('palette-modal').classList.remove('active');
}

function setColorTheme(color) {
    const body = document.body;
    if (color === 'verde-agua') {
        body.removeAttribute('data-color');
    } else {
        body.setAttribute('data-color', color);
    }
    localStorage.setItem('colorTheme', color);
    highlightActivePalette();
}

function highlightActivePalette() {
    let current = localStorage.getItem('colorTheme') || 'verde-agua';
    if (current === 'default') current = 'verde-agua';
    document.querySelectorAll('.palette-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.color === current);
    });
}

// ===== 7. MODO OSCURO =====
function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.getElementById('theme-toggle');
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        toggleBtn.textContent = '🌙';
        localStorage.setItem('darkMode', 'off');
    } else {
        body.setAttribute('data-theme', 'dark');
        toggleBtn.textContent = '☀️';
        localStorage.setItem('darkMode', 'on');
    }
}

// ===== 8. UTILIDADES =====
let i = 0;
let typingTimeout;
function typeWriter() {
    const text = "❤️ La niña más hermosa que verás el resto de tu vida ❤️";
    const element = document.getElementById("typewriter");
    if (!element) return;
    
    element.innerHTML = "";
    i = 0;
    clearTimeout(typingTimeout);
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            typingTimeout = setTimeout(type, 100);
        }
    }
    type();
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00897b', '#26a69a', '#7b1fa2', '#ce93d8']
    });
}

const startDate = new Date(2026, 3, 25);
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const timerElement = document.getElementById('love-timer');
    if (timerElement) {
        timerElement.innerHTML = `❤️ Juntos desde hace: <br> ${days} días, ${hours} horas y ${minutes} min ❤️`;
    }
}
setInterval(updateTimer, 1000);

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = ['❤️', '💖', '💕', '💗'][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.position = 'fixed';
    heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    heart.style.animation = `floatHeart ${Math.random() * 2 + 4}s ease-out forwards`;
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '0';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

// ===== 9. INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    let savedColor = localStorage.getItem('colorTheme') || 'verde-agua';
    if (savedColor === 'default') savedColor = 'verde-agua';
    setColorTheme(savedColor);

    const savedDark = localStorage.getItem('darkMode');
    if (savedDark === 'on') {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('theme-toggle').textContent = '☀️';
    }

    updateTimer();
    setInterval(createFloatingHeart, 1200);
});