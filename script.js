// import {
//   stuff
// } from "./flowerData.js";

// import {
//   stuff
// } from "./plotData.js";

const defaultPlotColor = '#9b590d';
const blankPlotColor = '#8d775d';
const max_notes_chars = 250;

const allFlowerColors = [
  { name: 'Black', hex: '#000000', text: '#ffffff' },
  { name: 'Blue', hex: '#3279f7', text: '#ffffff' },
  { name: 'Blush', hex: '#f48f99', text: '#000000' },
  { name: 'Cloud', hex: '#86ecfc', text: '#000000' },
  { name: 'Cool Pink', hex: '#e099da', text: '#000000' },
  { name: 'Coral', hex: '#ec5b65', text: '#000000' },
  { name: 'Cream', hex: '#ffeab2', text: '#000000' },
  { name: 'Gray', hex: '#535652', text: '#ffffff' },
  { name: 'Green', hex: '#35b04f', text: '#000000' },
  { name: 'Hot Pink', hex: '#d9569d', text: '#000000' },
  { name: 'Ice', hex: '#86b3ee', text: '#000000' },
  { name: 'Indigo', hex: '#4049ef', text: '#000000' },
  { name: 'Lilac', hex: '#be7cf9', text: '#000000' },
  { name: 'Lime', hex: '#b7f832', text: '#000000' },
  { name: 'Magenta', hex: '#c03bcc', text: '#000000' },
  { name: 'Mint', hex: '#91fb9d', text: '#000000' },
  { name: 'Orange', hex: '#f3a01c', text: '#000000' },
  { name: 'Peach', hex: '#f8c088', text: '#000000' },
  { name: 'Periwinkle', hex: '#a9a2fa', text: '#000000' },
  { name: 'Pink', hex: '#ee94c7', text: '#000000' },
  { name: 'Pistachio', hex: '#dbfa96', text: '#000000' },
  { name: 'Red', hex: '#c12a3d', text: '#000000' },
  { name: 'Seafoam', hex: '#85f4d6', text: '#000000' },
  { name: 'Sky', hex: '#1cb3fa', text: '#000000' },
  { name: 'Teal', hex: '#47c6c0', text: '#000000' },
  { name: 'Violet', hex: '#6545c3', text: '#000000' },
  { name: 'Warm Pink', hex: '#ffb7cb', text: '#000000' },
  { name: 'White', hex: '#eae4e7', text: '#000000' },
  { name: 'Yellow', hex: '#e8dc47', text: '#000000' },
];

const flowerSpecies = [
  {
    name: 'Bellbutton',
    code: 'BL',
    biomes: [
      'Meadow',
      'Resort',
      'Swamp',
      'Gemstone',
      'Greenhouse',
      'Cloud',
      'Wheatflower',
    ],
  },
  {
    name: 'Dandelily',
    code: 'DL',
    biomes: [
      'Meadow',
      'Resort',
      'Swamp',
      'Gemstone',
      'Greenhouse',
      'Cloud',
      'Wheatflower',
    ],
  },
  {
    name: 'Pestemum',
    code: 'PM',
    biomes: [
      'Meadow',
      'Resort',
      'Swamp',
      'Gemstone',
      'Greenhouse',
      'Cloud',
      'Wheatflower',
    ],
  },
  {
    name: 'Tulias',
    code: 'TL',
    biomes: [
      'Meadow',
      'Resort',
      'Swamp',
      'Gemstone',
      'Greenhouse',
      'Cloud',
      'Wheatflower',
    ],
  },
  {
    name: 'Hibiscus',
    code: 'HB',
    biomes: [
      'Meadow',
      'Resort',
      'Swamp',
      'Volcano',
      'Greenhouse',
      'Wheatflower',
    ],
  },
  {
    name: 'Ghostgleam',
    code: 'GG',
    biomes: ['Swamp', 'Gemstone', 'Reef', 'Greenhouse', 'Cloud', 'Wheatflower'],
  },
  {
    name: 'Thistle',
    code: 'TH',
    biomes: ['Swamp', 'Gemstone', 'Volcano', 'Greenhouse', 'Wheatflower'],
  },
  {
    name: 'Heavy Nettle',
    code: 'HN',
    biomes: ['Gemstone', 'Volcano', 'Greenhouse', 'Wheatflower'],
  },
  {
    name: 'Anemone',
    code: 'AN',
    biomes: ['Reef', 'Greenhouse', 'Cloud', 'Wheatflower'],
  },
  {
    name: 'Dreampuff',
    code: 'DP',
    biomes: ['Greenhouse', 'Cloud', 'Wheatflower'],
  },
  { name: 'Frostfeather', code: 'FF', biomes: ['Peak'] },
  { name: 'Blazebulb', code: 'BZ', biomes: ['Caldera'] },
  { name: 'Crystalia', code: 'CY', biomes: ['Caves'] },
  { name: 'Bubbaluna', code: 'BU', biomes: ['Moon'] },
  {
    name: 'Wheatflower',
    code: 'WF',
    biomes: ['Greenhouse', 'Wheatflower'],
  },
  {
    name: 'Marigold',
    code: 'MG',
    biomes: [
      'Meadow',
      'Resort',
      'Gemstone',
      'Volcano',
      'Greenhouse',
      'Wheatflower',
    ],
  },
  {
    name: 'Eggwort',
    code: 'EG',
    biomes: [
      'Meadow',
      'Resort',
      'Swamp',
      'Gemstone',
      'Volcano',
      'Reef',
      'Greenhouse',
      'Cloud',
      'Peak',
      'Caldera',
      'Caves',
      'Moon',
      'Wheatflower',
    ],
  },
  {
    name: 'Pinwheel',
    code: 'PW',
    biomes: [
      'Meadow',
      'Resort',
      'Gemstone',
      'Greenhouse',
      'Cloud',
      'Wheatflower',
    ],
  },
  {
    name: 'Petunia',
    code: 'PT',
    biomes: [
      'Meadow',
      'Resort',
      'Swamp',
      'Gemstone',
      'Greenhouse',
      'Wheatflower',
    ],
  },
  {
    name: 'Bowblossom',
    code: 'BB',
    biomes: [
      'Meadow',
      'Resort',
      'Reef',
      'Greenhouse',
      'Cloud',
      'Peak',
      'Caldera',
      'Caves',
      'Wheatflower',
    ],
  },
  {
    name: 'Poinsettia',
    code: 'PS',
    biomes: ['Meadow', 'Resort', 'Swamp', 'Greenhouse', 'Wheatflower'],
  },
  {
    name: 'Glowbal',
    code: 'GB',
    biomes: [
      'Meadow',
      'Resort',
      'Swamp',
      'Greenhouse',
      'Cloud',
      'Peak',
      'Caldera',
      'Caves',
      'Wheatflower',
      'Moon',
    ],
  },
  {
    name: 'Rose',
    code: 'RS',
    biomes: ['Meadow', 'Resort', 'Greenhouse', 'Wheatflower'],
  },
  {
    name: 'Happadil',
    code: 'HP',
    biomes: [
      'Meadow',
      'Resort',
      'Gemstone',
      'Volcano',
      'Greenhouse',
      'Cloud',
      'Caves',
      'Wheatflower',
      'Moon',
    ],
  },
];

