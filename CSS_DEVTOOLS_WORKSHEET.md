# Week 2 Lab Task 2 — Investigating CSS with Chrome DevTools

This is a live observation task from the supplied lab slides. The exact DOM nodes, CSS selectors and computed values on Google can vary, so record what your own browser shows instead of guessing.

## Procedure

1. Open <https://www.google.com> in Google Chrome.
2. Right-click the Google logo and select **Inspect**.
3. In the Elements panel, record the tag of the selected logo element, then click its parent element.
4. Inspect the **Google Search** button. In the Styles panel, hover over a `margin` declaration. Record the highlighted margin area and what it demonstrates.
5. Inspect the Elements panel for external `<link rel="stylesheet">` tags and embedded `<style>` elements.
6. Inspect the top navigation and main content and record IDs exactly as they appear. If an element has no ID, write “no ID visible”.
7. Select the logo and open **Computed**; expand the box model and record the top padding value. Do not confuse padding with margin.
8. Change one CSS value temporarily and observe its effect. DevTools edits are temporary until you make the equivalent change in your own source file.

## Record the observations

| Lecturer's question | Your observation in Chrome | Evidence / explanation |
|---|---|---|
| What type/tag contains the logo? | Fill during live inspection | Record the exact selected tag and its attributes. |
| What is the parent element of the logo? Why is it the parent? | Fill during live inspection | Explain the structural or functional relationship visible on the page. |
| What is unusual about the parent element? | Fill during live inspection | Base this on its actual role in the inspected DOM. |
| What happens when hovering over the Google Search button's CSS `margin`? | Fill during live inspection | Describe the highlighted margin area. |
| How does Google load CSS: embedded or external? | Fill during live inspection | Check both stylesheet links and `<style>` elements. The slide warns there may be more than one answer. |
| What is the top navigation ID? | Fill during live inspection | Copy the ID exactly, or state that none is present. |
| What is the ID for the main content? | Fill during live inspection | Copy the ID exactly, or state that none is present. |
| What is the top padding of the Google logo? | Fill during live inspection | Copy the Computed box-model padding value and units. |

## Important

I have not filled the live values with guesses. To finish this task, perform the inspection in Chrome and record what your current page shows. These observations are intended to be made by the student in Developer Tools.
