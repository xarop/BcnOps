/**
 * BcnOps 2026 — Aplicació Web de Preparació
 * Convocatòria d'ampliació de borses — Ajuntament de Barcelona (Exp. 31/2026)
 */

// Seus oficials amb adreces i coordenades de Google Maps
const SEUS_DADES = [
  {
    id: "upf-ciutadella",
    nom: "Campus Ciutadella (UPF)",
    adreca: "Carrer de Ramon Trias Fargas, 25-27, 08005 Barcelona",
    desc: "Universitat Pompeu Fabra — Edificis Jaume I i Roger de Llúria.",
    mapsUrl: "https://maps.google.com/?q=Campus+Ciutadella+UPF+Ramon+Trias+Fargas+25+Barcelona"
  },
  {
    id: "ub-economiques",
    nom: "UB Facultat d'Economia i Empresa (Edifici 690)",
    adreca: "Avinguda Diagonal, 690, 08034 Barcelona",
    desc: "Campus Diagonal — Aules principals d'exàmens de l'antiga Facultat d'Econòmiques.",
    mapsUrl: "https://maps.google.com/?q=Facultat+d'Economia+i+Empresa+UB+Av+Diagonal+690+Barcelona"
  },
  {
    id: "ub-empresarials",
    nom: "UB Facultat d'Economia i Empresa (Edifici 696)",
    adreca: "Avinguda Diagonal, 696, 08034 Barcelona",
    desc: "Campus Diagonal — Edifici annex d'Empresarials.",
    mapsUrl: "https://maps.google.com/?q=Edifici+696+Facultat+d'Economia+i+Empresa+UB+Av+Diagonal+696+Barcelona"
  },
  {
    id: "upc-nord",
    nom: "UPC Campus Nord",
    adreca: "Carrer Jordi Girona, 1-3, 08034 Barcelona",
    desc: "Universitat Politècnica de Catalunya — Aularis A3, A4 i Vertex.",
    mapsUrl: "https://maps.google.com/?q=UPC+Campus+Nord+Carrer+Jordi+Girona+Barcelona"
  },
  {
    id: "ub-dret",
    nom: "UB Facultat de Dret",
    adreca: "Avinguda Diagonal, 684, 08034 Barcelona",
    desc: "Campus Diagonal — Edifici històric de la Facultat de Dret.",
    mapsUrl: "https://maps.google.com/?q=Facultat+de+Dret+UB+Av+Diagonal+684+Barcelona"
  }
];

// Tasques del Pla d'Estudis (17 al 23 d'octubre de 2026)
const TASQUES_PLAN = [
  {
    dia: "Dissabte, 17 d'octubre",
    dataId: "2026-10-17",
    titol: "Diagnòstic inicial i logística",
    tasques: [
      { id: "t1_1", text: "Revisar les bases oficials i llistats a la Seu Electrònica (Expedient 31/2026)." },
      { id: "t1_2", text: "Comprovar la seu d'examen assignada i el temps de trajecte en transport públic." },
      { id: "t1_3", text: "Realitzar un test inicial complet de diagnòstic al simulador." }
    ]
  },
  {
    dia: "Diumenge, 18 d'octubre",
    dataId: "2026-10-18",
    titol: "Ofimàtica I — Fulls de càlcul bàsics",
    tasques: [
      { id: "t2_1", text: "Dominar les funcions =SUMAR.SI, =PROMEDIO, =CONTAR i =CONTARA a Excel/Calc." },
      { id: "t2_2", text: "Comprendre les referències absolutes i mixtes ($A$1, $A1, A$1)." },
      { id: "t2_3", text: "Resoldre 15 exercicis pràctics de càlcul de percentatges i fórmules." }
    ]
  },
  {
    dia: "Dilluns, 19 d'octubre",
    dataId: "2026-10-19",
    titol: "Ofimàtica II — Dreceres, fitxers i correu",
    tasques: [
      { id: "t3_1", text: "Repassar les dreceres de teclat de Windows (Win+L, F2, Ctrl+G, Ctrl+E/Ctrl+A)." },
      { id: "t3_2", text: "Recordar la diferència entre camps CC i CCO (protecció de dades RGPD)." },
      { id: "t3_3", text: "Pràctica al simulador: Fer test exclusiu del bloc d'Ofimàtica." }
    ]
  },
  {
    dia: "Dimarts, 20 d'octubre",
    dataId: "2026-10-20",
    titol: "Aptitudinal I — Sèries i analogies",
    tasques: [
      { id: "t4_1", text: "Entrenar sèries numèriques geomètriques i combinades." },
      { id: "t4_2", text: "Treballar les sèries de lletres i alfanumèriques de l'alfabet oficial." },
      { id: "t4_3", text: "Practicar analogies verbals i relacions d'oposició/sinonímia." }
    ]
  },
  {
    dia: "Dimecres, 21 d'octubre",
    dataId: "2026-10-21",
    titol: "Aptitudinal II — Raonament abstracte i càlcul",
    tasques: [
      { id: "t5_1", text: "Practicar matrius de figures i raonament lògic deductiu." },
      { id: "t5_2", text: "Accelerar el càlcul mental de percentatges aplicats a pressupostos públics." },
      { id: "t5_3", text: "Test al simulador: Fer bloc Aptitudinal cronometrat." }
    ]
  },
  {
    dia: "Dijous, 22 d'octubre",
    dataId: "2026-10-22",
    titol: "Llengua Estrangera — Anglès administratiu",
    tasques: [
      { id: "t6_1", text: "Vocabulari administratiu clau: applicant, deadline, requirement, notice board." },
      { id: "t6_2", text: "Preposicions de temps i lloc (on Monday, at 10:00 h, at the campus)." },
      { id: "t6_3", text: "Fórmules corteses d'atenció al ciutadà i oracions condicionals." }
    ]
  },
  {
    dia: "Divendres, 23 d'octubre",
    dataId: "2026-10-23",
    titol: "Simulacre final i preparació de material",
    tasques: [
      { id: "t7_1", text: "Simulacre general de 27 preguntes amb cronòmetre estricte." },
      { id: "t7_2", text: "Revisar el mòdul d'errors de les preguntes fallades amb les seves explicacions." },
      { id: "t7_3", text: "Preparar el material obligatori: DNI original vigent, llapis 2 (HB), goma i maquineta." },
      { id: "t7_4", text: "Descansar i recordar: Obertura d'aules a les 09:30 h; tancament a les 10:00 h." }
    ]
  }
];

// Estat global de l'aplicació
const state = {
  questions: [],
  filteredQuestions: [],
  currentCategory: "tots",
  currentIndex: 0,
  userAnswers: {}, // idPregunta -> índex d'opció seleccionada (o undefined)
  timerSeconds: 0,
  timerInterval: null,
  isTimerRunning: false,
  isFinished: false,
  reviewFilter: "all"
};

// ============================================================
// Inicialització de l'aplicació
// ============================================================

document.addEventListener("DOMContentLoaded", async () => {
  initTabs();
  initVenues();
  initStudyPlan();
  loadBestScores();
  await loadQuestions();
  initSimulator();
  initShareButton();
});

// ============================================================
// Gestió de Pestanyes (Tabs)
// ============================================================

function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      switchTab(targetId);
    });
  });
}

function switchTab(targetId) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

  const targetBtn = document.querySelector(`.tab-btn[data-tab="${targetId}"]`);
  const targetPane = document.getElementById(targetId);

  if (targetBtn) targetBtn.classList.add("active");
  if (targetPane) targetPane.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// Càrrega del Banc de Preguntes (questions.json)
// ============================================================

async function loadQuestions() {
  try {
    const response = await fetch("questions.json");
    if (!response.ok) throw new Error("Error carregant questions.json");
    state.questions = await response.json();
  } catch (error) {
    console.warn("Avís: Carregant banc de dades de seguretat...", error);
    // Fallback integrat de dades per garantir funcionament local offline
    state.questions = getFallbackQuestions();
  }
}

// ============================================================
// Secció 1: Seus d'Examen i Cercador
// ============================================================

