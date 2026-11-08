
const CONFIG = {
  // Names used across the invitation

  names: {
    headingName: "සුදූ",        // Used in the main invitation question heading
    subtitleName: "සුදූ",       // Used in the introductory subtitle
    noMessageName: "සුදූ",      // Used in the begging messages when "No" is clicked
    pickDayName: "සුදූ",        // Used in the "pick a day" heading
    finalCardName: "සුදූ",      // Used in the confirmation message on the final card
    whatsappName: "සුදූ",       // Used in the pre-filled WhatsApp message
    footerName: "සුදූ"          // Used in the bottom footer note
  },

  // Quotes for cards and footer
  quotes: {
    // Small poetic line above the main question heading
    topQuote: " ",

    // Small line under the Yes/No buttons
    questionQuote: "මට එච්චර කල් නැති උනොත් එහෙම ඔයා ළඟ ඉන්න..",

    // Small line above the proposed date cards
    pickDayQuote: "",

    // Small line on the final confirmed card
    afterConfirmQuote: "මට ඕන්නෑ අපේ කියන්න පුලුවන් විනාඩියක්වත් මගාරින්න. මේ ඔයා ඉල්ලපු නිසා හදපු එකක්ම කියල ලඝු කරන්න එපා. මං හරි ආසාවෙන් කලේ.. මේකෙ තිබ්බ මොකක්ම හරි දේකට හිත රිදුනනම් සමාවෙන්න. මං හිතල ඔයාට රිද්දලා නෑ කවදාවත්..",

    // Persistent footer quote at the bottom of the card
    footerQuote: "චූටි ප්‍රශ්නෙකුත් තියනවනෙ සුදූ... ජීවිත කාලෙටම ඇතිවෙන්න නම් මං ඔයාව කොච්චර ඉඹින්න වෙයිද? "
  },

  // Whisper bubbles configuration and quotes
  whispers: {
    enabled: true,
    firstDelayMs: 2500,
    gapMinMs: 2000,
    gapMaxMs: 4500,
    minShowMs: 4500,
    perCharMs: 60,
    typingMs: 700,
    idleNudgeMs: 15000,
    maxPerStep: 0,
    onListEnd: "stop",
    step1IdleMs: 12000,
    noApproachCooldownMs: 2000,
    noApproachShowMs: 3000,
    messages: {
      // Shows when No button dodges
      noApproach: [
        "මොකෝ සෙල්ලම් කරන්නද ඕනි..",
        "ගල් ඉබ්බි....",
        "ඔයා මට බෑ කියන්නෙ නෑනෙ..😚"
      ],
      // First screen timed ambient bubbles
      step1Ambient: [],
      // Shows once on first screen inactivity
      step1Idle: [
        "ඇති තරම් වෙලාව ගන්න..🥰 මට පුරුදුයිනෙ බලන් ඉඳල.."
      ],
      // Shows when Yes button is clicked
      yesClicked: [],
      // Shows sequentially on pick day step
      pickDayAmbient: [
        "ඔන්න මං ඒ වැරැද්ද ආයෙ කළේ නෑ..",
        "ඉක්මනින් හම්බෙන එක හොඳයිනෙ... මාස හයක් හතක් බලන් ඉන්න හිතෙන්නෙ නෑ මට..",
        "අනික ඔයාට කොළඹ ඉන්ටර්න් එන්න බෑ හිතුනොත් ඒම..",
        "ගෑනු ගැන ලිව්ව පොතට ක්ලයිමෙක්ස් එකක් දන්නෙත් නෑ තාම..😂",
        "ඒක නෙමේ මං ගාව කතාවක් තියනවා.. ඔයා අතින් ඒක කියලා.. හිලව්වට තවත් කතාවක් අහගන්නත් තියනවා",
        "ඕකොමත් හරි මං එක්ක විතරක් බලන්න පුළුවන් තැන් එකින් එක සමතලා වෙනව අන්න 😑"
      ],
      // Shows when date card is selected
      dateSelected: [],
      // Timed bubbles while picking time
      pickTimeAmbient: [],
      // Shows when time is chosen
      timeChosen: [],
      // Shows when custom date option opened
      customOpened: [
        "ඔයාට ලේසි ඕනි දවසක් සුදුනෝනා.. මං ඇවිත් ඉඳී ඔයාව ගන්න"
      ],
      // Shows when confirm button becomes ready
      confirmReady: [],
      // Shows sequentially on final card
      finalAmbient: [
        "මේකට දාන්නවත් මං ළඟ පොටෝ නෑනෙ අපි දෙන්නගෙ..",
        "මට ඔයාව මතක් වෙනව හැමවෙලේම..",
        "මං ආදරෙයි!. හැමදාම. හැමදේටම වැඩිය.."
      ],
      // Fallback ambient messages
      generalAmbient: [],
      // Fallback idle messages
      idle: []
    }
  },

  // UI texts for each step
  texts: {
    // Browser tab title
    pageTitle: "මගෙ {name}ට..",

    // Step 1: The Question
    heading: "{name}, ඔයා මං ළඟ නැති දවසක බලාගෙන හූල්ලන්න මට තව මතක ටිකක් එකතු කරගන්න ඕනි..",
    subtitle: "ඔයා මගෙන් ඈත් උන දවසක මට මෙහෙ හැමතැනම ඔයාගෙ මතක වලින් පිරිල තියෙන්න ඕනි.. මං ඔයාට හම්බුන හොඳම ආදරේ වෙන්න පටන් ගන්න ඕනි.. ඒකට මට ඔයාගෙන් දවසක් ඕනි.",
    yesBtn: "හා.. ❤️",
    noBtn: "බෑ..! ",

    // Begging messages cycled if she manages to click or interact with "No"
    beggingMessages: [
      "{name}... 🥺",
      "අනේ මැනිකේ..",
      "එකම එක වතාවක් හා කියන්න..",
      "අනේ..🥺"
    ],

    // Step 2: Pick a Day
    pickDayHeading: "අහන්නකො මැණිකේ.. ඔයා කවද්ද එන්නේ..?",
    pickDaySubtitle: "මේ සතියෙ මට පඩි හම්බෙයිනේ..",
    pickTimeHeading: "කීයටද මැනිකේ..",
    pickTimeHint: "එකම එක රෑක් දුන්නනම් ඇති මට.. ඔයා එනවනෙ තව මාස හයකින් මං ගාවට",
    confirmBtn: "ඒනම් හරි ඈ..",
    noneOfTheseWork: "මේ දවස් දෙකම බැරි නම්, ඔයා කැමති දවසක් මෙතනින් කියන්න පුළුවන් ඔන්න",
    customDateLabel: "දවසක් කියන්න",
    customTimeLabel: "වේලාවත් කියන්න",

    // Step 3: Final Confirmed Card
    finalCardTitle: "මගෙ පණනෙ ඔයා..😚",
    summaryDateLabel: "දවස",
    summaryTimeLabel: "වෙලාව",
    summaryPlaceLabel: "ගෝල්ෆේස් එකෙන් පටන් ගමු.. ඔයා ඇවිත් කොටුවෙන් බැස්සම ඇති",
    finalMessage: "මං බලන් ඉන්නව ඔයා එනකන්.. පරිස්සමින්..✨",
    whatsappBtn: "වට්ස්ඇප් එකෙන් කියන්න 💬",
    calendarBtn: "කැලැන්ඩරයට දාගන්න 📅",
    mapsBtn: "ගෝල්ෆේස් එක මැප් එකෙන් බලන්න 📍",
    changeDateBtn: "ඒ දවස හරි නෑ වගේද..?"
  },

  // Event place and calendar details
  event: {
    place: "Galle Face",
    mapsQuery: "Galle Face Green, Colombo",
    durationHours: 2,
    calendarTitle: "කළිඳුට අද දවස දෙන්න ❤️",
    calendarDescription: "ආදරෙයි!"
  },

  // Proposed date options
  proposedDates: [
    {
      label: "Sunday, 15 November",
      isoDate: "2026-11-15",
      note: "සෙනසුරාද රෑ එනවනම් තමා හොඳ.. (අර බල්ලා හිනාවෙන ස්ටිකරේ..)"
    },
    {
      label: "Sunday, 22 November",
      isoDate: "2026-11-22",
      note: "සෙනසුරාද රෑ එනවනම් තමා හොඳ.. (අර බල්ලා හිනාවෙන ස්ටිකරේ..)"
    }
  ],

    // 5b. QUICK TIME CHIPS
    quickTimes: ["6:00 PM", "7:00 PM", "8:00 PM"],

    // 6. MORNING NOTE
    morningNote: "රෑ වෙන්න එන්න අමාරු නම් උදේ ආවත් කමක් නෑ හොඳද.. මට පුලුවන් මගෙ වෙලාව හදාගන්න.. ",

    // 7. WHATSAPP CONFIG
    whatsapp: {
    number: "94720355528",
    // When she selects one of the proposed dates:
    confirmedTemplate: "{name}, මම කැමතියි {date} {time} ට {place} එකට එන්න. මමත් බලාගෙන ඉන්නවා ඔයාව හම්බවෙන්න! ❤️✨",
    // When she picks her own custom date and time:
    customTemplate: "{name}, මං {date} {time} ට {place} එකට එන්නම්.. ❤️✨"
  },

    // 8. FINAL MESSAGE
    finalMessage: "මං බලාගෙන ඉන්නවා..",

    // 9. THEME COLORS & FONTS
    theme: {
    bgGradient: "linear-gradient(145deg, #160724 0%, #2e0e37 32%, #5e1c44 68%, #a03b57 100%)",
    accentPink: "#ff4d79",
    accentPinkHover: "#ff2a5f",
    accentPeach: "#ff9e7d",
    cardBg: "rgba(255, 255, 255, 0.12)",
    cardBorder: "rgba(255, 255, 255, 0.22)",
    textColor: "#ffffff",
    fontHeading: "'Noto Serif Sinhala', 'Georgia', serif",
    fontBody: "'Noto Sans Sinhala', sans-serif"
  },

    // 10. NO BUTTON BEHAVIOUR & STATE MACHINE
  // Controls dodges, rounds, sad animation, and final screen
    noButton: {
    dodgesPerRound: 3,
    totalRounds: 5,        // 5 complete rounds (3 dodges + 1 sad moment per round)
    triggerDistance: 90,   // px, cursor distance that triggers a dodge
    sadMessage: "අනේ 🥺",  // Fallback sad message
    sadMessages: [
      "අනේ..🥺",
      "අනේ සුදූ..🥺",
      "මැණිකේ.. 🥺",
      "ඇත්තටමද...",
      "හ්ම්.."
    ],
    sadDurationMs: 1800,
    finalScreenText: "හා එහෙනම්.. පරිස්සමින්",
    minJumpDistance: 200   // new position must be at least this far from old one and from cursor
  },

    // 11. PHOTO MEMORIES (HANGING MEMORY STRING & FULLSCREEN STORY VIEWER)
    photos: {
    enabled: true,
    folder: "photos/",
    title: "සුදූ මේං..🙈",
    introQuote: "කවද හරි මේ මගුල් කියවලා ඔයාටත් හිතුනොත් මං පිස්සෙක් යැයි කියා.. අද වගේම එදාටත් තියමි කවියක ලියා.. පිස්සෙක්ගෙ ආදරේ තාම දන්නෑ ඔයා.. ඉලක්ෂගෙද කොහෙද. ඌ නැතුව මං ලියන්න තිබ්බෙ කියල හිතුන එකක්.",
    openStoryLabel: "මේ චුට්ට විතරයි මං ළඟ තියෙන්නේ..",
    storySeconds: 4,
    storyEndText: "පරිස්සමින් මැණිකේ. මං ආදරෙයි! ❤️",
    // Change only these file names to pick the photos for the small string on Step 2
    miniFiles: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
    // "position" controls CSS object-position ("x% y%") to adjust focus point for cropping.
    items: [
      { file: "photo1.jpg", caption: "", position: "50% 35%" },
      { file: "photo7.jpg", caption: "", position: "45% 40%" },
      { file: "photo3.jpg", caption: "", position: "50% 40%" },
      { file: "photo5.jpg", caption: "", position: "40% 35%" },
      { file: "photo2.jpg", caption: "", position: "50% 40%" },
      { file: "photo4.jpg", caption: "", position: "50% 50%" },
      { file: "photo6.jpg", caption: "", position: "50% 40%" },
      { file: "photo9.jpg", caption: "", position: "50% 50%" },
      { file: "photo8.jpg", caption: "", position: "50% 50%" }
    ]
  }
};

/* HELPER FUNCTIONS (DEFINED TOP-LEVEL TO PREVENT ANY TDZ / REFERENCE ERRORS) */

/**
 * Replace {name} placeholder in templates with fallback handling
 */
function resolveName(template, nameVal, fallbackText = "") {
  const text = (template !== undefined && template !== null && template !== "") ? template : fallbackText;
  const name = nameVal || (CONFIG.names && CONFIG.names.headingName) || "සුදූ";
  return String(text).replace(/{name}/g, name);
}

/**
 * Safely set text content of an element with optional hiding if empty
 */
function setElementText(id, text, hideIfEmpty = false) {
  const el = document.getElementById(id);
  if (!el) {
    console.warn(`[DOM] Element with id "${id}" was not found in the HTML.`);
    return;
  }
  if (text === null || text === undefined || text === "") {
    if (hideIfEmpty) {
      el.textContent = "";
      el.style.display = "none";
    } else {
      el.textContent = "";
    }
  } else {
    el.textContent = text;
    el.style.display = "";
  }
}

/**
 * State tracking
 */
// Global State tracking
let yesScale = 1.0;
let selectedOption = null; // { type: 'proposed', index: 0 } or { type: 'custom', isoDate: '...', time: '...' }
const whisperState = {
  currentStep: 'step1',
  stepBubbleCount: 0,
  queue: [],
  lastLine: null,
  lastPosition: null,
  lastReaction: {},
  activeBubbleEl: null,
  scheduleTimer: null,
  activeTimer: null,
  dismissTimer: null,
  reactionTimer: null,
  idleTimer: null,
  hasInteractedAfterIdle: true,
  lastZone: null,
  zoneCycle: [],
  counters: {},
  step1IdleTimer: null,
  step1IdleShown: false,
  lastNoApproachTime: 0,
  mobileAlign: 'left'
};

// No Button State Machine (dodging -> sad -> free)
const noState = {
  roundIndex: 0,        // 0 to totalRounds - 1
  dodgeCount: 0,        // 0 to dodgesPerRound
  phase: "dodging",     // "dodging" | "sad" | "free"
  isMoving: false,      // true while animating jump
  isSad: false,         // true during sad animation
  lastTriggerTime: 0,   // debounce timestamp for touch / pointer events
  movedToBody: false,   // true after reparenting to document.body
  placeholder: null,    // DOM placeholder preserving layout in .button-zone
  speechBubbleEl: null  // Active speech bubble element
};