const flowerPatterns = [
  'Ombré',
  'Glitter',
  'Frost',
  'Molten',
  'Crystal',
  'Cosmic',
  'Trim',
  'Speckled',
  'Alternate',
  'Striped',
  'Patch',
  'Ring',
  'Confetti',
  'Iridescent',
  'Glow',
];

const fieldsWest = [
  /*       1234567890-234 */
  /* A */ '---00000000000',
  /* B */ '----------0000',
  /* C */ '0-----------00',
  /* D */ '0------------0',
  /* E */ '0-------------',
  /* F */ '0-------------',
  /* G */ '0-------------',
  /* H */ '0-----------00',
  /* I */ '000--------000',
  /* J */ '00000------000',
];

const fieldsWestMini = ['---', '---'];

const fieldsEast = [
  /*       1234567890-23 */
  /* A */ '0000000000--0',
  /* B */ '000000000---0',
  /* C */ '0000000-----0',
  /* D */ '-------------',
  /* E */ '------------0',
  /* F */ '000--------00',
  /* G */ '00000000--000',
];

const plazaGarden = [
  /*       12345678 */
  /* A */ '0---0000',
  /* B */ '----0000',
  /* C */ '-----000',
  /* D */ '--------',
  /* E */ '--------',
  /* F */ '0-------',
  /* G */ '0000----',
  /* H */ '000000-0',
];

const overlookNear = [
  /*       1234567890-2345 */
  /* A */ '0-------------0',
  /* B */ '---------------',
  /* C */ '000----------00',
];

const overlookFar = [
  /*       12345678*/
  /* A */ '0-000000',
  /* B */ '---000-0',
  /* C */ '--------',
  /* D */ '--------',
  /* E */ '00-----0',
];

const templeCorner = [
  /*       1234567*/
  /* A */ '----000',
  /* B */ '-----00',
  /* C */ '0-----0',
  /* D */ '0-----0',
  /* E */ '0-----0',
  /* F */ '-----00',
  /* G */ '0-----0',
  /* H */ '00-----',
  /* I */ '0000---',
];

const meadowCorral = [
  /*       1234*/
  /* A */ '---0',
  /* B */ '00--',
];

const gazeboNorth = [
  /*       1234567890-234567890 */
  /* A */ '000000000-----000000',
  /* B */ '0000000--------00000',
  /* C */ '00000-----------0000',
  /* D */ '000---------------00',
  /* E */ '00------000000-----0',
  /* F */ '0------00000000----0',
  /* G */ '------0000000000----',
  /* H */ '-----000000000000---',
];

const gazeboWest = [
  /*       1234567890- */
  /* A */ '------00000',
  /* B */ '------00000',
  /* C */ '0------0000',
  /* D */ '00------000',
  /* E */ '000------00',
  /* F */ '0000------0',
  /* G */ '00000------',
  /* H */ '000000000--',
];

const gazeboPathEast = [
  /*       123456789 */
  /* A */ '-------00',
  /* B */ '---------',
  /* C */ '0--------',
  /* D */ '00------0',
  /* E */ '00-----00',
  /* F */ '000---000',
];

const greenhouse = [
  /*       1234567890 */
  /* A */ '----------',
  /* B */ '----------',
  /* C */ '----------',
  /* D */ '----------',
  /* E */ '----------',
  /* F */ '----------',
  /* G */ '----------',
  /* H */ '----------',
  /* I */ '----------',
  /* J */ '----------',
];

// 1. Resort • Hopscotch Islands (HI)
const hopscotchIslands = [
  /*       12345 */
  /* A */ '--000',
  /* B */ '----0',
  /* C */ '0----',
  /* D */ '00---',
  /* E */ '0----0',
  /* F */ '---00',
];

// 2. Resort • Resort Topmost West (RTW)
const resortTopmostWest = [
  /*       1234567890-23 */
  /* A */ '0000000-----0',
  /* B */ '000000-------',
  /* C */ '00000--------',
  /* D */ '0000---------',
  /* E */ '0-----------0',
  /* F */ '-----------00',
  /* G */ '-------000000',
  /* H */ '00--000000000',
];

// 3. Resort • Resort Upper West (RUW)
const resortUpperWest = [
  /*       123456789 */
  /* A */ '00000000-',
  /* B */ '000000---',
  /* C */ '0000----0',
  /* D */ '00-----00',
  /* E */ '0------00',
  /* F */ '-------00',
  /* G */ '00-----00',
  /* H */ '0000--000',
];

// 4. Resort • Resort Middle West (RMW)
const resortMiddleWest = [
  /*       1234567 */
  /* A */ '00---00',
  /* B */ '------0',
  /* C */ '0------',
  /* D */ '000--00',
];

// 5. Resort • Resort Lower West (RLW)
const resortLowerWest = [
  /*       12345 */
  /* A */ '0----',
  /* B */ '-----',
  /* C */ '0--000',
];

