const defaultPlotColor = "#9b590d";
const blankPlotColor = "#8d775d";

const allFlowerColors = [
  { name: "Black", hex: "#000000", text: "#ffffff" },
  { name: "Blue", hex: "#3279f7", text: "#ffffff" },
  { name: "Blush", hex: "#f48f99", text: "#000000" },
  { name: "Cloud", hex: "#86ecfc", text: "#000000" },
  { name: "Cool Pink", hex: "#e099da", text: "#000000" },
  { name: "Coral", hex: "#ec5b65", text: "#000000" },
  { name: "Cream", hex: "#ffeab2", text: "#000000" },
  { name: "Gray", hex: "#535652", text: "#ffffff" },
  { name: "Green", hex: "#35b04f", text: "#000000" },
  { name: "Hot Pink", hex: "#d9569d", text: "#000000" },
  { name: "Ice", hex: "#86b3ee", text: "#000000" },
  { name: "Gray", hex: "#535652", text: "#ffffff" },
  { name: "Indigo", hex: "#4049ef", text: "#000000" },
  { name: "Lilac", hex: "#be7cf9", text: "#000000" },
  { name: "Lime", hex: "#b7f832", text: "#000000" },
  { name: "Gray", hex: "#535652", text: "#ffffff" },
  { name: "Magenta", hex: "#c03bcc", text: "#000000" },
  { name: "Mint", hex: "#91fb9d", text: "#000000" },
  { name: "Orange", hex: "#f3a01c", text: "#000000" },
  { name: "Peach", hex: "#f8c088", text: "#000000" },
  { name: "Periwinkle", hex: "#a9a2fa", text: "#000000" },
  { name: "Pink", hex: "#ee94c7", text: "#000000" },
  { name: "Pistachio", hex: "#dbfa96", text: "#000000" },
  { name: "Red", hex: "#c12a3d", text: "#000000" },
  { name: "Seafoam", hex: "#85f4d6", text: "#000000" },
  { name: "Sky", hex: "#1cb3fa", text: "#000000" },
  { name: "Teal", hex: "#47c6c0", text: "#000000" },
  { name: "Gray", hex: "#535652", text: "#ffffff" },
  { name: "Violet", hex: "#6545c3", text: "#000000" },
  { name: "Warm Pink", hex: "#ffb7cb", text: "#000000" },
  { name: "White", hex: "#eae4e7", text: "#000000" },
  { name: "Yellow", hex: "#e8dc47", text: "#000000" },
];

const flowerSpecies = [
  { name: "Bellbutton", code: "BL" },
  { name: "Dandelily", code: "DL" },
  { name: "Pestemum", code: "PM" },
  { name: "Tulias", code: "TL" },
  { name: "Hibiscus", code: "HB" },
  { name: "Ghostgleam", code: "GG" },
  { name: "Thistle", code: "TH" },
  { name: "Heavy Nettle", code: "HN" },
  { name: "Anemone", code: "AN" },
  { name: "Dreampuff", code: "DP" },
  { name: "Frostfeather", code: "FF" },
  { name: "Blazebulb", code: "BZ" },
  { name: "Crystalia", code: "CY" },
  { name: "Marigold", code: "MG" },
  { name: "Eggwort", code: "EG" },
  { name: "Pinwheel", code: "PW" },
  { name: "Petunia", code: "PT" },
  { name: "Bowblossom", code: "BB" },
  { name: "Poinsettia", code: "PS" },
  { name: "Glowbal", code: "GB" },
  { name: "Rose", code: "RS" },
  { name: "Happadil", code: "HP" },
  { name: "Wheatflower", code: "WF" },
];

const flowerPatterns = [
  "Ombré",
  "Glitter",
  "Frost",
  "Molten",
  "Crystal",
  "Cosmic",
  "Trim",
  "Speckled",
  "Alternate",
  "Striped",
  "Patch",
  "Ring",
  "Confetti",
  "Iridescent",
  "Glow",
];

