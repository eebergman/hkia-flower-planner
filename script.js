/* =========================
   Layout data (edit freely)
   ========================= */

const fields_west = [
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

const fields_mini = ["111", "111"];

const fields_east = [
  "0000000000110", // a
  "0000000001110", // b
  "0000000111110", // c
  "1111111111111", // d
  "1111111111110", // e
  "0001111111100", // f
  "0000000011000", // g
];

// Find longest row length
function widestRowLength(rows) {
  return Math.max(...rows.map((r) => r.length));
}

// Render a single grid into a container
function renderGrid(container, rows, idPrefix) {
  const cols = widestRowLength(rows);
  if (container.classList.contains("grid")) {
    container.style.setProperty("--cols", cols);
  }
  const frag = document.createDocumentFragment();

  rows.forEach((row, rIdx) => {
    const padded = row.padEnd(cols, " ");
    [...padded].forEach((ch, cIdx) => {
      if (ch === "1") {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.contentEditable = "true";
        cell.style.gridColumn = (cIdx + 1).toString();
        cell.style.gridRow = (rIdx + 1).toString();
        const cellId = `${idPrefix}-${rIdx}-${cIdx}`;
        cell.dataset.key = cellId;

        // restore
        const saved = JSON.parse(localStorage.getItem(cellId) || "{}");
        if (saved.text) cell.textContent = saved.text;
        if (saved.marked) cell.classList.add("marked");

        // interactions
        cell.addEventListener("click", () => {
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

// Save a single cell’s state
function persistCell(cell) {
  const key = cell.dataset.key;
  const payload = {
    text: cell.textContent.trim(),
    marked: cell.classList.contains("marked"),
  };
  localStorage.setItem(key, JSON.stringify(payload));
}

// Render many grids at once
function renderMany(configs) {
  configs.forEach(({ el, rows, prefix }) => {
    const node = typeof el === "string" ? document.querySelector(el) : el;
    if (!node) {
      console.warn("renderMany: container not found for", el);
      return;
    }
    renderGrid(node, rows, prefix);
  });
}

/* =========================
   Persist <details> state
   ========================= */
(function persistDisclosures(root = document) {
  const KEY_PREFIX = "disclosure:";
  const all = [...root.querySelectorAll("details[data-id]")];

  // restore
  all.forEach((d) => {
    const k = KEY_PREFIX + d.dataset.id;
    const saved = localStorage.getItem(k);
    if (saved !== null) d.open = saved === "1";
    d.addEventListener("toggle", () => {
      localStorage.setItem(k, d.open ? "1" : "0");
    });
  });
})();

/* =========================
   Init
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  // mount the two Fields West grids
  renderMany([
    { el: "#fields-west", rows: fields_west, prefix: "fields-west" },
    { el: "#fields-west-mini", rows: fields_mini, prefix: "fields-west-mini" },
    { el: "#fields-east", rows: fields_east, prefix: "fields-east" },
  ]);

  // Clear button to wipe only our saved grid cells (not panel open/close)
  const clearBtn = document.getElementById("clear");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      const prefixes = ["fields-west", "float"];
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (prefixes.some((p) => k.startsWith(p + "-"))) keys.push(k);
      }
      keys.forEach((k) => localStorage.removeItem(k));
      renderMany([
        { el: "#fields-west", rows: fields_west, prefix: "fields-west" },
        {
          el: "#fields-west-mini",
          rows: fields_mini,
          prefix: "fields-west-mini",
        },
      ]);
    });
  }

  const clearEastBtn = document.getElementById("clear-east");
  if (clearEastBtn) {
    clearEastBtn.addEventListener("click", () => {
      const prefix = "fields-east";
      const toDelete = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(prefix + "-")) toDelete.push(k);
      }
      toDelete.forEach((k) => localStorage.removeItem(k));
      renderGrid(
        document.getElementById("fields-east"),
        fields_east,
        "fields-east"
      );
    });
  }
});