// LocalStorage keys
const STORAGE_KEY = 'romantic_date_invitation_selection';
const REJECTED_STORAGE_KEY = 'romantic_date_rejected_state';

/**
 * Checks for #reset hash in URL to clear all stored states for testing
 */
function checkUrlReset() {
  try {
    if (window.location.hash === '#reset') {
      localStorage.removeItem(REJECTED_STORAGE_KEY);
      localStorage.removeItem(STORAGE_KEY);
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
  } catch (err) {
    console.warn("Could not check or clear #reset in localStorage:", err);
  }
}

/**
 * Shows the final rejected screen directly if previously saved
 */
function showFinalRejectedScreenDirectly() {
  if (typeof whisperSetStep === 'function') whisperSetStep('rejected');
  const rejectedScreen = document.getElementById('final-rejected-screen');
  const rejectedTextEl = document.getElementById('final-rejected-text');
  const pageWrapper = document.querySelector('.page-wrapper');
  const heartsContainer = document.getElementById('hearts-container');
  const starsLayer = document.querySelector('.stars-layer');
  const confettiCanvas = document.getElementById('confetti-canvas');
  const noBtn = document.getElementById('no-btn');

  if (pageWrapper) pageWrapper.style.display = 'none';
  if (heartsContainer) heartsContainer.style.display = 'none';
  if (starsLayer) starsLayer.style.display = 'none';
  if (confettiCanvas) confettiCanvas.style.display = 'none';
  if (noBtn) noBtn.style.display = 'none';

  const text = (CONFIG.noButton && CONFIG.noButton.finalScreenText) || "හා එහෙනම්.. පරිස්සමින්";
  if (rejectedTextEl) rejectedTextEl.textContent = text;
  if (rejectedScreen) {
    rejectedScreen.classList.remove('hidden');
    rejectedScreen.classList.add('visible');
  }
}

/**
 * Apply theme variables from CONFIG.theme to document root
 */
function applyTheme() {
  try {
    const root = document.documentElement;
    const t = CONFIG.theme || {};
    if (t.bgGradient) root.style.setProperty('--bg-gradient', t.bgGradient);
    if (t.accentPink) root.style.setProperty('--accent-pink', t.accentPink);
    if (t.accentPinkHover) root.style.setProperty('--accent-pink-hover', t.accentPinkHover);
    if (t.accentPeach) root.style.setProperty('--accent-peach', t.accentPeach);
    if (t.cardBg) root.style.setProperty('--card-bg', t.cardBg);
    if (t.cardBorder) root.style.setProperty('--card-border', t.cardBorder);
    if (t.textColor) root.style.setProperty('--text-main', t.textColor);
    if (t.fontHeading) root.style.setProperty('--font-heading', t.fontHeading);
    if (t.fontBody) root.style.setProperty('--font-body', t.fontBody);
  } catch (err) {
    console.error("[Render Theme] Failed to apply CSS theme variables:", err);
  }
}

/**
 * Safely parse ISO date (YYYY-MM-DD) into numeric parts to prevent timezone shifting.
 * Avoids the standard JS new Date("YYYY-MM-DD") UTC midnight bug.
 */
function parseIsoDateParts(isoString) {
  if (!isoString) return null;
  const parts = String(isoString).split('-');
  if (parts.length !== 3) return null;
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  if (isNaN(year) || isNaN(month) || isNaN(day)) return null;
  return { year, month, day };
}

/**
 * Format date for display safely in local time.
 */
function formatSafeDisplayDate(isoString, fallbackLabel) {
  if (fallbackLabel) return fallbackLabel;
  const parts = parseIsoDateParts(isoString);
  if (!parts) return isoString || "";

  const monthNamesSinhala = [
    "ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි",
    "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"
  ];
  const dayNamesSinhala = [
    "ඉරිදා (Sun)", "සඳුදා (Mon)", "අඟහරුවාදා (Tue)", "බදාදා (Wed)",
    "බ්‍රහස්පතින්දා (Thu)", "සිකුරාදා (Fri)", "සෙනසුරාදා (Sat)"
  ];

  // Create date locally to find day of week
  const localDate = new Date(parts.year, parts.month - 1, parts.day);
  const dayName = dayNamesSinhala[localDate.getDay()] || "";
  const monthName = monthNamesSinhala[parts.month - 1] || "";

  return `${parts.year} ${monthName} ${parts.day} - ${dayName}`;
}

/**
 * Safely parse time string into 24-hour hour, minute, 24-hour time string ("HH:MM") and clean 12-hour display.
 * Handles both "7:00 PM" and "19:00" from native time inputs.
 * Returns empty values if timeStr is blank or invalid (no default 7:00 PM assumption).
 */
function parseSafeTime(timeStr) {
  if (!timeStr) {
    return { hour24: 0, minute: 0, display: "", time24: "" };
  }
  const clean = String(timeStr).trim();
  const match = clean.match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?$/i);
  if (!match) {
    return { hour24: 0, minute: 0, display: clean, time24: clean };
  }

  let hour = parseInt(match[1], 10);
  const minute = parseInt(match[2], 10);
  const ampm = match[3] ? match[3].toUpperCase() : null;

  if (ampm) {
    if (ampm === 'PM' && hour < 12) hour += 12;
    if (ampm === 'AM' && hour === 12) hour = 0;
  }

  const dispHour = hour % 12 === 0 ? 12 : hour % 12;
  const dispAmpm = hour >= 12 ? 'PM' : 'AM';
  const display = `${dispHour}:${minute.toString().padStart(2, '0')} ${dispAmpm}`;
  const time24 = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

  return { hour24: hour, minute, display, time24 };
}

/**
 * Initialize all texts and quotes from CONFIG with independent try/catch blocks
 */
function initContent() {
  const names = CONFIG.names || {};
  const quotes = CONFIG.quotes || {};
  const texts = CONFIG.texts || {};

  // 1. Browser Page Title
  try {
    const pageTitle = resolveName(texts.pageTitle, names.headingName, "සුදූ වෙත ආදරණීය ආරාධනාවක් ❤️");
    document.title = pageTitle;
  } catch (err) {
    console.error("[Render Error: Page Title]", err);
  }

  // 2. Quotes (hide if explicitly empty, fallback if missing)
  try {
    setElementText('top-quote', resolveName(quotes.topQuote, names.headingName, ""), true);
    setElementText('question-quote', resolveName(quotes.questionQuote, names.headingName, ""), true);
    setElementText('pick-day-quote', resolveName(quotes.pickDayQuote, names.pickDayName, ""), true);
    setElementText('after-confirm-quote', resolveName(quotes.afterConfirmQuote, names.finalCardName, ""), true);
    setElementText('footer-quote', resolveName(quotes.footerQuote, names.footerName, "හැමදාමත් ඔයාට ආදරෙයි... ❤️"), false);
  } catch (err) {
    console.error("[Render Error: Quotes]", err);
  }

  // 3. Step 1: The Question (Heading, Subtitle, Buttons)
  try {
    const headingText = resolveName(texts.heading, names.headingName, "සුදූ, මාත් එක්ක ඩේට් එකක් යමුද? 💖");
    const subtitleText = resolveName(texts.subtitle, names.subtitleName, "ගෝල්ෆේස් එකේ හුළං වැදි වැදී, ඔයාගෙ අතින් අල්ලන් ඇවිදින්න මට ආසයි...");
    const yesText = texts.yesBtn || "හා යමු! ❤️";
    const noText = texts.noBtn || "බෑ 🙈";

    setElementText('question-heading', headingText);
    setElementText('question-subtitle', subtitleText);
    setElementText('yes-btn-text', yesText);
    setElementText('no-btn-text', noText);
  } catch (err) {
    console.error("[Render Error: Step 1 The Question]", err);
  }

  // 4. Step 2: Pick a Day (Heading, Subtitle, Proposed Dates, Proposed Time, Morning Note, Custom Inputs)
  try {
    const pickDayHeadingText = resolveName(texts.pickDayHeading, names.pickDayName, "සුදූ, අපි කවද්ද යන්නෙ? 🌸");
    const pickDaySubtitleText = resolveName(texts.pickDaySubtitle, names.pickDayName, "ඔයාට වඩාත්ම පහසු ලස්සන දවසක් තෝරන්නකො...");
    const pickTimeHeadingText = resolveName(texts.pickTimeHeading, names.pickDayName, "වෙලාව කියන්න {name} 🕰️");
    const pickTimeHintText = resolveName(texts.pickTimeHint, names.pickDayName, "රෑ හඳ පායන වෙලාවක හම්බවෙන්න මම ආසයි, ඒත් ඔයාට පහසු ඕනෙම වෙලාවක් තෝරන්නකො... 🌙✨");
    const morningNoteText = resolveName(CONFIG.morningNote, names.pickDayName, "රෑ එන්න අමාරු නම් උදේ වරුවක ආවත් කිසිම ප්‍රශ්නයක් නෑ හොඳේ... 🥺🌅");
    const noneOfTheseText = texts.noneOfTheseWork || "මේ දවස් දෙකම බැරි නම්, ඔයා කැමති දවසක් තෝරන්න 📅";
    const customDateLabel = texts.customDateLabel || "දිනය තෝරන්න (Select Date)";
    const customTimeLabel = texts.customTimeLabel || "වේලාව තෝරන්න (Select Time)";
    const confirmBtnText = texts.confirmBtn || "මේ දවස ස්ථිර කරන්න 💖";

    setElementText('pick-day-heading', pickDayHeadingText);
    setElementText('pick-day-subtitle', pickDaySubtitleText);
    setElementText('pick-time-heading', pickTimeHeadingText);
    setElementText('pick-time-hint', pickTimeHintText, true);
    setElementText('morning-note', morningNoteText);
    setElementText('none-of-these-text', noneOfTheseText);
    setElementText('custom-date-label', customDateLabel);
    setElementText('custom-time-label', customTimeLabel);
    setElementText('confirm-btn-text', confirmBtnText);

    renderProposedDates();
    initProposedTimeHandlers();

    // Set min date on custom date picker to today
    const customDateInput = document.getElementById('custom-date-input');
    if (customDateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      customDateInput.min = `${yyyy}-${mm}-${dd}`;
    }

    const customTimeInput = document.getElementById('custom-time-input');
    if (customTimeInput) {
      customTimeInput.value = "";
    }
  } catch (err) {
    console.error("[Render Error: Step 2 Pick a Day]", err);
  }

  // 5. Step 3: Final Card Text & Action Buttons
  try {
    const finalTitle = texts.finalCardTitle || "යෙයිය්! ඩේට් එක ස්ථිරයි! 🎉💖";
    const summaryDateLbl = texts.summaryDateLabel || "දිනය (Date)";
    const summaryTimeLbl = texts.summaryTimeLabel || "වේලාව (Time)";
    const summaryPlaceLbl = texts.summaryPlaceLabel || "ස්ථානය (Place)";
    const finalMsg = resolveName(
      CONFIG.finalMessage || texts.finalMessage,
      names.finalCardName,
      "ඔයා එනකල් මම ගොඩක් ආසාවෙන් බලාගෙන ඉන්නවා සුදූ. ගෝල්ෆේස් මුහුදු හුළඟ මැද්දෙ අපි දෙන්නගෙ ලස්සනම මතකයක් එකතු කරගමු! ✨"
    );

    setElementText('final-heading', finalTitle);
    setElementText('summary-date-label', summaryDateLbl);
    setElementText('summary-time-label', summaryTimeLbl);
    setElementText('summary-place-label', summaryPlaceLbl);
    setElementText('final-message-para', finalMsg);
    setElementText('whatsapp-btn-text', texts.whatsappBtn || "වට්ස්ඇප් එකෙන් කියන්න 💬");
    setElementText('calendar-btn-text', texts.calendarBtn || "කැලැන්ඩරයට දාගන්න 📅");
    setElementText('maps-btn-text', texts.mapsBtn || "ගෝල්ෆේස් මැප් එකෙන් බලන්න 📍");
    setElementText('change-date-btn-text', texts.changeDateBtn || "වෙනත් දවසක් තෝරන්න 🔄");
  } catch (err) {
    console.error("[Render Error: Step 3 Final Card]", err);
  }

  // 6. Whisper Bubbles Engine
  try {
    initWhispers();
  } catch (err) {
    console.error("[Render Error: Whispers]", err);
  }

  // 7. Background Floating Hearts
  try {
    initBackgroundHearts();
  } catch (err) {
    console.error("[Render Error: Background Hearts]", err);
  }

  // 8. Photo Memories Widgets (Step 2 and Step 3)
  try {
    initPhotoMemories();
  } catch (err) {
    console.error("[Render Error: Photo Memories]", err);
  }
}

/* PHOTO MEMORIES: HANGING MEMORY STRING & FULLSCREEN STORY VIEWER */
const failedPhotoFiles = new Set();
let storyCurrentIndex = 0;
let storyDurationMs = 4000;
let storyStartTime = 0;
let storyRemainingMs = 4000;
let storyIsPaused = false;
let storyAnimationFrame = null;
let storyViewerInitialized = false;

// Touch & Hold Tracking
let storyPointerDownTime = 0;
let storyTouchStartX = 0;
let storyTouchStartY = 0;
let storyIsSwiping = false;

/**
 * Preload single image URL
 */
function preloadSingleImage(src) {
  if (!src) return;
  try {
    const img = new Image();
    img.src = src;
  } catch (_) { }
}

/**
 * Main Photo Section Renderer (Step C: single robust function)
 * @param {HTMLElement|string} containerElOrId - Target container element or ID
 * @param {'mini'|'full'} mode - 'mini' for Step 2 preview, 'full' for Step 3 showcase
 */
function renderPhotoSection(containerElOrId, mode = 'full') {
  try {
    const containerEl = (typeof containerElOrId === 'string')
      ? document.getElementById(containerElOrId)
      : containerElOrId;

    if (!containerEl) return;

    const cfg = CONFIG.photos;
    if (!cfg || !cfg.enabled) {
      console.warn("Photos disabled or missing config");
      containerEl.innerHTML = "";
      containerEl.style.display = "none";
      return;
    }

    const folder = cfg.folder || "photos/";
    const allItems = cfg.items || [];

    // Filter items based on mode and failed loads
    let photoList = [];
    let expectedTotal = 0;

    if (mode === 'mini') {
      const miniNames = (cfg.miniFiles && cfg.miniFiles.length > 0)
        ? cfg.miniFiles
        : allItems.slice(0, 3).map(it => it.file);
      expectedTotal = miniNames.length;
      photoList = miniNames
        .map(name => allItems.find(it => it.file === name))
        .filter(item => Boolean(item) && !failedPhotoFiles.has(item.file));
    } else {
      expectedTotal = allItems.length;
      photoList = allItems.filter(item => !failedPhotoFiles.has(item.file));
    }

    // If no valid photos, hide container cleanly with no empty gap
    if (photoList.length === 0) {
      containerEl.innerHTML = "";
      containerEl.style.display = "none";
      return;
    }

    containerEl.style.display = "";
    containerEl.innerHTML = "";

    // Build DOM structure
    if (mode === 'mini') {
      buildMiniStringDOM(containerEl, photoList, folder);
    } else {
      buildFullStringDOM(containerEl, photoList, folder, cfg);
    }

  } catch (err) {
    console.error("Photo section failed:", err);
  }
}