function initVenues() {
  const container = document.getElementById("venues-grid");
  const searchInput = document.getElementById("venue-search-input");
  if (!container) return;

  function renderVenues(filterText = "") {
    const query = filterText.toLowerCase().trim();
    const filtered = SEUS_DADES.filter(s =>
      s.nom.toLowerCase().includes(query) ||
      s.adreca.toLowerCase().includes(query) ||
      s.desc.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 24px; color: var(--text-muted);">
          No s'ha trobat cap seu que coincideixi amb "<strong>${escapeHtml(filterText)}</strong>".
        </div>`;
      return;
    }

    container.innerHTML = filtered.map((s, index) => `
      <div class="venue-card">
        <div>
          <span class="venue-badge">Seu Oficial #${index + 1}</span>
          <h4 class="venue-name">${escapeHtml(s.nom)}</h4>
          <p class="venue-address">📍 ${escapeHtml(s.adreca)}</p>
          <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 14px;">${escapeHtml(s.desc)}</p>
        </div>
        <a href="${s.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          Obrir a Google Maps
        </a>
      </div>
    `).join("");
  }

  renderVenues();

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderVenues(e.target.value);
    });
  }
}

// ============================================================
// Secció 2: Simulador de Test
// ============================================================

function updateFilterCounts() {
  const counts = {
    tots: state.questions.length,
    aptitudinal: state.questions.filter(q => q.categoria === "aptitudinal").length,
    ofimatica: state.questions.filter(q => q.categoria === "ofimatica").length,
    angles: state.questions.filter(q => q.categoria === "angles").length
  };

  const pTots = document.querySelector('.filter-pill[data-cat="tots"]');
  const pApt = document.querySelector('.filter-pill[data-cat="aptitudinal"]');
  const pOfi = document.querySelector('.filter-pill[data-cat="ofimatica"]');
  const pAng = document.querySelector('.filter-pill[data-cat="angles"]');

  if (pTots) pTots.textContent = `Tots els blocs (${counts.tots})`;
  if (pApt) pApt.textContent = `Aptitudinal (${counts.aptitudinal})`;
  if (pOfi) pOfi.textContent = `Ofimàtica (${counts.ofimatica})`;
  if (pAng) pAng.textContent = `Anglès (${counts.angles})`;
}

function initSimulator() {
  updateFilterCounts();
  const filterPills = document.querySelectorAll(".filter-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const cat = pill.getAttribute("data-cat");
      setCategoryFilter(cat);
    });
  });

  document.getElementById("btn-prev").addEventListener("click", () => navigateQuestion(-1));
  document.getElementById("btn-next").addEventListener("click", () => navigateQuestion(1));
  document.getElementById("btn-clear-choice").addEventListener("click", clearCurrentChoice);
  document.getElementById("btn-finish-quiz").addEventListener("click", confirmFinishQuiz);
  document.getElementById("btn-restart-quiz").addEventListener("click", restartQuiz);
  document.getElementById("btn-toggle-timer").addEventListener("click", toggleTimer);

  setCategoryFilter("tots");
}

function setCategoryFilter(cat) {
  state.currentCategory = cat;
  if (cat === "tots") {
    state.filteredQuestions = [...state.questions];
  } else {
    state.filteredQuestions = state.questions.filter(q => q.categoria === cat);
  }

  // Reiniciem l'estat del test
  state.currentIndex = 0;
  state.userAnswers = {};
  state.isFinished = false;
  resetTimer();
  startTimer();

  // Amagar pantalla de resultats i mostrar qüestionari
  document.getElementById("quiz-results-container").style.display = "none";
  document.getElementById("quiz-active-container").style.display = "block";

  renderQuestionNav();
  renderCurrentQuestion();
}

function renderQuestionNav() {
  const container = document.getElementById("question-nav-grid");
  if (!container) return;

  container.innerHTML = state.filteredQuestions.map((q, idx) => {
    const isCurrent = idx === state.currentIndex ? "current" : "";
    const isAnswered = state.userAnswers[q.id] !== undefined ? "answered" : "";
    return `
      <button class="q-nav-item ${isCurrent} ${isAnswered}" onclick="jumpToQuestion(${idx})" title="Pregunta ${idx + 1}">
        ${idx + 1}
      </button>
    `;
  }).join("");
}

window.jumpToQuestion = function(idx) {
  if (idx >= 0 && idx < state.filteredQuestions.length) {
    state.currentIndex = idx;
    renderQuestionNav();
    renderCurrentQuestion();
  }
};

function renderCurrentQuestion() {
  if (state.filteredQuestions.length === 0) return;

  const q = state.filteredQuestions[state.currentIndex];
  const total = state.filteredQuestions.length;

  document.getElementById("q-current-number").textContent = `Pregunta ${state.currentIndex + 1} de ${total}`;

  // Tag de Categoria
  const catTag = document.getElementById("q-category-tag");
  let catClass = "cat-aptitudinal";
  let catNom = "Aptitudinal";
  if (q.categoria === "ofimatica") {
    catClass = "cat-ofimatica";
    catNom = "Ofimàtica";
  } else if (q.categoria === "angles") {
    catClass = "cat-angles";
    catNom = "Llengua Estrangera";
  }
  catTag.className = `category-tag ${catClass}`;
  catTag.textContent = `${catNom} • ${q.subcategoria}`;

  // Enunciat
  document.getElementById("q-prompt-text").textContent = q.pregunta;

  // Opcions
  const optionsContainer = document.getElementById("q-options-container");
  const selectedIndex = state.userAnswers[q.id];

  optionsContainer.innerHTML = q.opcions.map((opt, optIdx) => {
    const isSelected = selectedIndex === optIdx ? "selected" : "";
    return `
      <button class="option-btn ${isSelected}" onclick="selectAnswer(${q.id}, ${optIdx})">
        ${escapeHtml(opt)}
      </button>
    `;
  }).join("");

  // Estat dels botons de navegació
  document.getElementById("btn-prev").disabled = state.currentIndex === 0;
  const isLast = state.currentIndex === total - 1;
  const nextBtn = document.getElementById("btn-next");
  nextBtn.textContent = isLast ? "Repassar respostes" : "Següent →";
}

window.selectAnswer = function(questionId, optionIndex) {
  state.userAnswers[questionId] = optionIndex;
  renderQuestionNav();
  renderCurrentQuestion();
};

function clearCurrentChoice() {
  const q = state.filteredQuestions[state.currentIndex];
  if (q) {
    delete state.userAnswers[q.id];
    renderQuestionNav();
    renderCurrentQuestion();
  }
}

function navigateQuestion(direction) {
  const newIndex = state.currentIndex + direction;
  if (newIndex >= 0 && newIndex < state.filteredQuestions.length) {
    state.currentIndex = newIndex;
    renderQuestionNav();
    renderCurrentQuestion();
  }
}

// ============================================================
// Cronòmetre
// ============================================================

function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.isTimerRunning = true;
  updateTimerDisplay();

  state.timerInterval = setInterval(() => {
    state.timerSeconds++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.isTimerRunning = false;
  const toggleBtn = document.getElementById("btn-toggle-timer");
  if (toggleBtn) toggleBtn.textContent = "▶ Reprendre";
}

function resetTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerSeconds = 0;
  state.isTimerRunning = false;
  const toggleBtn = document.getElementById("btn-toggle-timer");
  if (toggleBtn) toggleBtn.textContent = "⏸ Pausar";
  updateTimerDisplay();
}

function toggleTimer() {
  const toggleBtn = document.getElementById("btn-toggle-timer");
  if (state.isTimerRunning) {
    stopTimer();
  } else {
    startTimer();
    if (toggleBtn) toggleBtn.textContent = "⏸ Pausar";
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(state.timerSeconds / 60);
  const seconds = state.timerSeconds % 60;
  const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const el = document.getElementById("quiz-timer-text");
  if (el) el.textContent = formatted;
}

// ============================================================
// Correcció Oficial i Mòdul d'Errors
// ============================================================

function confirmFinishQuiz() {
  const answeredCount = Object.keys(state.userAnswers).length;
  const total = state.filteredQuestions.length;

  if (answeredCount < total) {
    const unAnswered = total - answeredCount;
    const confirmMsg = `Has contestat ${answeredCount} de ${total} preguntes (${unAnswered} en blanc).\nRecorda que a les proves oficials els errors penalitzen (-0,33), però les respostes en blanc no penalitzen.\n\nVols finalitzar l'examen ara?`;
    if (!confirm(confirmMsg)) return;
  }

  finishQuiz();
}

function finishQuiz() {
  stopTimer();
  state.isFinished = true;

  const total = state.filteredQuestions.length;
  let encerts = 0;
  let errors = 0;
  let enBlanc = 0;

  state.filteredQuestions.forEach(q => {
    const userAnswer = state.userAnswers[q.id];
    if (userAnswer === undefined) {
      enBlanc++;
    } else if (userAnswer === q.respostaCorrecta) {
      encerts++;
    } else {
      errors++;
    }
  });

  // Fórmula oficial: Encerts - (Errors / 3)
  const penalitzacio = errors / 3;
  let puntuacioNeta = encerts - penalitzacio;
  if (puntuacioNeta < 0) puntuacioNeta = 0;

  // Nota sobre 10
  const notaSobre10 = (puntuacioNeta / total) * 10;
  const isPass = notaSobre10 >= 5.0;

  // Desar millor puntuació a localStorage
  saveBestScore(state.currentCategory, notaSobre10, puntuacioNeta, total);

  // Mostrar resultats
  displayResults({
    total,
    encerts,
    errors,
    enBlanc,
    puntuacioNeta,
    notaSobre10,
    isPass,
    timeText: document.getElementById("quiz-timer-text").textContent
  });
}

function displayResults(data) {
  document.getElementById("quiz-active-container").style.display = "none";
  const resultsContainer = document.getElementById("quiz-results-container");
  resultsContainer.style.display = "block";

  document.getElementById("res-score-number").textContent = `${data.notaSobre10.toFixed(2)} / 10`;
  const badgeEl = document.getElementById("res-status-badge");
  badgeEl.className = `score-badge ${data.isPass ? "pass" : "fail"}`;
  badgeEl.textContent = data.isPass ? "🎉 APTE / SUPERAT" : "⚠️ NO APTE / MILLORABLE";

  document.getElementById("stat-encerts").textContent = data.encerts;
  document.getElementById("stat-errors").textContent = data.errors;
  document.getElementById("stat-blancs").textContent = data.enBlanc;
  document.getElementById("stat-temps").textContent = data.timeText;

  document.getElementById("res-formula-detail").textContent =
    `Càlcul oficial: ${data.encerts} encerts - (${data.errors} errors / 3) = ${data.puntuacioNeta.toFixed(2)} punts nets sobre ${data.total}`;

  // Inicialitzar filtres del mòdul de revisió
  initReviewFilters();
  renderReviewList("all");

  resultsContainer.scrollIntoView({ behavior: "smooth" });
}

function initReviewFilters() {
  const filterBtns = document.querySelectorAll(".review-filter-btn");
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderReviewList(btn.getAttribute("data-filter"));
    };
  });
}

