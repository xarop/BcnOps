# BcnOps 2026 — Simulador d'Exàmens i Preparació de Borses (Ajuntament de Barcelona)

> **Aplicació Web Estàtica (SPA) Mobile-First**, d'alt rendiment i sense dependències, dissenyada per a la preparació de les proves d'ampliació de les **Borses de Treball de l'Ajuntament de Barcelona (Expedient 31/2026)**.  
> **© 2026 desenvolupat per [xarop.com](https://xarop.com)**.

---

## 🏛️ Enllaç Oficial Destacat de la Convocatòria

> [!IMPORTANT]
> Consulta sempre tots els anuncis oficials, resolucions, llistes provisionals i definitives d'admesos i criteris de qualificació a la seu oficial:
> 
> 🔗 **[Seu Electrònica de l'Ajuntament de Barcelona — Convocatòria Borses 2026 (BS2026 / Exp. 31/2026)](https://seuelectronica.ajuntament.barcelona.cat/processosselectius/ca/convocatories/borses-2026-bs2026)**

---

## 📅 Dades Logístiques Clau de la Prova

- **Data de la prova:** Dissabte, 24 d'octubre de 2026.
- **Horaris oficials:**
  - **09:30 h:** Obertura d'aules i crida oficial dels aspirants.
  - **10:00 h:** Tancament de portes i inici consecutiu de les proves:
    1. Test aptitudinal (psicotècnic, sèries, lògica, analogies i càlcul mental).
    2. Prova d'ofimàtica (Excel/Calc, fórmules `SUMAR.SI`, `PROMEDIO`, `CONTAR.SI`, referències absolutes `$A$1`, dreceres, gestió de fitxers i correu).
    3. Prova de llengua estrangera (Anglès administratiu, atenció ciutadana, vocabulari jurídic i connectors).
  - **13:00 h:** Finalització estimada de la sessió.
- **Material obligatori:**
  - Document d'identitat original i vigent (DNI, NIE, Passaport o Permís de conduir).
  - Llapis núm. 2 (grafit HB).
  - Goma d'esborrar.
  - Maquineta de fer punta amb dipòsit.
- **Seus oficials d'examen (amb enllaç a Google Maps):**
  - **Campus Ciutadella UPF** (Ramon Trias Fargas, 25-27)
  - **UB Facultat d'Economia i Empresa 690** (Av. Diagonal, 690)
  - **UB Facultat d'Economia i Empresa 696** (Av. Diagonal, 696)
  - **UPC Campus Nord** (C/ Jordi Girona, 1-3)
  - **UB Facultat de Dret** (Av. Diagonal, 684)

---

## 🚀 Característiques i Arquitectura Mobile-First

1. **UX Neta i Sense Distraccions:**
   - **App Bar compacta (54px):** Aprofita al màxim la pantalla útil del mòbil.
   - **Menú Lateral Hamburguesa (Drawer):** Agrupa els recursos secundaris (Seus, Horaris, Pla d'Estudis, Recursos i Compartir).
   - **Thumb Action Bar:** Barra d'accions inferior a l'abast natural del polze (Anterior, En blanc, Següent, Finalitzar).
   - **Iconografia SVG Neta:** Absència d'emojis Unicode; iconografia vectorial homogènia i accessible.
2. **Motor de Simulacres Aleatoris (*Random Exam Engine*):**
   - **Mode Simulacre Oficial:** 30 preguntes aleatòries (10 Aptitudinal, 10 Ofimàtica, 10 Anglès).
   - **Mode Pràctica Ràpida:** 15 preguntes aleatòries barrejades.
   - **Mode Banc Complet:** 105 preguntes (35 per bloc).
   - **Algorisme de Fisher-Yates:** Garanteix un ordre imprevisible a cada nou intent.
3. **Fórmula Oficial de Correcció:**
   $$\text{Puntuació Neta} = \text{Encerts} - \frac{\text{Errors}}{3}$$
   Les respostes en blanc no descompten punts.
4. **Mòdul de Revisió d'Errors Detallat:**
   - Filtres interactius: Totes, Fallades, Encerts i En blanc.
   - Mostra la resposta triada, la solució oficial i l'explicació raonada.
5. **Pla d'Estudis Interactiu (17 al 23 d'octubre):**
   - Seguiment diari de tasques amb caselles de verificació i progrés persistent a `localStorage`.

---

## 📚 Documents del Projecte

- [DESIGN.md](file:///Users/xarop/Local%20Sites/BcnOps/DESIGN.md) — Guia de disseny i sistema visual inspirat en l'Ajuntament de Barcelona.
- [AGENTS.md](file:///Users/xarop/Local%20Sites/BcnOps/AGENTS.md) — Manual tècnic per a agents d'IA i desenvolupadors per fer evolucionar el banc de preguntes en futures edicions.
- [humans.txt](file:///Users/xarop/Local%20Sites/BcnOps/humans.txt) — Crèdits, equip i tecnologies del projecte.

---

## 📁 Estructura del Repositori

```text
.
├── index.html       # Estructura semàntica, App Bar, Drawer i Bottom Sheet
├── styles.css       # Sistema de disseny corporatiu BCN, Mobile-First
├── app.js           # Lògica SPA, cronòmetre, motor aleatori i localStorage
├── questions.json   # Banc de 105 preguntes estructurades en JSON
├── DESIGN.md        # Guia d'estil i identitat visual municipal
├── AGENTS.md        # Manual per a agents d'IA i manteniment futur
├── humans.txt       # Crèdits i autoria de xarop.com
└── README.md        # Documentació general del repositori
```

---

## 🛠️ Com Ampliar la Base de Dades de Preguntes

El fitxer `questions.json` és un *array d'objectes JSON*. Per afegir preguntes noves:

```json
{
  "id": 106,
  "categoria": "ofimatica",
  "subcategoria": "Fulls de càlcul",
  "pregunta": "Quina funció compta les cel·les que contenen números dins del rang A1:A10?",
  "opcions": [
    "A) =SUMA(A1:A10)",
    "B) =CONTAR(A1:A10)",
    "C) =CONTARA(A1:A10)",
    "D) =COMPTA(A1:A10)"
  ],
  "respostaCorrecta": 1,
  "explicacio": "=CONTAR només compta nombres. =CONTARA compta totes les cel·les que no estiguin buides."
}
```

> **Directrius:**
> - `respostaCorrecta`: Índex numèric de base 0 (`0` = A, `1` = B, `2` = C, `3` = D).
> - Categories admeses: `"aptitudinal"`, `"ofimatica"`, `"angles"`.

---

## 💻 Execució en Local

- **Amb Python 3:**
  ```bash
  python3 -m http.server 8080
  ```
  Obre després `http://localhost:8080` al teu navegador.

- **Directament des de fitxer:**
  Fes doble clic sobre `index.html`. Disposa de fallback autònom per funcionar sense connexió.

---

## 🌐 Publicació a GitHub Pages

El projecte està configurat per desplegar-se directament des de la branca `master` de GitHub:

```bash
git add .
git commit -m "feat: actualitzacio del banc i millores de disseny"
git push origin master
```

L'aplicació estarà disponible immediatament a:  
👉 **[https://xarop.github.io/BcnOps/](https://xarop.github.io/BcnOps/)**

---

## 📄 Autoria i Copyright

© 2026 desenvolupat per **[xarop.com](https://xarop.com)**.  
Projecte cívic i educatiu obert per a la preparació de les borses de treball municipals de Barcelona.