/**
 * Builds the Mini Hanging String DOM for Step 2
 */
function buildMiniStringDOM(containerEl, photoList, folder) {
  const section = document.createElement('div');
  section.className = 'memory-string-section mini-string';

  const container = document.createElement('div');
  container.className = 'mini-string-container';

  // SVG Sagging Wire
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("class", "mini-string-svg");
  svg.setAttribute("viewBox", "0 0 300 24");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.setAttribute("aria-hidden", "true");

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("class", "string-line");
  path.setAttribute("d", "M 0,8 Q 150,22 300,8");
  svg.appendChild(path);
  container.appendChild(svg);

  // Fairy lights layer
  const lightsLayer = document.createElement('div');
  lightsLayer.className = 'fairy-lights-layer';
  lightsLayer.setAttribute('aria-hidden', 'true');
  const lightCount = 4;
  for (let i = 0; i < lightCount; i++) {
    const light = document.createElement('span');
    light.className = 'fairy-light';
    const pct = ((i + 0.5) / lightCount * 100).toFixed(1);
    const xNorm = (i + 0.5) / lightCount;
    const sagY = 8 + Math.sin(xNorm * Math.PI) * 11;
    light.style.left = `${pct}%`;
    light.style.top = `${sagY.toFixed(1)}px`;
    light.style.animationDelay = `${(i * 0.4 % 2.4).toFixed(1)}s`;
    lightsLayer.appendChild(light);
  }
  container.appendChild(lightsLayer);

  // Polaroid list
  const list = document.createElement('div');
  list.className = 'polaroid-hang-list mini-list';

  photoList.forEach((item, idx) => {
    const itemEl = createPolaroidItem(item, idx, folder, true);
    list.appendChild(itemEl);
  });

  container.appendChild(list);
  section.appendChild(container);
  containerEl.appendChild(section);
}

/**
 * Builds the Full Hanging String Showcase DOM for Step 3
 */
function buildFullStringDOM(containerEl, photoList, folder, cfg) {
  const section = document.createElement('div');
  section.className = 'memory-string-section full-string';

  // Title
  if (cfg.title && cfg.title.trim() !== "") {
    const title = document.createElement('h3');
    title.className = 'memory-string-title';
    title.textContent = cfg.title;
    section.appendChild(title);
  }

  // Horizontal Scroller
  const scroller = document.createElement('div');
  scroller.className = 'memory-string-scroll-wrap';
  scroller.setAttribute('tabindex', '0');
  scroller.setAttribute('role', 'region');
  scroller.setAttribute('aria-label', 'Hanging memory photos');

  const track = document.createElement('div');
  track.className = 'memory-string-track';

  // SVG Sagging Wire
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("class", "string-svg");
  svg.setAttribute("viewBox", "0 0 1000 36");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.setAttribute("aria-hidden", "true");

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("class", "string-line");
  path.setAttribute("d", "M 0,14 Q 500,32 1000,14");
  svg.appendChild(path);
  track.appendChild(svg);

  // Fairy lights layer along track
  const lightsLayer = document.createElement('div');
  lightsLayer.className = 'fairy-lights-layer';
  lightsLayer.setAttribute('aria-hidden', 'true');
  const lightCount = Math.min(22, Math.max(12, photoList.length * 2 + 1));
  for (let i = 0; i < lightCount; i++) {
    const light = document.createElement('span');
    light.className = 'fairy-light';
    const pct = ((i + 0.5) / lightCount * 100).toFixed(1);
    const xNorm = (i + 0.5) / lightCount;
    const sagY = 12 + Math.sin(xNorm * Math.PI) * 16;
    light.style.left = `${pct}%`;
    light.style.top = `${sagY.toFixed(1)}px`;
    light.style.animationDelay = `${(i * 0.35 % 2.4).toFixed(1)}s`;
    lightsLayer.appendChild(light);
  }
  track.appendChild(lightsLayer);

  // Polaroid list
  const list = document.createElement('div');
  list.className = 'polaroid-hang-list full-list';

  photoList.forEach((item, idx) => {
    const itemEl = createPolaroidItem(item, idx, folder, false, () => openStoryViewer(idx));
    list.appendChild(itemEl);
  });

  track.appendChild(list);
  scroller.appendChild(track);
  section.appendChild(scroller);

  // Story open button & intro quote wrap
  const actionWrap = document.createElement('div');
  actionWrap.className = 'story-open-wrap';

  const openBtn = document.createElement('button');
  openBtn.type = 'button';
  openBtn.className = 'btn btn-story-open';
  openBtn.id = 'open-story-btn';
  openBtn.innerHTML = `<span class="btn-icon">✨</span><span class="btn-text">${cfg.openStoryLabel || "අපේ මතක බලන්න 💕"}</span>`;
  openBtn.onclick = () => openStoryViewer(0);
  actionWrap.appendChild(openBtn);

  if (cfg.introQuote && cfg.introQuote.trim() !== "") {
    const quote = document.createElement('p');
    quote.className = 'memory-intro-quote';
    quote.textContent = cfg.introQuote;
    actionWrap.appendChild(quote);
  }

  section.appendChild(actionWrap);
  containerEl.appendChild(section);

  // Progressive enhancement: add animate-in and 1.5s safety timeout
  setupProgressiveDropIn(list);
}

/**
 * Creates an individual polaroid hung item
 */
function createPolaroidItem(item, idx, folder, isMini, onClick = null) {
  const itemEl = document.createElement('div');
  itemEl.className = 'polaroid-hang-item';

  // Staggered sway timing & delay so polaroids swing naturally
  const swayDur = (3.8 + (idx % 4) * 0.4).toFixed(1) + 's';
  const swayDelay = (-(idx * 0.7) % 3.5).toFixed(1) + 's';
  const swayDeg = (1.5 + (idx % 3) * 0.5).toFixed(1) + 'deg';
  const dropDelay = `${(idx * 0.08).toFixed(2)}s`;

  itemEl.style.setProperty('--sway-dur', swayDur);
  itemEl.style.setProperty('--sway-delay', swayDelay);
  itemEl.style.setProperty('--sway-deg', swayDeg);
  itemEl.style.setProperty('--drop-delay', dropDelay);

  // Clothespin clipping onto wire
  const clothespin = document.createElement('div');
  clothespin.className = 'clothespin';
  clothespin.setAttribute('aria-hidden', 'true');
  itemEl.appendChild(clothespin);

  // Polaroid white frame
  const frame = document.createElement('div');
  frame.className = 'polaroid-frame';

  // Photo thumbnail
  const img = document.createElement('img');
  img.className = 'polaroid-photo-thumb';
  img.src = folder + item.file;
  img.alt = item.caption || "Our memory";
  const pos = item.position || "50% 50%";
  img.style.objectPosition = pos;
  img.style.setProperty('--pos', pos);

  if (idx < 2) {
    img.loading = "eager";
  } else {
    img.loading = "lazy";
    img.decoding = "async";
  }

  img.onerror = () => {
    failedPhotoFiles.add(item.file);
    console.warn("Photo failed to load:", item.file, img.src);
    // Re-render slot cleanly removing this photo
    const slot = itemEl.closest('.photo-slot');
    if (slot) {
      const mode = slot.id === 'photo-mini-slot' ? 'mini' : 'full';
      renderPhotoSection(slot, mode);
    }
  };

  frame.appendChild(img);

  // Caption on chin
  if (item.caption && item.caption.trim() !== "") {
    const captionEl = document.createElement('span');
    captionEl.className = 'polaroid-hang-caption';
    captionEl.textContent = item.caption;
    frame.appendChild(captionEl);
  }

  itemEl.appendChild(frame);

  // Click & keyboard interaction for full mode
  if (!isMini && typeof onClick === 'function') {
    itemEl.setAttribute('role', 'button');
    itemEl.setAttribute('tabindex', '0');
    itemEl.setAttribute('aria-label', item.caption ? `View memory: ${item.caption}` : `View memory photo ${idx + 1}`);
    itemEl.onclick = onClick;
    itemEl.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    };
  }

  return itemEl;
}

/**
 * Progressive enhancement for entrance animation with 1.5s safety timeout
 */
function setupProgressiveDropIn(listEl) {
  const items = listEl.querySelectorAll('.polaroid-hang-item');
  if (items.length === 0) return;

  // Add animate-in class
  items.forEach(it => it.classList.add('animate-in'));

  // 1.5s Safety timeout: guarantees every item is 100% visible even if animation fails
  setTimeout(() => {
    items.forEach(it => {
      it.classList.remove('animate-in');
      it.style.opacity = '1';
    });
  }, 1500);
}

/* FULLSCREEN STORY VIEWER CONTROLLER */

/**
 * Initialize Story Viewer DOM events once
 */
function initStoryViewer() {
  if (storyViewerInitialized) return;
  storyViewerInitialized = true;

  const modal = document.getElementById('story-viewer-modal');
  const closeBtn = document.getElementById('story-close-btn');
  const closeFinalBtn = document.getElementById('story-close-final-btn');
  const stage = document.getElementById('story-stage');

  const handleClose = (e) => {
    if (e) {
      if (typeof e.stopPropagation === 'function') e.stopPropagation();
      if (typeof e.preventDefault === 'function') e.preventDefault();
    }
    closeStoryViewer(e);
  };

  if (closeBtn) {
    closeBtn.onclick = handleClose;
  }
  if (closeFinalBtn) {
    closeFinalBtn.onclick = handleClose;
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal || modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeStoryViewer(e);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevStory();
    } else if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      nextStory();
    }
  });

  // Ambient floating hearts
  initStoryHearts();

  // Pointer & Touch Events for Hold-to-Pause and Swipe
  if (stage) {
    stage.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button') || e.target.closest('.story-close-btn') || e.target.closest('.btn-story-close-final') || e.target.closest('#story-final-slide')) return;
      storyPointerDownTime = Date.now();
      storyTouchStartX = e.clientX;
      storyTouchStartY = e.clientY;
      storyIsSwiping = false;
      pauseStory();
    });

    const onPointerRelease = (e) => {
      if (e.target.closest('button') || e.target.closest('.story-close-btn') || e.target.closest('.btn-story-close-final') || e.target.closest('#story-final-slide')) {
        if (storyIsPaused) resumeStory();
        return;
      }
      if (!storyIsPaused) return;
      const holdDuration = Date.now() - storyPointerDownTime;
      const diffX = e.clientX - storyTouchStartX;
      const diffY = e.clientY - storyTouchStartY;

      resumeStory();

      // Swipe down to close
      if (diffY > 80 && Math.abs(diffY) > Math.abs(diffX)) {
        closeStoryViewer(e);
        return;
      }

      // Horizontal swipe navigation
      if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
        storyIsSwiping = true;
        if (diffX < 0) {
          nextStory();
        } else {
          prevStory();
        }
        return;
      }

      // Quick tap without swipe -> navigate prev / next
      if (holdDuration < 240 && !storyIsSwiping) {
        const stageWidth = stage.clientWidth || window.innerWidth;
        const tapX = e.clientX;
        if (tapX < stageWidth * 0.40) {
          prevStory();
        } else {
          nextStory();
        }
      }
    };

    stage.addEventListener('pointerup', onPointerRelease);
    stage.addEventListener('pointercancel', () => {
      if (storyIsPaused) resumeStory();
    });
  }
}

/**
 * Ambient floating hearts in story viewer
 */
function initStoryHearts() {
  const container = document.getElementById('story-floating-hearts');
  if (!container) return;
  container.innerHTML = "";

  const icons = ['💖', '💕', '✨', '🌸', '❤️'];
  for (let i = 0; i < 8; i++) {
    const h = document.createElement('span');
    h.className = 'story-heart';
    h.textContent = icons[i % icons.length];
    h.style.left = `${(i * 13 + 6)}%`;
    h.style.animationDelay = `${(i * 0.65).toFixed(1)}s`;
    h.style.fontSize = `${(14 + (i % 3) * 4)}px`;
    container.appendChild(h);
  }
}

/**
 * Open Story Viewer at specified index
 */
function openStoryViewer(startIndex = 0) {
  const cfg = CONFIG.photos;
  if (!cfg || !cfg.enabled) return;

  const validPhotos = (cfg.items || []).filter(item => !failedPhotoFiles.has(item.file));
  if (validPhotos.length === 0) return;

  const modal = document.getElementById('story-viewer-modal');
  if (!modal) return;

  initStoryViewer();

  // Lock body scroll
  document.body.style.overflow = 'hidden';

  // Build segmented progress bars
  const progressContainer = document.getElementById('story-progress-container');
  if (progressContainer) {
    progressContainer.innerHTML = "";
    validPhotos.forEach((_, i) => {
      const bar = document.createElement('div');
      bar.className = 'story-progress-bar';
      const fill = document.createElement('div');
      fill.className = 'story-progress-fill';
      bar.appendChild(fill);
      progressContainer.appendChild(bar);
    });
  }

  // Populate closing slide text
  setElementText('story-final-text', cfg.storyEndText || "අපේ ආදර කතාව තවම පටන් ගත්තා විතරයි... 💕");

  modal.classList.remove('hidden');
  showStory(startIndex);
}

/**
 * Close Story Viewer
 */
function closeStoryViewer(e) {
  if (e && typeof e.stopPropagation === 'function') {
    e.stopPropagation();
  }

  const modal = document.getElementById('story-viewer-modal');
  if (!modal) return;

  if (storyAnimationFrame) {
    cancelAnimationFrame(storyAnimationFrame);
    storyAnimationFrame = null;
  }
  storyIsPaused = false;
  storyIsSwiping = false;

  modal.classList.add('hidden');
  document.body.style.overflow = '';

  // Reset index to 0 so it can be opened again later
  storyCurrentIndex = 0;

  const finalSlide = document.getElementById('story-final-slide');
  const slideWrap = document.getElementById('story-slide-wrap');
  if (finalSlide) finalSlide.classList.add('hidden');
  if (slideWrap) slideWrap.style.display = '';

  // Restore navigation tap zones
  const tapPrev = document.getElementById('story-tap-prev');
  const tapNext = document.getElementById('story-tap-next');
  if (tapPrev) tapPrev.style.pointerEvents = '';
  if (tapNext) tapNext.style.pointerEvents = '';
}

/**
 * Displays a story slide by index
 */