function renderReviewList(filter = "all") {
  const container = document.getElementById("review-questions-list");
  if (!container) return;

  const items = state.filteredQuestions.filter(q => {
    const userChoice = state.userAnswers[q.id];
    const isCorrect = userChoice === q.respostaCorrecta;
    const isBlank = userChoice === undefined;

    if (filter === "wrong") return !isCorrect && !isBlank;
    if (filter === "correct") return isCorrect;
    if (filter === "blank") return isBlank;
    return true; // all
  });

  if (items.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 24px; color: var(--text-muted); background: #f8fafc; border-radius: var(--radius-sm);">
        Cap pregunta en aquest filtre.
      </div>`;
    return;
  }

  container.innerHTML = items.map(q => {
    const userChoice = state.userAnswers[q.id];
    const isCorrect = userChoice === q.respostaCorrecta;
    const isBlank = userChoice === undefined;

    let statusClass = "is-wrong";
    let badgeHtml = `<span class="review-badge ko">❌ Incorrecta (-0,33)</span>`;

    if (isCorrect) {
      statusClass = "is-correct";
      badgeHtml = `<span class="review-badge ok">✅ Encert (+1,00)</span>`;
    } else if (isBlank) {
      statusClass = "is-blank";
      badgeHtml = `<span class="review-badge empty">⚪ En blanc (0,00)</span>`;
    }

    const userChoiceText = isBlank ? "<em>No contestada (en blanc)</em>" : escapeHtml(q.opcions[userChoice]);
    const correctChoiceText = escapeHtml(q.opcions[q.respostaCorrecta]);

    return `
      <div class="review-item ${statusClass}">
        <div class="review-header">
          <span style="font-weight: 700; color: var(--primary);">#${q.id} • ${escapeHtml(q.subcategoria)}</span>
          ${badgeHtml}
        </div>
        <p style="font-weight: 600; margin-bottom: 12px; font-size: 0.98rem;">${escapeHtml(q.pregunta)}</p>
        <div style="font-size: 0.88rem; display: flex; flex-direction: column; gap: 4px;">
          <div><strong>La teva resposta:</strong> <span style="${isCorrect ? 'color: var(--success); font-weight: 600;' : 'color: var(--danger); font-weight: 600;'}">${userChoiceText}</span></div>
          <div><strong>Resposta correcta oficial:</strong> <span style="color: var(--success); font-weight: 600;">${correctChoiceText}</span></div>
        </div>
        <div class="review-explanation">
          <strong>💡 Raonament i explicació:</strong> ${escapeHtml(q.explicacio)}
        </div>
      </div>
    `;
  }).join("");
}

function restartQuiz() {
  document.getElementById("quiz-results-container").style.display = "none";
  setCategoryFilter(state.currentCategory);
}

// ============================================================
// Persistència a localStorage (Millors Notes i Pla d'Estudis)
// ============================================================

const STORAGE_KEYS = {
  BEST_SCORES: "bcnops_2026_best_scores",
  STUDY_PLAN: "bcnops_2026_study_plan"
};

function saveBestScore(category, score10, rawScore, total) {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEYS.BEST_SCORES) || "{}");
    const currentBest = data[category] ? data[category].score10 : -1;

    if (score10 > currentBest) {
      data[category] = {
        score10: Number(score10.toFixed(2)),
        rawScore: Number(rawScore.toFixed(2)),
        total,
        date: new Date().toLocaleDateString("ca-ES", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })
      };
      localStorage.setItem(STORAGE_KEYS.BEST_SCORES, JSON.stringify(data));
      loadBestScores();
    }
  } catch (e) {
    console.error("Error guardant millor puntuació a localStorage:", e);
  }
}

function loadBestScores() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEYS.BEST_SCORES) || "{}");
    const container = document.getElementById("best-scores-badge");
    const headerBtn = document.getElementById("header-best-score");

    if (data.tots && headerBtn) {
      headerBtn.textContent = `⭐ Millor Nota: ${data.tots.score10}/10`;
    }

    if (container) {
      const cats = [
        { id: "tots", label: "Global (Tots els blocs)" },
        { id: "aptitudinal", label: "Aptitudinal" },
        { id: "ofimatica", label: "Ofimàtica" },
        { id: "angles", label: "Anglès" }
      ];

      container.innerHTML = cats.map(c => {
        const item = data[c.id];
        return `
          <div style="background: #f8fafc; border: 1px solid var(--border-color); padding: 10px 14px; border-radius: var(--radius-sm);">
            <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">${c.label}</div>
            <div style="font-size: 1.25rem; font-weight: 800; color: var(--primary);">${item ? item.score10 + "/10" : "Sense dades"}</div>
            <div style="font-size: 0.75rem; color: var(--text-light);">${item ? "Registrat: " + item.date : "Fes un test per enregistrar"}</div>
          </div>
        `;
      }).join("");
    }
  } catch (e) {
    console.error("Error carregant millors notes:", e);
  }
}

// ============================================================
// Secció 3: Pla d'Estudis Interactiu
// ============================================================

function initStudyPlan() {
  const container = document.getElementById("study-plan-container");
  const resetBtn = document.getElementById("btn-reset-plan");
  if (!container) return;

  const savedChecks = getSavedStudyPlan();

  container.innerHTML = TASQUES_PLAN.map(dia => `
    <div class="day-card">
      <div class="day-header">
        <span class="day-date">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 4h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
          ${escapeHtml(dia.dia)}
        </span>
        <span style="font-size: 0.82rem; font-weight: 600; color: var(--text-muted);">${escapeHtml(dia.titol)}</span>
      </div>
      <div class="day-tasks">
        ${dia.tasques.map(t => {
          const isDone = !!savedChecks[t.id];
          return `
            <label class="task-item ${isDone ? 'completed' : ''}" id="label_${t.id}">
              <input type="checkbox" id="${t.id}" ${isDone ? 'checked' : ''} onchange="toggleTaskCheck('${t.id}')">
              <span>${escapeHtml(t.text)}</span>
            </label>
          `;
        }).join("")}
      </div>
    </div>
  `).join("");

  updateStudyProgress();

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Segur que vols reiniciar el seguiment del teu pla d'estudis? Es desmarcaran totes les caselles.")) {
        localStorage.removeItem(STORAGE_KEYS.STUDY_PLAN);
        initStudyPlan();
      }
    });
  }
}

function getSavedStudyPlan() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.STUDY_PLAN) || "{}");
  } catch (e) {
    return {};
  }
}

window.toggleTaskCheck = function(taskId) {
  const saved = getSavedStudyPlan();
  const checkbox = document.getElementById(taskId);
  const label = document.getElementById("label_" + taskId);

  if (checkbox && checkbox.checked) {
    saved[taskId] = true;
    if (label) label.classList.add("completed");
  } else {
    delete saved[taskId];
    if (label) label.classList.remove("completed");
  }

  localStorage.setItem(STORAGE_KEYS.STUDY_PLAN, JSON.stringify(saved));
  updateStudyProgress();
};

function updateStudyProgress() {
  const saved = getSavedStudyPlan();
  let totalTasks = 0;
  TASQUES_PLAN.forEach(d => totalTasks += d.tasques.length);

  const doneCount = Object.keys(saved).length;
  const percentage = totalTasks > 0 ? Math.round((doneCount / totalTasks) * 100) : 0;

  const barFill = document.getElementById("plan-progress-fill");
  const textCount = document.getElementById("plan-progress-text");

  if (barFill) barFill.style.width = `${percentage}%`;
  if (textCount) textCount.textContent = `${doneCount} de ${totalTasks} tasques completades (${percentage}%)`;
}

// ============================================================
// Botó de Compartir (Web Share API i Portapapers)
// ============================================================

function initShareButton() {
  const shareBtn = document.getElementById("btn-share-app");
  if (!shareBtn) return;

  shareBtn.addEventListener("click", async () => {
    const shareData = {
      title: "BcnOps 2026 — Simulador d'Exàmens Ajuntament de Barcelona",
      text: "Prepara les proves d'ampliació de borses 2026 de l'Ajuntament de Barcelona amb aquest simulador gratuït i banc de preguntes!",
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // L'usuari ha cancel·lat o no és permès
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Enllaç copiat al porta-retalls! Ja el pots compartir amb altres aspirants.");
      } catch (e) {
        prompt("Copia aquest enllaç per compartir l'eina:", window.location.href);
      }
    }
  });
}

// ============================================================
// Utilitats Auxiliars
// ============================================================

function escapeHtml(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Banc de seguretat integrat per a execució directa offline/file://
 */
function getFallbackQuestions() {
  return [
  {
    "id": 1,
    "categoria": "aptitudinal",
    "subcategoria": "Sèries numèriques",
    "pregunta": "Quin és el número següent a la sèrie? 3, 7, 15, 31, 63, ...",
    "opcions": [
      "A) 125",
      "B) 127",
      "C) 126",
      "D) 128"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Cada terme s'obté multiplicant l'anterior per 2 i sumant-hi 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; (63×2)+1=127. També respon a la diferència entre termes doblant-se: +4, +8, +16, +32, +64."
  },
  {
    "id": 2,
    "categoria": "aptitudinal",
    "subcategoria": "Sèries numèriques",
    "pregunta": "Quin número completa la successió? 2, 6, 12, 20, 30, ...",
    "opcions": [
      "A) 40",
      "B) 42",
      "C) 44",
      "D) 46"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Les diferències consecutives són nombres parells creixents: 6-2=+4; 12-6=+6; 20-12=+8; 30-20=+10; per tant el següent increment és +12: 30+12=42. Alternativament correspon a n×(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42."
  },
  {
    "id": 3,
    "categoria": "aptitudinal",
    "subcategoria": "Sèries de lletres",
    "pregunta": "Quina és la lletra següent a la sèrie segons l'alfabet habitual? B, E, H, K, N, ...",
    "opcions": [
      "A) P",
      "B) Q",
      "C) R",
      "D) S"
    ],
    "respostaCorrecta": 1,
    "explicacio": "El patró avança de 3 en 3 posicions a l'alfabet: B (posició 2) + 3 = E (5); E (5) + 3 = H (8); H (8) + 3 = K (11); K (11) + 3 = N (14); N (14) + 3 = Q (posició 17: N -> O -> P -> Q)."
  },
  {
    "id": 4,
    "categoria": "aptitudinal",
    "subcategoria": "Sèries alfanumèriques",
    "pregunta": "Indica el terme que continua la sèrie combinada: 1A, 3C, 6F, 10J, ...",
    "opcions": [
      "A) 14N",
      "B) 15O",
      "C) 15N",
      "D) 16P"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Els números augmenten en increments creixents: +2 (1->3), +3 (3->6), +4 (6->10), +5 (10->15). Les lletres salten: A a C (+2), C a F (+3), F a J (+4), J a O (+5: J, K, L, M, N, O). Per tant, el terme és 15O."
  },
  {
    "id": 5,
    "categoria": "aptitudinal",
    "subcategoria": "Analogies verbals",
    "pregunta": "Completa l'analogia: METGE és a HOSPITAL com MESTRE és a...",
    "opcions": [
      "A) LLIBRE",
      "B) ESCOLA",
      "C) ALUMNE",
      "D) MAGISTERI"
    ],
    "respostaCorrecta": 1,
    "explicacio": "La relació és de professional respecte al seu espai habitual de treball físic o institució on exerceix (metge a hospital, mestre a escola)."
  },
  {
    "id": 6,
    "categoria": "aptitudinal",
    "subcategoria": "Sinònims i antònims",
    "pregunta": "Quin és el sinònim més precís del terme administratiu 'DEROGAR'?",
    "opcions": [
      "A) Promulgar",
      "B) Ratificar",
      "C) Anul·lar",
      "D) Prorrogar"
    ],
    "respostaCorrecta": 2,
    "explicacio": "'Derogar' significa deixar sense efecte una norma jurídica o disposició legal mitjançant una altra de posterior, equivalent a anul·lar o revocar."
  },
  {
    "id": 7,
    "categoria": "aptitudinal",
    "subcategoria": "Sinònims i antònims",
    "pregunta": "Quin és l'antònim de 'PRECEPTIU' en l'àmbit dels procediments administratius?",
    "opcions": [
      "A) Obligatori",
      "B) Facultatiu",
      "C) Vinculant",
      "D) Executiu"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Un tràmit o informe preceptiu és d'obligada sol·licitud o realització per mandat legal. El seu antònim és facultatiu (o potestatiu), és a dir, opcional o voluntari."
  },
  {
    "id": 8,
    "categoria": "aptitudinal",
    "subcategoria": "Matrius i raonament abstracte",
    "pregunta": "En una matriu numèrica 3x3: Fila 1 = [4, 9, 2], Fila 2 = [3, 5, 7], Fila 3 = [8, 1, ?]. Quin nombre falta perquè totes les files i columnes sumin 15?",
    "opcions": [
      "A) 5",
      "B) 6",
      "C) 7",
      "D) 9"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Es tracta d'un quadrat màgic de suma constant 15. A la tercera fila: 8 + 1 + x = 15 => x = 15 - 9 = 6. Comprovació per columna: 2 + 7 + 6 = 15."
  },
  {
    "id": 9,
    "categoria": "aptitudinal",
    "subcategoria": "Percentatges i càlcul mental",
    "pregunta": "Un servei municipal rep una partida pressupostària de 120.000 €. Se'n destina el 25% a equipament tecnològic i, d'aquesta quantitat, el 40% a renovació d'ordinadors. Quina quantitat s'inverteix en ordinadors?",
    "opcions": [
      "A) 12.000 €",
      "B) 15.000 €",
      "C) 30.000 €",
      "D) 10.000 €"
    ],
    "respostaCorrecta": 0,
    "explicacio": "El 25% de 120.000 € és 30.000 € (120.000 / 4). El 40% de 30.000 € és: 30.000 × 0,40 = 12.000 €."
  },
  {
    "id": 10,
    "categoria": "aptitudinal",
    "subcategoria": "Sèries numèriques alternades",
    "pregunta": "Quin nombre continua la sèrie alternada? 5, 25, 9, 21, 13, 17, 17, ...",
    "opcions": [
      "A) 12",
      "B) 13",
      "C) 14",
      "D) 15"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Són dues successions entrellaçades: Posicions senars: 5, 9, 13, 17 (+4 a cada pas). Posicions parells: 25, 21, 17, ... (-4 a cada pas). El terme següent és parell: 17 - 4 = 13."
  },
  {
    "id": 11,
    "categoria": "aptitudinal",
    "subcategoria": "Sèries de Fibonacci",
    "pregunta": "Identifica el terme que segueix a la successió: 1, 2, 3, 5, 8, 13, 21, ...",
    "opcions": [
      "A) 29",
      "B) 34",
      "C) 36",
      "D) 42"
    ],
    "respostaCorrecta": 1,
    "explicacio": "És la successió de Fibonacci, on cada terme a partir del tercer és la suma dels dos immediatament anteriors: 13 + 21 = 34."
  },
  {
    "id": 12,
    "categoria": "aptitudinal",
    "subcategoria": "Sèries de lletres",
    "pregunta": "Quina lletra segueix a la sèrie en sentit descendent? Z, X, V, T, R, ...",
    "opcions": [
      "A) Q",
      "B) P",
      "C) O",
      "D) N"
    ],
    "respostaCorrecta": 1,
    "explicacio": "La sèrie retrocedeix de 2 en 2 lletres de l'alfabet en sentit invers: Z (-2) -> X (-2) -> V (-2) -> T (-2) -> R (-2) -> P."
  },
  {
    "id": 13,
    "categoria": "aptitudinal",
    "subcategoria": "Analogies verbals",
    "pregunta": "Completa la relació de part a tot: PÀGINA és a LLIBRE com TECLA és a...",
    "opcions": [
      "A) PANTALLA",
      "B) RATOLÍ",
      "C) TECLAT",
      "D) ORDINADOR"
    ],
    "respostaCorrecta": 2,
    "explicacio": "Una pàgina és una unitat constituent directa d'un llibre, de la mateixa manera que una tecla és l'element constituent directe d'un teclat."
  },
  {
    "id": 14,
    "categoria": "aptitudinal",
    "subcategoria": "Sinònims administratius",
    "pregunta": "En un requeriment administratiu de documentació, quin és el significat del verb 'ESMENAR' (o 'subsanar')?",
    "opcions": [
      "A) Desestimar definitivament la sol·licitud.",
      "B) Corregir un defecte o aportar una informació o document que faltava.",
      "C) Arxivar l'expedient per manca de crèdit.",
      "D) Publicar la resolució al Butlletí Oficial."
    ],
    "respostaCorrecta": 1,
    "explicacio": "Esmenar significa reparar, corregir o solucionar un error o omissió detectat en una sol·licitud dins del termini atorgat."
  },
  {
    "id": 15,
    "categoria": "aptitudinal",
    "subcategoria": "Vocabulari jurídic-administratiu",
    "pregunta": "Quan una notificació es considera 'FEFAENT'?",
    "opcions": [
      "A) Quan és gratuïta per a l'aspirant.",
      "B) Quan deixa constància fefaent i indiscutible de la seva recepció, data i contingut (com un burofax o notificació electrònica certificada).",
      "C) Quan es transmet verbalment en finestreta.",
      "D) Quan no admet cap tipus de recurs."
    ],
    "respostaCorrecta": 1,
    "explicacio": "'Fefaent' vol dir que fa fe pública, donant plena certesa jurídica de l'enviament, recepció i contingut notificat."
  },
  {
    "id": 16,
    "categoria": "aptitudinal",
    "subcategoria": "Sinònims i antònims",
    "pregunta": "Quin és l'antònim de la paraula 'PROVISIONAL' en una llista d'admesos a un procés selectiu?",
    "opcions": [
      "A) Temporal",
      "B) Previ",
      "C) Definitiu",
      "D) Interí"
    ],
    "respostaCorrecta": 2,
    "explicacio": "La llista provisional permet al·legacions o esmenes; un cop resoltes, esdevé la llista definitiva (antònim de provisional)."
  },
  {
    "id": 17,
    "categoria": "aptitudinal",
    "subcategoria": "Raonament lògic deductiu",
    "pregunta": "Premissa 1: Tots els administratius del grup C1 tenen títol de batxillerat. Premissa 2: La Maria és administrativa del grup C1. Quina conclusió és necessàriament certa?",
    "opcions": [
      "A) La Maria té una titulació universitària.",
      "B) La Maria té títol de batxillerat.",
      "C) Tots els qui tenen batxillerat són administratius del grup C1.",
      "D) La Maria no pot promocionar al grup A2."
    ],
    "respostaCorrecta": 1,
    "explicacio": "Mitjançant sil·logisme deductiu directe (modus ponens): si tots els membres del grup C1 tenen batxillerat i la Maria pertany al grup C1, aleshores la Maria té títol de batxillerat."
  },
  {
    "id": 18,
    "categoria": "aptitudinal",
    "subcategoria": "Càlcul i ràtio de places",
    "pregunta": "Per a una convocatòria s'ofereixen 60 places a la borsa i s'hi han inscrit 1.500 persones. Quants aspirants competeixen per cadascuna de les places?",
    "opcions": [
      "A) 20 aspirants",
      "B) 25 aspirants",
      "C) 30 aspirants",
      "D) 35 aspirants"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Es divideix el nombre total d'inscrits entre el total de places: 1.500 / 60 = 25 aspirants per plaça."
  },
  {
    "id": 19,
    "categoria": "aptitudinal",
    "subcategoria": "Percentatges i descomptes",
    "pregunta": "Una taxa municipal de 240 € compta amb una bonificació del 15% per domiciliació bancària. Quant pagarà finalment el ciutadà?",
    "opcions": [
      "A) 200 €",
      "B) 204 €",
      "C) 210 €",
      "D) 216 €"
    ],
    "respostaCorrecta": 1,
    "explicacio": "El 15% de 240 € és: 240 × 0,15 = 36 €. El preu final és: 240 - 36 = 204 € (o bé 240 × 0,85 = 204 €)."
  },
  {
    "id": 20,
    "categoria": "aptitudinal",
    "subcategoria": "Sèries alfanumèriques",
    "pregunta": "Quin és el terme següent a la successió? 2B, 4D, 8F, 16H, ...",
    "opcions": [
      "A) 24I",
      "B) 32I",
      "C) 32J",
      "D) 64J"
    ],
    "respostaCorrecta": 2,
    "explicacio": "Els coeficients numèrics es doblen: 2, 4, 8, 16, 32. Les lletres salten d'una en una: B, D, F, H, J (+2). Per tant: 32J."
  },
  {
    "id": 21,
    "categoria": "aptitudinal",
    "subcategoria": "Analogies d'oficis i eines",
    "pregunta": "Completa l'analogia instrumental: ESTETOSCOPI és a METGE com FORMÓ és a...",
    "opcions": [
      "A) ELECTRICISTA",
      "B) FUSTER",
      "C) PALETA",
      "D) FONTANER"
    ],
    "respostaCorrecta": 1,
    "explicacio": "L'estetoscopi és l'eina diagnòstica emblemàtica del metge, mentre que el formó és l'eina de tall essencial del fuster o ebenista."
  },
  {
    "id": 22,
    "categoria": "aptitudinal",
    "subcategoria": "Terminis administratius hàbils",
    "pregunta": "La notificació estableix un termini de 10 dies hàbils que comença a comptar el dilluns dia 1 d'un mes sense festius intermedis. Quin dia finalitza el termini (recordant que dissabtes i diumenges són inhàbils)?",
    "opcions": [
      "A) Dimecres dia 10",
      "B) Divendres dia 12",
      "C) Dilluns dia 15",
      "D) Dimarts dia 16"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Setmana 1: de dilluns 1 a divendres 5 = 5 dies hàbils. Dissabte 6 i diumenge 7 són inhàbils. Setmana 2: de dilluns 8 a divendres 12 = 5 dies hàbils més (total 10 dies hàbils). El termini expira el divendres dia 12 a les 23:59 h."
  },
  {
    "id": 23,
    "categoria": "aptitudinal",
    "subcategoria": "Mitjana ponderada de qualificacions",
    "pregunta": "En una fase d'oposició, la prova psicotècnica té un pes del 40% i la prova d'ofimàtica té un pes del 60%. Si un aspirant obté un 6 al psicotècnic i un 8 a ofimàtica, quina és la seva qualificació final ponderada?",
    "opcions": [
      "A) 7,0",
      "B) 7,2",
      "C) 7,4",
      "D) 7,5"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Mitjana ponderada = (6 × 0,40) + (8 × 0,60) = 2,4 + 4,8 = 7,2 punts."
  },
  {
    "id": 24,
    "categoria": "aptitudinal",
    "subcategoria": "Matrius lògiques",
    "pregunta": "En una matriu de dues files: Fila 1 = [3, 12]; Fila 2 = [5, ?]. Si ambdues files mantenen la mateixa relació de proporció interna, quin nombre correspon?",
    "opcions": [
      "A) 15",
      "B) 18",
      "C) 20",
      "D) 25"
    ],
    "respostaCorrecta": 2,
    "explicacio": "La relació de la primera fila és multiplicar per 4: 3 × 4 = 12. Aplicant el mateix operador a la segona fila: 5 × 4 = 20."
  },
  {
    "id": 25,
    "categoria": "aptitudinal",
    "subcategoria": "Vocabulari administratiu",
    "pregunta": "Quin és el sinònim precís del verb 'DIRIMIR' en l'expressió 'dirimir una discrepància o empat en la puntuació'?",
    "opcions": [
      "A) Dilatar",
      "B) Resoldre / Desfer",
      "C) Suspendre",
      "D) Impugnar"
    ],
    "respostaCorrecta": 1,
    "explicacio": "'Dirimir' significa resoldre, posar fi a una controvèrsia o desfer un empat en una votació o qualificació d'un tribunal mitjançant el vot de qualitat."
  },
  {
    "id": 26,
    "categoria": "ofimatica",
    "subcategoria": "Fulls de càlcul",
    "pregunta": "En un full de càlcul (Excel o LibreOffice Calc en castellà), quina funció permet sumar els valors d'un rang que compleixen un criteri determinat?",
    "opcions": [
      "A) =SUMA(rang; criteri)",
      "B) =SUMAR.SI(rang; criteri; [rang_suma])",
      "C) =CONTAR.SI(rang; criteri)",
      "D) =TOTAL.CONDICIONAL(criteri; rang)"
    ],
    "respostaCorrecta": 1,
    "explicacio": "La funció =SUMAR.SI (o =SUMIF en versió anglesa) avalua un criteri sobre un rang i suma les cel·les coincidents del rang_suma."
  },
  {
    "id": 27,
    "categoria": "ofimatica",
    "subcategoria": "Fulls de càlcul",
    "pregunta": "Quina funció calcula la mitjana aritmètica dels valors numèrics d'un rang ometent cel·les buides o de text?",
    "opcions": [
      "A) =MEDIA(rang)",
      "B) =PROMEDIO(rang)",
      "C) =MITJANA(rang)",
      "D) =VALOR.MEDIO(rang)"
    ],
    "respostaCorrecta": 1,
    "explicacio": "En els fulls de càlcul configurats en llengua castellana (estàndard d'exàmens municipals), la funció estàndard per a la mitjana és =PROMEDIO (en anglès =AVERAGE)."
  },
  {
    "id": 28,
    "categoria": "ofimatica",
    "subcategoria": "Fulls de càlcul",
    "pregunta": "Quina és la diferència principal entre les funcions =CONTAR i =CONTARA a Excel/Calc?",
    "opcions": [
      "A) CONTAR compta caràcters de text i CONTARA només nombres.",
      "B) CONTAR només compta cel·les que contenen números, mentre que CONTARA compta totes les cel·les no buides (inclosos textos i errors).",
      "C) Són funcions sinònimes i fan exactament el mateix recompte.",
      "D) CONTAR suma valors i CONTARA fa la mitjana."
    ],
    "respostaCorrecta": 1,
    "explicacio": "=CONTAR (COUNT) només té en compte cel·les amb dades numèriques o dates. =CONTARA (COUNTA) compta qualsevol cel·la que no estigui completament buida (text, dates, caràcters especials o fórmules)."
  },
  {
    "id": 29,
    "categoria": "ofimatica",
    "subcategoria": "Fulls de càlcul",
    "pregunta": "Com s'expressa una referència absoluta completa a la cel·la B4 perquè no variï ni la fila ni la columna en arrossegar la fórmula?",
    "opcions": [
      "A) #B#4",
      "B) $B4",
      "C) B$4",
      "D) $B$4"
    ],
    "respostaCorrecta": 3,
    "explicacio": "El signe dòlar ($) davant de la columna i de la fila ($B$4) fixa ambdues coordenades. $B4 només fixaria la columna (mixta) i B$4 només fixaria la fila (mixta)."
  },
  {
    "id": 30,
    "categoria": "ofimatica",
    "subcategoria": "Fulls de càlcul",
    "pregunta": "A la cel·la C10 tenim la fórmula =CONTAR.SI(A1:A20; \">50\"). Què fa exactament aquesta fórmula?",
    "opcions": [
      "A) Suma tots els números del rang A1:A20 que siguin superiors a 50.",
      "B) Compta quantes cel·les del rang A1:A20 tenen un valor estrictament superior a 50.",
      "C) Substitueix per 50 els valors superiors a 50.",
      "D) Retorna VERDADER si totes les cel·les són majors que 50."
    ],
    "respostaCorrecta": 1,
    "explicacio": "=CONTAR.SI compta el nombre de cel·les d'un rang que compleixen la condició indicada com a segon argument (en aquest cas, ser superiors a 50)."
  },
  {
    "id": 31,
    "categoria": "ofimatica",
    "subcategoria": "Dreceres de teclat",
    "pregunta": "A Microsoft Windows, quina drecera de teclat permet bloquejar immediatament la sessió de l'equip per seguretat al deixar el lloc de feina?",
    "opcions": [
      "A) Ctrl + Alt + B",
      "B) Tecla Windows + L",
      "C) Tecla Windows + D",
      "D) Alt + F4"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Tecla Windows + L (Lock) bloqueja la sessió a l'instant requerint contrasenya o identificació per tornar-hi a accedir. Windows + D minimitza o mostra l'escriptori."
  },
  {
    "id": 32,
    "categoria": "ofimatica",
    "subcategoria": "Dreceres de teclat",
    "pregunta": "A les aplicacions ofimàtiques en català/castellà per a Windows, quina combinació de tecles s'utilitza habitualment per Desar (guardar) el document actual?",
    "opcions": [
      "A) Ctrl + S",
      "B) Ctrl + G",
      "C) Ctrl + D",
      "D) Ctrl + P"
    ],
    "respostaCorrecta": 1,
    "explicacio": "En versions en castellà i català d'Office/Windows la comanda habitual és Ctrl + G (Guardar/Guardar com a). En versions angleses és Ctrl + S (Save). Ctrl + P s'usa per Imprimir."
  },
  {
    "id": 33,
    "categoria": "ofimatica",
    "subcategoria": "Correu electrònic",
    "pregunta": "En l'enviament d'un correu electrònic a múltiples persones externes a l'Ajuntament, per què és imprescindible utilitzar el camp 'CCO' (Còpia carbó oculta)?",
    "opcions": [
      "A) Perquè el missatge arribi més ràpid al servidor de destinació.",
      "B) Perquè les adreces dels destinataris romanguin ocultes entre si, donant compliment a la normativa de protecció de dades (RGPD).",
      "C) Perquè els fitxers adjunts es comprimeixin automàticament.",
      "D) Perquè el correu es marqui com a 'Prioritat Alta'."
    ],
    "respostaCorrecta": 1,
    "explicacio": "El camp CCO (BCC en anglès) oculta la llista de destinataris als altres receptors. En comunicacions oficials massives és obligatori per preservar la privacitat i no difondre dades de caràcter personal."
  },
  {
    "id": 34,
    "categoria": "ofimatica",
    "subcategoria": "Gestió de fitxers",
    "pregunta": "A Windows 10/11, quina tecla de funció permet reanomenar ràpidament un fitxer o carpeta seleccionada sense haver d'obrir el menú contextual?",
    "opcions": [
      "A) F1",
      "B) F2",
      "C) F4",
      "D) F5"
    ],
    "respostaCorrecta": 1,
    "explicacio": "F2 posa en mode d'edició el nom del fitxer o carpeta seleccionada. F1 obre l'ajuda i F5 actualitza la finestra."
  },
  {
    "id": 35,
    "categoria": "ofimatica",
    "subcategoria": "Fulls de càlcul - Errors",
    "pregunta": "Què indica l'error #¡DIV/0! en una cel·la d'Excel o Calc?",
    "opcions": [
      "A) Que el nom de la funció està mal escrit.",
      "B) Que s'està intentant dividir un valor per zero o per una cel·la completament buida.",
      "C) Que la fórmula conté una referència circular.",
      "D) Que la cel·la és massa estreta per mostrar el contingut."
    ],
    "respostaCorrecta": 1,
    "explicacio": "L'error #¡DIV/0! apareix quan una fórmula intenta realitzar una operació de divisió per 0 o per una cel·la buida sense valor numèric."
  },
  {
    "id": 36,
    "categoria": "ofimatica",
    "subcategoria": "Fulls de càlcul - Format",
    "pregunta": "Quan una cel·la d'un full de càlcul mostra una sèrie de coixinets seguits (######), a què és degut habitualment?",
    "opcions": [
      "A) La fórmula conté un error sintàctic greu.",
      "B) El document està protegit amb contrasenya.",
      "C) La columna no té prou amplada per mostrar el número o la data en el format seleccionat.",
      "D) El fitxer s'ha corromput en desar-lo."
    ],
    "respostaCorrecta": 2,
    "explicacio": "El símbol ###### indica que el contingut (normalment xifres o dates llargues) és més ample que l'amplada física de la columna. Es resol eixamplant la columna."
  },
  {
    "id": 37,
    "categoria": "ofimatica",
    "subcategoria": "Fulls de càlcul - Funció Lògica",
    "pregunta": "Quina és l'estructura de paràmetres correcta de la funció condicional =SI en un full de càlcul en castellà?",
    "opcions": [
      "A) =SI(condició; llavors; sinó)",
      "B) =SI(prova_lògica; valor_si_cert; [valor_si_fals])",
      "C) =SI(rang; criteri; resultat)",
      "D) =SI(criteri; valor_veritable)"
    ],
    "respostaCorrecta": 1,
    "explicacio": "La sintaxi oficial és =SI(prova_lògica; valor_si_cert; [valor_si_fals]). Avalua la prova lògica i retorna el segon argument si és certa o el tercer si és falsa."
  },
  {
    "id": 38,
    "categoria": "ofimatica",
    "subcategoria": "Fulls de càlcul - Cerca",
    "pregunta": "A la funció =BUSCARV(valor_cercat; matriu_taula; indicador_columnes; [ordenat]), quin valor cal posar a l'últim argument per garantir que la cerca sigui exacta?",
    "opcions": [
      "A) VERDADER (o 1)",
      "B) FALS (o 0)",
      "C) BUIT (o \"\")",
      "D) EXACTE"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Per obtenir una coincidència exacta a =BUSCARV cal indicar FALS o 0 com a quart argument. Si s'indica VERDADER o s'omet, fa una cerca aproximada sobre una taula que ha d'estar ordenada."
  },
  {
    "id": 39,
    "categoria": "ofimatica",
    "subcategoria": "Fulls de càlcul - Dates",
    "pregunta": "Quina funció retorna automàticament la data actual del sistema sense incloure l'hora?",
    "opcions": [
      "A) =AHORA()",
      "B) =HOY()",
      "C) =FECHA.ACTUAL()",
      "D) =DIA()"
    ],
    "respostaCorrecta": 1,
    "explicacio": "=HOY() (en anglès =TODAY()) insereix la data actual actualitzable. =AHORA() (en anglès =NOW()) insereix la data i l'hora exacta."
  },
  {
    "id": 40,
    "categoria": "ofimatica",
    "subcategoria": "Fulls de càlcul - Referències mixtes",
    "pregunta": "Volem que en arrossegar una fórmula cap a la dreta la columna avanci (B, C, D...), però que en arrossegar cap avall la fila romangui fixa a la fila 2. Com s'escriu la referència?",
    "opcions": [
      "A) $B$2",
      "B) $B2",
      "C) B$2",
      "D) B2$"
    ],
    "respostaCorrecta": 2,
    "explicacio": "B$2 té la columna lliure (relativa) i la fila bloquejada amb el signe dòlar (absoluta). En arrossegar horitzontalment canviarà a C$2, D$2, però en baixar sempre serà fila 2."
  },
  {
    "id": 41,
    "categoria": "ofimatica",
    "subcategoria": "Processador de textos",
    "pregunta": "A Microsoft Word o LibreOffice Writer, quina combinació de tecles permet inserir un salt de pàgina ràpid?",
    "opcions": [
      "A) Shift + Enter",
      "B) Ctrl + Enter",
      "C) Alt + Enter",
      "D) Ctrl + Espai"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Ctrl + Enter insereix un salt de pàgina immediat. Shift + Enter insereix un salt de línia simple dins del mateix paràgraf."
  },
  {
    "id": 42,
    "categoria": "ofimatica",
    "subcategoria": "Processador de textos",
    "pregunta": "Quina eina del processador de textos permet generar cartes, notificacions o certificats massius combinant un document model amb una base de dades d'aspirants?",
    "opcions": [
      "A) Macros de seguretat",
      "B) Combinació de correspondència (Mail Merge)",
      "C) Control de canvis",
      "D) Taula d'il·lustracions"
    ],
    "respostaCorrecta": 1,
    "explicacio": "La combinació de correspondència vincula un document principal amb un origen de dades (full de càlcul o taula) per generar documents individuals personalitzats."
  },
  {
    "id": 43,
    "categoria": "ofimatica",
    "subcategoria": "Dreceres de sistema",
    "pregunta": "Quina combinació de tecles obre directament l'Administrador de tasques a Windows sense passar per la pantalla intermèdia?",
    "opcions": [
      "A) Ctrl + Alt + Supr",
      "B) Ctrl + Shift + Esc",
      "C) Win + X",
      "D) Alt + F4"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Ctrl + Shift + Esc obre directament la finestra de l'Administrador de tasques. Ctrl + Alt + Supr obre el menú de seguretat del sistema."
  },
  {
    "id": 44,
    "categoria": "ofimatica",
    "subcategoria": "Dreceres de sistema",
    "pregunta": "Com es pot alternar de manera ràpida entre les finestres de les aplicacions obertes a l'escriptori de Windows?",
    "opcions": [
      "A) Alt + Tab",
      "B) Ctrl + Tab",
      "C) Shift + Tab",
      "D) Win + Espai"
    ],
    "respostaCorrecta": 0,
    "explicacio": "Alt + Tab permet commutar entre finestres obertes. Ctrl + Tab sol commutar entre pestanyes dins de la mateixa aplicació o navegador."
  },
  {
    "id": 45,
    "categoria": "ofimatica",
    "subcategoria": "Correu electrònic - Protocols",
    "pregunta": "Quin protocol d'Internet és l'estàndard utilitzat per a l'ENVIAMENT de missatges de correu electrònic entre clients i servidors?",
    "opcions": [
      "A) HTTP",
      "B) POP3",
      "C) SMTP",
      "D) FTP"
    ],
    "respostaCorrecta": 2,
    "explicacio": "SMTP (Simple Mail Transfer Protocol) és el protocol encarregat del transport i enviament del correu sortint. POP3 i IMAP s'usen per a la recepció."
  },
  {
    "id": 46,
    "categoria": "ofimatica",
    "subcategoria": "Correu electrònic - Protocols",
    "pregunta": "Quina és la diferència principal entre els protocols de recepció de correu POP3 i IMAP?",
    "opcions": [
      "A) POP3 és més ràpid i IMAP només funciona en mòbils.",
      "B) IMAP manté els missatges sincronitzats al servidor per consultar-los des de múltiples dispositius, mentre que POP3 típicament els descarrega a l'equip local.",
      "C) POP3 xifra sempre el correu i IMAP no.",
      "D) No hi ha cap diferència tècnica."
    ],
    "respostaCorrecta": 1,
    "explicacio": "IMAP permet la gestió sincronitzada de carpetes i missatges en el servidor des de múltiples clients (PC, mòbil, webmail). POP3 per defecte descarrega els correus a un sol client local."
  },
  {
    "id": 47,
    "categoria": "ofimatica",
    "subcategoria": "Formats de fitxer",
    "pregunta": "Què caracteritza un fitxer amb format .CSV?",
    "opcions": [
      "A) És un document de text enriquit amb imatges vectorials.",
      "B) És un fitxer de text pla on les dades estructurades en taules es troben separades per comes o punts i comes.",
      "C) És una base de dades comprimida amb clau pública.",
      "D) És una macro executable de full de càlcul."
    ],
    "respostaCorrecta": 1,
    "explicacio": "CSV (Comma-Separated Values) és un format universal de text pla per intercanviar dades en taula, compatible amb qualsevol full de càlcul i base de dades."
  },
  {
    "id": 48,
    "categoria": "ofimatica",
    "subcategoria": "Formats de fitxer",
    "pregunta": "Quina és l'extensió nativa per defecte d'un full de càlcul creat amb la suite ofimàtica lliure LibreOffice Calc?",
    "opcions": [
      "A) .odt",
      "B) .ods",
      "C) .odp",
      "D) .xlsx"
    ],
    "respostaCorrecta": 1,
    "explicacio": ".ods (OpenDocument Spreadsheet) és el format estàndard de LibreOffice Calc. .odt és per a documents de text i .odp per a presentacions."
  },
  {
    "id": 49,
    "categoria": "ofimatica",
    "subcategoria": "Seguretat i ciberseguretat",
    "pregunta": "En un lloc de treball de l'administració, com s'anomena la tècnica d'engany en què un atacant suplanta la identitat d'un organisme oficial mitjançant un correu fals per robar contrasenyes o dades bancàries?",
    "opcions": [
      "A) Firewall",
      "B) Phishing",
      "C) Spamming",
      "D) Ransomware"
    ],
    "respostaCorrecta": 1,
    "explicacio": "El 'phishing' és una tècnica d'enginyeria social en què es simula la imatge d'una entitat coneguda per enganyar l'usuari i obtenir les seves credencials d'accés."
  },
  {
    "id": 50,
    "categoria": "ofimatica",
    "subcategoria": "Fulls de càlcul - Funcions estadístiques",
    "pregunta": "Quina funció s'ha d'utilitzar per trobar el valor numèric més baix d'un rang de cel·les a Excel o Calc?",
    "opcions": [
      "A) =MENOR(rang)",
      "B) =MIN(rang)",
      "C) =BAJO(rang)",
      "D) =MINIMO(rang)"
    ],
    "respostaCorrecta": 1,
    "explicacio": "=MIN(rang) retorna el valor numèric mínim del rang indicat. Per al valor màxim s'utilitza =MAX(rang)."
  },
  {
    "id": 51,
    "categoria": "angles",
    "subcategoria": "Vocabulari administratiu",
    "pregunta": "In a public job selection process, what does the term 'applicant' mean?",
    "opcions": [
      "A) El funcionari que avalua les sol·licituds.",
      "B) La persona candidata o aspirant que presenta la sol·licitud per participar al procés.",
      "C) El certificat administratiu que acredita el nivell d'idiomes.",
      "D) La resolució final d'adjudicació de places."
    ],
    "respostaCorrecta": 1,
    "explicacio": "'Applicant' prové del verb 'to apply' (sol·licitar / presentar-se) i equival a aspirant, sol·licitant o persona candidata."
  },
  {
    "id": 52,
    "categoria": "angles",
    "subcategoria": "Vocabulari administratiu",
    "pregunta": "The announcement states: 'The deadline for submitting applications is 10 business days.' What is the exact meaning of 'deadline'?",
    "opcions": [
      "A) El preu de la taxa d'inscripció.",
      "B) La data o termini límit de presentació.",
      "C) El tribunal qualificador de la prova.",
      "D) El model oficial de formulari."
    ],
    "respostaCorrecta": 1,
    "explicacio": "'Deadline' es tradueix com a termini improrrogable o data límit de finalització per dur a terme una actuació o tràmit."
  },
  {
    "id": 53,
    "categoria": "angles",
    "subcategoria": "Atenció al ciutadà",
    "pregunta": "Which is the most appropriate and formal phrase to politely request a citizen to provide their identification at the counter?",
    "opcions": [
      "A) Give me your card now.",
      "B) Show ID, please.",
      "C) Could you please provide your identification document?",
      "D) You must want to give me identity."
    ],
    "respostaCorrecta": 2,
    "explicacio": "'Could you please provide your identification document?' fa servir el condicional de cortesia 'could', 'please' i vocabulari administratiu adequat en atenció ciutadana."
  },
  {
    "id": 54,
    "categoria": "angles",
    "subcategoria": "Preposicions de temps",
    "pregunta": "Complete the official notification: 'The assessment will take place _______ Saturday, October 24th, 2026.'",
    "opcions": [
      "A) in",
      "B) on",
      "C) at",
      "D) by"
    ],
    "respostaCorrecta": 1,
    "explicacio": "En anglès, per a dies concrets de la setmana i dates completes s'utilitza la preposició 'on' (on Saturday, on October 24th). 'At' s'usa per a hores específiques (at 10:00 AM) i 'in' per a mesos o anys."
  },
  {
    "id": 55,
    "categoria": "angles",
    "subcategoria": "Preposicions de temps i lloc",
    "pregunta": "Choose the correct prepositions: 'Doors will open _______ 09:30 h _______ the designated university campus.'",
    "opcions": [
      "A) at / at",
      "B) on / on",
      "C) in / at",
      "D) to / on"
    ],
    "respostaCorrecta": 0,
    "explicacio": "Per a les hores s'utilitza sempre 'at' (at 09:30 h), i per indicar la ubicació institucional o punt de trobada també s'utilitza 'at' (at the designated university campus)."
  },
  {
    "id": 56,
    "categoria": "angles",
    "subcategoria": "Gramàtica administrativa",
    "pregunta": "Which form correctly completes the sentence: 'All candidates who _______ the minimum requirements will be admitted to the examination.'?",
    "opcions": [
      "A) meets",
      "B) meet",
      "C) meeting",
      "D) has met"
    ],
    "respostaCorrecta": 1,
    "explicacio": "El subjecte antecedent és 'All candidates' (plural). Per tant, el verb en present simple concorda en plural sense la -s de tercera persona: 'meet the minimum requirements'."
  },
  {
    "id": 57,
    "categoria": "angles",
    "subcategoria": "Veu passiva formal",
    "pregunta": "Complete the sentence with the correct passive construction: 'The provisional list of results _______ on the official electronic website next week.'",
    "opcions": [
      "A) will be published",
      "B) will publish",
      "C) is publish",
      "D) has been publishing"
    ],
    "respostaCorrecta": 0,
    "explicacio": "Com que l'acció es farà en el futur sobre la llista per un agent no mencionat, s'utilitza el futur passiu: 'will be' + participi passat ('published')."
  },
  {
    "id": 58,
    "categoria": "angles",
    "subcategoria": "Connectors lògics",
    "pregunta": "Choose the connector that expresses a conclusion or consequence: 'The candidate did not bring a valid ID; _______, access to the classroom was not permitted.'",
    "opcions": [
      "A) although",
      "B) therefore",
      "C) whereas",
      "D) despite"
    ],
    "respostaCorrecta": 1,
    "explicacio": "'Therefore' (per tant / en conseqüència) és el connector de causa-efecte o conclusió adient. 'Although' i 'whereas' expressen contrast, i 'despite' concessió."
  },
  {
    "id": 59,
    "categoria": "angles",
    "subcategoria": "Atenció al ciutadà i condicional",
    "pregunta": "Select the correct sentence to communicate assistance options: 'If you _______ any special adaptation for the exam, please notify the committee in advance.'",
    "opcions": [
      "A) required",
      "B) require",
      "C) will require",
      "D) are requiring"
    ],
    "respostaCorrecta": 1,
    "explicacio": "En la primera condicional (First Conditional) amb oració imperativa/cortesa a la clàusula principal, la condició amb 'if' es formula en present simple: 'If you require...'."
  },
  {
    "id": 60,
    "categoria": "angles",
    "subcategoria": "Vocabulari administratiu",
    "pregunta": "What is the English term for a permanent public employee who works for the public administration?",
    "opcions": [
      "A) Private contractor",
      "B) Civil servant",
      "C) Volunteer officer",
      "D) Freelancer"
    ],
    "respostaCorrecta": 1,
    "explicacio": "'Civil servant' és el terme oficial en anglès per a referir-se a un funcionari o empleat públic de carrera."
  },
  {
    "id": 61,
    "categoria": "angles",
    "subcategoria": "Dret i administració local",
    "pregunta": "Which term refers to a municipal regulation or local law enacted by the city council?",
    "opcions": [
      "A) Constitutional treaty",
      "B) Municipal bylaw (or ordinance)",
      "C) Private clause",
      "D) Civil verdict"
    ],
    "respostaCorrecta": 1,
    "explicacio": "'Bylaw' (o 'ordinance') és el terme jurídic utilitzat per a designar una ordenança o reglament aprovat per un govern local o ajuntament."
  },
  {
    "id": 62,
    "categoria": "angles",
    "subcategoria": "Taxes i pagaments",
    "pregunta": "The document mentions: 'An administrative fee must be paid before registering.' What does 'fee' mean?",
    "opcions": [
      "A) Una multa coercitiva.",
      "B) Una taxa o import econòmic fixat per un servei administratiu.",
      "C) Un premi de productivitat.",
      "D) El salari base de l'empleat."
    ],
    "respostaCorrecta": 1,
    "explicacio": "'Fee' és el terme estàndard per a referir-se a una taxa, dret aranzelari o tarifa pública associada a un tràmit o sol·licitud."
  },
  {
    "id": 63,
    "categoria": "angles",
    "subcategoria": "Atenció telefònica formal",
    "pregunta": "Which is the most polite formula to ask a caller to wait a moment on the line?",
    "opcions": [
      "A) Stop talking now.",
      "B) Wait there, I am busy.",
      "C) Could you please hold the line for a moment?",
      "D) Don't hang up because I leave."
    ],
    "respostaCorrecta": 2,
    "explicacio": "'Could you please hold the line for a moment?' és l'expressió formal i protocol·lària estàndard en atenció telefònica a l'administració."
  },
  {
    "id": 64,
    "categoria": "angles",
    "subcategoria": "Falsos amics (False Friends)",
    "pregunta": "In the sentence 'The clerk will assist you with the application form', what does 'to assist' mean?",
    "opcions": [
      "A) Assistir presencialment a un acte o conferència.",
      "B) Ajudar o donar suport a una persona.",
      "C) Rebutjar la sol·licitud.",
      "D) Signar en representació d'altri."
    ],
    "respostaCorrecta": 1,
    "explicacio": "'To assist' és un fals amic que significa ajudar o atendre (*to help/support*). Si es vol dir 'assistir a un acte', el verb correcte és 'to attend'."
  },
  {
    "id": 65,
    "categoria": "angles",
    "subcategoria": "Falsos amics (False Friends)",
    "pregunta": "What does the adverb 'currently' mean in 'The City Council is currently reviewing the employment list'?",
    "opcions": [
      "A) En realitat o de fet.",
      "B) Actualment / En aquest període de temps.",
      "C) Ràpidament.",
      "D) Ocasionalment."
    ],
    "respostaCorrecta": 1,
    "explicacio": "'Currently' vol dir actualment o en aquest moment. 'Actually' és el fals amic que significa 'en realitat' o 'de fet'."
  },
  {
    "id": 66,
    "categoria": "angles",
    "subcategoria": "Connectors de contrast",
    "pregunta": "Choose the correct linking word: 'The candidate obtained a high score in the test; _______, they did not submit the required certificate.'",
    "opcions": [
      "A) moreover",
      "B) however",
      "C) so",
      "D) because"
    ],
    "respostaCorrecta": 1,
    "explicacio": "'However' (tanmateix / no obstant això) expressa contrast entre el bon resultat del test i la manca de presentació del certificat."
  },
  {
    "id": 67,
    "categoria": "angles",
    "subcategoria": "Connectors de finalitat",
    "pregunta": "Complete the notification: 'The registration office opened early _______ avoid long queues outside the building.'",
    "opcions": [
      "A) in order to",
      "B) because of",
      "C) despite",
      "D) whereas"
    ],
    "respostaCorrecta": 0,
    "explicacio": "'In order to' (+ infinitiu 'avoid') expressa finalitat o propòsit (per tal d'evitar cues)."
  },
  {
    "id": 68,
    "categoria": "angles",
    "subcategoria": "Verbs modals d'obligació",
    "pregunta": "Select the appropriate modal verb: 'All aspirants _______ present a valid original identity card before entering the room.'",
    "opcions": [
      "A) might",
      "B) must",
      "C) could",
      "D) would"
    ],
    "respostaCorrecta": 1,
    "explicacio": "'Must' expressa obligació estricta i ineludible per mandat de les bases de la convocatòria."
  },
  {
    "id": 69,
    "categoria": "angles",
    "subcategoria": "Vocabulari administratiu",
    "pregunta": "In a municipal procedure, what does a 'fee waiver' represent?",
    "opcions": [
      "A) Un augment extraordinari del cost de la taxa.",
      "B) Una exempció o exoneració del pagament de la taxa (per exemple per atur o família nombrosa).",
      "C) Un rebut de pagament en efectiu.",
      "D) Una penalització per pagament fora de termini."
    ],
    "respostaCorrecta": 1,
    "explicacio": "'Waiver' significa renúncia o exempció legal (una exempció de taxes és un *fee waiver*)."
  },
  {
    "id": 70,
    "categoria": "angles",
    "subcategoria": "Recursos Humans",
    "pregunta": "What is the meaning of 'leave of absence' in the municipal staff regulations?",
    "opcions": [
      "A) Concessió d'una excedència o permís temporal d'absència laboral.",
      "B) Acomiadament disciplinari immediat.",
      "C) Augment de categoria professional.",
      "D) Jubilació forçosa per edat."
    ],
    "respostaCorrecta": 0,
    "explicacio": "'Leave of absence' és el terme oficial per a una excedència o permís d'absència autoritzat del lloc de treball."
  },
  {
    "id": 71,
    "categoria": "angles",
    "subcategoria": "Preposicions de termini",
    "pregunta": "Choose the correct preposition: 'Any complaint regarding the provisional list must be submitted _______ 10 calendar days.'",
    "opcions": [
      "A) between",
      "B) within",
      "C) through",
      "D) along"
    ],
    "respostaCorrecta": 1,
    "explicacio": "'Within' significa dins del període o termini establert ('within 10 calendar days' = en el termini de 10 dies naturals)."
  },
  {
    "id": 72,
    "categoria": "angles",
    "subcategoria": "Atenció al ciutadà",
    "pregunta": "Complete the instruction: 'To access the citizen advice bureau without waiting, citizens are advised to _______ in advance.'",
    "opcions": [
      "A) book an appointment",
      "B) pay a fine",
      "C) cancel their passport",
      "D) call the police"
    ],
    "respostaCorrecta": 0,
    "explicacio": "'To book an appointment' significa demanar cita prèvia, requisit habitual a les oficines d'atenció ciutadana (OAC)."
  },
  {
    "id": 73,
    "categoria": "angles",
    "subcategoria": "Temps verbals",
    "pregunta": "Select the correct form: 'The Mayor _______ the official decree approving the exam venues yesterday.'",
    "opcions": [
      "A) has signed",
      "B) signed",
      "C) signs",
      "D) will sign"
    ],
    "respostaCorrecta": 1,
    "explicacio": "Amb un complement temporal de passat concret i finalitzat com 'yesterday', en anglès s'utilitza el Past Simple ('signed')."
  },
  {
    "id": 74,
    "categoria": "angles",
    "subcategoria": "Contractació pública",
    "pregunta": "What does 'public procurement' (or 'public tender') refer to in local government?",
    "opcions": [
      "A) La contractació i licitació pública de béns, serveis o obres per part de l'Ajuntament.",
      "B) El cobrament d'impostos de béns immobles.",
      "C) La neteja de la via pública.",
      "D) La contractació d'assegurances personals."
    ],
    "respostaCorrecta": 0,
    "explicacio": "'Public procurement' és la contractació pública mitjançant licitació per proveir de serveis, subministraments o obres a l'administració."
  },
  {
    "id": 75,
    "categoria": "angles",
    "subcategoria": "Recursos administratius",
    "pregunta": "Complete the legal statement: 'Any applicant who disagrees with the final scoring has the right to file an _______ with the appeals committee.'",
    "opcions": [
      "A) appointment",
      "B) apology",
      "C) appeal",
      "D) announcement"
    ],
    "respostaCorrecta": 2,
    "explicacio": "'To file an appeal' significa interposar un recurs administratiu o d'alçada contra una resolució o acte del tribunal."
  }
];
}
