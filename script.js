// import {
//   allFlowerColors,
//   flowerSpecies,
//   flowerPatterns,
// } from "./flowerData.js";

// import {
//   fieldsWest,
//   fieldsMini,
//   fieldsEast,
//   plazaGarden,
//   overlookNear,
// } from "./plotData.js";

const defaultPlotColor = "#9b590d";
const blankPlotColor = "#8d775d";
const max_notes_chars = 250;

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
  {
    name: "Bellbutton",
    code: "BL",
    biomes: [
      "Meadow",
      "Resort",
      "Swamp",
      "Gemstone",
      "Greenhouse",
      "Cloud",
      "Wheatflower",
    ],
  },
  {
    name: "Dandelily",
    code: "DL",
    biomes: [
      "Meadow",
      "Resort",
      "Swamp",
      "Gemstone",
      "Greenhouse",
      "Cloud",
      "Wheatflower",
    ],
  },
  {
    name: "Pestemum",
    code: "PM",
    biomes: [
      "Meadow",
      "Resort",
      "Swamp",
      "Gemstone",
      "Greenhouse",
      "Cloud",
      "Wheatflower",
    ],
  },
  {
    name: "Tulias",
    code: "TL",
    biomes: [
      "Meadow",
      "Resort",
      "Swamp",
      "Gemstone",
      "Greenhouse",
      "Cloud",
      "Wheatflower",
    ],
  },
  {
    name: "Hibiscus",
    code: "HB",
    biomes: [
      "Meadow",
      "Resort",
      "Swamp",
      "Volcano",
      "Greenhouse",
      "Wheatflower",
    ],
  },
  {
    name: "Ghostgleam",
    code: "GG",
    biomes: ["Swamp", "Gemstone", "Reef", "Greenhouse", "Cloud", "Wheatflower"],
  },
  {
    name: "Thistle",
    code: "TH",
    biomes: ["Swamp", "Gemstone", "Volcano", "Greenhouse", "Wheatflower"],
  },
  {
    name: "Heavy Nettle",
    code: "HN",
    biomes: ["Gemstone", "Volcano", "Greenhouse", "Wheatflower"],
  },
  {
    name: "Anemone",
    code: "AN",
    biomes: ["Reef", "Greenhouse", "Cloud", "Wheatflower"],
  },
  {
    name: "Dreampuff",
    code: "DP",
    biomes: ["Greenhouse", "Cloud", "Wheatflower"],
  },
  { name: "Frostfeather", code: "FF", biomes: ["Peak"] },
  { name: "Blazebulb", code: "BZ", biomes: ["Caldera"] },
  { name: "Crystalia", code: "CY", biomes: ["Caves"] },
  { name: "Bubbaluna", code: "BU", biomes: ["Moon"] },
  {
    name: "Wheatflower",
    code: "WF",
    biomes: ["Greenhouse", "Wheatflower"],
  },
  {
    name: "Marigold",
    code: "MG",
    biomes: [
      "Meadow",
      "Resort",
      "Gemstone",
      "Volcano",
      "Greenhouse",
      "Wheatflower",
    ],
  },
  {
    name: "Eggwort",
    code: "EG",
    biomes: [
      "Meadow",
      "Resort",
      "Swamp",
      "Gemstone",
      "Volcano",
      "Reef",
      "Greenhouse",
      "Cloud",
      "Peak",
      "Caldera",
      "Caves",
      "Moon",
      "Wheatflower",
    ],
  },
  {
    name: "Pinwheel",
    code: "PW",
    biomes: [
      "Meadow",
      "Resort",
      "Gemstone",
      "Greenhouse",
      "Cloud",
      "Wheatflower",
    ],
  },
  {
    name: "Petunia",
    code: "PT",
    biomes: [
      "Meadow",
      "Resort",
      "Swamp",
      "Gemstone",
      "Greenhouse",
      "Wheatflower",
    ],
  },
  {
    name: "Bowblossom",
    code: "BB",
    biomes: [
      "Meadow",
      "Resort",
      "Reef",
      "Greenhouse",
      "Cloud",
      "Peak",
      "Caldera",
      "Caves",
      "Wheatflower",
    ],
  },
  {
    name: "Poinsettia",
    code: "PS",
    biomes: ["Meadow", "Resort", "Swamp", "Greenhouse", "Wheatflower"],
  },
  {
    name: "Glowbal",
    code: "GB",
    biomes: [
      "Meadow",
      "Resort",
      "Swamp",
      "Greenhouse",
      "Cloud",
      "Peak",
      "Caldera",
      "Caves",
      "Wheatflower",
      "Moon",
    ],
  },
  {
    name: "Rose",
    code: "RS",
    biomes: ["Meadow", "Resort", "Greenhouse", "Wheatflower"],
  },
  {
    name: "Happadil",
    code: "HP",
    biomes: [
      "Meadow",
      "Resort",
      "Gemstone",
      "Volcano",
      "Greenhouse",
      "Cloud",
      "Caves",
      "Wheatflower",
      "Moon",
    ],
  },
];

