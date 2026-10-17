# BcnOps 2026 — Simulador d'Exàmens i Preparació de Borses (Ajuntament de Barcelona)

> **Aplicació Web Estàtica (SPA) Mobile-First** dissenyada per a la preparació de les proves d'ampliació de les **Borses de Treball de l'Ajuntament de Barcelona 2026 (Expedient 31/2026)**.

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
  - **09:30 h:** Crida i obertura d'aules.
  - **10:00 h:** Tancament de portes i inici d'exàmens.
  - **13:00 h:** Finalització estimada de la jornada.
- **Proves consecutives:**
  1. Test aptitudinal (psicotècnic, sèries, lògica, analogies i càlcul mental).
  2. Prova d'ofimàtica (Excel/Calc, fórmules com `SUMAR.SI`, `PROMEDIO`, `CONTAR.SI`, referències absolutes `$A$1`, dreceres i correu `CC`/`CCO`).
  3. Prova de llengua estrangera (Anglès administratiu, atenció al ciutadà, preposicions i connectors).
- **Material obligatori:**
  - Document d'identitat original i vigent (DNI, NIE, Passaport o Carnet de conduir).
  - Llapis núm. 2 (HB).
  - Goma d'esborrar.
  - Maquineta de fer punta.
- **Seus oficials d'examen (amb enllaç a Google Maps):**
  - **Campus Ciutadella UPF** (Ramon Trias Fargas, 25-27)
  - **UB Econòmiques 690** (Av. Diagonal, 690)
  - **UB Empresarials 696** (Av. Diagonal, 696)
  - **UPC Campus Nord** (C/ Jordi Girona, 1-3)
  - **UB Facultat de Dret** (Av. Diagonal, 684)

---

## 🚀 Característiques de la WebApp

1. **Simulador d'Examen Tipus Test:**
   - Cronòmetre en temps real amb botó de pausa/represa.
   - Navegació ràpida per número de pregunta (graella tàctil).
   - Opcions de resposta clarament diferenciades i botó per deixar en blanc.
   - **Fórmula oficial de correcció:**
     $$\text{Puntuació Neta} = \text{Encerts} - \frac{\text{Errors}}{3}$$
     Les preguntes no contestades (en blanc) no penalitzen.
2. **Mòdul de Revisió d'Errors Detallat:**
   - Filtres interactius: Totes, Només fallades, Només encertades, En blanc.
   - Mostra la resposta marcada per l'aspirant, la resposta oficial correcta i l'**explicació raonada i didàctica**.
3. **Filtre per Blocs:**
   - Test complet (75 preguntes, 25 per bloc) o test específic per àrea: *Aptitudinal*, *Ofimàtica* o *Anglès*.
4. **Pla d'Estudis Interactiu (17 al 23 d'octubre):**
   - Calendarització diària amb caselles de verificació (*checkboxes*).
   - Barra de progrés percentual dinàmica.
   - Persistència a `localStorage` de les tasques completades i de les millors qualificacions obtingudes.
5. **Cercador de Seus d'Examen:**
   - Filtre en temps real per nom o adreça de la seu amb botó directe per obrir la ruta a Google Maps.
6. **Optimització Mobile-First i Zero Dependències:**
   - HTML5 semàntic, CSS modern i Vanilla JavaScript pur, sense necessitat de cap *framework* ni compilació prèvia.
   - Funciona directament en local (fins i tot fent doble clic a `index.html`) i a GitHub Pages.

---

## 📚 Fonts Reals d'Exàmens Antics i Recursos

L'aplicació inclou referències directes a fonts públiques i models reals d'administracions:

