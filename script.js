/*
  LAYOUT
  ------
  Each string is a row. Use '1' for a cell, '0' or space for empty.
  The number of characters in the longest row = grid column count.
  This MAP approximates the screenshot’s stepped outline.
*/
const MAP = [
  "11100000000000", // row 1
  "11111111110000", // row 2
  "01111111111100", // row 3
  "01111111111110", // row 4
  "01111111111111", // row 5
  "01111111111111", // row 6
  "01111111111111", // row 7
  "01111111111100", // row 8
  "00011111111000", // row 9
  "00000111111000", // row 10
];

/* Detached little block (3×3) */
const FLOATING_MAP = ["111", "111", "111"];

/* ---------- Rendering ---------- */

function widestRowLen(rows) {
  return Math.max(...rows.map((r) => r.length));
}

function renderGrid(container, rows, idPrefix) {
  const cols = widestRowLen(rows);
  if (container.classList.contains("grid")) {
    container.style.setProperty("--cols", cols);
  }
  const frag = document.createDocumentFragment();

  rows.forEach((row, rIdx) => {
    // Pad rows to uniform width so CSS grid positions are stable
    const padded = row.padEnd(cols, " ");
    [...padded].forEach((ch, cIdx) => {
      if (ch === "1") {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.contentEditable = "true";
        // place at row rIdx+1, column cIdx+1
        cell.style.gridColumn = (cIdx + 1).toString();
        cell.style.gridRow = (rIdx + 1).toString();
        const cellId = `${idPrefix}-${rIdx}-${cIdx}`;
        cell.dataset.key = cellId;

        // restore saved state
        const saved = JSON.parse(localStorage.getItem(cellId) || "{}");
        if (saved.text) cell.textContent = saved.text;
        if (saved.marked) cell.classList.add("marked");

        // interactions
        cell.addEventListener("click", (e) => {
          // Toggle highlight unless the user is selecting text
          if (window.getSelection().toString().length === 0) {
            cell.classList.toggle("marked");
            persistCell(cell);
          }
        });
        cell.addEventListener("input", () => persistCell(cell));
        cell.addEventListener("blur", () => persistCell(cell));

        frag.appendChild(cell);
      }
    });
  });

  container.replaceChildren(frag);
}

function persistCell(cell) {
  const key = cell.dataset.key;
  const payload = {
    text: cell.textContent.trim(),
    marked: cell.classList.contains("marked"),
  };
  localStorage.setItem(key, JSON.stringify(payload));
}

/* ---------- Clear button ---------- */
document.getElementById("clear").addEventListener("click", () => {
  // Only remove keys created by this page (prefixes we used)
  const prefixes = ["main", "float"];
  const toDelete = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (prefixes.some((p) => k.startsWith(p + "-"))) toDelete.push(k);
  }
  toDelete.forEach((k) => localStorage.removeItem(k));
  // Re-render fresh
  renderGrid(document.getElementById("grid"), MAP, "main");
  renderGrid(document.getElementById("floating"), FLOATING_MAP, "float");
});

/* ---------- Initial render ---------- */
renderGrid(document.getElementById("grid"), MAP, "main");
renderGrid(document.getElementById("floating"), FLOATING_MAP, "float");