// 6. Resort • Resort Cabin (RCa)
const resortCabin = [
  /*       12 */
  /* A */ '-0',
  /* B */ '--',
  /* C */ '--',
  /* D */ '-0',
];

// 7. Resort • Resort Cabin Pond (RCP)
const resortCabinPond = [
  /*       123456 */
  /* A */ '0-----',
  /* B */ '---000',
];

// 8. Resort • Resort Sign (RS)
const resortSign = [
  /*       1234 */
  /* A */ '00--',
  /* B */ '---0',
];

// 9. Resort • Resort Cliff Bottom (RCB)
const resortCliffBottom = [
  /*       12345 */
  /* A */ '-0000',
  /* B */ '--00-',
  /* C */ '-----',
];

// 10. Resort • Resort Cliff Top (RCT)
const resortCliffTop = [
  /*       1234 */
  /* A */ '----',
  /* B */ '---0',
  /* C */ '---0',
  /* D */ '---0',
  /* E */ '--00',
];

// 11. Resort • Resort Gate (RG)
const resortGate = [
  /*       1234567890-2 */
  /* A */ '---000000000',
  /* B */ '---000000000',
  /* C */ '0--00000000-',
  /* D */ '0--0000000--',
  /* E */ '0---000000--',
  /* F */ '00---0000--0',
  /* G */ '00--------00',
  /* H */ '000------000',
  /* I */ '000-----0000',
  /* J */ '0000----0000',
  /* K */ '00000---0000',
  /* L */ '000000--0000',
];

// 12. Resort • Cozy Islands (CI)
const cozyIslands = [
  /*       1234567 */
  /* A */ '0----00',
  /* B */ '------0',
  /* C */ '0------',
  /* D */ '00-----',
  /* E */ '000---0',
];

// 1. Swamp • Ghost Ride (GR)
const ghostRide = [
  /*       1234567890- */
  /* A */ '000-------0',
  /* B */ '00---------',
  /* C */ '0----------',
  /* D */ '-----------',
  /* E */ '----------0',
  /* F */ '00----00000',
];

// 2. Swamp • Nature Reserve (NR)
const natureReserve = [
  /*       1234567890 */
  /* A */ '00000--000',
  /* B */ '000----000',
  /* C */ '00--------',
  /* D */ '0---------',
  /* E */ '---------0',
  /* F */ '------0000',
  /* G */ '----000000',
  /* H */ '---0000000',
];

/* Gemstone Mountain */
// 1. Oasis West: North (OWN)
const oasisWestNorth = [
  /*       123456789 */
  /* A */ '000-----0',
  /* B */ '0--------',
  /* C */ '-----00--',
  /* D */ '----000--',
  /* E */ '----00---',
  /* F */ '---------',
  /* G */ '0--------',
  /* H */ '000000--0',
];

// 2. Oasis West: South (OWS)
const oasisWestSouth = [
  /*       123456 */
  /* A */ '00---0',
  /* B */ '0-----',
  /* C */ '-----0',
  /* D */ '0--000',
];

// 3. Oasis East (OE)
const oasisEast = [
  /*       12345678 */
  /* A */ '000---00',
  /* B */ '00-----0',
  /* C */ '--------',
  /* D */ '0------0',
];

// 4. Peak Trail (PT)
const peakTrail = [
  /*       123456 */
  /* A */ '0----0',
  /* B */ '0-----',
  /* C */ '----00',
  /* D */ '--0000',
];

// 5. Mine Entrance Pond (MEP) done
const mineEntrancePond = [
  /*       1234567890- */
  /* A */ '0000000---00',
  /* B */ '00----------',
  /* C */ '------------',
  /* D */ '-----------0',
  /* E */ '----00000000',
];

// 6. Mine Entrance Town (MET)
const mineEntranceTown = [
  /*       12345678 */
  /* A */ '000----0',
  /* B */ '-------=',
  /* C */ '0------0',
  /* D */ '000---00',
];

// 7. Town Crafting Table (TCT)
const townCraftingTable = [
  /*       1234 */
  /* A */ '--00',
  /* B */ '---0',
  /* C */ '----',
  /* D */ '0---',
  /* E */ '00--',
];

// 8. Cabins West (CW)
const cabinsWest = [
  /*       1234567890-2 */
  /* A */ '---000000000',
  /* B */ '----00000000',
  /* C */ '---------000',
  /* D */ '0-----------',
  /* E */ '00----------',
];

// 9. Deadwood Forest (DF)
const deadwoodForest = [
  /*       123456 */
  /* A */ '000---',
  /* B */ '00----',
  /* C */ '------',
  /* D */ '0---00',
];

// 10. Cabin One North (CON)
const cabinOneNorth = [
  /*       12345 */
  /* A */ '000--',
  /* B */ '0----',
  /* C */ '-----',
  /* D */ '----0',
  /* E */ '00--0',
];

// 11. Cabin 1 South (COS)
const cabinOneSouth = [
  /*       123456 */
  /* A */ '-----0',
  /* B */ '------',
  /* C */ '0----0',
];
/* Gemstone Mountain */

/* Mount Hothead */
// 1. Volcano • Ruins West (RW)
const ruinsWest = [
  /*       123 */
  /* A */ '--0',
  /* B */ '---',
  /* C */ '0--',
  /* D */ '0-0',
  /* E */ '0-0',
  /* F */ '---',
];

// 2. Volcano • Cabin West (CW)
const volcanoCabinWest = [
  /*       1234 */
  /* A */ '00--',
  /* B */ '----',
  /* C */ '----',
];

// 2. Volcano • Cabin West (CW)
const volcanoCabinThree = [
  /*       123456 */
  /* A */ '---000',
  /* B */ '----00',
  /* C */ '-----0',
  /* D */ '-----0',
  /* E */ '0000--',
];

// 4. Volcano • Pizza Cliff Bottom (PCB)
const pizzaCliffBottom = [
  /*       123456789 */
  /* A */ '00000---0',
  /* B */ '0000-----',
  /* C */ '000------',
  /* D */ '---------',
  /* E */ '0-------0',
];

