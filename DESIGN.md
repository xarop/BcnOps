# Guia de Disseny i Sistema Visual — BcnOps

> **Inspirat en la identitat visual, la comunicació digital i els serveis públics de l'Ajuntament de Barcelona.**

---

## 1. Filosofia de Disseny

El disseny de **BcnOps** respon als principis de servei públic digital: **claredat, sobrietat, alta funcionalitat i absència total de soroll o elements superflus**.

L'aplicació està pensada de manera prioritària per al seu ús intensiu en telèfons intel·ligents (**Mobile-First**). L'objectiu és oferir a l'aspirant un entorn concentrat d'estudi i simulació d'exàmens tipus test, minimitzant distraccions visuals verticals.

---

## 2. Paleta de Colors Corporativa

La paleta cromàtica s'inspira directament en els codis institucionals de la ciutat de Barcelona:

| Concepte | Valor HEX | Ús principal |
| :--- | :--- | :--- |
| **Vermell Barcelona** | `#d6001c` | Identitat principal, botons d'acció final, avisos destacats i enllaç oficial. |
| **Vermell Fosc** | `#b00017` | Estats *hover* i *focus* del vermell Barcelona. |
| **Vermell Suau (Fons)** | `#fef2f2` | Fons d'etiquetes i alertes oficials. |
| **Blau Administració** | `#0f2d7a` | Encapçalaments, títols de marca i iconografia principal. |
| **Blau Accent** | `#1a56db` | Estat seleccionat de respostes i botó d'avançar. |
| **Blau Transparent** | `#eff6ff` | Fons d'opció marcada o element actiu. |
| **Text Principal** | `#111827` | Cos de text, enunciats de preguntes (màxim contrast WCAG). |
| **Text Secundari** | `#4b5563` | Metadades, temporitzador, explicacions. |
| **Gris Clar (Fons)** | `#f8fafc` | Fons general de l'aplicació per descansar la vista. |
| **Targeta / Base** | `#ffffff` | Contenidors de preguntes i menús. |
| **Vores** | `#e5e7eb` | Línies divisòries i contorns de botons. |
| **Verd Aprovat** | `#15803d` | Respostes correctes, estat Apte. |
| **Ambre Advertència** | `#b45309` | Respostes en blanc, avisos preventius. |

---

## 3. Tipografia

- **Pila tipogràfica del sistema:**
  ```css
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  ```
- **Raonament:** Màxima velocitat de càrrega (sense dependències de fonts externes que puguin fallar sense connexió), respectant el renderitzat natiu nítid tant a iOS com a Android.
- **Escala de mides (Mobile-First):**
  - Títol de marca: `1.15rem` (18px) amb pes `800`.
  - Enunciat de pregunta: `1.12rem` (18px) amb pes `700`, interlineat `1.45`.
  - Opcions de resposta: `0.95rem` (15.2px) amb pes `600`, interlineat `1.4`.
  - Metadades i etiquetes: `0.75rem` - `0.82rem` amb pes `700` majúscules.

---

## 4. Iconografia Estricta: Prohibició d'Unicode / Ús d'SVG Natiu

> [!IMPORTANT]
> **No es permet l'ús d'emojis o pictogrames Unicode** (com ara 🏛️, ⏱️, 📍, ❌, ✅, ⭐, 🏁) a la interfície.
> Els emojis presenten una renderització heterogènia entre sistemes operatius, aporten un to excessivament informal i trenquen la coherència institucional.

Tota la iconografia del projecte es construeix mitjançant **vectors SVG simples i optimitzats**:
- **Format:** Codi SVG inline integrat a l'HTML.
- **Geometria:** Línies clares, vistes de 24×24 (`viewBox="0 0 24 24"`).
- **Color:** Sempre heretable mitjançant `fill="currentColor"`.
- **Mida estàndard:** `18px × 18px` o `20px × 20px`.

Exemple d'icona oficial conforme a la guia:
```html
<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
</svg>
```

---

## 5. Ergonomia Mòbil i "Thumb Zone"

Els usuaris que preparen oposicions al mòbil sovint utilitzen l'aplicació en trajectes de transport públic o dempeus. La interfície s'organitza en tres zones funcionals:

1. **Top Bar (Zona de consulta visual):**
   - Alçada fixa de `54px`.
   - Marca compacta, cronòmetre i botó d'accés al menú hamburguesa.
2. **Zona Central (Zona d'atenció cognitiva):**
   - Enunciat de la pregunta i targetes de selecció amb una alçada mínima de `52px` per facilitar el toc ràpid.
   - Separació vertical de `10px` entre opcions per evitar tocs erronis accidentals.
3. **Bottom Action Bar (Zona natural del polze):**
   - Fixada a la part inferior de la pantalla (`sticky bottom`).
   - Botons de navegació immediata: Anterior, Deixar en blanc, Següent i Finalitzar examen.
   - Compatible amb la barra d'inici gestual dels telèfons moderns (`env(safe-area-inset-bottom)`).

---

## 6. Accessibilitat (A11y / WCAG 2.1 AA)

- **Contrast mínim:** Ràtio superior a 4.5:1 en tots els textos rellevants.
- **Focus visible:** Estils d'enfocament clars per a teclats externs i lectors de pantalla.
- **Semàntica HTML5:** Ús d'etiquetes `<main>`, `<header>`, `<aside>`, `<nav>`, `<button>`, amb atributs ARIA (`role="radiogroup"`, `aria-label`, `aria-hidden`).