function showStory(index) {
  if (storyAnimationFrame) {
    cancelAnimationFrame(storyAnimationFrame);
    storyAnimationFrame = null;
  }
  storyIsPaused = false;

  const cfg = CONFIG.photos;
  const validPhotos = (cfg && cfg.items ? cfg.items : []).filter(item => !failedPhotoFiles.has(item.file));

  const slideWrap = document.getElementById('story-slide-wrap');
  const finalSlide = document.getElementById('story-final-slide');
  const backdrop = document.getElementById('story-backdrop');
  const storyImg = document.getElementById('story-img');
  const storyCaption = document.getElementById('story-caption');
  const progressBars = document.querySelectorAll('.story-progress-bar');

  // If reached end: show final slide
  if (index >= validPhotos.length) {
    storyCurrentIndex = validPhotos.length;
    if (slideWrap) slideWrap.style.display = 'none';
    if (finalSlide) finalSlide.classList.remove('hidden');

    // Disable navigation tap zones completely when final slide is showing
    const tapPrev = document.getElementById('story-tap-prev');
    const tapNext = document.getElementById('story-tap-next');
    if (tapPrev) tapPrev.style.pointerEvents = 'none';
    if (tapNext) tapNext.style.pointerEvents = 'none';

    progressBars.forEach(bar => {
      const fill = bar.querySelector('.story-progress-fill');
      if (fill) fill.style.width = '100%';
    });
    return;
  }

  if (index < 0) index = 0;
  storyCurrentIndex = index;

  if (finalSlide) finalSlide.classList.add('hidden');
  if (slideWrap) slideWrap.style.display = '';

  // Enable navigation tap zones during photo slides
  const tapPrev = document.getElementById('story-tap-prev');
  const tapNext = document.getElementById('story-tap-next');
  if (tapPrev) tapPrev.style.pointerEvents = '';
  if (tapNext) tapNext.style.pointerEvents = '';

  const folder = (cfg && cfg.folder) || "photos/";
  const item = validPhotos[index];
  const photoSrc = folder + item.file;

  // Update backdrop
  if (backdrop) {
    backdrop.style.backgroundImage = `url("${photoSrc}")`;
  }

  // Update story image with Ken Burns animation
  if (storyImg) {
    storyImg.style.animationPlayState = 'running';
    storyImg.classList.remove('ken-burns');
    void storyImg.offsetWidth; // trigger reflow
    const storySecs = (cfg && cfg.storySeconds) ? cfg.storySeconds : 4;
    storyImg.style.setProperty('--story-duration', `${storySecs}s`);
    storyImg.classList.add('ken-burns');
    storyImg.src = photoSrc;
    storyImg.alt = item.caption || "Our memory";
  }

  // Preload next image
  if (index + 1 < validPhotos.length) {
    preloadSingleImage(folder + validPhotos[index + 1].file);
  }

  // Update caption
  if (storyCaption) {
    if (item.caption && item.caption.trim() !== "") {
      storyCaption.textContent = item.caption;
      storyCaption.style.display = '';
    } else {
      storyCaption.textContent = '';
      storyCaption.style.display = 'none';
    }
  }

  // Update progress bars
  progressBars.forEach((bar, i) => {
    const fill = bar.querySelector('.story-progress-fill');
    if (!fill) return;
    if (i < index) {
      fill.style.width = '100%';
    } else if (i > index) {
      fill.style.width = '0%';
    } else {
      fill.style.width = '0%';
    }
  });

  // Start progress fill animation loop
  const totalDuration = ((cfg && cfg.storySeconds) ? cfg.storySeconds : 4) * 1000;
  storyDurationMs = totalDuration;
  storyStartTime = Date.now();
  storyRemainingMs = storyDurationMs;

  const currentBar = progressBars[index];
  const currentFill = currentBar ? currentBar.querySelector('.story-progress-fill') : null;

  function step() {
    if (storyIsPaused) return;
    const elapsed = Date.now() - storyStartTime;
    const pct = Math.min(100, (elapsed / storyDurationMs) * 100);

    if (currentFill) {
      currentFill.style.width = `${pct}%`;
    }

    if (elapsed < storyDurationMs) {
      storyAnimationFrame = requestAnimationFrame(step);
    } else {
      if (currentFill) currentFill.style.width = '100%';
      showStory(storyCurrentIndex + 1);
    }
  }

  storyAnimationFrame = requestAnimationFrame(step);
}

/**
 * Pauses story progression and animation
 */
function pauseStory() {
  if (storyIsPaused) return;
  storyIsPaused = true;

  if (storyAnimationFrame) {
    cancelAnimationFrame(storyAnimationFrame);
    storyAnimationFrame = null;
  }

  const elapsed = Date.now() - storyStartTime;
  storyRemainingMs = Math.max(0, storyDurationMs - elapsed);

  const storyImg = document.getElementById('story-img');
  if (storyImg) {
    storyImg.style.animationPlayState = 'paused';
  }
}

/**
 * Resumes story progression and animation
 */
function resumeStory() {
  if (!storyIsPaused) return;
  storyIsPaused = false;

  const storyImg = document.getElementById('story-img');
  if (storyImg) {
    storyImg.style.animationPlayState = 'running';
  }

  storyStartTime = Date.now() - (storyDurationMs - storyRemainingMs);

  const progressBars = document.querySelectorAll('.story-progress-bar');
  const currentBar = progressBars[storyCurrentIndex];
  const currentFill = currentBar ? currentBar.querySelector('.story-progress-fill') : null;

  function step() {
    if (storyIsPaused) return;
    const elapsed = Date.now() - storyStartTime;
    const pct = Math.min(100, (elapsed / storyDurationMs) * 100);

    if (currentFill) {
      currentFill.style.width = `${pct}%`;
    }

    if (elapsed < storyDurationMs) {
      storyAnimationFrame = requestAnimationFrame(step);
    } else {
      if (currentFill) currentFill.style.width = '100%';
      showStory(storyCurrentIndex + 1);
    }
  }

  storyAnimationFrame = requestAnimationFrame(step);
}

function nextStory() {
  showStory(storyCurrentIndex + 1);
}

function prevStory() {
  showStory(storyCurrentIndex - 1);
}

/**
 * Backward compatibility stub
 */
function initPhotoMemories() {
  initStoryViewer();
}

/**
 * Render the proposed date cards in Step 2 (without fixed time badge)
 */
function renderProposedDates() {
  const container = document.getElementById('proposed-dates-list');
  if (!container) return;
  container.innerHTML = "";

  const dates = (CONFIG.proposedDates && CONFIG.proposedDates.length > 0)
    ? CONFIG.proposedDates
    : [
      { label: "Sunday, 15 November", isoDate: "2026-11-15", note: "රෑ ගෝල්ෆේස් එකට එන්න 🌙" },
      { label: "Saturday, 21 November", isoDate: "2026-11-21", note: "රෑ ගෝල්ෆේස් එකට එන්න 🌙" }
    ];

  dates.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'date-card';
    card.setAttribute('role', 'radio');
    card.setAttribute('aria-checked', 'false');
    card.setAttribute('tabindex', '0');
    card.dataset.index = index;

    const noteVal = item.note || "";

    card.innerHTML = `
      <div class="date-card-header">
        <span class="date-card-label">${escapeHtml(item.label)}</span>
      </div>
      <div class="date-card-note">${escapeHtml(noteVal)}</div>
      <div style="display:flex; justify-content:flex-end; margin-top:4px;">
        <span class="date-card-check">✓</span>
      </div>
    `;

    card.addEventListener('click', () => selectProposedDate(index));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectProposedDate(index);
      }
    });

    container.appendChild(card);
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Proposed Time Section & Quick Chips Controller
 */
function initProposedTimeHandlers() {
  const timeInput = document.getElementById('proposed-time-input');
  const chipsContainer = document.getElementById('quick-time-chips');

  if (!timeInput) return;

  // Render quick chips from CONFIG.quickTimes
  if (chipsContainer) {
    chipsContainer.innerHTML = '';
    const quickTimes = (Array.isArray(CONFIG.quickTimes) && CONFIG.quickTimes.length > 0)
      ? CONFIG.quickTimes
      : [];

    if (quickTimes.length === 0) {
      chipsContainer.style.display = 'none';
    } else {
      chipsContainer.style.display = '';
      quickTimes.forEach((qTime) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'quick-chip';
        chip.textContent = qTime;
        chip.dataset.time = qTime;

        chip.addEventListener('click', () => {
          const parsed = parseSafeTime(qTime);
          timeInput.value = parsed.time24;

          // Highlight this chip and unhighlight others
          const allChips = chipsContainer.querySelectorAll('.quick-chip');
          allChips.forEach(c => c.classList.toggle('selected', c === chip));

          if (selectedOption && selectedOption.type === 'proposed') {
            selectedOption.time = parsed.time24;
          }

          updateConfirmButtonState();
          if (typeof whisperReaction === 'function') whisperReaction('timeChosen');
        });

        chipsContainer.appendChild(chip);
      });
    }
  }

  // When typing or using native time picker directly, unhighlight quick chips
  timeInput.addEventListener('input', () => {
    if (chipsContainer) {
      const allChips = chipsContainer.querySelectorAll('.quick-chip');
      allChips.forEach(c => c.classList.remove('selected'));
    }

    if (selectedOption && selectedOption.type === 'proposed') {
      selectedOption.time = timeInput.value ? timeInput.value.trim() : '';
    }

    updateConfirmButtonState();
    if (timeInput.value && typeof whisperReaction === 'function') whisperReaction('timeChosen');
  });
}

/**
 * Proposed date selection handler
 */
function selectProposedDate(index) {
  const dates = CONFIG.proposedDates || [];
  const proposedTimeSection = document.getElementById('proposed-time-section');
  const proposedTimeInput = document.getElementById('proposed-time-input');
  const chipsContainer = document.getElementById('quick-time-chips');

  // Keep any time she has already chosen so she doesn't have to re-enter it
  const existingTime = (selectedOption && selectedOption.type === 'proposed' && selectedOption.time)
    ? selectedOption.time
    : (proposedTimeInput && proposedTimeInput.value ? proposedTimeInput.value.trim() : '');

  selectedOption = {
    type: 'proposed',
    index: index,
    item: dates[index] || dates[0],
    time: existingTime
  };

  // Update card styles
  const cards = document.querySelectorAll('.date-card');
  cards.forEach((card, idx) => {
    const isSelected = idx === index;
    card.classList.toggle('selected', isSelected);
    card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
  });

  // Reveal proposed time section directly under cards (fade & slide down)
  if (proposedTimeSection) {
    proposedTimeSection.classList.remove('hidden');
  }

  // Restore time value in input if already chosen
  if (proposedTimeInput && existingTime) {
    proposedTimeInput.value = existingTime;
  }

  // Sync quick chip highlight if matches existingTime
  if (chipsContainer && existingTime) {
    const allChips = chipsContainer.querySelectorAll('.quick-chip');
    allChips.forEach(chip => {
      const parsedChip = parseSafeTime(chip.dataset.time);
      chip.classList.toggle('selected', parsedChip.time24 === existingTime);
    });
  }

  // Close & deselect custom date section
  const customToggle = document.getElementById('custom-toggle-btn');
  const customCollapse = document.getElementById('custom-inputs-collapse');
  if (customToggle) {
    customToggle.classList.remove('active');
    customToggle.setAttribute('aria-expanded', 'false');
  }
  if (customCollapse) {
    customCollapse.classList.remove('open');
  }

  // Check confirm button state
  updateConfirmButtonState();
  if (typeof whisperSetStep === 'function') whisperSetStep('pickTime');
  if (typeof whisperReaction === 'function') whisperReaction('dateSelected');
}

/**
 * Custom date section toggle handler
 */
function initCustomDateHandlers() {
  const customToggle = document.getElementById('custom-toggle-btn');
  const customCollapse = document.getElementById('custom-inputs-collapse');
  const customDateInput = document.getElementById('custom-date-input');
  const customTimeInput = document.getElementById('custom-time-input');
  const proposedTimeSection = document.getElementById('proposed-time-section');

  if (customToggle && customCollapse) {
    customToggle.addEventListener('click', () => {
      const isOpen = customCollapse.classList.contains('open');

      if (!isOpen) {
        // Open custom picker, deselect proposed cards
        customCollapse.classList.add('open');
        customToggle.classList.add('active');
        customToggle.setAttribute('aria-expanded', 'true');

        // Hide proposed time section
        if (proposedTimeSection) {
          proposedTimeSection.classList.add('hidden');
        }

        const cards = document.querySelectorAll('.date-card');
        cards.forEach(card => {
          card.classList.remove('selected');
          card.setAttribute('aria-checked', 'false');
        });

        selectedOption = {
          type: 'custom',
          isoDate: customDateInput ? customDateInput.value.trim() : '',
          time: customTimeInput ? customTimeInput.value.trim() : ''
        };

        if (typeof whisperSetStep === 'function') whisperSetStep('pickDay');
        if (typeof whisperReaction === 'function') whisperReaction('customOpened');
      } else {
        // Close custom picker
        customCollapse.classList.remove('open');
        customToggle.classList.remove('active');
        customToggle.setAttribute('aria-expanded', 'false');
        selectedOption = null;
      }

      updateConfirmButtonState();
    });
  }

  if (customDateInput) {
    customDateInput.addEventListener('input', () => {
      if (selectedOption && selectedOption.type === 'custom') {
        selectedOption.isoDate = customDateInput.value ? customDateInput.value.trim() : '';
        updateConfirmButtonState();
      }
    });
  }

  if (customTimeInput) {
    customTimeInput.addEventListener('input', () => {
      if (selectedOption && selectedOption.type === 'custom') {
        selectedOption.time = customTimeInput.value ? customTimeInput.value.trim() : '';
        updateConfirmButtonState();
        if (customTimeInput.value && typeof whisperReaction === 'function') whisperReaction('timeChosen');
      }
    });
  }
}

/**
 * Check if current selection is complete to enable Confirm button
 */
function updateConfirmButtonState() {
  const confirmBtn = document.getElementById('confirm-date-btn');
  if (!confirmBtn) return;

  let isValid = false;
  if (selectedOption) {
    if (selectedOption.type === 'proposed') {
      isValid = Boolean(
        selectedOption.item &&
        selectedOption.time &&
        selectedOption.time.trim() !== ""
      );
    } else if (selectedOption.type === 'custom') {
      isValid = Boolean(
        selectedOption.isoDate &&
        selectedOption.isoDate.trim() !== "" &&
        selectedOption.time &&
        selectedOption.time.trim() !== ""
      );
    }
  }

  const wasDisabled = confirmBtn.disabled;
  confirmBtn.disabled = !isValid;
  if (wasDisabled && isValid && typeof whisperReaction === 'function') whisperReaction('confirmReady');
}

