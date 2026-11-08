# Start here — no coding experience needed

## First: what this folder is

This folder contains local examples for the CE2000 lecture activities in the files you shared. The Week 2 blog wireframe is implemented in `lab3.html` and styled by `styles/main.css`; the original labelled wireframe is included at `docs/w2-blog-wireframe-reference.png`. It is **not yet proof of a complete summative assessment**: the official current assessment brief was not included, and the live Google/RGU DevTools activities need observations from the student's browser.

## 1. Open the folder

1. Download and extract `CE2000_Lab_Pack.zip`.
2. Open the extracted `CE2000_Lab_Pack` folder in VS Code.
3. Open `index.html` in your browser to see links to the examples.

## 2. Try each practice page

- `lab3.html`: Week 2 blog structure and Week 3 CSS.
- `news.html`: Bootstrap 5 page with navbar, hero, cards, custom colour variable and light/dark theme switch. Internet is needed for Bootstrap's CDN.
- `grid.html`: the separate three-image responsive grid activity.
- `dom-basics.html`: Week 4 Activity 2; watch the difference between the captured value and the original paragraph after it changes.
- `tasty.html`: change a paragraph's colour and update an image attribute; its `yum.png` file sits alongside the page.
- `dom-move-demo.html`: observe an existing DOM node move using `insertBefore()`.
- `dom-lab.html`: task list, counters, heading input, highlight, add/remove and move controls.

Double-click an HTML file to open it in a browser. To view `console.log()` output, press `F12` and open the Console tab.

## 3. Test the Node server

Install Node.js/npm on your development computer if not already installed. Open a terminal in this folder and run:

```bash
npm install
npm start
```

Open `http://localhost:8080` on the same computer. In Codio, use the supported **Box URL** preview instead. Stop the server with `Ctrl+C`.

To test the package exercise, stop the first server and run:

```bash
npm run start:case
```

The terminal should report that the text-case server is running. It uses the `text-case` npm package, so `npm install` and network access are required.

## 4. Fill the live-observation worksheets

Open `CSS_DEVTOOLS_WORKSHEET.md` and follow its steps on the current Google homepage in Chrome. Open `RGU_DOM_WORKSHEET.md` and inspect the “Search All Courses” control on the live RGU site. The values intentionally remain blank until they are observed live.

## 5. GitHub and Codio come after the correct repo is confirmed

Follow `GITHUB_CODIO_SETUP.md` one step at a time. Use the student's account (`Sartaj24`) and repository name `CE2000_2627_Assessment_2513820` as specified by the detailed setup guide. Do not modify another student's repository. Do not send passwords, tokens or private SSH keys through chat.

## Files to read for orientation

- `README.md` — overview of the lab pack.
- `ACTIVITY_MAP.md` — activity-by-activity mapping to the supplied slides.
- `GITHUB_CODIO_SETUP.md` — repository setup checklist.