1. **[Seu Electrònica de l'Ajuntament de Barcelona (Borses 2026)](https://seuelectronica.ajuntament.barcelona.cat/processosselectius/ca/convocatories/borses-2026-bs2026)** — Bases, anuncis i criteris oficials.
2. **[Exàmens i Qüestionaris Anteriors de l'Ajuntament de Barcelona (28 categories A1, A2, C1)](https://seuelectronica.ajuntament.barcelona.cat/processosselectius/es/convocatories/convocatories-de-28-categories-dels-subgrups-a1-a2-i-c1)** — Models oficials descarregables de convocatòries prèvies.
3. **[OpositaTest (Testos Psicotècnics Generals)](https://www.opositatest.com/oposiciones/psicotecnicos-generales/test)** — Bateria d'exercicis psicotècnics d'oposicions.
4. **[TestPolicia.cat (Psicotècnics Gratuïts)](https://testpolicia.cat/psicotecnics/)** — Testos psicotècnics en català per a administracions de Catalunya.
5. **[Desafío Psicotécnicos (Raonament i Càlcul)](https://desafiopsicotecnicos.com/test-psicotecnicos-gratis/)** — Pràctica de càlcul mental ràpid i lògica.
6. **[AulaClic (Cursos d'Ofimàtica i Excel)](https://www.aulaclic.es)** — Guies de funcions, referències absolutes i dreceres.
7. **[Cambridge English (Test Your English)](https://www.cambridgeenglish.org/test-your-english/)** — Diagnòstic de nivell d'anglès general i de negocis/administració.

---

## 📁 Estructura del Repositori

```text
.
├── index.html       # Estructura principal, pestanyes, targetes i accessibilitat
├── styles.css       # Estils moderns Mobile-First, variables CSS i graelles responsives
├── app.js           # Lògica del simulador, cronòmetre, fórmula oficial i localStorage
├── questions.json   # Banc de preguntes estructurat en format JSON (fàcil d'ampliar)
└── README.md        # Documentació del projecte i guia de desplegament
```

---

## 🛠️ Com afegir noves preguntes a `questions.json`

El fitxer `questions.json` és un *array* d'objectes JSON. Per afegir una nova pregunta, només cal afegir un nou bloc al fitxer respectant aquesta estructura:

```json
{
  "id": 76,
  "categoria": "ofimatica",
  "subcategoria": "Fulls de càlcul",
  "pregunta": "Quina funció permet comptar les cel·les que contenen números dins del rang A1:A10?",
  "opcions": [
    "A) =SUMA(A1:A10)",
    "B) =CONTAR(A1:A10)",
    "C) =CONTARA(A1:A10)",
    "D) =COMPTA(A1:A10)"
  ],
  "respostaCorrecta": 1,
  "explicacio": "=CONTAR només compta cel·les que contenen números. =CONTARA compta totes les cel·les que no estiguin buides."
}
```

> **Nota:** L'índex de `respostaCorrecta` comença a `0` (`0` = opció A, `1` = opció B, `2` = opció C, `3` = opció D). Les categories permeses són `"aptitudinal"`, `"ofimatica"` i `"angles"`.

---

## 💻 Execució en Local

Com que és una aplicació web estàtica, la pots obrir de qualsevol d'aquestes maneres:

### Opció A: Directament amb el navegador
Fes doble clic sobre el fitxer `index.html`. L'aplicació compta amb un mecanisme automàtic de seguretat integrat que funcionarà fins i tot sense connexió a internet.

### Opció B: Amb un servidor local HTTP (recomanat)

- **Amb Python 3:**
  ```bash
  python3 -m http.server 8000
  ```
  Obre després `http://localhost:8000` al teu navegador.

- **Amb Node.js (`npx serve`):**
  ```bash
  npx serve .
  ```

---

## 🌐 Desplegament a GitHub Pages

Per publicar l'eina a internet de forma gratuïta amb GitHub Pages, segueix la seqüència exacta de comandes:

### 1. Inicialitzar el repositori local i fer el commit inicial
```bash
# Inicialitzar git al directori del projecte
git init

# Afegir tots els fitxers
git add index.html styles.css app.js questions.json README.md

# Fer el commit inicial
git commit -m "feat: llançament webapp BcnOps 2026 per a borses Ajuntament de Barcelona"
```

### 2. Crear el repositori remot a GitHub i pujar el codi
Utilitzant la CLI oficial de GitHub (`gh`):
```bash
gh repo create borses-bcn-2026 --public --source=. --remote=origin --push
```

*(Si prefereixes fer-ho manualment, crea el repositori buit a GitHub i executa:)*
```bash
git branch -M master
git remote add origin https://github.com/EL_TEU_USUARI/borses-bcn-2026.git
git push -u origin master
```

### 3. Activar GitHub Pages des de la branca `master`
Amb la CLI de GitHub:
```bash
gh api --method POST -H "Accept: application/vnd.github+json" \
  /repos/:owner/borses-bcn-2026/pages \
  -f source='{"branch":"master","path":"/"}'
```

O directament des de la interfície web de GitHub:
1. Vés a **Settings** > **Pages** del repositori.
2. A **Build and deployment** > **Source**, selecciona `Deploy from a branch`.
3. Tria la branca `master` (o `main`) i la carpeta `/ (root)`.
4. Prem **Save**. En un parell de minuts la web estarà disponible a:  
   `https://<el-teu-usuari>.github.io/borses-bcn-2026/`

---

## 📄 Llicència i Avís Legal

Aquesta eina ha estat desenvolupada amb finalitat exclusivament educativa i de preparació per a la comunitat d'aspirants. No té vinculació orgànica directa amb l'Ajuntament de Barcelona. Les dades oficials, anuncis i resolucions vinculants són les publicades a la [Seu Electrònica de l'Ajuntament de Barcelona](https://seuelectronica.ajuntament.barcelona.cat/processosselectius/ca/convocatories/borses-2026-bs2026).
