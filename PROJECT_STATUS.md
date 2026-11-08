# Project status — 29 October 2026

## Prepared locally

- `lab3.html` and `styles/main.css`: semantic blog based on the Week 2 Lab Task 1 wireframe, including header/logo, navigation, articles/date/content and footer. CSS shows the Week 3 body width/margins, box model, class selector and `#PageContent` dashed border.
- `CSS_DEVTOOLS_WORKSHEET.md`: live Google CSS inspection worksheet.
- `news.html` and `styles/bootstrap-custom.css`: Bootstrap 5.3.8 navbar, hero, cards, footer, custom brand variable, spacing utilities and light/dark theme toggle.
- `grid.html`: three responsive Bootstrap image columns.
- `RGU_DOM_WORKSHEET.md`: Week 4 Activity 1 live RGU `innerHTML` / `parentElement` observations.
- `dom-basics.html`: Week 4 Activity 2 captures the paragraph value, writes the captured value, then updates the original paragraph.
- `tasty.html`, `dom-move-demo.html` and `dom-lab.html`: Week 4 DOM activities covering element-node inspection, style/attribute updates, `insertBefore()`, selectors, counters, heading input, class highlighting, adding/removing and moving tasks.
- `firstServer.js` and `textCaseServer.js`: Week 5 HTTP server and `text-case` package example.
- `.gitignore`, beginner README, activity map and GitHub/Codio setup checklist.

## Local checks performed

- Node syntax check passed for `firstServer.js` and `textCaseServer.js` using `node --check`.
- The basic server was started on a test port and returned HTTP 200 with `Hello World!`.
- A local-reference audit covered all 8 HTML pages; no missing internal file references or in-page anchors remained after fixes.

## Not yet verified / actions requiring the student's environment

- `npm install` did not finish in the available environment, so the `text-case` package example has not been runtime-tested here. Run `npm install`, then `npm run start:case` in the target environment with network access.
- `CSS_DEVTOOLS_WORKSHEET.md` requires observations from the live Google page in Chrome. `RGU_DOM_WORKSHEET.md` requires observations from the live RGU page. Those values are intentionally not guessed.
- The Codio continuation lab cannot be verified without the assigned Codio workspace.
- GitHub repository creation, collaborator invite, deploy key, push/pull and Codio testing have not been performed. The student confirmed the account is `Sartaj24` and no assessment repository exists. Proposed repository name: `CE2000_2627_Assessment_2513820`, following the detailed guide's student-ID naming pattern.
- The supplied Week 1 slide deck is from 2025–26 and mentions an assessment brief, but a current official summative assessment brief was not supplied. This package is lecture/lab practice, not proof of a complete summative assessment.