/* STEP 1: DODGING "NO" BUTTON & BEGGING MESSAGES */
/**
 * ============================================================================
 * STEP 1: "NO" BUTTON STATE MACHINE & DODGE MECHANICS
 * ============================================================================
 * State Flow:
 * - Round 0: 3 dodges -> sad moment on next approach
 * - Round 1: 3 dodges -> sad moment on next approach
 * - Round 2+ (Finished): stops dodging, stays in place, normally clickable.
 *   On click: shows noButton.finalMessage ("පරිස්සමින්").
 * ============================================================================
 */

/**
 * Returns viewport width and height accounting for visualViewport on mobile
 */
function getViewportDimensions() {
  const vv = window.visualViewport;
  const width = vv ? vv.width : window.innerWidth;
  const height = vv ? vv.height : window.innerHeight;
  return { width, height };
}

/**
 * Moves the No button to document.body on first dodge so that ancestor
 * transforms, filters, and overflow:hidden do not break fixed positioning.
 * Leaves an identical invisible placeholder in .button-zone to prevent layout jump.
 */
function moveNoButtonToBody() {
  const noBtn = document.getElementById('no-btn');
  if (!noBtn || noState.movedToBody) return;

  const rect = noBtn.getBoundingClientRect();

  // Create invisible placeholder in original spot
  const placeholder = document.createElement('div');
  placeholder.id = 'no-btn-placeholder';
  placeholder.style.width = `${Math.round(rect.width)}px`;
  placeholder.style.height = `${Math.round(rect.height)}px`;
  placeholder.style.display = 'inline-block';
  placeholder.style.visibility = 'hidden';
  placeholder.style.pointerEvents = 'none';
  placeholder.style.flexShrink = '0';
  placeholder.setAttribute('aria-hidden', 'true');

  if (noBtn.parentNode) {
    noBtn.parentNode.insertBefore(placeholder, noBtn);
  }
  noState.placeholder = placeholder;

  // Move button to body with fixed positioning and high z-index
  noBtn.classList.add('dodging');
  noBtn.style.position = 'fixed';
  noBtn.style.zIndex = '10000';
  noBtn.style.left = `${Math.round(rect.left)}px`;
  noBtn.style.top = `${Math.round(rect.top)}px`;
  document.body.appendChild(noBtn);

  noState.movedToBody = true;
}

/**
 * Calculates a new random position inside the viewport:
 * - At least minJumpDistance away from current position
 * - At least minJumpDistance away from cursor/touch point
 * - Always clamped with a safe margin of 16px inside viewport
 * - Avoids overlapping the Yes button
 */
function calculateDodgePosition(cursorX, cursorY) {
  const noBtn = document.getElementById('no-btn');
  const yesBtn = document.getElementById('yes-btn');
  const btnRect = noBtn ? noBtn.getBoundingClientRect() : { width: 90, height: 44, left: 100, top: 100 };
  const yesRect = yesBtn ? yesBtn.getBoundingClientRect() : null;

  const vp = getViewportDimensions();
  const margin = 16;
  const btnWidth = btnRect.width || 90;
  const btnHeight = btnRect.height || 44;

  const maxLeft = Math.max(margin, vp.width - btnWidth - margin);
  const maxTop = Math.max(margin, vp.height - btnHeight - margin);

  const curLeft = noBtn ? (parseFloat(noBtn.style.left) || btnRect.left) : 100;
  const curTop = noBtn ? (parseFloat(noBtn.style.top) || btnRect.top) : 100;

  const minJump = (CONFIG.noButton && CONFIG.noButton.minJumpDistance) || 200;

  let bestLeft = margin;
  let bestTop = margin;
  let maxScore = -1;

  for (let attempt = 0; attempt < 35; attempt++) {
    const candLeft = margin + Math.random() * (maxLeft - margin);
    const candTop = margin + Math.random() * (maxTop - margin);

    const distFromOld = Math.hypot(candLeft - curLeft, candTop - curTop);
    const distFromCursor = (cursorX !== undefined && cursorY !== undefined)
      ? Math.hypot(candLeft - cursorX, candTop - cursorY)
      : minJump + 50;

    const distFromYes = yesRect
      ? Math.hypot(candLeft - (yesRect.left + yesRect.width / 2), candTop - (yesRect.top + yesRect.height / 2))
      : 250;

    // Do not overlap Yes button
    if (distFromYes < 100) continue;

    // Ideal jump satisfying both distances
    if (distFromOld >= minJump && distFromCursor >= minJump) {
      bestLeft = candLeft;
      bestTop = candTop;
      break;
    }

    const score = Math.min(distFromOld, distFromCursor);
    if (score > maxScore) {
      maxScore = score;
      bestLeft = candLeft;
      bestTop = candTop;
    }
  }

  return {
    left: Math.round(Math.min(Math.max(margin, bestLeft), maxLeft)),
    top: Math.round(Math.min(Math.max(margin, bestTop), maxTop))
  };
}

/**
 * Executes a single dodge: slides smoothly to new spot and grows Yes button
 */
function executeDodge(cursorX, cursorY) {
  const noBtn = document.getElementById('no-btn');
  const yesBtn = document.getElementById('yes-btn');
  if (!noBtn || noState.isMoving || noState.isSad) return;

  // Move to body on first dodge
  if (!noState.movedToBody) {
    moveNoButtonToBody();
  }

  noState.isMoving = true;
  noState.dodgeCount++;

  // Grow "Yes" button slightly (~8%)
  yesScale = Math.min(yesScale + 0.08, 1.85);
  if (yesBtn) {
    yesBtn.style.transform = `scale(${yesScale})`;
  }

  const newPos = calculateDodgePosition(cursorX, cursorY);
  noBtn.style.left = `${newPos.left}px`;
  noBtn.style.top = `${newPos.top}px`;

  setTimeout(() => {
    noState.isMoving = false;
  }, 350);

  const dodgesPerRound = (CONFIG.noButton && CONFIG.noButton.dodgesPerRound) || 3;
  if (noState.dodgeCount >= dodgesPerRound) {
    // Next approach will trigger the sad moment
    noState.phase = "sad";
  }
}

/**
 * Triggers the sad moment when approached after dodges are exhausted
 */
function triggerSadMoment() {
  const noBtn = document.getElementById('no-btn');
  if (!noBtn || noState.isSad) return;

  noState.isSad = true;
  noBtn.classList.add('sad');

  const noConfig = CONFIG.noButton || {};
  let sadMsg = "";
  if (Array.isArray(noConfig.sadMessages) && noConfig.sadMessages[noState.roundIndex]) {
    sadMsg = noConfig.sadMessages[noState.roundIndex];
  } else {
    sadMsg = noConfig.sadMessage || "අනේ 🥺";
  }

  const nameVal = (CONFIG.names && CONFIG.names.noMessageName) || "සුදූ";
  sadMsg = resolveName(sadMsg, nameVal);

  const sadDuration = noConfig.sadDurationMs || 1800;

  // Show floating speech bubble above No button
  showSpeechBubble(sadMsg);

  setTimeout(() => {
    noBtn.classList.remove('sad');
    hideSpeechBubble();
    noState.isSad = false;

    noState.roundIndex++;
    const totalRounds = noConfig.totalRounds || 5;

    if (noState.roundIndex >= totalRounds) {
      // All rounds finished! Switch to free phase
      noState.phase = "free";
      noBtn.classList.remove('dodging');
      noBtn.classList.add('free');
      noBtn.style.pointerEvents = 'auto';
    } else {
      // Reset for next round of dodges
      noState.dodgeCount = 0;
      noState.phase = "dodging";
    }
  }, sadDuration);
}

/**
 * Displays a speech bubble right above the No button
 */
function showSpeechBubble(message) {
  const noBtn = document.getElementById('no-btn');
  if (!noBtn) return;

  let bubble = document.getElementById('no-speech-bubble');
  if (!bubble) {
    bubble = document.createElement('div');
    bubble.id = 'no-speech-bubble';
    bubble.className = 'no-speech-bubble';
    bubble.innerHTML = '<span class="bubble-text"></span><div class="bubble-arrow"></div>';
    document.body.appendChild(bubble);
  }

  const textEl = bubble.querySelector('.bubble-text');
  if (textEl) textEl.textContent = message;

  const rect = noBtn.getBoundingClientRect();
  bubble.style.visibility = 'hidden';
  bubble.style.display = 'block';

  const bubbleRect = bubble.getBoundingClientRect();
  bubble.style.visibility = '';

  const vp = getViewportDimensions();
  let left = rect.left + (rect.width - bubbleRect.width) / 2;
  let top = rect.top - bubbleRect.height - 10;
  let isArrowTop = false;

  // Flip arrow if too close to top of viewport
  if (top < 12) {
    top = rect.bottom + 10;
    isArrowTop = true;
  }

  // Clamp horizontally
  left = Math.min(Math.max(12, left), vp.width - bubbleRect.width - 12);

  bubble.style.left = `${Math.round(left)}px`;
  bubble.style.top = `${Math.round(top)}px`;
  bubble.classList.toggle('arrow-top', isArrowTop);

  // Trigger smooth fade in
  const rAF = window.requestAnimationFrame || ((cb) => setTimeout(cb, 16));
  rAF(() => {
    bubble.classList.add('visible');
  });

  noState.speechBubbleEl = bubble;
}

/**
 * Hides and removes the speech bubble
 */
function hideSpeechBubble() {
  const bubble = document.getElementById('no-speech-bubble');
  if (bubble) {
    bubble.classList.remove('visible');
    setTimeout(() => {
      if (bubble.parentNode) bubble.parentNode.removeChild(bubble);
    }, 280);
  }
  noState.speechBubbleEl = null;
}

/**
 * Re-clamps the No button position inside viewport on resize or orientation change
 */
function reClampNoButton() {
  const noBtn = document.getElementById('no-btn');
  if (!noBtn || !noState.movedToBody) return;

  const vp = getViewportDimensions();
  const margin = 16;
  const rect = noBtn.getBoundingClientRect();
  const maxLeft = Math.max(margin, vp.width - rect.width - margin);
  const maxTop = Math.max(margin, vp.height - rect.height - margin);

  const curLeft = parseFloat(noBtn.style.left) || rect.left;
  const curTop = parseFloat(noBtn.style.top) || rect.top;

  const clampedLeft = Math.min(Math.max(margin, curLeft), maxLeft);
  const clampedTop = Math.min(Math.max(margin, curTop), maxTop);

  noBtn.style.left = `${Math.round(clampedLeft)}px`;
  noBtn.style.top = `${Math.round(clampedTop)}px`;

  // Reposition bubble if visible
  if (noState.speechBubbleEl) {
    const bRect = noState.speechBubbleEl.getBoundingClientRect();
    let bLeft = clampedLeft + (rect.width - bRect.width) / 2;
    let bTop = clampedTop - bRect.height - 10;
    if (bTop < 12) bTop = clampedTop + rect.height + 10;
    bLeft = Math.min(Math.max(12, bLeft), vp.width - bRect.width - 12);
    noState.speechBubbleEl.style.left = `${Math.round(bLeft)}px`;
    noState.speechBubbleEl.style.top = `${Math.round(bTop)}px`;
  }
}

/**
 * Handles when cursor or finger approaches the No button
 */
function onApproachDetected(clientX, clientY) {
  const step1 = document.getElementById('step-question');
  if (!step1 || !step1.classList.contains('active')) return;

  const noBtn = document.getElementById('no-btn');
  if (!noBtn) return;

  // In free phase, button stays still and allows click
  if (noState.phase === "free") return;

  const now = Date.now();
  if (now - noState.lastTriggerTime < 300) return; // Debounce mobile touches

  const rect = noBtn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distance = Math.hypot(clientX - centerX, clientY - centerY);

  const triggerDist = (CONFIG.noButton && CONFIG.noButton.triggerDistance) || 90;

  if (distance < triggerDist) {
    noState.lastTriggerTime = now;

    if (noState.phase === "dodging") {
      executeDodge(clientX, clientY);
    } else if (noState.phase === "sad") {
      triggerSadMoment();
    }
  }
}

/**
 * Triggers the final rejection sequence when she clicks the No button:
 * - Immediately fades out EVERYTHING on the screen (600ms)
 * - Removes/hides all cards, buttons, quotes, hearts, canvas, etc.
 * - Displays ONE single centered large text ("හා එහෙනම්.. පරිස්සමින්")
 * - Disables all animations and interactions
 * - Saves rejection state to localStorage
 */
function triggerFinalRejection() {
  noState.phase = "rejected";
  if (typeof whisperSetStep === 'function') whisperSetStep('rejected');

  // Stop animations and timers
  if (confettiAnimationId) {
    const cancelAnim = window.cancelAnimationFrame || ((id) => clearTimeout(id));
    cancelAnim(confettiAnimationId);
    confettiAnimationId = null;
  }

  // Ensure photo memories and story viewer are closed and hidden
  try {
    closeStoryViewer();
    const miniSlot = document.getElementById('photo-mini-slot');
    const fullSlot = document.getElementById('photo-full-slot');
    if (miniSlot) { miniSlot.innerHTML = ''; miniSlot.style.display = 'none'; }
    if (fullSlot) { fullSlot.innerHTML = ''; fullSlot.style.display = 'none'; }
  } catch (err) {
    console.warn("Could not clean up photo memories:", err);
  }

  // Remove any active sad speech bubble
  hideSpeechBubble();

  // Fade out all screen elements smoothly over 600ms
  const elementsToFade = [
    document.querySelector('.page-wrapper'),
    document.getElementById('hearts-container'),
    document.querySelector('.stars-layer'),
    document.getElementById('confetti-canvas'),
    document.getElementById('no-btn'),
    document.getElementById('story-viewer-modal')
  ];

  elementsToFade.forEach(el => {
    if (el) {
      el.classList.add('fade-out-screen');
    }
  });

  // Save rejection state to localStorage
  try {
    localStorage.setItem(REJECTED_STORAGE_KEY, 'true');
  } catch (err) {
    console.warn("Could not save rejection state to localStorage:", err);
  }

  // After 600ms, completely hide elements and show the centered final text screen
  setTimeout(() => {
    elementsToFade.forEach(el => {
      if (el) {
        el.style.display = 'none';
      }
    });

    const rejectedScreen = document.getElementById('final-rejected-screen');
    const rejectedTextEl = document.getElementById('final-rejected-text');
    const text = (CONFIG.noButton && CONFIG.noButton.finalScreenText) || "හා එහෙනම්.. පරිස්සමින්";

    if (rejectedTextEl) {
      rejectedTextEl.textContent = text;
    }
    if (rejectedScreen) {
      rejectedScreen.classList.remove('hidden');
      const rAF = window.requestAnimationFrame || ((cb) => setTimeout(cb, 16));
      rAF(() => {
        rejectedScreen.classList.add('visible');
      });
    }
  }, 600);
}

/**
 * Handles clicks on the No button:
 * - Blocked during dodging and sad moment
 * - In free phase: triggers final rejection screen
 */
