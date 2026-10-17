# Guia per a Agents d'IA i Desenvolupadors — BcnOps

> **Document de referència tècnica i operacional per al manteniment, escalabilitat i evolució del banc de preguntes en futures edicions de la borsa de treball (2026, 2027, 2028...).**

---

## 1. Visió General de l'Arquitectura

BcnOps és una **Single Page Application (SPA)** estàtica, de zero dependències (sense frameworks pesants, sense bundlers), dissenyada per funcionar amb la màxima fiabilitat tant en servidors web ordinaris com directament a **GitHub Pages** o obrint el fitxer `index.html` des del sistema d'arxius local.

### Fitxers Clau:
- `index.html`: Estructura semàntica i vistes.
- `styles.css`: Sistema de disseny Mobile-First (vegeu `DESIGN.md`).
- `app.js`: Lògica del simulador, motor aleatori, cronòmetre, càlcul oficial i `localStorage`.
- `questions.json`: Banc de preguntes estructurat en JSON.
- `DESIGN.md`: Guia d'estil corporatiu inspirat en l'Ajuntament de Barcelona.
- `humans.txt`: Crèdits i autoria de **xarop.com**.

---

## 2. Esquema Estricte de `questions.json`

Cada pregunta del banc ha de seguir estrictament aquest esquema JSON:

```json
{
  "id": 101,
  "categoria": "aptitudinal",
  "subcategoria": "Sèries numèriques",
  "pregunta": "Text complet, clar i precís de la pregunta?",
  "opcions": [
    "A) Opció primera",
    "B) Opció segona",
    "C) Opció tercera",
    "D) Opció quarta"
  ],
  "respostaCorrecta": 1,
  "explicacio": "Explicació didàctica i raonada de per què l'opció B és la correcta i per què les altres són incorrectes."
}
```

### Regles obligatòries per a les preguntes:
1. **Identificador (`id`):** Enter únic i incremental. Mai duplicar identificadors.
2. **Categories vàlides (`categoria`):**
   - `"aptitudinal"`: Psicotècnic, sèries numèriques, lletres, analogies, lògica, percentatges i càlcul mental.
   - `"ofimatica"`: Fulls de càlcul (Excel/Calc), processadors de textos (Word/Writer), dreceres de teclat, correu electrònic, gestió de fitxers i ciberseguretat.
   - `"angles"`: Anglès administratiu, atenció al ciutadà, vocabulari jurídic, preposicions, connectors i gramàtica.
   - *Futures categories admeses:* `"normativa"` (Marc constitucional, Estatut d'autonomia, Procediment administratiu LPAC).
3. **Array d'opcions (`opcions`):** Sempre exactament 4 opcions encapçalades per `"A) "`, `"B) "`, `"C) "`, `"D) "`.
4. **Índex de resposta correcta (`respostaCorrecta`):** Enter del `0` al `3` corresponent a la posició a l'array:
   - `0` = Opció A
   - `1` = Opció B
   - `2` = Opció C
   - `3` = Opció D
5. **Explicació raonada (`explicacio`):** Obligatòria. Ha de ser clara, educativa i contenir la referència a la norma, la fórmula d'Excel o la regla gramatical que justifica la solució.

---

## 3. Com Afegir Nous Blocs de Preguntes

Per afegir noves preguntes o incorporar nous blocs (per exemple, Normativa Local o Dret Administratiu en futures edicions):

1. **Editar `questions.json`**: Afegir els nous objectes amb els seus IDs incrementals al final de l'array.
2. **Sincronitzar el fallback de `app.js`**: `app.js` disposa d'una funció `getFallbackQuestions()` que conté el mateix array per permetre l'execució directa offline mitjançant el protocol `file://`.
3. **Validació automàtica:** Executar abans de fer commit:
   ```bash
   node -e "
   const q = require('./questions.json');
   console.log('Total preguntes:', q.length);
   const ids = q.map(x => x.id);
   const dupes = ids.filter((item, index) => ids.indexOf(item) !== index);
   if (dupes.length) throw new Error('IDs duplicats: ' + dupes);
   q.forEach(x => {
     if (![0,1,2,3].includes(x.respostaCorrecta)) throw new Error('respostaCorrecta invàlida a ID ' + x.id);
     if (x.opcions.length !== 4) throw new Error('Opcions != 4 a ID ' + x.id);
   });
   console.log('Banc validat correctament!');
   "
   ```

---

## 4. Motor de Generació de Simulacres Aleatoris (*Random Exam Engine*)

L'aplicació permet generar exàmens a l'atzar amb un subconjunt equilibrat de preguntes mitjançant l'algorisme de remenat de **Fisher-Yates**:

- **Mode Simulacre Oficial:** Selecciona aleatòriament una quantitat fixa de preguntes de cada bloc (per exemple: 10 d'Aptitudinal + 10 d'Ofimàtica + 10 d'Anglès = 30 preguntes reals de simulacre).
- **Mode Pràctica Ràpida:** 15 preguntes aleatòries barrejades.
- **Mode Entrenament Complet:** Totes les preguntes del banc carregades en ordre o barrejades.

Aquest comportament permet que cada intent de l'aspirant sigui diferent, afavorint la retenció i evitant l'efecte memòria d'ordre.

---

## 5. Directrius per a Futures Edicions

- **Capçalera i identitat:** Mantenir sempre l'enllaç destacat a la Seu Electrònica de l'Ajuntament de Barcelona de la convocatòria activa.
- **Iconografia:** Prohibit utilitzar emojis o caràcters Unicode com a icones d'interfície; utilitzar exclusivament SVG inline amb `fill="currentColor"`.
- **Firma institucional:** Mantenir al peu de pàgina i a la documentació: `© 2026 desenvolupat per xarop.com (https://xarop.com)`.
