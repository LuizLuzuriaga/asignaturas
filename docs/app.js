// ============================================
// Application Logic - Seguridad Social
// Modo Examen & Repaso + Casos
// ============================================

let currentTest = null;
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let currentMode = 'examen';
let validatedQuestions = [];
let pendingTestId = null;

const TEST_NAMES = {
    test: 'TEST COMPLETO',
    test_random: 'TEST ALEATORIO',
    test20: 'TEST RÁPIDO',
    test_bloque1: 'BLOQUE 1 – Asistencia · Contingencias · Mutuas',
    test_bloque2: 'BLOQUE 2 – Muerte · Jubilación · IP',
    test_bloque3: 'BLOQUE 3 – IP Parcial · Desempleo · IMV · SNS',
};

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function cleanText(text) {
    if (!text) return '';
    return text
        .replace(/\\n/g, ' ')
        .replace(/\n/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .trim();
}

function getTestQuestions(testId) {
    let questions;
    switch(testId) {
        case 'test':
            questions = TEST_QUESTIONS.map((q, i) => ({...q, originalIndex: i, source: 'TEST'}));
            break;
        case 'test_random':
            questions = shuffleArray(TEST_QUESTIONS.map((q, i) => ({...q, originalIndex: i, source: 'TEST'})));
            break;
        case 'test20': {
            const shuffled = shuffleArray(TEST_QUESTIONS.map((q, i) => ({...q, originalIndex: i, source: 'TEST'})));
            questions = shuffled.slice(0, 20);
            break;
        }
        case 'test_bloque1':
            questions = TEST_QUESTIONS.slice(0, 21).map((q, i) => ({...q, originalIndex: i, source: 'BLOQUE 1'}));
            break;
        case 'test_bloque2':
            questions = TEST_QUESTIONS.slice(21, 43).map((q, i) => ({...q, originalIndex: i + 21, source: 'BLOQUE 2'}));
            break;
        case 'test_bloque3':
            questions = TEST_QUESTIONS.slice(43).map((q, i) => ({...q, originalIndex: i + 43, source: 'BLOQUE 3'}));
            break;
    }
    return questions;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

// ============================================
// Mode Selection
// ============================================

function selectTest(testId) {
    pendingTestId = testId;
    document.getElementById('modeTestName').textContent = TEST_NAMES[testId];
    showScreen('modeScreen');
}

function startWithMode(mode) {
    currentMode = mode;
    startTest(pendingTestId);
}

function startTest(testId) {
    currentTest = testId;
    currentQuestions = getTestQuestions(testId);
    currentIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    validatedQuestions = new Array(currentQuestions.length).fill(false);

    document.getElementById('testTitle').textContent = TEST_NAMES[testId];
    document.getElementById('totalQ').textContent = currentQuestions.length;

    buildDots();
    renderQuestion();
    showScreen('testScreen');
}

function buildDots() {
    const container = document.getElementById('questionDots');
    container.innerHTML = '';
    const maxDots = Math.min(currentQuestions.length, 70);
    for (let i = 0; i < maxDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'q-dot';
        dot.title = `Pregunta ${i + 1}`;
        dot.onclick = () => goToQuestion(i);
        container.appendChild(dot);
    }
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.q-dot');
    const maxDots = Math.min(currentQuestions.length, 70);
    for (let i = 0; i < maxDots; i++) {
        dots[i].className = 'q-dot';
        if (i === currentIndex) dots[i].classList.add('current');
        else if (currentQuestions[i].notVisible) dots[i].classList.add('skipped-dot');
        else if (validatedQuestions[i]) {
            const correctIdx = currentQuestions[i].ans ? currentQuestions[i].ans.charCodeAt(0) - 97 : -1;
            if (userAnswers[i] === correctIdx) dots[i].classList.add('dot-correct');
            else dots[i].classList.add('dot-wrong');
        }
        else if (userAnswers[i] !== null) dots[i].classList.add('answered');
    }
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    const isNotVisible = q.notVisible === true;
    const hasOptions = q.o && q.o.length > 0 && !isNotVisible;
    const isValidated = validatedQuestions[currentIndex];

    document.getElementById('currentQ').textContent = currentIndex + 1;

    const pct = ((currentIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = pct + '%';

    const sourceLabel = q.source ? ` · ${q.source}` : '';
    const modeLabel = currentMode === 'repaso' ? ' · 📖 REPASO' : ' · 📝 EXAMEN';
    document.getElementById('questionNumber').textContent = `Pregunta ${currentIndex + 1} de ${currentQuestions.length}${sourceLabel}${modeLabel}`;

    document.getElementById('questionText').textContent = cleanText(q.q);

    const warningEl = document.getElementById('questionWarning');
    warningEl.style.display = isNotVisible ? 'block' : 'none';

    const optList = document.getElementById('optionsList');
    optList.innerHTML = '';

    if (hasOptions) {
        const correctIdx = q.ans ? q.ans.charCodeAt(0) - 97 : -1;

        q.o.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';

            if (isValidated) {
                if (idx === correctIdx) btn.classList.add('option-correct');
                if (idx === userAnswers[currentIndex] && idx !== correctIdx) btn.classList.add('option-wrong');
                btn.disabled = true;
            } else {
                if (userAnswers[currentIndex] === idx) btn.classList.add('selected');
                btn.onclick = () => selectOption(idx);
            }

            const letter = String.fromCharCode(65 + idx);
            btn.innerHTML = `
                <span class="option-letter">${letter}</span>
                <span class="option-text">${cleanText(opt)}</span>
            `;
            optList.appendChild(btn);
        });
    } else if (isNotVisible) {
        const info = document.createElement('div');
        info.style.cssText = 'text-align:center; color: var(--text-muted); padding: 20px; font-style: italic;';
        info.textContent = 'Esta pregunta no tiene opciones disponibles. Pasa a la siguiente.';
        optList.appendChild(info);
    }

    const validateArea = document.getElementById('validateArea');
    const feedbackArea = document.getElementById('feedbackArea');

    if (currentMode === 'repaso' && hasOptions && !isValidated) {
        validateArea.style.display = 'block';
        document.getElementById('btnValidate').disabled = userAnswers[currentIndex] === null;
    } else {
        validateArea.style.display = 'none';
    }

    if (isValidated && currentMode === 'repaso') {
        showFeedback();
    } else {
        feedbackArea.style.display = 'none';
    }

    document.getElementById('btnPrev').disabled = currentIndex === 0;
    const isLast = currentIndex === currentQuestions.length - 1;

    if (currentMode === 'examen') {
        document.getElementById('btnNext').style.display = isLast ? 'none' : '';
        document.getElementById('btnFinish').style.display = isLast ? '' : 'none';
    } else {
        document.getElementById('btnNext').style.display = isLast ? 'none' : '';
        document.getElementById('btnFinish').style.display = isLast ? '' : 'none';
    }

    updateDots();
}

function selectOption(idx) {
    if (validatedQuestions[currentIndex]) return;
    userAnswers[currentIndex] = idx;
    renderQuestion();
}

function validateAnswer() {
    if (userAnswers[currentIndex] === null) return;
    validatedQuestions[currentIndex] = true;
    renderQuestion();
}

function showFeedback() {
    const feedbackArea = document.getElementById('feedbackArea');
    const q = currentQuestions[currentIndex];
    const correctIdx = q.ans ? q.ans.charCodeAt(0) - 97 : -1;
    const userIdx = userAnswers[currentIndex];
    const isCorrect = userIdx === correctIdx;

    let html = '';

    if (isCorrect) {
        html += '<div class="feedback-result feedback-correct">✅ ¡Correcto!</div>';
    } else {
        const correctLetter = String.fromCharCode(65 + correctIdx);
        html += `<div class="feedback-result feedback-wrong">❌ Incorrecto. La respuesta correcta es la <strong>${correctLetter}</strong>.</div>`;
    }

    feedbackArea.innerHTML = html;
    feedbackArea.style.display = 'block';
    feedbackArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
        document.querySelector('.question-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
        document.querySelector('.question-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function goToQuestion(idx) {
    currentIndex = idx;
    renderQuestion();
}

function finishTest() {
    calculateResults();
    showScreen('resultsScreen');
}

function calculateResults() {
    let correct = 0;
    let wrong = 0;
    let blank = 0;
    let skipped = 0;
    let answerable = 0;

    currentQuestions.forEach((q, i) => {
        if (q.notVisible) {
            skipped++;
            return;
        }
        answerable++;
        if (userAnswers[i] === null) {
            blank++;
        } else {
            const selectedLetter = String.fromCharCode(97 + userAnswers[i]);
            if (q.ans && q.ans !== '' && selectedLetter === q.ans) {
                correct++;
            } else {
                wrong++;
            }
        }
    });

    const pointsPerCorrect = answerable > 0 ? 10 / answerable : 0;
    const penalty = pointsPerCorrect / 3;

    let rawScore = (correct * pointsPerCorrect) - (wrong * penalty);
    rawScore = Math.max(0, rawScore);
    rawScore = Math.min(10, rawScore);

    document.getElementById('resultsTestName').textContent = TEST_NAMES[currentTest];
    document.getElementById('statCorrect').textContent = correct;
    document.getElementById('statWrong').textContent = wrong;
    document.getElementById('statBlank').textContent = blank;
    document.getElementById('statSkipped').textContent = skipped;

    const scoreValue = rawScore.toFixed(2);
    document.getElementById('scoreValue').textContent = scoreValue;

    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (rawScore / 10) * circumference;
    const fg = document.getElementById('scoreFg');

    let color = '#f87171';
    if (rawScore >= 5) color = '#fbbf24';
    if (rawScore >= 7) color = '#34d399';
    fg.style.stroke = color;

    setTimeout(() => {
        fg.style.strokeDashoffset = offset;
    }, 100);

    const info = document.getElementById('scoringInfo');
    info.innerHTML = `
        <strong>Sistema de puntuación:</strong><br>
        Total preguntas evaluables: ${answerable} | No visibles: ${skipped}<br>
        Valor por acierto: ${pointsPerCorrect.toFixed(4)} puntos<br>
        Penalización por fallo: -${penalty.toFixed(4)} puntos (1/3 del acierto)<br>
        Preguntas en blanco: 0 puntos
    `;

    document.getElementById('reviewSection').style.display = 'none';
}

function reviewTest() {
    const section = document.getElementById('reviewSection');
    const list = document.getElementById('reviewList');

    if (section.style.display === 'block') {
        section.style.display = 'none';
        return;
    }

    list.innerHTML = '';

    currentQuestions.forEach((q, i) => {
        const isNotVisible = q.notVisible === true;
        const item = document.createElement('div');
        const correctIdx = q.ans ? q.ans.charCodeAt(0) - 97 : -1;
        const userIdx = userAnswers[i];
        const isCorrect = userIdx !== null && userIdx === correctIdx;
        const isWrong = userIdx !== null && userIdx !== correctIdx;

        let statusClass = 'review-blank';
        if (isNotVisible) statusClass = 'review-skipped';
        else if (isCorrect) statusClass = 'review-correct';
        else if (isWrong) statusClass = 'review-wrong';

        item.className = `review-item ${statusClass}`;

        const sourceLabel = q.source ? ` <small style="color:var(--text-muted);">[${q.source}]</small>` : '';

        let optionsHtml = '';
        if (q.o && q.o.length > 0 && !isNotVisible) {
            optionsHtml = '<div class="review-options">';
            q.o.forEach((opt, idx) => {
                let cls = '';
                if (idx === correctIdx) cls = 'is-correct';
                if (idx === userIdx && isWrong) cls += ' is-user-wrong';
                if (idx === userIdx && isCorrect) cls = 'is-user-correct';
                optionsHtml += `<div class="review-opt ${cls}">${cleanText(opt)}</div>`;
            });
            optionsHtml += '</div>';
        }

        let warningHtml = '';
        if (isNotVisible) {
            warningHtml = '<div class="review-warning">⚠️ Pregunta no visible en el documento original</div>';
        }

        let resultBadge = '';
        if (!isNotVisible) {
            if (isCorrect) resultBadge = '<span style="color:var(--success);font-weight:700;">✅ Correcta</span>';
            else if (isWrong) resultBadge = '<span style="color:var(--danger);font-weight:700;">❌ Incorrecta</span>';
            else resultBadge = '<span style="color:var(--text-muted);font-weight:500;">⬜ Sin responder</span>';
        }

        item.innerHTML = `
            <div class="review-q-number">Pregunta ${i + 1}${sourceLabel} ${resultBadge}</div>
            <div class="review-q-text">${cleanText(q.q)}</div>
            ${warningHtml}
            ${optionsHtml}
        `;

        list.appendChild(item);
    });

    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
}

function retryTest() {
    document.getElementById('scoreFg').style.strokeDashoffset = 2 * Math.PI * 54;
    startTest(currentTest);
}

function goToMenu() {
    document.getElementById('scoreFg').style.strokeDashoffset = 2 * Math.PI * 54;
    showScreen('menuScreen');
}

// ============================================
// Casos Screen
// ============================================

function showCasos(type) {
    const container = document.getElementById('casosList');
    const title = document.getElementById('casosTitle');
    const subtitle = document.getElementById('casosSubtitle');
    container.innerHTML = '';

    if (type === 'juris') {
        title.textContent = '⚖️ Casos Jurisprudenciales';
        subtitle.textContent = '¿Es accidente de trabajo? Analiza cada caso y reflexiona sobre la respuesta';

        CASOS_JURIS.forEach(caso => {
            const card = document.createElement('div');
            card.className = 'caso-card juris';

            let refHtml = '';
            if (caso.referencia) {
                refHtml = `<div class="caso-referencia">📄 ${caso.referencia}</div>`;
            }

            card.innerHTML = `
                <div class="caso-number">Caso ${caso.id}</div>
                <div class="caso-titulo">${caso.titulo}</div>
                <div class="caso-descripcion">${caso.descripcion}</div>
                <div class="caso-pregunta">${caso.pregunta}</div>
                ${refHtml}
                <button class="caso-answer-toggle" onclick="toggleNotes(this)">
                    ✏️ Mis notas
                </button>
                <div class="caso-notes">
                    <textarea placeholder="Escribe aquí tu análisis del caso..."></textarea>
                </div>
            `;
            container.appendChild(card);
        });
    } else if (type === 'practicos') {
        title.textContent = '🧮 Casos Prácticos de Cálculo';
        subtitle.textContent = 'Ejercicios de cálculo de prestaciones de Seguridad Social';

        CASOS_PRACTICOS.forEach(caso => {
            const card = document.createElement('div');
            card.className = 'caso-card practico';

            let preguntasHtml = '<div class="caso-preguntas-list">';
            caso.preguntas.forEach(p => {
                preguntasHtml += `<div class="caso-pregunta-item">${p}</div>`;
            });
            preguntasHtml += '</div>';

            let respuestaHtml = '';
            if (caso.respuesta) {
                const paragraphs = caso.respuesta.split('\n\n').map(p => `<p>${p}</p>`).join('');
                respuestaHtml = `
                    <button class="caso-answer-toggle caso-respuesta-toggle" onclick="toggleRespuesta(this)">
                        📋 Respuesta completa
                    </button>
                    <div class="caso-respuesta">
                        <div class="caso-respuesta-content">${paragraphs}</div>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="caso-number">Ejercicio ${caso.id}</div>
                <div class="caso-titulo">${caso.titulo}</div>
                <div class="caso-descripcion">${caso.descripcion}</div>
                ${preguntasHtml}
                <button class="caso-answer-toggle" onclick="toggleNotes(this)">
                    ✏️ Mis notas / Resolución
                </button>
                <div class="caso-notes">
                    <textarea placeholder="Escribe aquí tu resolución del caso práctico..."></textarea>
                </div>
                ${respuestaHtml}
            `;
            container.appendChild(card);
        });
    }

    showScreen('casosScreen');
}

function toggleNotes(btn) {
    const notes = btn.nextElementSibling;
    notes.classList.toggle('visible');
    if (notes.classList.contains('visible')) {
        btn.innerHTML = '🔽 Ocultar notas';
        notes.querySelector('textarea').focus();
    } else {
        btn.innerHTML = '✏️ Mis notas / Resolución';
    }
}

function toggleRespuesta(btn) {
    const respuesta = btn.nextElementSibling;
    respuesta.classList.toggle('visible');
    if (respuesta.classList.contains('visible')) {
        btn.innerHTML = '🔽 Ocultar respuesta completa';
        respuesta.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        btn.innerHTML = '📋 Respuesta completa';
    }
}

// ============================================
// Keyboard navigation
// ============================================
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('testScreen').classList.contains('active')) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextQuestion();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevQuestion();
    } else if (e.key === 'Enter' && currentMode === 'repaso') {
        e.preventDefault();
        validateAnswer();
    } else if (['1','2','3','4','a','b','c','d'].includes(e.key.toLowerCase())) {
        const q = currentQuestions[currentIndex];
        if (q.notVisible || validatedQuestions[currentIndex]) return;
        let idx;
        if (['a','1'].includes(e.key.toLowerCase())) idx = 0;
        else if (['b','2'].includes(e.key.toLowerCase())) idx = 1;
        else if (['c','3'].includes(e.key.toLowerCase())) idx = 2;
        else if (['d','4'].includes(e.key.toLowerCase())) idx = 3;
        if (idx !== undefined && q.o && idx < q.o.length) selectOption(idx);
    }
});