function handleNoButtonClick(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // If not yet in free phase, block click
  if (noState.phase !== "free") {
    return;
  }

  triggerFinalRejection();
}

/**
 * Initialize dodge mechanics, approach listeners, and state machine
 */
function initDodgeMechanics() {
  const noBtn = document.getElementById('no-btn');
  const yesBtn = document.getElementById('yes-btn');

  if (!noBtn || !yesBtn) return;

  // Desktop hover / proximity detection
  window.addEventListener('mousemove', (e) => {
    onApproachDetected(e.clientX, e.clientY);
  });

  // Mobile touch proximity detection
  window.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      onApproachDetected(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // Direct pointerdown on button itself (mobile or fast tap)
  noBtn.addEventListener('pointerdown', (e) => {
    if (noState.phase !== "free") {
      e.preventDefault();
      e.stopPropagation();
      onApproachDetected(e.clientX, e.clientY);
    }
  });

  // Click handler
  noBtn.addEventListener('click', handleNoButtonClick);

  // Window resize and orientation change listeners
  window.addEventListener('resize', reClampNoButton);
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', reClampNoButton);
  }

  // Yes button click
  yesBtn.addEventListener('click', () => {
    launchConfetti();
    goToStep('step-pick-day');
  });
}

/* STEP SWITCHING & PERSISTENCE */
function goToStep(stepId) {
  const steps = ['step-question', 'step-pick-day', 'step-final'];
  const noBtn = document.getElementById('no-btn');

  steps.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === stepId) {
        el.classList.remove('hidden');
        el.classList.add('active');
      } else {
        el.classList.remove('active');
        el.classList.add('hidden');
      }
    }
  });

  // Ensure fixed dodging No button and speech bubble are cleanly hidden when leaving step 1
  if (noBtn) {
    if (stepId !== 'step-question') {
      noBtn.style.display = 'none';
      hideSpeechBubble();
    } else {
      noBtn.style.display = '';
    }
  }

  // Manage photo memories rendering on dedicated slots
  try {
    const miniSlot = document.getElementById('photo-mini-slot');
    const fullSlot = document.getElementById('photo-full-slot');

    if (stepId === 'step-pick-day') {
      if (fullSlot) { fullSlot.innerHTML = ''; fullSlot.style.display = 'none'; }
      closeStoryViewer();
      renderPhotoSection(miniSlot, 'mini');
    } else if (stepId === 'step-final') {
      if (miniSlot) { miniSlot.innerHTML = ''; miniSlot.style.display = 'none'; }
      renderPhotoSection(fullSlot, 'full');
    } else {
      if (miniSlot) { miniSlot.innerHTML = ''; miniSlot.style.display = 'none'; }
      if (fullSlot) { fullSlot.innerHTML = ''; fullSlot.style.display = 'none'; }
      closeStoryViewer();
    }
  } catch (err) {
    console.warn("Could not transition photo memories:", err);
  }

  // Whisper Step Hook
  if (typeof whisperSetStep === 'function') {
    if (stepId === 'step-question') whisperSetStep('step1');
    else if (stepId === 'step-pick-day') {
      const timeSec = document.getElementById('proposed-time-section');
      whisperSetStep(timeSec && !timeSec.classList.contains('hidden') ? 'pickTime' : 'pickDay');
    }
    else if (stepId === 'step-final') whisperSetStep('afterConfirm');
  }

  // Scroll to top of card smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Save selection to localStorage and show Step 3
 */
function confirmAndShowFinal(selectionData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectionData));
  } catch (err) {
    console.warn("Storage not available or quota exceeded:", err);
  }

  populateFinalCard(selectionData);
  launchConfetti();
  goToStep('step-final');
}

/**
 * Populate the Step 3 Final Card with confirmed date, time, links
 */
function populateFinalCard(data) {
  let displayDate = "";
  let displayTime = "";
  let rawIsoDate = "";
  let rawTime = "";

  const defaultPlace = (CONFIG.event && CONFIG.event.place) || "Galle Face";

  if (data.type === 'proposed') {
    const dates = CONFIG.proposedDates || [];
    const item = data.item || dates[data.index] || dates[0] || {};
    displayDate = item.label || formatSafeDisplayDate(item.isoDate);
    rawIsoDate = item.isoDate || (dates[0] && dates[0].isoDate) || "2026-11-15";
    rawTime = data.time || (item && item.time) || "";
    const parsedT = parseSafeTime(rawTime);
    displayTime = parsedT.display;
  } else {
    displayDate = formatSafeDisplayDate(data.isoDate);
    rawIsoDate = data.isoDate || "2026-11-15";
    rawTime = data.time || "";
    const parsedT = parseSafeTime(rawTime);
    displayTime = parsedT.display;
  }

  // Populate summary elements
  setElementText('summary-date', displayDate);
  setElementText('summary-time', displayTime);
  setElementText('summary-place', defaultPlace);

  // Setup WhatsApp link
  setupWhatsAppLink(data.type, displayDate, displayTime);

  // Setup Calendar download
  setupCalendarButton(rawIsoDate, rawTime);

  // Setup Maps link
  const mapsLink = document.getElementById('maps-link');
  if (mapsLink) {
    const query = encodeURIComponent((CONFIG.event && CONFIG.event.mapsQuery) || "Galle Face Green, Colombo");
    mapsLink.href = `https://www.google.com/maps/search/?api=1&query=${query}`;
  }
}

/**
 * Construct WhatsApp link with encoded message
 */