// Map the grid areas
const areaBiomeIndex = {
  "fields-west": "Meadow",
  "fields-east": "Meadow",
  "fields-west-mini": "Meadow",
  "plaza-garden": "Meadow",
  "overlook-near": "Meadow",

  // Add Resort areas when you add those grids:
  // "hopscotch-islands": "Resort",
  // "topmost-west": "Resort",
  // "upper-west": "Resort",
};

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

const fieldsWest = [
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

const fieldsMini = ["111", "111"];

const fieldsEast = [
  "0000000000110", // a
  "0000000001110", // b
  "0000000111110", // c
  "1111111111111", // d
  "1111111111110", // e
  "0001111111100", // f
  "0000000011000", // g
];

const plazaGarden = [
  /*       12345678
  /* A */ "01110000",
  /* B */ "11110000",
  /* C */ "11111000",
  /* D */ "11111111",
  /* E */ "11111111",
  /* F */ "01111111",
  /* G */ "00001111",
  /* H */ "00000010",
];

const overlookNear = [
  /*       123456789012345
  /* A */ "100000000000001",
  /* B */ "000000000000000",
  /* C */ "111000000000011",
];

function widestRowLength(rows) {
  return Math.max(...rows.map((r) => r.length));
}

function setSelectByValue(selectEl, value) {
  if (!value) {
    selectEl.value = "";
    return;
  }
  const match = [...selectEl.options].find((o) => o.value === value);
  selectEl.value = match ? value : "";
}

function getSavedStateMap(prefix) {
  const map = new Map();
  const needle = prefix + "-";
  for (let i = 0, len = localStorage.length; i < len; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(needle)) {
      try {
        const v = localStorage.getItem(k);
        if (v) map.set(k, JSON.parse(v));
      } catch {}
    }
  }
  return map;
}