// 5. Volcano • Pizza Cliff Top (PCT)
const pizzaCliffTop = [
  /*       1234567 */
  /* A */ '--00000',
  /* B */ '-------',
  /* C */ '0------',
  /* D */ '0-----0',
  /* E */ '000--00',
];

// 6. Volcano • Hot Springs Bridge (HSB)
const hotSpringsBridge = [
  /*       12345 */
  /* A */ '--000',
  /* B */ '----0',
  /* C */ '-----',
  /* D */ '-----',
  /* E */ '0---0',
  /* F */ '00--0',
];
/* Mount Hothead */

/* Reef */
// 1. Reef • Club South (CS)
const clubSouth = [
  /*       1234567890- */
  /* A */ '0---------0',
  /* B */ '-----------',
  /* C */ '-------00--',
  /* D */ '00-----00--',
  /* E */ '000--------',
  /* F */ '0000------0',
];

// 2. Reef • Club East (CE)
const clubEast = [
  /*       1234567 */
  /* A */ '0----00',
  /* B */ '------0',
  /* C */ '------0',
  /* D */ '------0',
  /* E */ '------0',
  /* F */ '-------',
  /* G */ '0------',
  /* H */ '00-----',
];
/* Reef */

// 1. Cloud • Outer Cabin (CS)
const cloudOuterCabin = [
  /*       123456 */
  /* A */ '0--000',
  /* B */ '----00',
  /* C */ '---000',
  /* D */ '0---00',
  /* E */ '0----0',
  /* G */ '------',
  /* H */ '0-----',
  /* I */ '00---0',
];

// Extreme Areas
// Caldera • Mailbox (CM) done
const calderaMailbox = [
  /*       123 */
  /* A */ '0-0',
  /* B */ '---',
  /* C */ '--0',
];

// Peak • Icy Peak Summit (IPS)
const icyPeakSummit = [
  /*       1234 */
  /* A */ '0--0',
  /* B */ '----',
];

// Caves • Crystal Caves (CC)
const crystalCaves = [
  /*       1234 */
  /* A */ '---0',
  /* B */ '0---',
];

// The Moon (TM)
const theMoon = [
  /*       123 */
  /* A */ '---',
  /* B */ '---',
];

// 1. Wheatflower • Upper Left (UL1)
const wheatflowerUpperLeft = [
  /*       1234567890-23 */
  /* A */ '-------------',
  /* B */ '-------------',
  /* C */ '-------------',
  /* D */ '-------------',
  /* E */ '-------------',
  /* F */ '-------------',
  /* G */ '-------------',
  /* H */ '-------------',
  /* I */ '-------------',
];

// 2. Wheatflower • Upper Right (UR)
const wheatflowerUpperRight = [
  /*       1234567890-2345 */
  /* A */ '---------------',
  /* B */ '---------------',
  /* C */ '---------------',
  /* D */ '---------------',
  /* E */ '---------------',
  /* F */ '---------------',
];

// 3. Wheatflower • Lower Left (LL)
const wheatflowerLowerLeft = [
  /*       1234567890-2 */
  /* A */ '------------',
  /* B */ '------------',
  /* C */ '------------',
  /* D */ '------------',
  /* E */ '------------',
  /* F */ '------------',
  /* G */ '------------',
  /* H */ '------------',
  /* I */ '------------',
  /* J */ '------------',
];

// 4. Wheatflower • Lower Right (LR)
const wheatflowerLowerRight = [
  /*       1234567890-2 */
  /* A */ '------------',
  /* B */ '------------',
  /* C */ '------------',
  /* D */ '------------',
  /* E */ '------------',
  /* F */ '------------',
  /* G */ '------------',
  /* H */ '------------',
  /* I */ '------------',
  /* J */ '------------',
];