const fields_west = [
  "11100000000000",
  "11111111110000",
  "01111111111100",
  "01111111111110",
  "01111111111111",
  "01111111111111",
  "01111111111111",
  "01111111111100",
  "00011111111000",
  "00000111111000",
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

function bindClearBtn(button, prefixes, renders) {
  const btn =
    typeof button === "string" ? document.querySelector(button) : button;
  if (!btn) return;

  btn.addEventListener("click", () => {
    const keysToDelete = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k) continue;
      if (prefixes.some((p) => k.startsWith(p + "-"))) keysToDelete.push(k);
    }
    keysToDelete.forEach((k) => localStorage.removeItem(k));

    if (Array.isArray(renders) && renders.length) {
      renderMany(renders);
    }
  });
}
// Erin todo
// if pattern is equal to Ombré, Trim, Speckled, Alternate, Striped, Patch, Ring, or Confetti
// This should unlock optional secondary color select.
// This should not impact the color of the plots.
// This should always default to white.
// This should always exclude the color it already is.
function buildFlowerPlot(plot, state = {}) {
  const isIntentionallyEmptyPlot = !!state.isIntentionallyEmptyPlot;

  if (isIntentionallyEmptyPlot) {
    plot.textContent = "";
    plot.style.backgroundColor = blankPlotColor;
    plot.style.color = "#000000";
    const parts = ["Empty — New plants can grow"];
    if (state.notes) parts.push(state.notes);
    plot.title = parts.join(" • ");
    return;
  }

  const flowerPlotCode =
    (state.flowerNameCode || "") + (state.patternName ? "*" : "");
  const plotColor = state.colorHex;
  const plotTextColor = state.colorTextHex || "#000000";

  plot.textContent = flowerPlotCode;
  plot.style.backgroundColor = plotColor || defaultPlotColor;
  plot.style.color = plotTextColor;

  const toolTipContent = [];
  if (state.colorName) toolTipContent.push(state.colorName);
  if (state.patternName) toolTipContent.push(state.patternName);
  if (state.flowerName) toolTipContent.push(state.flowerName);
  if (state.notes) toolTipContent.push(state.notes);
  plot.title = toolTipContent.join(" • ");
}

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
        const flowerPlot = document.createElement("div");
        flowerPlot.className = "cell";
        flowerPlot.style.gridColumn = (cIdx + 1).toString();
        flowerPlot.style.gridRow = (rIdx + 1).toString();
        const cellId = `${idPrefix}-${rIdx}-${cIdx}`;
        flowerPlot.dataset.key = cellId;

        const saved = JSON.parse(localStorage.getItem(cellId) || "{}");
        buildFlowerPlot(flowerPlot, saved);

        flowerPlot.addEventListener("click", () =>
          openCellModal(flowerPlot, cellId)
        );

        frag.appendChild(flowerPlot);
      }
    });
  });

  container.replaceChildren(frag);
}

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

const max_notes_chars = 250;

let flowerModal,
  backdrop,
  flowerForm,
  colorSelect,
  flowerSelect,
  patternSelect,
  plotNotes,
  errorElement,
  lastFocus,
  currentPlot,
  currentKey,
  intentionallyEmptyPlotCheckbox;

function setupModal() {
  flowerModal = document.getElementById("cell-modal");
  backdrop = document.getElementById("cell-backdrop");
  flowerForm = document.getElementById("cell-form");
  colorSelect = document.getElementById("cell-color");
  flowerSelect = document.getElementById("cell-flower");
  patternSelect = document.getElementById("cell-pattern");
  plotNotes = document.getElementById("cell-notes");
  clearPlotButton = document.getElementById("cell-clear");
  errorElement = document.getElementById("cell-error");
  intentionallyEmptyPlotCheckbox = document.getElementById("cell-empty");

  allFlowerColors.forEach((flowerColor) => {
    const opt = document.createElement("option");
    opt.value = flowerColor.hex;
    opt.textContent = flowerColor.name;
    opt.dataset.name = flowerColor.name;
    colorSelect.appendChild(opt);
  });

  flowerSpecies.forEach((flowerSpecies) => {
    const opt = document.createElement("option");
    opt.value = flowerSpecies.code;
    opt.textContent = `${flowerSpecies.name} (${flowerSpecies.code})`;
    opt.dataset.name = flowerSpecies.name;
    flowerSelect.appendChild(opt);
  });

  flowerPatterns.forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    patternSelect.appendChild(opt);
  });

  const counter = document.getElementById("notes-count");
  plotNotes.addEventListener("input", () => {
    if (plotNotes.value.length > max_notes_chars)
      plotNotes.value = plotNotes.value.slice(0, max_notes_chars);
    counter.textContent = String(plotNotes.value.length);
  });

  document
    .getElementById("cell-cancel")
    .addEventListener("click", closeCellModal);
  backdrop.addEventListener("click", closeCellModal);
  document.addEventListener("keydown", (e) => {
    if (
      flowerModal.getAttribute("aria-hidden") === "false" &&
      e.key === "Escape"
    ) {
      e.preventDefault();
      closeCellModal();
    }
  });

  flowerForm.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const focusables = flowerForm.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  flowerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    errorElement.textContent = "";

    const isIntentionallyEmptyPlot = !!intentionallyEmptyPlotCheckbox?.checked;

    if (isIntentionallyEmptyPlot) {
      const notes = (plotNotes.value || "").trim().slice(0, max_notes_chars);
      const payload = { isIntentionallyEmptyPlot: true, notes };
      if (currentKey) localStorage.setItem(currentKey, JSON.stringify(payload));
      if (currentPlot) buildFlowerPlot(currentPlot, payload);
      closeCellModal();
      return;
    }

    const colorHex = colorSelect.value;
    const colorName = colorSelect.selectedOptions[0]?.dataset.name || "";
    const colorObj = allFlowerColors.find(
      (c) => c.hex.toLowerCase() === (colorHex || "").toLowerCase()
    );
    const colorTextHex = colorObj?.text || "#000000";
    const flowerNameCode = flowerSelect.value;
    const flowerName = flowerSelect.selectedOptions[0]?.dataset.name || "";
    const patternName = patternSelect.value || "";
    const notes = (plotNotes.value || "").trim().slice(0, max_notes_chars);

    if (!colorHex || !flowerNameCode) {
      errorElement.textContent = "Please choose both a color and a flower.";
      return;
    }

    const payload = {
      isIntentionallyEmptyPlot: false,
      colorHex,
      colorName,
      colorTextHex,
      flowerNameCode,
      flowerName,
      patternName,
      notes,
    };

    if (currentKey) localStorage.setItem(currentKey, JSON.stringify(payload));
    if (currentPlot) buildFlowerPlot(currentPlot, payload);
    closeCellModal();
  });

  clearPlotButton.addEventListener("click", () => {
    if (currentKey) localStorage.removeItem(currentKey);
    if (currentPlot) buildFlowerPlot(currentPlot, {});

    setSelectByValue(colorSelect, "");
    setSelectByValue(flowerSelect, "");
    setSelectByValue(patternSelect, "");
    plotNotes.value = "";
    const counterEl = document.getElementById("notes-count");
    if (counterEl) counterEl.textContent = "0";
    if (intentionallyEmptyPlotCheckbox)
      intentionallyEmptyPlotCheckbox.checked = false;
    applyEmptyPlotModeUI(false);

    closeCellModal();
  });

  if (intentionallyEmptyPlotCheckbox) {
    intentionallyEmptyPlotCheckbox.addEventListener("change", () => {
      const isIntentionallyEmptyPlot = intentionallyEmptyPlotCheckbox.checked;
      applyEmptyPlotModeUI(isIntentionallyEmptyPlot);
    });
  }
}

