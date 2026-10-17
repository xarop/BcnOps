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

function initSimulator() {
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
      "opcions": ["A) 125", "B) 127", "C) 126", "D) 128"],
      "respostaCorrecta": 1,
      "explicacio": "Cada terme és el doble de l'anterior més 1 (63 × 2 + 1 = 127)."
    },
    {
      "id": 2,
      "categoria": "aptitudinal",
      "subcategoria": "Sèries numèriques",
      "pregunta": "Quin número completa la successió? 2, 6, 12, 20, 30, ...",
      "opcions": ["A) 40", "B) 42", "C) 44", "D) 46"],
      "respostaCorrecta": 1,
      "explicacio": "Diferències creixents: +4, +6, +8, +10 => la següent és +12: 30 + 12 = 42."
    },
    {
      "id": 3,
      "categoria": "aptitudinal",
      "subcategoria": "Sèries de lletres",
      "pregunta": "Quina és la lletra següent a la sèrie? B, E, H, K, N, ...",
      "opcions": ["A) P", "B) Q", "C) R", "D) S"],
      "respostaCorrecta": 1,
      "explicacio": "Salt de 3 lletres a l'alfabet oficial: N + 3 = Q."
    },
    {
      "id": 4,
      "categoria": "aptitudinal",
      "subcategoria": "Sèries alfanumèriques",
      "pregunta": "Indica el terme que continua la sèrie combinada: 1A, 3C, 6F, 10J, ...",
      "opcions": ["A) 14N", "B) 15O", "C) 15N", "D) 16P"],
      "respostaCorrecta": 1,
      "explicacio": "Els números sumen +2, +3, +4, +5 (10+5=15). Les lletres salten +2, +3, +4, +5 (J+5=O) => 15O."
    },
    {
      "id": 5,
      "categoria": "aptitudinal",
      "subcategoria": "Analogies verbals",
      "pregunta": "Completa l'analogia: METGE és a HOSPITAL com MESTRE és a...",
      "opcions": ["A) LLIBRE", "B) ESCOLA", "C) ALUMNE", "D) MAGISTERI"],
      "respostaCorrecta": 1,
      "explicacio": "Relació de professió respecte al centre físic de treball."
    },
    {
      "id": 6,
      "categoria": "aptitudinal",
      "subcategoria": "Sinònims i antònims",
      "pregunta": "Quin és el sinònim més precís del terme administratiu 'DEROGAR'?",
      "opcions": ["A) Promulgar", "B) Ratificar", "C) Anul·lar", "D) Prorrogar"],
      "respostaCorrecta": 2,
      "explicacio": "'Derogar' significa anul·lar o deixar sense efecte una norma."
    },
    {
      "id": 7,
      "categoria": "aptitudinal",
      "subcategoria": "Sinònims i antònims",
      "pregunta": "Quin és l'antònim de 'PRECEPTIU' en l'àmbit dels procediments administratius?",
      "opcions": ["A) Obligatori", "B) Facultatiu", "C) Vinculant", "D) Executiu"],
      "respostaCorrecta": 1,
      "explicacio": "'Preceptiu' equival a obligatori; el seu antònim és facultatiu o voluntari."
    },
    {
      "id": 8,
      "categoria": "aptitudinal",
      "subcategoria": "Matrius i raonament abstracte",
      "pregunta": "En una matriu numèrica 3x3: Fila 1 = [4, 9, 2], Fila 2 = [3, 5, 7], Fila 3 = [8, 1, ?]. Quin nombre falta perquè files i columnes sumin 15?",
      "opcions": ["A) 5", "B) 6", "C) 7", "D) 9"],
      "respostaCorrecta": 1,
      "explicacio": "8 + 1 + 6 = 15. Totes les línies sumen 15."
    },
    {
      "id": 9,
      "categoria": "aptitudinal",
      "subcategoria": "Percentatges i càlcul mental",
      "pregunta": "Un servei municipal rep 120.000 €. Se'n destina el 25% a equipament i, d'això, el 40% a ordinadors. Quant s'inverteix en ordinadors?",
      "opcions": ["A) 12.000 €", "B) 15.000 €", "C) 30.000 €", "D) 10.000 €"],
      "respostaCorrecta": 0,
      "explicacio": "25% de 120.000 = 30.000. 40% de 30.000 = 12.000 €."
    },
    {
      "id": 10,
      "categoria": "ofimatica",
      "subcategoria": "Fulls de càlcul",
      "pregunta": "En un full de càlcul (Excel o Calc en castellà), quina funció permet sumar els valors d'un rang que compleixen un criteri determinat?",
      "opcions": ["A) =SUMA(rang; criteri)", "B) =SUMAR.SI(rang; criteri; [rang_suma])", "C) =CONTAR.SI(rang; criteri)", "D) =TOTAL.CONDICIONAL(criteri; rang)"],
      "respostaCorrecta": 1,
      "explicacio": "=SUMAR.SI suma cel·les que compleixen una condició."
    },
    {
      "id": 11,
      "categoria": "ofimatica",
      "subcategoria": "Fulls de càlcul",
      "pregunta": "Quina funció calcula la mitjana aritmètica dels valors numèrics d'un rang?",
      "opcions": ["A) =MEDIA(rang)", "B) =PROMEDIO(rang)", "C) =MITJANA(rang)", "D) =VALOR.MEDIO(rang)"],
      "respostaCorrecta": 1,
      "explicacio": "A Excel/Calc la funció en espanyol és =PROMEDIO (en anglès AVERAGE)."
    },
    {
      "id": 12,
      "categoria": "ofimatica",
      "subcategoria": "Fulls de càlcul",
      "pregunta": "Quina és la diferència principal entre =CONTAR i =CONTARA a Excel/Calc?",
      "opcions": [
        "A) CONTAR compta text i CONTARA números.",
        "B) CONTAR només compta números, mentre que CONTARA compta totes les cel·les no buides.",
        "C) Són exactament idèntiques.",
        "D) CONTAR suma i CONTARA fa la mitjana."
      ],
      "respostaCorrecta": 1,
      "explicacio": "CONTAR només números; CONTARA qualsevol cel·la no buida (text, errors, etc.)."
    },
    {
      "id": 13,
      "categoria": "ofimatica",
      "subcategoria": "Fulls de càlcul",
      "pregunta": "Com s'expressa una referència absoluta completa a la cel·la B4?",
      "opcions": ["A) #B#4", "B) $B4", "C) B$4", "D) $B$4"],
      "respostaCorrecta": 3,
      "explicacio": "$B$4 fixa tant la columna com la fila."
    },
    {
      "id": 14,
      "categoria": "ofimatica",
      "subcategoria": "Fulls de càlcul",
      "pregunta": "A la cel·la C10 tenim la fórmula =CONTAR.SI(A1:A20; \">50\"). Què fa?",
      "opcions": [
        "A) Suma els valors majors a 50.",
        "B) Compta quantes cel·les del rang tenen un valor estrictament superior a 50.",
        "C) Posa 50 a totes les cel·les.",
        "D) Retorna VERDADER si totes són > 50."
      ],
      "respostaCorrecta": 1,
      "explicacio": "Compta el nombre de cel·les amb valor estrictament superior a 50."
    },
    {
      "id": 15,
      "categoria": "ofimatica",
      "subcategoria": "Dreceres de teclat",
      "pregunta": "A Microsoft Windows, quina drecera de teclat permet bloquejar immediatament la sessió de treball?",
      "opcions": ["A) Ctrl + Alt + B", "B) Tecla Windows + L", "C) Tecla Windows + D", "D) Alt + F4"],
      "respostaCorrecta": 1,
      "explicacio": "Windows + L bloqueja immediatament l'equip (Lock)."
    },
    {
      "id": 16,
      "categoria": "ofimatica",
      "subcategoria": "Dreceres de teclat",
      "pregunta": "A les aplicacions per a Windows en castellà/català, quina combinació permet desar el document?",
      "opcions": ["A) Ctrl + S", "B) Ctrl + G", "C) Ctrl + D", "D) Ctrl + P"],
      "respostaCorrecta": 1,
      "explicacio": "Ctrl + G desa el document en programari en català i castellà."
    },
    {
      "id": 17,
      "categoria": "ofimatica",
      "subcategoria": "Correu electrònic",
      "pregunta": "Per què és imprescindible fer servir 'CCO' en enviar correus a múltiples persones externes?",
      "opcions": [
        "A) Perquè arriba més ràpid.",
        "B) Perquè les adreces dels destinataris romanguin ocultes entre si (RGPD).",
        "C) Perquè es comprimeixen els arxius.",
        "D) Perquè es marca com urgent."
      ],
      "respostaCorrecta": 1,
      "explicacio": "Oculta els destinataris complint amb la protecció de dades (RGPD)."
    },
    {
      "id": 18,
      "categoria": "ofimatica",
      "subcategoria": "Gestió de fitxers",
      "pregunta": "A Windows, quina tecla de funció permet reanomenar un fitxer o carpeta?",
      "opcions": ["A) F1", "B) F2", "C) F4", "D) F5"],
      "respostaCorrecta": 1,
      "explicacio": "La tecla F2 permet canviar el nom de l'element seleccionat."
    },
    {
      "id": 19,
      "categoria": "angles",
      "subcategoria": "Vocabulari administratiu",
      "pregunta": "In a public job selection process, what does the term 'applicant' mean?",
      "opcions": [
        "A) El funcionari que avalua.",
        "B) La persona candidata o aspirant que presenta la sol·licitud.",
        "C) El certificat de nivell.",
        "D) La resolució final."
      ],
      "respostaCorrecta": 1,
      "explicacio": "'Applicant' vol dir candidat/a o aspirant a una plaça."
    },
    {
      "id": 20,
      "categoria": "angles",
      "subcategoria": "Vocabulari administratiu",
      "pregunta": "The announcement states: 'The deadline for submitting applications is 10 business days.' What is 'deadline'?",
      "opcions": [
        "A) La taxa d'inscripció.",
        "B) La data o termini límit de presentació.",
        "C) El tribunal qualificador.",
        "D) El model oficial de formulari."
      ],
      "respostaCorrecta": 1,
      "explicacio": "'Deadline' és el termini límit o data de venciment."
    },
    {
      "id": 21,
      "categoria": "angles",
      "subcategoria": "Atenció al ciutadà",
      "pregunta": "Which is the most appropriate and formal phrase to politely request a citizen to provide their identification?",
      "opcions": [
        "A) Give me your card now.",
        "B) Show ID, please.",
        "C) Could you please provide your identification document?",
        "D) You must want to give me identity."
      ],
      "respostaCorrecta": 2,
      "explicacio": "'Could you please provide your identification document?' és la forma cortesa formal més idònia."
    },
    {
      "id": 22,
      "categoria": "angles",
      "subcategoria": "Preposicions de temps",
      "pregunta": "Complete: 'The assessment will take place _______ Saturday, October 24th, 2026.'",
      "opcions": ["A) in", "B) on", "C) at", "D) by"],
      "respostaCorrecta": 1,
      "explicacio": "Amb dies i dates específiques es fa servir 'on'."
    },
    {
      "id": 23,
      "categoria": "angles",
      "subcategoria": "Preposicions de temps i lloc",
      "pregunta": "Choose the correct prepositions: 'Doors will open _______ 09:30 h _______ the designated university campus.'",
      "opcions": ["A) at / at", "B) on / on", "C) in / at", "D) to / on"],
      "respostaCorrecta": 0,
      "explicacio": "'At' per a hores i per al punt institucional de trobada."
    },
    {
      "id": 24,
      "categoria": "angles",
      "subcategoria": "Gramàtica administrativa",
      "pregunta": "Which form correctly completes: 'All candidates who _______ the minimum requirements will be admitted.'?",
      "opcions": ["A) meets", "B) meet", "C) meeting", "D) has met"],
      "respostaCorrecta": 1,
      "explicacio": "Concorda amb el subjecte plural 'All candidates' -> 'meet'."
    },
    {
      "id": 25,
      "categoria": "angles",
      "subcategoria": "Veu passiva formal",
      "pregunta": "Complete: 'The provisional list of results _______ on the official electronic website next week.'",
      "opcions": ["A) will be published", "B) will publish", "C) is publish", "D) has been publishing"],
      "respostaCorrecta": 0,
      "explicacio": "Futur passiu: 'will be published'."
    },
    {
      "id": 26,
      "categoria": "angles",
      "subcategoria": "Connectors lògics",
      "pregunta": "Choose the connector that expresses consequence: 'The candidate did not bring a valid ID; _______, access was not permitted.'",
      "opcions": ["A) although", "B) therefore", "C) whereas", "D) despite"],
      "respostaCorrecta": 1,
      "explicacio": "'Therefore' (en conseqüència / per tant)."
    },
    {
      "id": 27,
      "categoria": "angles",
      "subcategoria": "Atenció al ciutadà i condicional",
      "pregunta": "Select the correct sentence: 'If you _______ any special adaptation, please notify the committee in advance.'",
      "opcions": ["A) required", "B) require", "C) will require", "D) are requiring"],
      "respostaCorrecta": 1,
      "explicacio": "First conditional amb present simple a la condició: 'If you require...'."
    }
  ];
}