function setupWhatsAppLink(selectionType, formattedDate, formattedTime) {
  const linkEl = document.getElementById('whatsapp-link');
  if (!linkEl) return;

  const waConfig = CONFIG.whatsapp || {};
  const template = selectionType === 'custom'
    ? (waConfig.customTemplate || "හායි {name}! මම {date} {time} ට {place} එකට එන්නම්. මට ඒ වෙලාව පහසුයි! ❤️✨")
    : (waConfig.confirmedTemplate || "හායි {name}! මම කැමතියි {date} {time} ට {place} එකට එන්න. මමත් බලාගෙන ඉන්නවා ඔයාව හම්බවෙන්න! ❤️✨");

  const nameVal = (CONFIG.names && CONFIG.names.whatsappName) || "සුදූ";
  const placeVal = (CONFIG.event && CONFIG.event.place) || "Galle Face";

  const message = template
    .replace('{name}', nameVal)
    .replace('{date}', formattedDate)
    .replace('{time}', formattedTime)
    .replace('{place}', placeVal);

  const cleanNumber = (waConfig.number || "94720355528").replace(/\D/g, '');
  linkEl.href = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Configure Add to Calendar (.ics) generation & download
 */
function setupCalendarButton(isoDate, timeString) {
  const calBtn = document.getElementById('calendar-btn');
  if (!calBtn) return;

  // Remove existing listeners by clone replacement
  const newCalBtn = calBtn.cloneNode(true);
  calBtn.parentNode.replaceChild(newCalBtn, calBtn);

  newCalBtn.addEventListener('click', () => {
    const parts = parseIsoDateParts(isoDate) || { year: 2026, month: 11, day: 15 };
    const timeObj = parseSafeTime(timeString);
    const duration = (CONFIG.event && CONFIG.event.durationHours) || 2;

    // Build startDate and endDate using local timezone components
    const startDate = new Date(parts.year, parts.month - 1, parts.day, timeObj.hour24, timeObj.minute, 0);
    const endDate = new Date(startDate.getTime() + duration * 3600 * 1000);

    const pad = (n) => String(n).padStart(2, '0');
    const formatIcs = (d) =>
      `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;

    const dtStart = formatIcs(startDate);
    const dtEnd = formatIcs(endDate);
    const nowStamp = formatIcs(new Date()) + "Z";

    const escapeIcs = (str) =>
      (str || '').replace(/[\\,;]/g, (match) => '\\' + match).replace(/\n/g, '\\n');

    const title = escapeIcs((CONFIG.event && CONFIG.event.calendarTitle) || "Romantic Date at Galle Face ❤️");
    const desc = escapeIcs((CONFIG.event && CONFIG.event.calendarDescription) || "A romantic date at Galle Face Green 🌙");
    const location = escapeIcs((CONFIG.event && CONFIG.event.mapsQuery) || "Galle Face Green, Colombo");

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Romantic Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${Date.now()}@romantic-date-invitation`,
      `DTSTAMP:${nowStamp}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${desc}`,
      `LOCATION:${location}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    // Create Blob and trigger download
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'romantic-date.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(downloadUrl);
  });
}

/* WHISPER BUBBLES FEATURE */

/**
 * Checks whether whispers are currently blocked from appearing
 */
function isWhisperBlocked() {
  if (!CONFIG.whispers || CONFIG.whispers.enabled === false) return true;
  if (document.hidden) return true;
  if (whisperState.currentStep === 'rejected') return true;

  try {
    if (localStorage.getItem(REJECTED_STORAGE_KEY) === 'true') return true;
  } catch (e) {}

  const rejectedScreen = document.getElementById('final-rejected-screen');
  if (rejectedScreen && rejectedScreen.classList.contains('visible')) return true;

  if (typeof noState !== 'undefined' && (noState.phase === 'rejected' || noState.isSad || noState.isAnimatingSad)) return true;
  if (document.querySelector('.no-speech-bubble')) return true;

  const storyModal = document.getElementById('story-viewer-modal');
  if (storyModal && !storyModal.classList.contains('hidden')) return true;

  const active = document.activeElement;
  if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.tagName === 'SELECT')) return true;

  return false;
}

/**
 * Dismisses the active bubble immediately or smoothly
 */
function dismissActiveBubble(immediate = false) {
  clearTimeout(whisperState.activeTimer);
  clearTimeout(whisperState.dismissTimer);

  const bubble = whisperState.activeBubbleEl;
  if (!bubble) return;

  if (immediate) {
    if (bubble.parentNode) bubble.parentNode.removeChild(bubble);
    whisperState.activeBubbleEl = null;
  } else {
    bubble.classList.add('fading-out');
    setTimeout(() => {
      if (bubble.parentNode) bubble.parentNode.removeChild(bubble);
      if (whisperState.activeBubbleEl === bubble) {
        whisperState.activeBubbleEl = null;
      }
    }, 450);
  }
}

/**
 * Gathers bounding rects for all obstacles that a whisper bubble must not overlap
 */
function getObstacleRects() {
  const rects = [];
  const selectors = [
    'button',
    'input',
    'select',
    'textarea',
    'label',
    '[role="button"]',
    '[role="radio"]',
    '.date-card',
    '#proposed-time-section',
    '.main-heading',
    '#story-viewer-modal:not(.hidden)',
    '.card-footer'
  ];

  const elements = document.querySelectorAll(selectors.join(', '));
  elements.forEach(el => {
    if (el.offsetParent !== null || el.getClientRects().length > 0) {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        rects.push(r);
      }
    }
  });

  if (whisperState.lastPosition) {
    rects.push(whisperState.lastPosition);
  }

  return rects;
}

/**
 * Safely sanitizes an array of quotes, removing non-strings and empty/whitespace-only items
 */
function sanitizeWhisperLines(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.filter(item => typeof item === 'string' && item.trim().length > 0);
}

/**
 * Returns the opposite zone to prioritize balanced placement
 */
function getOppositeZone(zone) {
  const opposites = {
    left: 'right',
    right: 'left',
    top: 'bottom',
    bottom: 'top',
    topLeft: 'bottomRight',
    topRight: 'bottomLeft',
    bottomLeft: 'topRight',
    bottomRight: 'topLeft'
  };
  return opposites[zone] || null;
}

/**
 * Determines available placement zones based on viewport and card dimensions
 */
function getAvailableZones(vpW, vpH, vpLeft, vpTop, cardRect, w, h, safeMargin) {
  const leftGutterWidth = cardRect ? (cardRect.left - (vpLeft + safeMargin)) : 0;
  const rightGutterWidth = cardRect ? ((vpLeft + vpW - safeMargin) - cardRect.right) : 0;

  const hasGutters = cardRect && (leftGutterWidth >= w + 8 || rightGutterWidth >= w + 8);

  if (hasGutters) {
    const zones = [];
    if (leftGutterWidth >= w + 8) zones.push('left');
    if (rightGutterWidth >= w + 8) zones.push('right');
    if (cardRect.top - h - 8 >= vpTop + safeMargin) zones.push('top');
    if (vpTop + vpH - h - safeMargin >= cardRect.bottom + 8) zones.push('bottom');
    if (zones.length > 0) return zones;
  }

  // On narrow screens (phones) where gutters don't fit, use the four corners
  return ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
}

/**
 * Returns the bounding coordinates for a designated zone
 */
function getZoneBounds(zoneName, vpW, vpH, vpLeft, vpTop, cardRect, w, h, safeMargin) {
  let minX, maxX, minY, maxY;

  switch (zoneName) {
    case 'left':
      minX = vpLeft + safeMargin;
      maxX = Math.max(minX, (cardRect ? cardRect.left : vpW * 0.5) - w - 8);
      minY = cardRect ? Math.max(vpTop + safeMargin, cardRect.top - 20) : vpTop + safeMargin;
      maxY = cardRect ? Math.min(vpTop + vpH - h - safeMargin, cardRect.bottom - h + 20) : vpTop + vpH - h - safeMargin;
      if (minY > maxY) {
        minY = vpTop + safeMargin;
        maxY = Math.max(minY, vpTop + vpH - h - safeMargin);
      }
      break;

    case 'right':
      minX = (cardRect ? cardRect.right : vpW * 0.5) + 8;
      maxX = Math.max(minX, vpLeft + vpW - w - safeMargin);
      minY = cardRect ? Math.max(vpTop + safeMargin, cardRect.top - 20) : vpTop + safeMargin;
      maxY = cardRect ? Math.min(vpTop + vpH - h - safeMargin, cardRect.bottom - h + 20) : vpTop + vpH - h - safeMargin;
      if (minY > maxY) {
        minY = vpTop + safeMargin;
        maxY = Math.max(minY, vpTop + vpH - h - safeMargin);
      }
      break;

    case 'top':
      minX = vpLeft + safeMargin;
      maxX = Math.max(minX, vpLeft + vpW - w - safeMargin);
      minY = vpTop + safeMargin;
      maxY = cardRect ? Math.max(minY, cardRect.top - h - 8) : Math.max(minY, vpTop + vpH * 0.3 - h);
      break;

    case 'bottom':
      minX = vpLeft + safeMargin;
      maxX = Math.max(minX, vpLeft + vpW - w - safeMargin);
      minY = cardRect ? Math.min(vpTop + vpH - h - safeMargin, cardRect.bottom + 8) : vpTop + vpH * 0.7;
      maxY = Math.max(minY, vpTop + vpH - h - safeMargin);
      break;

    case 'topLeft':
      minX = vpLeft + safeMargin;
      maxX = Math.max(minX, vpLeft + Math.min(vpW * 0.45, vpW - w - safeMargin));
      minY = vpTop + safeMargin;
      maxY = Math.max(minY, vpTop + Math.min(vpH * 0.35, vpH - h - safeMargin));
      break;

    case 'topRight':
      minX = Math.max(vpLeft + safeMargin, vpLeft + vpW - w - safeMargin - vpW * 0.45);
      maxX = Math.max(minX, vpLeft + vpW - w - safeMargin);
      minY = vpTop + safeMargin;
      maxY = Math.max(minY, vpTop + Math.min(vpH * 0.35, vpH - h - safeMargin));
      break;

    case 'bottomLeft':
      minX = vpLeft + safeMargin;
      maxX = Math.max(minX, vpLeft + Math.min(vpW * 0.45, vpW - w - safeMargin));
      minY = Math.max(vpTop + safeMargin, vpTop + vpH - h - safeMargin - vpH * 0.35);
      maxY = Math.max(minY, vpTop + vpH - h - safeMargin);
      break;

    case 'bottomRight':
      minX = Math.max(vpLeft + safeMargin, vpLeft + vpW - w - safeMargin - vpW * 0.45);
      maxX = Math.max(minX, vpLeft + vpW - w - safeMargin);
      minY = Math.max(vpTop + safeMargin, vpTop + vpH - h - safeMargin - vpH * 0.35);
      maxY = Math.max(minY, vpTop + vpH - h - safeMargin);
      break;

    default:
      minX = vpLeft + safeMargin;
      maxX = Math.max(minX, vpLeft + vpW - w - safeMargin);
      minY = vpTop + safeMargin;
      maxY = Math.max(minY, vpTop + vpH - h - safeMargin);
      break;
  }

  return { minX, maxX, minY, maxY };
}

/**
 * Refills the zone cycle queue ensuring opposite zones are preferred
 */
function refillZoneCycle(availableZones) {
  if (availableZones.length <= 1) {
    whisperState.zoneCycle = [...availableZones];
    return;
  }

  const opposite = getOppositeZone(whisperState.lastZone);
  let cycle = [];

  if (opposite && availableZones.includes(opposite)) {
    cycle.push(opposite);
    const rest = availableZones.filter(z => z !== opposite);
    for (let i = rest.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rest[i], rest[j]] = [rest[j], rest[i]];
    }
    cycle = cycle.concat(rest);
  } else {
    const shuffled = [...availableZones];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    if (shuffled.length > 1 && shuffled[0] === whisperState.lastZone) {
      const temp = shuffled[0];
      shuffled[0] = shuffled[1];
      shuffled[1] = temp;
    }
    cycle = shuffled;
  }

  whisperState.zoneCycle = cycle;
}

function isMobileWhisper() {
  return window.matchMedia && window.matchMedia('(max-width: 600px)').matches;
}

function updateVisualViewport() {
  const vv = window.visualViewport;
  if (!vv) return;
  const bottomOffset = Math.max(0, window.innerHeight - (vv.offsetTop + vv.height));
  const topOffset = Math.max(0, vv.offsetTop);
  const leftOffset = Math.max(0, vv.offsetLeft);
  const rightOffset = Math.max(0, window.innerWidth - (vv.offsetLeft + vv.width));
  document.documentElement.style.setProperty('--vv-bottom', bottomOffset + 'px');
  document.documentElement.style.setProperty('--vv-top', topOffset + 'px');
  document.documentElement.style.setProperty('--vv-left', leftOffset + 'px');
  document.documentElement.style.setProperty('--vv-right', rightOffset + 'px');
}

function getMobileWhisperPlacement(w, h) {
  const vv = window.visualViewport;
  const vpW = vv ? vv.width : window.innerWidth;
  const vpH = vv ? vv.height : window.innerHeight;
  const vpLeft = vv ? vv.offsetLeft : 0;
  const vpTop = vv ? vv.offsetTop : 0;

  // Determine lane: default is bottom
  let lane = 'bottom';

  // Check Step 1 No button special case
  let noRect = null;
  if (whisperState.currentStep === 'step1') {
    const noBtn = document.getElementById('no-btn');
    if (noBtn && noBtn.offsetParent !== null) {
      noRect = noBtn.getBoundingClientRect();
      const noCenterY = noRect.top + noRect.height / 2;
      const vpCenterY = vpTop + vpH / 2;
      if (noCenterY > vpCenterY) {
        lane = 'top';
      }
    }
  }

  // Determine alternate alignment (first left, then right, then left...)
  if (!whisperState.mobileAlign) {
    whisperState.mobileAlign = 'left';
  }
  let align = whisperState.mobileAlign;

  // Check overlap with No button rectangle plus 12px margin
  function overlapsNo(candLane, candAlign) {
    if (!noRect) return false;
    const margin = 12;
    const candX = candAlign === 'left' ? (vpLeft + 14) : (vpLeft + vpW - 14 - w);
    const candY = candLane === 'bottom' ? (vpTop + vpH - 14 - h) : (vpTop + 12);
    const candRight = candX + w;
    const candBottom = candY + h;

    return !(
      candRight + margin <= noRect.left ||
      candX - margin >= noRect.right ||
      candBottom + margin <= noRect.top ||
      candY - margin >= noRect.bottom
    );
  }

  if (overlapsNo(lane, align)) {
    const oppositeAlign = align === 'left' ? 'right' : 'left';
    if (!overlapsNo(lane, oppositeAlign)) {
      align = oppositeAlign;
    } else {
      const oppositeLane = lane === 'bottom' ? 'top' : 'bottom';
      if (!overlapsNo(oppositeLane, align)) {
        lane = oppositeLane;
      } else if (!overlapsNo(oppositeLane, oppositeAlign)) {
        lane = oppositeLane;
        align = oppositeAlign;
      } else {
        return null;
      }
    }
  }

  return { isMobile: true, lane, align, w, h };
}

/**
 * Finds a random viewport position that does not overlap obstacles, rotating through zones
 */
function findWhisperPosition(w, h) {
  if (isMobileWhisper()) {
    updateVisualViewport();
    return getMobileWhisperPlacement(w, h);
  }

  const vv = window.visualViewport;
  const vpW = vv ? vv.width : window.innerWidth;
  const vpH = vv ? vv.height : window.innerHeight;
  const vpLeft = vv ? vv.offsetLeft : 0;
  const vpTop = vv ? vv.offsetTop : 0;
  const safeMargin = 16;
  const overlapMargin = 12;

  const obstacles = getObstacleRects();
  const card = document.querySelector('.card-container');
  const cardRect = card ? card.getBoundingClientRect() : null;

  const availableZones = getAvailableZones(vpW, vpH, vpLeft, vpTop, cardRect, w, h, safeMargin);

  let totalTries = 0;

  while (totalTries < 25) {
    if (!whisperState.zoneCycle || whisperState.zoneCycle.length === 0) {
      refillZoneCycle(availableZones);
    }

    const currentZone = whisperState.zoneCycle[0];
    const bounds = getZoneBounds(currentZone, vpW, vpH, vpLeft, vpTop, cardRect, w, h, safeMargin);

    for (let tryInZone = 0; tryInZone < 12 && totalTries < 25; tryInZone++, totalTries++) {
      const x = bounds.minX + Math.random() * (bounds.maxX - bounds.minX);
      const y = bounds.minY + Math.random() * (bounds.maxY - bounds.minY);

      const candRect = {
        left: x,
        top: y,
        right: x + w,
        bottom: y + h
      };

      let collision = false;
      for (let i = 0; i < obstacles.length; i++) {
        const obs = obstacles[i];
        const overlaps = !(
          candRect.right + overlapMargin <= obs.left ||
          candRect.left - overlapMargin >= obs.right ||
          candRect.bottom + overlapMargin <= obs.top ||
          candRect.top - overlapMargin >= obs.bottom
        );
        if (overlaps) {
          collision = true;
          break;
        }
      }

      if (!collision) {
        whisperState.lastZone = currentZone;
        whisperState.zoneCycle.shift();
        return { x, y, zone: currentZone };
      }
    }

    // If 12 tries in this zone failed, move on to the next zone in cycle
    whisperState.zoneCycle.shift();
  }

  return null;
}

/**
 * Sets tail class so bubble tail points toward the center of the screen
 */
function applyTailDirection(bubbleEl, x, y, w, h) {
  const vv = window.visualViewport;
  const vpW = vv ? vv.width : window.innerWidth;
  const vpH = vv ? vv.height : window.innerHeight;
  const vpLeft = vv ? vv.offsetLeft : 0;
  const vpTop = vv ? vv.offsetTop : 0;

  const bx = x + w / 2;
  const by = y + h / 2;
  const centerScreenX = vpLeft + vpW / 2;
  const centerScreenY = vpTop + vpH / 2;

  const dx = centerScreenX - bx;
  const dy = centerScreenY - by;

  bubbleEl.classList.remove('tail-left', 'tail-right', 'tail-up', 'tail-down');

  if (Math.abs(dx) >= Math.abs(dy)) {
    if (dx > 0) {
      bubbleEl.classList.add('tail-right');
    } else {
      bubbleEl.classList.add('tail-left');
    }
  } else {
    if (dy > 0) {
      bubbleEl.classList.add('tail-down');
    } else {
      bubbleEl.classList.add('tail-up');
    }
  }
}

/**
 * Retrieves the next message in sequential order from CONFIG.whispers.messages[listKey].
 * When all lines have been shown, returns null (onListEnd: "stop").
 */
function getNextMessage(listKey) {
  const msgs = (CONFIG.whispers && CONFIG.whispers.messages) || {};
  const list = sanitizeWhisperLines(msgs[listKey]);
  if (!list || list.length === 0) return null;

  if (!whisperState.counters) whisperState.counters = {};
  const idx = whisperState.counters[listKey] || 0;
  if (idx >= list.length) {
    return null;
  }
  return list[idx];
}

/**
 * Resolves the message list key for the active step and fetches the next message
 */
function getNextPoolLine() {
  let listKey = null;
  if (whisperState.currentStep === 'step1') {
    listKey = 'step1Ambient';
  } else if (whisperState.currentStep === 'pickDay' || whisperState.currentStep === 'pickTime') {
    listKey = 'pickDayAmbient';
  } else if (whisperState.currentStep === 'afterConfirm' || whisperState.currentStep === 'final') {
    listKey = 'finalAmbient';
  }
  if (!listKey) return null;
  return getNextMessage(listKey);
}

/**
 * Schedules the next ambient whisper bubble after a random gap (or customDelay)
 */
function scheduleNextWhisper(customDelay) {
  clearTimeout(whisperState.scheduleTimer);

  if (isWhisperBlocked()) return;

  const maxPerStep = (CONFIG.whispers && typeof CONFIG.whispers.maxPerStep === 'number')
    ? CONFIG.whispers.maxPerStep
    : 0;
  if (maxPerStep > 0 && whisperState.stepBubbleCount >= maxPerStep) return;

  let delay;
  if (typeof customDelay === 'number') {
    delay = customDelay;
  } else {
    const min = (CONFIG.whispers && CONFIG.whispers.gapMinMs) || 2000;
    const max = (CONFIG.whispers && CONFIG.whispers.gapMaxMs) || 4500;
    delay = min + Math.random() * (max - min);
  }

  whisperState.scheduleTimer = setTimeout(() => {
    if (isWhisperBlocked()) return;
    if (maxPerStep > 0 && whisperState.stepBubbleCount >= maxPerStep) return;

    let listKey = null;
    if (whisperState.currentStep === 'step1') {
      listKey = 'step1Ambient';
    } else if (whisperState.currentStep === 'pickDay' || whisperState.currentStep === 'pickTime') {
      listKey = 'pickDayAmbient';
    } else if (whisperState.currentStep === 'afterConfirm' || whisperState.currentStep === 'final') {
      listKey = 'finalAmbient';
    }

    if (!listKey) return;
    const line = getNextMessage(listKey);
    if (!line) return;

    showWhisper(line, listKey, true);
  }, delay);
}

/**
 * Shows a whisper bubble on screen with typing indicator, spring pop morph, drift, and fadeout.
 * If immediate is true, skips typing dots (used for urgent reactions like noApproach).
 */
function showWhisper(line, poolName, countsTowardStep = true, immediate = false) {
  if (isWhisperBlocked()) return;
  if (!line || typeof line !== 'string') return;

  dismissActiveBubble(true);

  const container = document.getElementById('whisper-container') || document.body;

  const bubble = document.createElement('div');
  bubble.className = 'whisper-bubble';
  bubble.setAttribute('role', 'status');
  bubble.setAttribute('aria-live', 'polite');

  const isMobile = isMobileWhisper();
  if (isMobile) {
    bubble.classList.add('mobile');
  }

  // Measure full content size offscreen
  bubble.innerHTML = '<div class="whisper-content"><span class="whisper-heart">♡</span><span class="whisper-text">' + escapeHtml(line) + '</span></div>';
  bubble.style.visibility = 'hidden';
  bubble.style.position = 'fixed';
  bubble.style.left = '-9999px';
  bubble.style.top = '-9999px';
  container.appendChild(bubble);

  const w = bubble.offsetWidth;
  const h = bubble.offsetHeight;

  const pos = findWhisperPosition(w, h);
  if (!pos) {
    if (bubble.parentNode) bubble.parentNode.removeChild(bubble);
    scheduleNextWhisper();
    return;
  }

  if (countsTowardStep) {
    whisperState.stepBubbleCount++;
  }

  // Advance counter ONLY when bubble is actually positioned and shown
  if (!whisperState.counters) whisperState.counters = {};
  if (poolName) {
    whisperState.counters[poolName] = (whisperState.counters[poolName] || 0) + 1;
  }

  const vv = window.visualViewport;
  const vpW = vv ? vv.width : window.innerWidth;
  const vpH = vv ? vv.height : window.innerHeight;
  const vpLeft = vv ? vv.offsetLeft : 0;
  const vpTop = vv ? vv.offsetTop : 0;

  if (pos.isMobile) {
    bubble.classList.add('mobile');
    bubble.classList.add(pos.lane === 'top' ? 'lane-top' : 'lane-bottom');
    bubble.classList.add(pos.align === 'right' ? 'align-right' : 'align-left');
    bubble.style.left = '';
    bubble.style.top = '';

    const candX = pos.align === 'left' ? (vpLeft + 14) : (vpLeft + vpW - 14 - w);
    const candY = pos.lane === 'bottom' ? (vpTop + vpH - 14 - h) : (vpTop + 12);
    whisperState.lastPosition = {
      left: candX,
      top: candY,
      right: candX + w,
      bottom: candY + h,
      width: w,
      height: h
    };

    whisperState.mobileAlign = (pos.align === 'left' ? 'right' : 'left');
  } else {
    whisperState.lastPosition = {
      left: pos.x,
      top: pos.y,
      right: pos.x + w,
      bottom: pos.y + h,
      width: w,
      height: h
    };

    bubble.style.left = Math.round(pos.x) + 'px';
    bubble.style.top = Math.round(pos.y) + 'px';
    applyTailDirection(bubble, pos.x, pos.y, w, h);

    const randomRot = (Math.random() * 4 - 2).toFixed(1) + 'deg';
    bubble.style.setProperty('--bubble-rot', randomRot);
  }

  bubble.style.visibility = '';
  whisperState.activeBubbleEl = bubble;

  const minShowMs = (CONFIG.whispers && CONFIG.whispers.minShowMs) || 4500;
  const perCharMs = (CONFIG.whispers && CONFIG.whispers.perCharMs) || 60;
  const typingMs = (CONFIG.whispers && CONFIG.whispers.typingMs) || 700;
  const charCount = line.length;
  const defaultDuration = Math.max(minShowMs, 2000 + charCount * perCharMs);
  const showDuration = (poolName === 'noApproach' && CONFIG.whispers && CONFIG.whispers.noApproachShowMs)
    ? CONFIG.whispers.noApproachShowMs
    : defaultDuration;
  bubble.style.setProperty('--drift-duration', showDuration + 'ms');

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function handleFadeOut() {
    bubble.classList.add('fading-out');

    // Ambient gap timer starts when previous bubble starts to fade out (except for event reactions like noApproach)
    if (poolName !== 'noApproach') {
      scheduleNextWhisper();
    }

    setTimeout(() => {
      if (bubble.parentNode) bubble.parentNode.removeChild(bubble);
      if (whisperState.activeBubbleEl === bubble) {
        whisperState.activeBubbleEl = null;
      }
    }, 450);
  }

  if (immediate || prefersReduced) {
    bubble.classList.add('visible');
    whisperState.dismissTimer = setTimeout(handleFadeOut, showDuration);
  } else {
    // Show typing dots first
    bubble.innerHTML = '<div class="whisper-typing"><span class="whisper-typing-dot"></span><span class="whisper-typing-dot"></span><span class="whisper-typing-dot"></span></div>';
    bubble.classList.add('visible');
    bubble.style.opacity = '1';

    whisperState.activeTimer = setTimeout(() => {
      if (whisperState.activeBubbleEl !== bubble) return;
      if (pos.isMobile) {
        bubble.innerHTML = '<div class="whisper-content crossfade-in"><span class="whisper-heart">♡</span><span class="whisper-text">' + escapeHtml(line) + '</span></div>';
      } else {
        bubble.innerHTML = '<div class="whisper-content"><span class="whisper-heart">♡</span><span class="whisper-text">' + escapeHtml(line) + '</span></div>';
        bubble.classList.add('morphing');

        setTimeout(() => {
          if (whisperState.activeBubbleEl === bubble) {
            bubble.classList.remove('morphing');
            bubble.classList.add('visible');
          }
        }, 350);
      }

      whisperState.dismissTimer = setTimeout(handleFadeOut, showDuration);
    }, typingMs);
  }
}

/**
 * Triggers a reactive whisper (e.g. customOpened)
 */
function whisperReaction(reactionKey) {
  if (isWhisperBlocked()) return;

  const msgs = (CONFIG.whispers && CONFIG.whispers.messages) || {};
  const list = sanitizeWhisperLines(msgs[reactionKey]);
  if (!list || list.length === 0) return;

  const line = getNextMessage(reactionKey);
  if (!line) return;

  dismissActiveBubble(true);
  clearTimeout(whisperState.scheduleTimer);
  clearTimeout(whisperState.reactionTimer);

  const delay = reactionKey === 'customOpened' ? 600 : 500;
  whisperState.reactionTimer = setTimeout(() => {
    if (isWhisperBlocked()) return;
    showWhisper(line, reactionKey, false);
  }, delay);
}

/**
 * Triggers an immediate whisper reaction when the user approaches/dodges the No button
 */
function whisperNoApproach() {
  if (isWhisperBlocked()) return;

  const now = Date.now();
  const cooldown = (CONFIG.whispers && CONFIG.whispers.noApproachCooldownMs) || 2000;
  if (whisperState.lastNoApproachTime && (now - whisperState.lastNoApproachTime < cooldown)) {
    return;
  }

  const line = getNextMessage('noApproach');
  if (!line) return;

  whisperState.lastNoApproachTime = now;
  dismissActiveBubble(true);
  clearTimeout(whisperState.scheduleTimer);
  showWhisper(line, 'noApproach', false, true);
}

/**
 * Arms the 12-second inactivity timer for Step 1
 */
function armStep1IdleTimer() {
  clearTimeout(whisperState.step1IdleTimer);
  if (whisperState.currentStep !== 'step1') return;
  if (whisperState.step1IdleShown) return;
  if (isWhisperBlocked()) return;

  const idleMs = (CONFIG.whispers && CONFIG.whispers.step1IdleMs) || 12000;
  whisperState.step1IdleTimer = setTimeout(() => {
    if (whisperState.currentStep !== 'step1') return;
    if (whisperState.step1IdleShown) return;
    if (isWhisperBlocked()) {
      armStep1IdleTimer();
      return;
    }

    const line = getNextMessage('step1Idle');
    if (!line) return;

    showWhisper(line, 'step1Idle', false);
    whisperState.step1IdleShown = true;
  }, idleMs);
}

/**
 * Updates current step and schedules first bubble after firstDelayMs
 */
function whisperSetStep(newStep) {
  if (!CONFIG.whispers || CONFIG.whispers.enabled === false) return;
  if (newStep === 'pickTime') {
    // pickDayAmbient must continue uninterrupted through time picking without switching or resetting
    return;
  }
  if (whisperState.currentStep === newStep) return;

  whisperState.currentStep = newStep;
  whisperState.stepBubbleCount = 0;

  clearTimeout(whisperState.scheduleTimer);
  clearTimeout(whisperState.activeTimer);
  clearTimeout(whisperState.dismissTimer);
  clearTimeout(whisperState.reactionTimer);

  dismissActiveBubble(true);

  if (newStep === 'rejected') {
    clearTimeout(whisperState.step1IdleTimer);
    return;
  }

  if (newStep === 'step1') {
    armStep1IdleTimer();
    return;
  }

  clearTimeout(whisperState.step1IdleTimer);

  const delay = (CONFIG.whispers && typeof CONFIG.whispers.firstDelayMs === 'number')
    ? CONFIG.whispers.firstDelayMs
    : 2500;
  scheduleNextWhisper(delay);
}

/**
 * Initializes the whisper bubbles engine
 */
function initWhispers() {
  if (!CONFIG.whispers || CONFIG.whispers.enabled === false) return;

  // Track user activity to reset Step 1 idle timer
  function onStep1Interaction() {
    if (whisperState.currentStep === 'step1' && !whisperState.step1IdleShown) {
      armStep1IdleTimer();
    }
  }

  ['pointerdown', 'keydown', 'touchstart'].forEach(evt => {
    window.addEventListener(evt, onStep1Interaction, { passive: true });
  });

  // Hook into dodge handler for immediate noApproach reaction and idle reset
  if (typeof executeDodge === 'function') {
    const origExecuteDodge = executeDodge;
    executeDodge = function(cursorX, cursorY) {
      origExecuteDodge(cursorX, cursorY);
      whisperNoApproach();
      onStep1Interaction();
    };
  }

  // Pause whispers when text input has focus
  window.addEventListener('focusin', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT')) {
      dismissActiveBubble(true);
    }
  });

  window.addEventListener('focusout', (e) => {
    if (!isWhisperBlocked()) {
      if (whisperState.currentStep === 'step1') {
        armStep1IdleTimer();
      } else {
        scheduleNextWhisper((CONFIG.whispers && CONFIG.whispers.gapMinMs) || 2000);
      }
    }
  });

  // Visibility change handling
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearTimeout(whisperState.scheduleTimer);
      clearTimeout(whisperState.activeTimer);
      clearTimeout(whisperState.dismissTimer);
      clearTimeout(whisperState.reactionTimer);
      clearTimeout(whisperState.step1IdleTimer);
      dismissActiveBubble(true);
    } else {
      if (!isWhisperBlocked()) {
        if (whisperState.currentStep === 'step1') {
          armStep1IdleTimer();
        } else {
          scheduleNextWhisper((CONFIG.whispers && CONFIG.whispers.gapMinMs) || 2000);
        }
      }
    }
  });

  // Keep visualViewport updated for mobile browser chrome changes
  updateVisualViewport();
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', updateVisualViewport, { passive: true });
    window.visualViewport.addEventListener('scroll', updateVisualViewport, { passive: true });
  }
  window.addEventListener('resize', updateVisualViewport, { passive: true });

  // Initial step scheduling
  whisperState.currentStep = 'step1';
  whisperState.stepBubbleCount = 0;
  armStep1IdleTimer();
}

/* FLOATING HEARTS BACKGROUND AMBIENCE */
function initBackgroundHearts() {
  const container = document.getElementById('hearts-container');
  if (!container) return;
  container.innerHTML = "";

  const heartIcons = ['❤️', '💖', '🌸', '✨', '💕', '🌙'];
  const count = 18;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = heartIcons[i % heartIcons.length];

    const size = Math.floor(14 + Math.random() * 18);
    const duration = (7 + Math.random() * 8).toFixed(1);
    const delay = (Math.random() * 10).toFixed(1);
    const left = (Math.random() * 96).toFixed(1);
    const rot = Math.floor(-35 + Math.random() * 70);

    heart.style.setProperty('--size', `${size}px`);
    heart.style.setProperty('--duration', `${duration}s`);
    heart.style.setProperty('--delay', `${delay}s`);
    heart.style.setProperty('--left', `${left}%`);
    heart.style.setProperty('--rot', `${rot}deg`);

    container.appendChild(heart);
  }
}

/* LIGHTWEIGHT CELEBRATORY CONFETTI ENGINE (Vanilla Canvas, 0 dependencies) */
let confettiAnimationId = null;

function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Match viewport size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#ff4d79', '#ffd166', '#ff9e7d', '#ff6b8b', '#ff758c', '#ffffff', '#e0aaff'];
  const particles = [];
  const particleCount = 140;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() * 80 - 40),
      y: canvas.height * 0.45,
      type: Math.random() > 0.4 ? 'heart' : 'disc',
      color: colors[Math.floor(Math.random() * colors.length)],
      radius: 5 + Math.random() * 6,
      vx: (Math.random() - 0.5) * 16,
      vy: -10 - Math.random() * 12,
      gravity: 0.38 + Math.random() * 0.1,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 8,
      opacity: 1,
      fadeSpeed: 0.007 + Math.random() * 0.006
    });
  }

  const reqAnimFrame = window.requestAnimationFrame || ((cb) => setTimeout(cb, 16));
  const cancelAnimFrame = window.cancelAnimationFrame || ((id) => clearTimeout(id));

  if (confettiAnimationId) {
    cancelAnimFrame(confettiAnimationId);
  }

  function renderConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let activeParticles = 0;

    for (let p of particles) {
      if (p.opacity <= 0 || p.y > canvas.height + 40) continue;

      activeParticles++;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98; // air resistance
      p.rotation += p.rotationSpeed;
      p.opacity -= p.fadeSpeed;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);

      ctx.fillStyle = p.color;

      if (p.type === 'heart') {
        // Draw heart shape with bezier curves
        const s = p.radius * 0.85;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s, -s * 0.7, -s * 1.5, s * 0.3, 0, s * 1.5);
        ctx.bezierCurveTo(s * 1.5, s * 0.3, s, -s * 0.7, 0, s * 0.3);
        ctx.fill();
      } else {
        // Draw confetti disc/rectangle
        ctx.beginPath();
        ctx.ellipse(0, 0, p.radius, p.radius * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    if (activeParticles > 0) {
      confettiAnimationId = reqAnimFrame(renderConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  renderConfetti();
}

// Window resize listener for canvas
window.addEventListener('resize', () => {
  const canvas = document.getElementById('confetti-canvas');
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});

/* MAIN APPLICATION INITIALIZER */
function initApp() {

  // 0. Check for #reset in URL to reset for testing
  checkUrlReset();

  // 1. Theme application
  try {
    applyTheme();
  } catch (err) {
    console.error("[Init Error: Theme]", err);
  }

  // 2. Check if previously rejected
  try {
    const isRejected = localStorage.getItem(REJECTED_STORAGE_KEY);
    if (isRejected === 'true') {
      showFinalRejectedScreenDirectly();
      return;
    }
  } catch (err) {
    console.warn("Could not check rejection status:", err);
  }

  // 3. Content population
  try {
    initContent();
  } catch (err) {
    console.error("[Init Error: Content]", err);
  }

  // 4. Step 1 dodge mechanics and Yes click
  try {
    initDodgeMechanics();
  } catch (err) {
    console.error("[Init Error: Dodge Mechanics]", err);
  }

  // 4. Step 2 custom date toggle & inputs
  try {
    initCustomDateHandlers();
  } catch (err) {
    console.error("[Init Error: Custom Date Handlers]", err);
  }

  // 5. Step 2 Confirm button click listener
  try {
    const confirmBtn = document.getElementById('confirm-date-btn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        if (!selectedOption) return;
        confirmAndShowFinal(selectedOption);
      });
    }
  } catch (err) {
    console.error("[Init Error: Confirm Button Handler]", err);
  }

  // 6. Step 3 "Change date" button click listener
  try {
    const changeDateBtn = document.getElementById('change-date-btn');
    if (changeDateBtn) {
      changeDateBtn.addEventListener('click', () => {
        goToStep('step-pick-day');
        if (selectedOption) {
          if (selectedOption.type === 'proposed' && typeof selectedOption.index === 'number') {
            selectProposedDate(selectedOption.index);
          } else if (selectedOption.type === 'custom') {
            const customToggle = document.getElementById('custom-toggle-btn');
            const customCollapse = document.getElementById('custom-inputs-collapse');
            const customDateInput = document.getElementById('custom-date-input');
            const customTimeInput = document.getElementById('custom-time-input');
            if (customToggle && customCollapse) {
              customCollapse.classList.add('open');
              customToggle.classList.add('active');
              customToggle.setAttribute('aria-expanded', 'true');
            }
            if (customDateInput && selectedOption.isoDate) customDateInput.value = selectedOption.isoDate;
            if (customTimeInput && selectedOption.time) customTimeInput.value = selectedOption.time;
            updateConfirmButtonState();
          }
        }
      });
    }
  } catch (err) {
    console.error("[Init Error: Change Date Handler]", err);
  }

  // 7. Check localStorage for previous saved confirmation
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsedData = JSON.parse(saved);
      if (parsedData && parsedData.type) {
        selectedOption = parsedData;
        populateFinalCard(parsedData);
        goToStep('step-final');
      }
    }
  } catch (err) {
    console.warn("[Init Storage] Could not retrieve saved selection from localStorage:", err);
  }

}

// Ensure initApp runs whether the DOM is still loading or already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