function bindClearBtn(button, prefixes, renders) {
  const btn =
    typeof button === "string" ? document.querySelector(button) : button;
  if (!btn) return;

  const prefixSet = new Set(prefixes.map((p) => p + "-"));

  btn.addEventListener("click", () => {
    const keysToDelete = [];
    for (let i = 0, len = localStorage.length; i < len; i++) {
      const storageKey = localStorage.key(i);
      if (!storageKey) continue;
      for (const pref of prefixSet) {
        if (storageKey.startsWith(pref)) {
          keysToDelete.push(storageKey);
          break;
        }
      }
    }
    for (const k of keysToDelete) localStorage.removeItem(k);

    if (Array.isArray(renders) && renders.length) renderMany(renders);
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

  const savedMap = getSavedStateMap(idPrefix);

  const frag = document.createDocumentFragment();

  for (let rIdx = 0; rIdx < rows.length; rIdx++) {
    const row = rows[rIdx];
    const padded = row.padEnd(cols, " ");
    for (let cIdx = 0; cIdx < padded.length; cIdx++) {
      if (padded[cIdx] !== "1") continue;

      const flowerPlot = document.createElement("div");
      flowerPlot.className = "cell";
      flowerPlot.style.gridColumn = (cIdx + 1).toString();
      flowerPlot.style.gridRow = (rIdx + 1).toString();
      const cellId = `${idPrefix}-${rIdx}-${cIdx}`;
      flowerPlot.dataset.key = cellId;

      const saved = savedMap.get(cellId) || {};
      buildFlowerPlot(flowerPlot, saved);

      frag.appendChild(flowerPlot);
    }
  }

  container.replaceChildren(frag);
}

function renderMany(configs) {
  for (const { el, rows, prefix } of configs) {
    const node = typeof el === "string" ? document.querySelector(el) : el;
    if (!node) {
      console.warn("renderMany: container not found for", el);
      continue;
    }
    renderGrid(node, rows, prefix);
  }
}

(function persistDisclosures(root = document) {
  const KEY_PREFIX = "disclosure:";
  const disclosureElements = [...root.querySelectorAll("details[data-id]")];

  for (const detailsEl of disclosureElements) {
    const storageKey = KEY_PREFIX + detailsEl.dataset.id;
    const savedValue = localStorage.getItem(storageKey);
    if (savedValue !== null) detailsEl.open = savedValue === "1";
    detailsEl.addEventListener("toggle", () => {
      localStorage.setItem(storageKey, detailsEl.open ? "1" : "0");
    });
  }
})();

// Pull biome from a cell key like "fields-west-3-7"
function biomeFromCellKey(cellKey) {
  const areaPrefix = cellKey.replace(/-\d+-\d+$/, "");
  return areaBiomeIndex[areaPrefix] || null;
}

function speciesForBiome(biome) {
  if (!biome) return flowerSpecies; // fallback
  return flowerSpecies.filter(
    (s) => Array.isArray(s.biomes) && s.biomes.includes(biome)
  );
}

function renderSpeciesOptions(speciesList) {
  return ['<option value="">Choose the species...</option>']
    .concat(
      speciesList.map(
        (s) =>
          `<option value="${s.code}" data-name="${s.name}">${s.name} (${s.code})</option>`
      )
    )
    .join("");
}

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
  intentionallyEmptyPlotCheckbox,
  clearPlotButton;

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

  // Build options markup once (fastest for large lists)
  const colorOptions = ['<option value="">Choose the color...</option>']
    .concat(
      allFlowerColors.map(
        (c) =>
          `<option value="${c.hex}" data-name="${c.name}">${c.name}</option>`
      )
    )
    .join("");

  const patternOptions = ['<option value="">No pattern</option>']
    .concat(flowerPatterns.map((p) => `<option value="${p}">${p}</option>`))
    .join("");

  colorSelect.innerHTML = colorOptions;
  flowerSelect.innerHTML = '<option value="">Choose the species...</option>';
  patternSelect.innerHTML = patternOptions;

  const counter = document.getElementById("notes-count");
  plotNotes.addEventListener("input", () => {
    const v = plotNotes.value;
    if (v.length > max_notes_chars)
      plotNotes.value = v.slice(0, max_notes_chars);
    counter.textContent = String(plotNotes.value.length);
  });

  document
    .getElementById("cell-cancel")
    .addEventListener("click", closeCellModal);
  backdrop.addEventListener("click", closeCellModal);
  document.addEventListener("keydown", (event) => {
    if (
      flowerModal.getAttribute("aria-hidden") === "false" &&
      event.key === "Escape"
    ) {
      event.preventDefault();
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

  // Submit handler (single source of truth)
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

  // Clear = hard reset to default brown
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
      const isChecked = !!intentionallyEmptyPlotCheckbox.checked;
      applyEmptyPlotModeUI(isChecked);

      // Close & save immediately when turning ON (true).
      // Stay open (no save) when turning OFF (false).
      if (!currentKey || !currentPlot) return;
      if (isChecked) {
        const notes = (plotNotes.value || "").trim().slice(0, max_notes_chars);
        const payload = { isIntentionallyEmptyPlot: true, notes };
        try {
          localStorage.setItem(currentKey, JSON.stringify(payload));
        } catch {}
        buildFlowerPlot(currentPlot, payload);
        closeCellModal();
      }
    });
  }
}

function applyEmptyPlotModeUI(isIntentionallyEmpty) {
  colorSelect.disabled = isIntentionallyEmpty;
  flowerSelect.disabled = isIntentionallyEmpty;
  patternSelect.disabled = isIntentionallyEmpty;
}

// Add a tooltip somewhere that informs the user

function openCellModal(cell, key) {
  lastFocus = document.activeElement;
  currentPlot = cell;
  currentKey = key;

  const saved = JSON.parse(localStorage.getItem(key) || "{}");
  const isIntentionallyEmptyPlot = !!saved.isIntentionallyEmptyPlot;

  // Biome-aware species options
  const biome = biomeFromCellKey(key);
  const allowedSpecies = speciesForBiome(biome);
  flowerSelect.innerHTML = renderSpeciesOptions(allowedSpecies);

  // If a previously-saved species is now disallowed, inject a visible placeholder so it still shows
  if (saved.flowerNameCode) {
    const stillAllowed = allowedSpecies.some(
      (species) => species.code === saved.flowerNameCode
    );
    if (!stillAllowed) {
      const opt = document.createElement("option");
      opt.value = saved.flowerNameCode;
      opt.textContent = `⚠ ${
        saved.flowerName || saved.flowerNameCode
      } (not allowed in ${biome || "this area"})`;
      opt.dataset.name = saved.flowerName || saved.flowerNameCode;
      opt.className = "option-not-allowed";
      flowerSelect.appendChild(opt);
    }
  }

  // Apply saved values after options exist
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

  // Defer focus one frame for smoother paint
  requestAnimationFrame(() =>
    (isIntentionallyEmptyPlot ? plotNotes : colorSelect).focus()
  );
}

function closeCellModal() {
  flowerModal.setAttribute("aria-hidden", "true");
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  currentPlot = null;
  currentKey = null;
}

document.addEventListener("DOMContentLoaded", () => {
  setupModal();

  // Render grids
  renderMany([
    { el: "#fields-west", rows: fieldsWest, prefix: "fields-west" },
    { el: "#fields-west-mini", rows: fieldsMini, prefix: "fields-west-mini" },
    { el: "#fields-east", rows: fieldsEast, prefix: "fields-east" },
  ]);

  // Single delegated click listener for all cells (no per-cell listeners)
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target.closest(".cell");
      if (!target) return;
      const key = target.dataset.key;
      if (!key) return;
      openCellModal(target, key);
    },
    { passive: true }
  );

  // Clear buttons
  bindClearBtn(
    "#clear-fields-west",
    ["fields-west", "fields-west-mini"],
    [
      { el: "#fields-west", rows: fieldsWest, prefix: "fields-west" },
      {
        el: "#fields-west-mini",
        rows: fieldsMini,
        prefix: "fields-west-mini",
      },
    ]
  );

  bindClearBtn(
    "#clear-east",
    ["fields-east"],
    [{ el: "#fields-east", rows: fieldsEast, prefix: "fields-east" }]
  );
});
