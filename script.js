// 1. MÚSICA Y SCROLL
function playMusic() {
    const music = document.getElementById('bg-music');
    music.volume = 0.5;
    music.play().catch(e => console.log("Audio esperando interacción"));
    document.getElementById('galeria').scrollIntoView({behavior: 'smooth'});
}

// 2. QUIZ
const questions = [
    { q: "1. ¿Dónde nos tomamos nuestra primera foto?", options: ["En el salón de clases", "En las sillas del pasillo", "En el salón de informática de Cuarto Año", "En la salida del colegio"], correct: 2 },
    { q: "2. ¿A qué restaurante fuimos en nuestro primer San Valentín?", options: ["La Franquería", "McDonald's", "Hotel Versalles", "Tío Caimán"], correct: 2 },
    { q: "3. ¿Cuál de las comidas que me has preparado es la que más me ha gustado?", options: ["Pescado con coco", "Fetuccini de camarones", "Costillitas de cerdo", "Fetuccini de pollo", "Todas las anteriores"], correct: 4 }
];

let currentQuestion = 0;
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.q;
    optionsEl.innerHTML = ''; feedbackEl.textContent = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(idx) {
    if (idx === questions[currentQuestion].correct) {
        feedbackEl.textContent = "¡Correcto! ✅"; feedbackEl.style.color = "green";
        currentQuestion++;
        if (currentQuestion < questions.length) setTimeout(loadQuestion, 1000);
        else setTimeout(() => {
            document.getElementById('quiz-container').classList.add('hidden');
            document.getElementById('final-surprise').classList.remove('hidden');
            lanzarConfeti();
        }, 1000);
    } else { feedbackEl.textContent = "¡Intenta de nuevo! ❌"; feedbackEl.style.color = "red"; }
}
loadQuestion();

// 3. BOTÓN NO ESCAPISTA
const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');

function moverBoton() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const newX = Math.random() * (width - 150);
    const newY = Math.random() * (height - 150);

    // Al moverlo, lo cambiamos a fixed para que viaje por toda la pantalla
    btnNo.style.position = 'fixed';
    btnNo.style.left = newX + 'px';
    btnNo.style.top = newY + 'px';
}

btnNo.addEventListener('mouseover', moverBoton);
btnNo.addEventListener('touchstart', moverBoton);
btnNo.addEventListener('click', (e) => { e.preventDefault(); moverBoton(); });

btnSi.addEventListener('click', () => {
    alert("¡SABÍA QUE DIRÍAS QUE SÍ! ❤️ TE AMO.");
    lanzarConfeti(); lanzarConfeti();
    btnNo.style.display = 'none';
});

function lanzarConfeti() { confetti({ particleCount: 150, spread: 100, origin: { y: 0.7 } }); }