const flowerPatchInfo = [
  // Merry Meadows
  {
    el: '#fields-west',
    rows: fieldsWest,
    location: 'Meadow',
  },
  {
    el: '#fields-west-mini',
    rows: fieldsWestMini,
    location: 'Meadow',
  },
  {
    el: '#fields-east',
    rows: fieldsEast,
    location: 'Meadow',
  },
  {
    el: '#plaza-garden',
    rows: plazaGarden,
    location: 'Meadow',
  },
  {
    el: '#overlook-near',
    rows: overlookNear,
    location: 'Meadow',
  },
  {
    el: '#overlook-far',
    rows: overlookFar,
    location: 'Meadow',
  },
  {
    el: '#temple-corner',
    rows: templeCorner,
    location: 'Meadow',
  },
  {
    el: '#meadow-corral',
    rows: meadowCorral,
    location: 'Meadow',
  },
  {
    el: '#gazebo-north',
    rows: gazeboNorth,
    location: 'Meadow',
  },
  {
    el: '#gazebo-west',
    rows: gazeboWest,
    location: 'Meadow',
  },
  {
    el: '#gazebo-path-east',
    rows: gazeboPathEast,
    location: 'Meadow',
  },

  // Seaside Resort
  {
    el: '#hopscotch-islands',
    rows: hopscotchIslands,
    location: 'Resort',
  },
  {
    el: '#resort-topmost-west',
    rows: resortTopmostWest,
    location: 'Resort',
  },
  {
    el: '#resort-upper-west',
    rows: resortUpperWest,
    location: 'Resort',
  },
  {
    el: '#resort-middle-west',
    rows: resortMiddleWest,
    location: 'Resort',
  },
  {
    el: '#resort-lower-west',
    rows: resortLowerWest,
    location: 'Resort',
  },
  {
    el: '#resort-cabin',
    rows: resortCabin,
    location: 'Resort',
  },
  {
    el: '#resort-cabin-pond',
    rows: resortCabinPond,
    location: 'Resort',
  },
  {
    el: '#resort-sign',
    rows: resortSign,
    location: 'Resort',
  },
  {
    el: '#resort-cliff-bottom',
    rows: resortCliffBottom,
    location: 'Resort',
  },
  {
    el: '#resort-cliff-top',
    rows: resortCliffTop,
    location: 'Resort',
  },
  {
    el: '#resort-gate',
    rows: resortGate,
    location: 'Resort',
  },
  {
    el: '#cozy-islands',
    rows: cozyIslands,
    location: 'Resort',
  },

  // Spooky Swamp
  {
    el: '#ghost-ride',
    rows: ghostRide,
    location: 'Swamp',
  },
  {
    el: '#nature-reserve',
    rows: natureReserve,
    location: 'Swamp',
  },

  // Gemstone Mountain
  {
    el: '#oasis-west-north',
    rows: oasisWestNorth,
    location: 'Gemstone',
  },
  {
    el: '#oasis-west-south',
    rows: oasisWestSouth,
    location: 'Gemstone',
  },
  {
    el: '#oasis-east',
    rows: oasisEast,
    location: 'Gemstone',
  },
  {
    el: '#peak-trail',
    rows: peakTrail,
    location: 'Gemstone',
  },
  {
    el: '#mine-entrance-pond',
    rows: mineEntrancePond,
    location: 'Gemstone',
  },
  {
    el: '#mine-entrance-town',
    rows: mineEntranceTown,
    location: 'Gemstone',
  },
  {
    el: '#town-crafting-table',
    rows: townCraftingTable,
    location: 'Gemstone',
  },
  {
    el: '#cabins-west',
    rows: cabinsWest,
    location: 'Gemstone',
  },
  {
    el: '#deadwood-forest',
    rows: deadwoodForest,
    location: 'Gemstone',
  },
  {
    el: '#cabin-one-north',
    rows: cabinOneNorth,
    location: 'Gemstone',
  },
  {
    el: '#cabin-one-south',
    rows: cabinOneSouth,
    location: 'Gemstone',
  },

  // Mount Hothead (Volcano)
  {
    el: '#ruins-west',
    rows: ruinsWest,
    location: 'Volcano',
  },
  {
    el: '#volcano-cabin-west',
    rows: volcanoCabinWest,
    location: 'Volcano',
  },
{
    el: '#volcano-cabin-three',
    rows: volcanoCabinThree,
    location: 'Volcano',
  },
  {
    el: '#pizza-cliff-bottom',
    rows: pizzaCliffBottom,
    location: 'Volcano',
  },
  {
    el: '#pizza-cliff-top',
    rows: pizzaCliffTop,
    location: 'Volcano',
  },
  {
    el: '#hot-springs-bridge',
    rows: hotSpringsBridge,
    location: 'Volcano',
  },

  // Rainbow Reef
  {
    el: '#club-south',
    rows: clubSouth,
    location: 'Reef',
  },
  {
    el: '#club-east',
    rows: clubEast,
    location: 'Reef',
  },

  // Cloud Island
  {
    el: '#cloud-outer-cabin',
    rows: cloudOuterCabin,
    location: 'Cloud',
  },

  // Extremophiles
  {
    el: '#caldera-mailbox',
    rows: calderaMailbox,
    location: 'Caldera',
  },
  {
    el: '#icy-peak-summit',
    rows: icyPeakSummit,
    location: 'Peak',
  },
  {
    el: '#crystal-caves',
    rows: crystalCaves,
    location: 'Caves',
  },
  {
    el: '#the-moon',
    rows: theMoon,
    location: 'Moon',
  },

  // Wheatflour Wonderland
  {
    el: '#wheatflower-upper-left',
    rows: wheatflowerUpperLeft,
    location: 'Wheatflour',
  },
  {
    el: '#wheatflower-upper-right',
    rows: wheatflowerUpperRight,
    location: 'Wheatflour',
  },
  {
    el: '#wheatflower-lower-left',
    rows: wheatflowerLowerLeft,
    location: 'Wheatflour',
  },
  {
    el: '#wheatflower-lower-right',
    rows: wheatflowerLowerRight,
    location: 'Wheatflour',
  },
];

/* Helpers */
// Safer max-width helper used by renderers
function widestRowLength(rows) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return 0;
  }
  return Math.max(...rows.map((row) => row.length));
}

function toCamelCasePrefix(hyphenatedName) {
  return hyphenatedName.replace(/-([a-z])/g, (_match, letter) =>
    letter.toUpperCase()
  );
}

// Look up the array that defines the grid rows for a given prefix
function getRowsFor(prefix) {
  const variableName = toCamelCasePrefix(prefix);
  const rows = window[variableName];
  if (!Array.isArray(rows)) {
    return null;
  }
  return rows;
}

function setSelectByValue(selectEl, value) {
  if (!value) {
    selectEl.value = '';
    return;
  }
  const match = [...selectEl.options].find((o) => o.value === value);
  selectEl.value = match ? value : '';
}