function applyEmptyPlotModeUI(isIntentionallyEmpty) {
  colorSelect.disabled = isIntentionallyEmpty;
  flowerSelect.disabled = isIntentionallyEmpty;
  patternSelect.disabled = isIntentionallyEmpty;
}

function openCellModal(cell, key) {
  lastFocus = document.activeElement;
  currentPlot = cell;
  currentKey = key;

  const saved = JSON.parse(localStorage.getItem(key) || "{}");
  const isIntentionallyEmptyPlot = !!saved.isIntentionallyEmptyPlot;

  setSelectByValue(colorSelect, saved.colorHex || "");
  setSelectByValue(flowerSelect, saved.flowerNameCode || "");
  setSelectByValue(patternSelect, saved.patternName || "");
  plotNotes.value = saved.notes || "";

  if (intentionallyEmptyPlotCheckbox)
    intentionallyEmptyPlotCheckbox.checked = isIntentionallyEmptyPlot;

  applyEmptyPlotModeUI(isIntentionallyEmptyPlot);

  document.getElementById("notes-count").textContent = String(
    plotNotes.value.length
  );
  errorElement.textContent = "";
  flowerModal.setAttribute("aria-hidden", "false");

  setTimeout(
    () => (isIntentionallyEmptyPlot ? plotNotes : colorSelect).focus(),
    0
  );
}

function closeCellModal() {
  flowerModal.setAttribute("aria-hidden", "true");
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  currentPlot = null;
  currentKey = null;
}

function setSelectByValue(selectEl, value) {
  if (!value) {
    selectEl.value = "";
    return;
  }
  const match = [...selectEl.options].find((o) => o.value === value);
  selectEl.value = match ? value : "";
}

document.addEventListener("DOMContentLoaded", () => {
  setupModal();
  renderMany([
    { el: "#fields-west", rows: fields_west, prefix: "fields-west" },
    { el: "#fields-west-mini", rows: fields_mini, prefix: "fields-west-mini" },
    { el: "#fields-east", rows: fields_east, prefix: "fields-east" },
  ]);

  bindClearBtn(
    "#clear-fields-west",
    ["fields-west", "fields-west-mini"],
    [
      { el: "#fields-west", rows: fields_west, prefix: "fields-west" },
      {
        el: "#fields-west-mini",
        rows: fields_mini,
        prefix: "fields-west-mini",
      },
    ]
  );

  bindClearBtn(
    "#clear-east",
    ["fields-east"],
    [{ el: "#fields-east", rows: fields_east, prefix: "fields-east" }]
  );
});