// 4. RAZONES ÚNICAS
const reasonsList = [
    "Por tu sonrisa que me reinicia la vida", "Por cómo me miras cuando crees que no me doy cuenta",
    "Por tu paciencia infinita conmigo (y mis videojuegos)", "Porque cocinas delicioso",
    "Por apoyarme siempre en la ingeniería cuando me estreso", "Por ser mi Player 2 en la vida real",
    "Por entenderme sin necesidad de palabras", "Por tus abrazos que son mi lugar seguro",
    "Por tu risa, que es mi sonido favorito del mundo", "Porque eres inteligente y admiro tu mente",
    "Por cómo te brillan los ojos cuando hablas de lo que amas", "Por darme paz en medio del caos",
    "Por calmar mis nervios antes de los exámenes", "Por todas nuestras salidas a comer",
    "Por ser mi copiloto en cada aventura", "Por lo hermosa que te ves recién levantada",
    "Por tu sentido del humor (y aguantar mis chistes malos)", "Porque me impulsas a ser un mejor hombre",
    "Por los memes que nos enviamos", "Por cuidarme cuando me siento mal",
    "Por tu sinceridad, siempre", "Por ser mi refugio cuando el día va mal",
    "Por nuestras charlas profundas en la madrugada", "Por todos los planes que tenemos a futuro",
    "Porque eres mi mejor amiga y mi novia a la vez", "Por tu valentía para enfrentar los problemas",
    "Por lo cariñosa que eres conmigo", "Por tu voz que me calma al instante",
    "Por los planes improvisados que terminan siendo los mejores", "Por escucharme hablar de código aunque te aburra",
    "Porque confío en ti más que en nadie", "Por cómo me acaricias el cabello",
    "Por tu olor, que me encanta", "Porque me haces sentir la persona más afortunada",
    "Por ser auténtica, sin filtros", "Por cómo nos complementamos tan bien",
    "Por nuestros chistes internos que nadie más entiende", "Por tu capacidad de perdonar y avanzar",
    "Porque contigo el tiempo vuela demasiado rápido", "Por cómo te preocupas de verdad por mí",
    "Por ser mi soporte emocional", "Por esos besos inesperados",
    "Por la conexión tan fuerte que tenemos", "Por cómo intentas bailar conmigo",
    "Por tu dulzura natural", "Porque eres trabajadora y dedicada en lo que haces",
    "Por cómo me motivas cuando quiero rendirme", "Por las veces que hemos llorado de risa juntos",
    "Por ser la razón de mis desvelos felices", "Por tu madurez para ver la vida",
    "Porque me enseñaste lo que es el amor sano", "Por cómo me defiendes ante todo",
    "Por ser mi fan número uno", "Por tu energía bonita que contagia",
    "Por los viajes que hemos hecho y los que haremos", "Por hacer que los problemas difíciles parezcan fáciles",
    "Porque me aceptas con todos mis bugs y errores", "Por tu lealtad inquebrantable",
    "Por ser mi confidente absoluta", "Por cómo me haces cosquillas",
    "Porque eres hermosa por fuera, pero más por dentro", "Por tu empatía con las personas",
    "Por celebrar mis pequeños logros como si fueran grandes", "Por los silencios cómodos entre nosotros",
    "Por ser mi debilidad", "Por cómo luchas por nuestra relación",
    "Porque me inspiras a superarme", "Por tu independencia y fuerza",
    "Por cómo me calmas cuando me enojo", "Por ser la dueña absoluta de mi corazón",
    "Por tus consejos que siempre tienen razón", "Porque cada día encuentro algo nuevo que amar de ti",
    "Por la seguridad que me transmites", "Por ser mi sol en los días nublados",
    "Por cómo me extrañas cuando no estoy", "Por tu ternura inagotable",
    "Porque eres mi prioridad siempre", "Por lo bien que te llevas con mi entorno",
    "Por ser literalmente mi sueño hecho realidad", "Por la pasión que le pones a tus cosas",
    "Por cómo me haces sentir guapo", "Por ser mi compañera de series y películas",
    "Porque contigo hasta ir al súper es divertido", "Por cómo me inspiras confianza",
    "Por tu generosidad con los demás", "Por ser mi presente y mi futuro",
    "Por la calidez de tus manos", "Por la confianza que hemos construido ladrillo a ladrillo",
    "Por ser simplemente tú, sin pretensiones", "Por hacerme sentir amado cada mañana",
    "Por tu perseverancia ante la vida", "Porque eres, sin duda, el amor de mi vida",
    "Por cómo encajamos perfectamente", "Por todas las 'primeras veces' que hemos vivido",
    "Por hacerme sentir en casa estés donde estés", "Por tu bondad infinita",
    "Porque no me imagino la vida sin ti", "Por los detalles pequeños que tienes conmigo",
    "Por ser mi todo", "Y porque te amo más de lo que este código puede expresar ❤️"
];

const listContainer = document.getElementById('reasons-list');
const icons = ["💖", "✨", "🌸", "🦋", "🥰", "🌟", "💝"];

reasonsList.forEach((reason, index) => {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.innerHTML = `<span class='reason-number'>#${index + 1}</span> 
                      <span class='reason-icon'>${icons[Math.floor(Math.random()*icons.length)]}</span> 
                      <span class='reason-text'>${reason}</span>`;
    listContainer.appendChild(card);
});

// 5. CUPONES
function redeem(el) {
    if(!el.classList.contains('redeemed') && confirm("¿Canjear cupón?")) {
        el.classList.add('redeemed'); el.innerHTML = "CANJEADO <br> ✅"; lanzarConfeti();
    }
}

// 6. LLUVIA DE CORAZONES
function createHearts() {
    const container = document.getElementById('hearts-container');
    for(let i=0; i<20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
}
createHearts();