function getSavedStateMap(prefix) {
  const map = new Map();
  const needle = prefix + '-';
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

// Need to rework this
// function sanityCheckGrids() {
//     const gridIds = Array.from(document.querySelectorAll('.grid')).map(
//         (el) => el.id
//     );
//     const problems = [];
//     gridIds.forEach((id) => {
//         const rows = getRowsFor(id);
//         if (!rows)
//             problems.push(
//                 `Missing rows array for "${id}" (expected window.${toCamelCasePrefix(
//                     id
//                 )})`
//             );
//         const gridEl = document.getElementById(id);
//         if (!gridEl) problems.push(`Grid element not found for id "${id}"`);
//     });
//     if (problems.length) {
//         console.groupCollapsed('Garden Planner – Sanity Check');
//         problems.forEach((msg) => console.warn(msg));
//         console.groupEnd();
//     }
// }

function bindClearButton(
  buttonSelectorOrElement,
  prefixesToClear,
  gridsToRender
) {
  const clearButtonElement =
    typeof buttonSelectorOrElement === 'string'
      ? document.querySelector(buttonSelectorOrElement)
      : buttonSelectorOrElement;
  if (!clearButtonElement) return;

  const prefixSet = new Set(prefixesToClear.map((p) => p + '-'));

  clearButtonElement.addEventListener('click', () => {
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

    if (Array.isArray(gridsToRender) && gridsToRender.length)
      renderMany(gridRenderConfigurations);
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
    plot.textContent = '';
    plot.style.backgroundColor = blankPlotColor;
    plot.style.color = '#000000';
    const parts = ['Empty — New plants can grow'];
    if (state.notes) parts.push(state.notes);
    plot.title = parts.join(' • ');
    return;
  }

  const flowerPlotCode =
    (state.flowerNameCode || '') + (state.patternName ? '*' : '');
  const plotColor = state.colorHex;
  const plotTextColor = state.colorTextHex || '#000000';

  plot.textContent = flowerPlotCode;
  plot.style.backgroundColor = plotColor || defaultPlotColor;
  plot.style.color = plotTextColor;

  // Planned state (disabled look that works across all colors)
  if (state.planned) {
    plot.classList.add('cell--planned');
  } else {
    plot.classList.remove('cell--planned');
  }

  const toolTipContent = [];
  if (state.colorName) toolTipContent.push(state.colorName);
  if (state.patternName) toolTipContent.push(state.patternName);
  if (state.flowerName) toolTipContent.push(state.flowerName);
  if (state.notes) toolTipContent.push(state.notes);
  plot.title = toolTipContent.join(' • ');
}

function renderGrid(container, rows, idPrefix) {
  if (!Array.isArray(rows)) {
    console.warn(
      `renderGrid: missing rows for \"${idPrefix}\" (expected window.${toCamelCasePrefix(
        idPrefix
      )})`
    );
    return;
  }
  const cols = widestRowLength(rows);
  if (container.classList.contains('grid')) {
    container.style.setProperty('--cols', cols);
  }

  const savedMap = getSavedStateMap(idPrefix);

  const frag = document.createDocumentFragment();

  for (let rIdx = 0; rIdx < rows.length; rIdx++) {
    const row = rows[rIdx];
    const padded = row.padEnd(cols, ' ');
    for (let cIdx = 0; cIdx < padded.length; cIdx++) {
      if (padded[cIdx] !== '-') continue;

      const flowerPlot = document.createElement('div');
      flowerPlot.className = 'cell';
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
  for (const { el, rows } of configs) {
    let prefix = String(el);
    if (prefix.charAt(0) === '#') {
      prefix = prefix.slice(1);
    }
    const node = typeof el === 'string' ? document.querySelector(el) : el;
    if (!node) {
      console.warn('renderMany: container not found for', el);
      continue;
    }
    renderGrid(node, rows, prefix);
  }
}

(function persistDisclosures(root = document) {
  const KEY_PREFIX = 'disclosure:';
  const disclosureElements = [...root.querySelectorAll('details[data-id]')];

  for (const detailsEl of disclosureElements) {
    const storageKey = KEY_PREFIX + detailsEl.dataset.id;
    const savedValue = localStorage.getItem(storageKey);
    if (savedValue !== null) detailsEl.open = savedValue === '1';
    detailsEl.addEventListener('toggle', () => {
      localStorage.setItem(storageKey, detailsEl.open ? '1' : '0');
    });
  }
})();

// Pull biome from a plot key like "fields-west-3-7"
function biomeFromPlotState(plotKey) {
  const patchName = plotKey.replace(/-\d+-\d+$/, '');
  let patchLocation = null;
  flowerPatchInfo.forEach((patch) => {
    let patchNameFromInfo = String(patch.el.slice(1));

    if (patchNameFromInfo === patchName) {
      patchLocation = patch.location;
    }
  });
  return patchLocation;
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
    .join('');
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
  flowerModal = document.getElementById('cell-modal');
  backdrop = document.getElementById('cell-backdrop');
  flowerForm = document.getElementById('cell-form');
  colorSelect = document.getElementById('cell-color');
  flowerSelect = document.getElementById('cell-flower');
  patternSelect = document.getElementById('cell-pattern');
  plotNotes = document.getElementById('cell-notes');
  clearPlotButton = document.getElementById('cell-clear');
  errorElement = document.getElementById('cell-error');
  intentionallyEmptyPlotCheckbox = document.getElementById('cell-empty');

  // Build options markup once (fastest for large lists)
  const colorOptions = ['<option value="">Choose the color...</option>']
    .concat(
      allFlowerColors.map(
        (c) =>
          `<option value="${c.hex}" data-name="${c.name}">${c.name}</option>`
      )
    )
    .join('');

  const patternOptions = ['<option value="">No pattern</option>']
    .concat(flowerPatterns.map((p) => `<option value="${p}">${p}</option>`))
    .join('');

  colorSelect.innerHTML = colorOptions;
  flowerSelect.innerHTML = '<option value="">Choose the species...</option>';
  patternSelect.innerHTML = patternOptions;

  const counter = document.getElementById('notes-count');
  plotNotes.addEventListener('input', () => {
    const v = plotNotes.value;
    if (v.length > max_notes_chars)
      plotNotes.value = v.slice(0, max_notes_chars);
    counter.textContent = String(plotNotes.value.length);
  });

  document
    .getElementById('cell-cancel')
    .addEventListener('click', closeCellModal);
  backdrop.addEventListener('click', closeCellModal);
  document.addEventListener('keydown', (event) => {
    if (
      flowerModal.getAttribute('aria-hidden') === 'false' &&
      event.key === 'Escape'
    ) {
      event.preventDefault();
      closeCellModal();
    }
  });

  flowerForm.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const focusables = flowerForm.querySelectorAll(
      'buttonSelectorOrElement, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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
  flowerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    errorElement.textContent = '';

    const isIntentionallyEmptyPlot = !!intentionallyEmptyPlotCheckbox?.checked;

    if (isIntentionallyEmptyPlot) {
      const notes = (plotNotes.value || '').trim().slice(0, max_notes_chars);
      const payload = { isIntentionallyEmptyPlot: true, notes };
      if (currentKey) localStorage.setItem(currentKey, JSON.stringify(payload));
      if (currentPlot) buildFlowerPlot(currentPlot, payload);
      closeCellModal();
      return;
    }

    const colorHex = colorSelect.value;
    const colorName = colorSelect.selectedOptions[0]?.dataset.name || '';
    const colorObj = allFlowerColors.find(
      (c) => c.hex.toLowerCase() === (colorHex || '').toLowerCase()
    );
    const colorTextHex = colorObj?.text || '#000000';
    const flowerNameCode = flowerSelect.value;
    const flowerName = flowerSelect.selectedOptions[0]?.dataset.name || '';
    const patternName = patternSelect.value || '';
    const notes = (plotNotes.value || '').trim().slice(0, max_notes_chars);

    if (!colorHex || !flowerNameCode) {
      errorElement.textContent = 'Please choose both a color and a flower.';
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
  clearPlotButton.addEventListener('click', () => {
    if (currentKey) localStorage.removeItem(currentKey);
    if (currentPlot) buildFlowerPlot(currentPlot, {});

    setSelectByValue(colorSelect, '');
    setSelectByValue(flowerSelect, '');
    setSelectByValue(patternSelect, '');
    plotNotes.value = '';
    const counterEl = document.getElementById('notes-count');
    if (counterEl) counterEl.textContent = '0';
    if (intentionallyEmptyPlotCheckbox)
      intentionallyEmptyPlotCheckbox.checked = false;
    applyEmptyPlotModeUI(false);

    closeCellModal();
  });

  if (intentionallyEmptyPlotCheckbox) {
    intentionallyEmptyPlotCheckbox.addEventListener('change', () => {
      const isChecked = !!intentionallyEmptyPlotCheckbox.checked;
      applyEmptyPlotModeUI(isChecked);

      // Close & save immediately when turning ON (true).
      // Stay open (no save) when turning OFF (false).
      if (!currentKey || !currentPlot) return;
      if (isChecked) {
        const notes = (plotNotes.value || '').trim().slice(0, max_notes_chars);
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

// Add a tooltip somewhere that informs the user why only some flowers show up.

function openCellModal(cell, key) {
  lastFocus = document.activeElement;
  currentPlot = cell;
  currentKey = key;

  const saved = JSON.parse(localStorage.getItem(key) || '{}');
  const isIntentionallyEmptyPlot = !!saved.isIntentionallyEmptyPlot;

  // Biome-aware species options
  const biome = biomeFromPlotState(key);
  const allowedSpecies = speciesForBiome(biome);
  flowerSelect.innerHTML = renderSpeciesOptions(allowedSpecies);

  // If a previously-saved species is now disallowed, inject a visible placeholder so it still shows
  if (saved.flowerNameCode) {
    const stillAllowed = allowedSpecies.some(
      (species) => species.code === saved.flowerNameCode
    );
    if (!stillAllowed) {
      const opt = document.createElement('option');
      opt.value = saved.flowerNameCode;
      opt.textContent = `⚠ ${
        saved.flowerName || saved.flowerNameCode
      } (not allowed in ${biome || 'this area'})`;
      opt.dataset.name = saved.flowerName || saved.flowerNameCode;
      opt.className = 'option-not-allowed';
      flowerSelect.appendChild(opt);
    }
  }

  // Apply saved values after options exist
  setSelectByValue(colorSelect, saved.colorHex || '');
  setSelectByValue(flowerSelect, saved.flowerNameCode || '');
  setSelectByValue(patternSelect, saved.patternName || '');
  plotNotes.value = saved.notes || '';

  if (intentionallyEmptyPlotCheckbox)
    intentionallyEmptyPlotCheckbox.checked = isIntentionallyEmptyPlot;

  applyEmptyPlotModeUI(isIntentionallyEmptyPlot);

  document.getElementById('notes-count').textContent = String(
    plotNotes.value.length
  );
  errorElement.textContent = '';
  flowerModal.setAttribute('aria-hidden', 'false');

  // Defer focus one frame for smoother paint
  requestAnimationFrame(() =>
    (isIntentionallyEmptyPlot ? plotNotes : colorSelect).focus()
  );
}

function closeCellModal() {
  flowerModal.setAttribute('aria-hidden', 'true');
  if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  currentPlot = null;
  currentKey = null;
}

document.addEventListener('DOMContentLoaded', () => {
  setupModal();
  // sanityCheckGrids();

  // Render flower patches
  // IDs present in index.html (Meadows + other biomes)

  renderMany(flowerPatchInfo);

  // Single delegated click listener for all cells (no per-cell listeners)
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target.closest('.cell');
      if (!target) return;
      const key = target.dataset.key;
      if (!key) return;
      openCellModal(target, key);
    },
    { passive: true }
  );

  // Clear buttons
  bindClearButton(
    '#clear-fields-west',
    ['fields-west', 'fields-west-mini'],
    [
      { el: '#fields-west', rows: fieldsWest, prefix: 'fields-west' },
      {
        el: '#fields-west-mini',
        rows: fieldsWestMini,
        prefix: 'fields-west-mini',
      },
    ]
  );

  bindClearButton(
    '#clear-east',
    ['fields-east'],
    [{ el: '#fields-east', rows: fieldsEast, prefix: 'fields-east' }]
  );

  bindClearButton(
    '#clear-plaza-garden',
    ['plaza-garden'],
    [{ el: '#plaza-garden', rows: plazaGarden, prefix: 'plaza-garden' }]
  );

  bindClearButton(
    '#clear-overlook-near',
    ['overlook-near'],
    [{ el: '#overlook-near', rows: overlookNear, prefix: 'overlook-near' }]
  );

  bindClearButton(
    '#clear-overlook-far',
    ['overlook-far'],
    [{ el: '#overlook-far', rows: overlookFar, prefix: 'overlook-far' }]
  );

  bindClearButton(
    '#clear-temple-corner',
    ['temple-corner'],
    [{ el: '#temple-corner', rows: templeCorner, prefix: 'temple-corner' }]
  );

  bindClearButton(
    '#clear-meadow-corral',
    ['meadow-corral'],
    [{ el: '#meadow-corral', rows: meadowCorral, prefix: 'meadow-corral' }]
  );

  bindClearButton(
    '#clear-gazebo-north',
    ['gazebo-north'],
    [{ el: '#gazebo-north', rows: gazeboNorth, prefix: 'gazebo-north' }]
  );

  bindClearButton(
    '#clear-gazebo-west',
    ['gazebo-west'],
    [{ el: '#gazebo-west', rows: gazeboWest, prefix: 'gazebo-west' }]
  );

  bindClearButton(
    '#clear-gazebo-path-east',
    ['gazebo-path-east'],
    [
      {
        el: '#gazebo-path-east',
        rows: gazeboPathEast,
        prefix: 'gazebo-path-east',
      },
    ]
  );

  bindClearButton(
    '#clear-fields-west',
    ['fields-west', 'fields-west-mini'],
    [
      {
        el: '#fields-west',
        rows: getRowsFor('fields-west'),
        prefix: 'fields-west',
      },
      {
        el: '#fields-west-mini',
        rows: getRowsFor('fields-west-mini'),
        prefix: 'fields-west-mini',
      },
    ]
  );

  bindClearButton(
    '#clear-east',
    ['fields-east'],
    [
      {
        el: '#fields-east',
        rows: getRowsFor('fields-east'),
        prefix: 'fields-east',
      },
    ]
  );

  bindClearButton(
    '#clear-plaza-garden',
    ['plaza-garden'],
    [
      {
        el: '#plaza-garden',
        rows: getRowsFor('plaza-garden'),
        prefix: 'plaza-garden',
      },
    ]
  );

  bindClearButton(
    '#clear-overlook-near',
    ['overlook-near'],
    [
      {
        el: '#overlook-near',
        rows: getRowsFor('overlook-near'),
        prefix: 'overlook-near',
      },
    ]
  );

  bindClearButton(
    '#clear-overlook-far',
    ['overlook-far'],
    [
      {
        el: '#overlook-far',
        rows: getRowsFor('overlook-far'),
        prefix: 'overlook-far',
      },
    ]
  );

  bindClearButton(
    '#clear-temple-corner',
    ['temple-corner'],
    [
      {
        el: '#temple-corner',
        rows: getRowsFor('temple-corner'),
        prefix: 'temple-corner',
      },
    ]
  );

  bindClearButton(
    '#clear-meadow-corral',
    ['meadow-corral'],
    [
      {
        el: '#meadow-corral',
        rows: getRowsFor('meadow-corral'),
        prefix: 'meadow-corral',
      },
    ]
  );

  bindClearButton(
    '#clear-gazebo-north',
    ['gazebo-north'],
    [
      {
        el: '#gazebo-north',
        rows: getRowsFor('gazebo-north'),
        prefix: 'gazebo-north',
      },
    ]
  );

  bindClearButton(
    '#clear-gazebo-west',
    ['gazebo-west'],
    [
      {
        el: '#gazebo-west',
        rows: getRowsFor('gazebo-west'),
        prefix: 'gazebo-west',
      },
    ]
  );

  bindClearButton(
    '#clear-gazebo-path-east',
    ['gazebo-path-east'],
    [
      {
        el: '#gazebo-path-east',
        rows: getRowsFor('gazebo-path-east'),
        prefix: 'gazebo-path-east',
      },
    ]
  );

  // Click the left gutter (first 12px) to toggle a panel open/closed.
  // Works even if the click lands on descendants inside .panel-body.
  document.addEventListener('click', (event) => {
    const panelBody = event.target.closest('.panel .panel-body');
    if (!panelBody) return;
    const rect = panelBody.getBoundingClientRect();
    const GUTTER_WIDTH_PX = 12; // adjust if your line is wider/narrower
    const clickedInGutter =
      event.clientX >= rect.left &&
      event.clientX <= rect.left + GUTTER_WIDTH_PX;
    if (!clickedInGutter) return;

    const details = panelBody.closest('details.panel');
    if (!details) return;
    details.open = !details.open;
    // Optional: prevent other handlers (e.g., grid clicks) from firing
    event.stopPropagation();
  });
});

(function setupFeedbackModal() {
  var modalElement = document.getElementById('feedback-modal');
  var openButton = document.getElementById('open-feedback');
  var closeButton = document.getElementById('close-feedback');
  var cancelButton = document.getElementById('fb-cancel');
  var formElement = document.getElementById('feedback-form');
  if (
    !modalElement ||
    !openButton ||
    !closeButton ||
    !cancelButton ||
    !formElement
  ) {
    return;
  }

  function openModal() {
    modalElement.setAttribute('aria-hidden', 'false');
    // optional: focus the first field
    var subjectField = document.getElementById('fb-subject');
    if (subjectField) {
      subjectField.focus();
    }
  }

  function closeModal() {
    modalElement.setAttribute('aria-hidden', 'true');
    openButton.focus();
  }

  openButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
  cancelButton.addEventListener('click', closeModal);

  // Click on shaded backdrop closes the modal
  modalElement.addEventListener('click', function (evt) {
    var clickedBackdrop = evt.target === modalElement;
    if (clickedBackdrop) {
      closeModal();
    }
  });

  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var subjectValue = String(
      document.getElementById('fb-subject').value || ''
    ).trim();
    var messageValue = String(
      document.getElementById('fb-message').value || ''
    ).trim();
    var nameValue = String(
      document.getElementById('fb-name').value || ''
    ).trim();
    var replyValue = String(
      document.getElementById('fb-reply').value || ''
    ).trim();

    var lines = [];
    if (messageValue.length > 0) {
      lines.push(messageValue);
    }
    lines.push('');
    if (nameValue.length > 0) {
      lines.push('From: ' + nameValue);
    }
    if (replyValue.length > 0) {
      lines.push('Reply-To: ' + replyValue);
    }
    lines.push('Page: ' + window.location.href);
    lines.push('User Agent: ' + navigator.userAgent);

    var bodyText = lines.join('\n');
    var mailtoHref =
      'mailto:hkia.assistive.apps@gmail.com' +
      '?subject=' +
      encodeURIComponent(subjectValue || 'HKIA Feedback') +
      '&body=' +
      encodeURIComponent(bodyText);

    // Launch user’s mail client
    window.location.href = mailtoHref;

    // Close the modal afterward
    closeModal();
  });
})();
