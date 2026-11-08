# CE2000 Dynamic Web Technology — lecture and lab practice pack

**Student repository target:** `CE2000_2627_Assessment_2513820` (student ID supplied for this setup).

This project organises practice examples for the activities identifiable in the uploaded CE2000 Week 2 lab and Week 3–5 lecture slides. It includes the Week 2 blog interface wireframe implemented as a working HTML5/CSS page, followed by CSS, Bootstrap, JavaScript DOM and basic Node.js exercises.

> **Scope note:** The uploaded Week 1 deck is from 2025–26 and refers to an assessment brief, but the official current summative assessment brief was not among the supplied files. This pack should be treated as lecture/lab practice until the actual assessment brief confirms the assessed deliverables.

## Pages and purpose

| Path | Purpose |
|---|---|
| `index.html` | Local menu linking to all practice pages. |
| `lab3.html` + `styles/main.css` + `blog-logo.jpg` + `docs/w2-blog-wireframe-reference.png` | Week 2 supplied blog wireframe implemented in HTML5/CSS; Week 3 CSS selectors and box model. |
| `CSS_DEVTOOLS_WORKSHEET.md` | Instructions and answer table for the live Google DevTools exercise. |
| `RGU_DOM_WORKSHEET.md` | Week 4 Activity 1: record the live RGU “Search All Courses” element's `innerHTML` and `parentElement`. |
| `news.html` + `styles/bootstrap-custom.css` + `assets/` | Week 3 Bootstrap navbar, hero, footer, cards, brand variables and theme switch. |
| `grid.html` | Separate three-image responsive Bootstrap grid. |
| `dom-basics.html` | Week 4 DOM lookup and lecture's `document.write()` example. |
| `tasty.html` + `yum.png` | Week 4 nodeType, image attributes and click interaction. |
| `dom-move-demo.html` | Week 4 `insertBefore()` node-movement demonstration. |
| `dom-lab.html` | Week 4 Activities 6–10: task list, selection, counters, heading input, highlighting, add/remove and move. |
| `firstServer.js` | Week 5 Activity 2: minimal Node HTTP server. |
| `textCaseServer.js` | Week 5 Activity 3: use `text-case` to create camelCase output. |
| `GITHUB_CODIO_SETUP.md` | Beginner checklist based on the supplied university setup guide. |
| `ACTIVITY_MAP.md` | Scope map showing what each file covers and what still requires live/account work. |

## Run the static pages

Open `index.html` directly in a browser. The pages work locally except Bootstrap styles/scripts on `news.html` and `grid.html`, which are loaded from the official CDN and need internet access.

## Run Node.js

From this folder, install the dependency once:

```bash
npm install
```

Start the basic server:

```bash
npm start
```

Open `http://localhost:8080`; stop with `Ctrl+C`. For the camelCase package example, first stop the basic server, then run:

```bash
npm run start:case
```

The package example also uses port 8080. Use Codio's Box URL when the server runs in Codio.

## Git safety

Make edits in VS Code, review changes, commit, and push to the student's correct GitHub repository. Pull and test in Codio. Do not upload credentials, `.env` files, private keys or tokens. Preserve existing files and do not force-push to resolve unknown errors.
