document.documentElement.classList.remove("no-js");

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const messages = {  nl: {
    greeting: "Hoi, ik help je in een paar korte stappen.",
    askName: "Wat is je naam?",
    askEmail: "Hoe kan ik je bereiken? (e-mail of telefoonnummer)",
    askCompany: "Voor welk bedrijf werk je? Dit is optioneel.",
    askUrgency: "Hoe dringend is dit?",
    askDetails: "Wil je nog iets extra meegeven? Dit is optioneel.",
    ready: "Klaar. Ik vat je aanvraag samen.",
    summaryPrefix: "Ik heb genoteerd:",
    summaryUrgency: {
      "Zo snel mogelijk": "zo snel mogelijk",
      "Deze week": "deze week",
      "Deze maand": "deze maand",
      "Gewoon verkennen": "gewoon verkennen",
    },
    submitting: "Even geduld, ik verstuur je aanvraag...",
    success: "Bedankt! Ik neem zo snel mogelijk contact met je op.",
    errorMsg: "Er is iets fout gelopen. Je kan me ook rechtstreeks bereiken via ",
    summarySubject: "Nieuwe intake via Rhino Digital",
    placeholderDetails: "Wat wil je verbeteren, automatiseren of vereenvoudigen?",
  },
  en: {
    greeting: "Hi, I'll guide you through a few quick steps.",
    askName: "What's your name?",
    askEmail: "How can I reach you? (email or phone number)",
    askCompany: "Which company do you work for? Optional.",
    askUrgency: "How urgent is this?",
    askDetails: "Anything else you'd like to add? Optional.",
    ready: "Done. I'll summarize your request.",
    summaryPrefix: "I noted:",
    summaryUrgency: {
      "Zo snel mogelijk": "as soon as possible",
      "Deze week": "this week",
      "Deze maand": "this month",
      "Gewoon verkennen": "just exploring",
    },
    submitting: "One moment, sending your request...",
    success: "Thank you! I'll get back to you as soon as possible.",
    errorMsg: "Something went wrong. You can also reach me directly at ",
    summarySubject: "New inquiry via Rhino Digital",
    placeholderDetails: "What do you want to improve, automate, or simplify?",
  },
  fr: {
    greeting: "Bonjour, je vous accompagne en quelques étapes rapides.",
    askName: "Comment vous appelez-vous ?",
    askEmail: "Comment puis-je vous joindre ? (e-mail ou numéro de téléphone)",
    askCompany: "Pour quelle entreprise travaillez-vous ? Facultatif.",
    askUrgency: "Quel est le niveau d'urgence ?",
    askDetails: "Souhaitez-vous ajouter autre chose ? Facultatif.",
    ready: "C'est prêt. Je résume votre demande.",
    summaryPrefix: "J'ai noté :",
    summaryUrgency: {
      "Zo snel mogelijk": "dès que possible",
      "Deze week": "cette semaine",
      "Deze maand": "ce mois-ci",
      "Gewoon verkennen": "simplement pour explorer",
    },
    submitting: "Un instant, j'envoie votre demande...",
    success: "Merci ! Je vous recontacterai dès que possible.",
    errorMsg: "Une erreur s'est produite. Vous pouvez aussi me contacter directement à ",
    summarySubject: "Nouvelle demande via Rhino Digital",
    placeholderDetails: "Que souhaitez-vous améliorer, automatiser ou simplifier ?",
  },
};

const translations = {
  nl: {
    brandName: "Rhino Digital",
    tagline: "Praktische automatisering en digitale optimalisatie",
    navServices: "Diensten",
    navProcess: "Werkwijze",
    navContact: "Contact",
    heroEyebrow: "Praktische automatisering en digitale optimalisatie",
    heroTitle: "Praktische automatisering en digitale optimalisatie",
    heroLead: "Van digitale representatie tot een goed geoliede machine. Repetitief werk wegwerken, systemen koppelen en lichte tools bouwen die écht renderen.",
    heroPrimaryCta: "Start de intake",
    heroSecondaryCta: "Bekijk LinkedIn",
    heroPoint1: "Korte intake in chatvorm",
    heroPoint2: "Voorkeurskanaal voor follow-up",
    heroPoint3: "Ruimte voor extra context",
    cardLabel: "Waar gaat het over",
    cardTitle: "Geef jezelf terug de focus op wat écht telt",
    cardBody: "Of je nu solo werkt of een team aanstuurt — de digitale kant van je werk hoeft geen last te zijn. Ik help je daar doorheen.",
    servicesEyebrow: "Wat ik doe",
    servicesTitle: "Kleine ingrepen met duidelijke impact",
    service1Title: "Workflow automation",
    service1Body: "Herhaalbare taken automatiseren zodat teams minder tijd verliezen aan administratie.",
    service2Title: "Integraties",
    service2Body: "Tools en databronnen koppelen zodat informatie niet dubbel ingevoerd hoeft te worden.",
    service3Title: "Internal tools",
    service3Body: "Lichte interne tools bouwen voor goedkeuringsflows, statusupdates en repetitieve taken.",
    service4Title: "Reporting dashboards",
    service4Body: "Overzichtelijke dashboards maken zodat teams sneller kunnen zien wat aandacht nodig heeft.",
    service5Title: "Small web work",
    service5Body: "Compacte landingspagina’s en sites die snel live kunnen en professioneel aanvoelen.",
    audienceEyebrow: "Wie ik help",
    audienceTitle: "Voor mensen die slimmer willen werken",
    audience1: "Belgische kmo’s",
    audience2: "Founders en zaakvoerders",
    audience3: "Operations en office managers",
    audience4: "Teams met repetitieve administratie",
    audience5: "Iemand met een brandend idee die een startup partner zoekt",
    audience6: "Nieuwe of bestaande bedrijven die een starter website nodig hebben",
    whyEyebrow: "Waarom samenwerken",
    whyTitle: "Technische diepgang, zonder gedoe",
    why1Title: "Jarenlange ervaring in het vak",
    why1Body: "Ervaring met systemen bouwen die stabiel, onderhoudbaar en praktisch inzetbaar zijn.",
    why2Title: "Enterprise delivery achtergrond",
    why2Body: "Gewend om gestructureerd te werken en oplossingen netjes op te leveren.",
    why3Title: "No-nonsense aanpak",
    why3Body: "Eerst de bottleneck begrijpen, dan klein en gericht oplossen.",
    processEyebrow: "Hoe ik werk",
    processTitle: "Kort traject, duidelijke stappen",
    process1: "We bekijken samen waar tijd verloren gaat.",
    process2: "Ik stel een klein, haalbaar voorstel voor.",
    process3: "Ik bouw en lever snel op.",
    process4: "We sturen bij als dat nodig is.",
    contactEyebrow: "Contact",
    contactTitle: "Start met een snelle intake",
    contactLead: "Vul de chat in met je contactgegevens, urgentie en eventuele extra info.",
    chatKicker: "Rhino Digital intake",
    chatTitle: "Snel en eenvoudig",
    chatNote: "Een paar korte stappen, daarna volgt een gerichte reactie.",
    labelName: "Naam",
    labelEmail: "Contactgegeven",
    labelCompany: "Bedrijf (optioneel)",
    labelUrgency: "Urgentie",
    urgency1: "Zo snel mogelijk",
    urgency2: "Deze week",
    urgency3: "Deze maand",
    urgency4: "Gewoon verkennen",
    labelDetails: "Extra info (optioneel)",
    nextButton: "Volgende",
    submitButton: "Versturen",
    undoButton: "← Vorige",
    summaryTitle: "Samenvatting",
    skipLink: "Naar inhoud springen",
    cookieText: "We gebruiken Google Analytics om anoniem bij te houden hoe bezoekers de site gebruiken, zodat we de site kunnen verbeteren.",
    cookieAccept: "Akkoord",
    cookieDecline: "Weigeren",
  },
  en: {
    brandName: "Rhino Digital",
    tagline: "Practical automation and digital solutions",
    navServices: "Services",
    navProcess: "Process",
    navContact: "Contact",
    heroEyebrow: "Practical automation and digital solutions",
    heroTitle: "Practical automation and digital solutions",
    heroLead: "From digital presence to a well-oiled machine. Remove repetitive work, connect systems and build lightweight tools that truly deliver.",
    heroPrimaryCta: "Start intake",
    heroSecondaryCta: "View LinkedIn",
    heroPoint1: "Quick chat-based intake",
    heroPoint2: "Your preferred follow-up channel",
    heroPoint3: "Room for extra context",
    cardLabel: "What it's about",
    cardTitle: "Get back your focus on what really matters",
    cardBody: "Whether you work solo or lead a team — the digital side of your work doesn't have to be a burden. I'll help you through it.",
    servicesEyebrow: "What I do",
    servicesTitle: "Small changes with clear impact",
    service1Title: "Workflow automation",
    service1Body: "Automate repeatable tasks so teams spend less time on administration.",
    service2Title: "Integrations",
    service2Body: "Connect tools and data sources so information does not need to be entered twice.",
    service3Title: "Internal tools",
    service3Body: "Build lightweight internal tools for approvals, status updates, and repetitive tasks.",
    service4Title: "Reporting dashboards",
    service4Body: "Create clear dashboards so teams can see what needs attention faster.",
    service5Title: "Small web work",
    service5Body: "Compact landing pages and sites that can go live quickly and still feel professional.",
    audienceEyebrow: "Who I help",
    audienceTitle: "For people who want to work smarter",
    audience1: "Belgian SMEs",
    audience2: "Founders and owners",
    audience3: "Operations and office managers",
    audience4: "Teams with repetitive admin",
    audience5: "Someone sitting on a burning idea looking for a startup partner",
    audience6: "New or existing businesses that need a starter website",
    whyEyebrow: "Why work together",
    whyTitle: "Technical depth without the hassle",
    why1Title: "Years of hands-on experience",
    why1Body: "Experience building systems that are stable, maintainable, and useful in practice.",
    why2Title: "Enterprise delivery background",
    why2Body: "Used to working in a structured way and delivering polished solutions.",
    why3Title: "No-nonsense approach",
    why3Body: "Understand the bottleneck first, then solve it in a focused way.",
    processEyebrow: "How I work",
    processTitle: "Short process, clear steps",
    process1: "We look at where time gets lost.",
    process2: "I propose a small, realistic fix.",
    process3: "I build and deliver quickly.",
    process4: "We refine if needed.",
    contactEyebrow: "Contact",
    contactTitle: "Start with a quick intake",
    contactLead: "Fill in the chat with your contact details, preferred contact method, urgency, and any extra context.",
    chatKicker: "Rhino Digital intake",
    chatTitle: "Quick and easy",
    chatNote: "A few short steps, then a focused reply.",
    labelName: "Name",
    labelEmail: "Contact info",
    labelCompany: "Company (optional)",
    labelUrgency: "Urgency",
    urgency1: "As soon as possible",
    urgency2: "This week",
    urgency3: "This month",
    urgency4: "Just exploring",
    labelDetails: "Extra information (optional)",
    nextButton: "Next",
    submitButton: "Send",
    undoButton: "← Back",
    summaryTitle: "Summary",
    skipLink: "Skip to content",
    cookieText: "We use Google Analytics to anonymously track how visitors use the site, so we can improve it.",
    cookieAccept: "Accept",
    cookieDecline: "Decline",
  },
  fr: {
    brandName: "Rhino Digital",
    tagline: "Practical automation and digital solutions",
    navServices: "Services",
    navProcess: "Méthode",
    navContact: "Contact",
    heroEyebrow: "Automatisation pratique et solutions numériques",
    heroTitle: "Automatisation pratique et solutions numériques",
    heroLead: "De la présence digitale à une machine bien huilée. Supprimer les tâches répétitives, connecter les systèmes et créer des outils légers qui donnent vraiment des résultats.",
    heroPrimaryCta: "Commencer l’intake",
    heroSecondaryCta: "Voir LinkedIn",
    heroPoint1: "Intake rapide en chat",
    heroPoint2: "Canal de suivi préféré",
    heroPoint3: "Espace pour du contexte supplémentaire",
    cardLabel: "De quoi s'agit-il",
    cardTitle: "Retrouvez le focus sur ce qui compte vraiment",
    cardBody: "Que vous travailliez seul ou que vous dirigiez une équipe — le côté numérique de votre travail ne doit pas être un fardeau. Je vous aide à le traverser.",
    servicesEyebrow: "Ce que je fais",
    servicesTitle: "Petits changements, impact clair",
    service1Title: "Automatisation des workflows",
    service1Body: "Automatiser les tâches répétitives pour réduire le temps passé à l’administration.",
    service2Title: "Intégrations",
    service2Body: "Connecter les outils et les données pour éviter les doubles saisies.",
    service3Title: "Outils internes",
    service3Body: "Créer des outils internes légers pour les validations, statuts et tâches répétitives.",
    service4Title: "Tableaux de bord",
    service4Body: "Construire des dashboards clairs pour voir plus vite ce qui mérite attention.",
    service5Title: "Petits travaux web",
    service5Body: "Des pages et sites compacts qui peuvent être mis en ligne rapidement et rester professionnels.",
    audienceEyebrow: "Qui j’aide",
    audienceTitle: "Pour les personnes qui veulent travailler plus intelligemment",
    audience1: "PME belges",
    audience2: "Fondateurs et dirigeants",
    audience3: "Responsables opérations et office managers",
    audience4: "Équipes avec beaucoup d’administration répétitive",
    audience5: "Une personne avec une idée forte à la recherche d’un partenaire startup",
    audience6: "Une entreprise nouvelle ou existante qui a besoin d’un site starter",
    whyEyebrow: "Pourquoi travailler ensemble",
    whyTitle: "De la profondeur technique, sans complications",
    why1Title: "Des années d'expérience dans le métier",
    why1Body: "Expérience de systèmes stables, maintenables et utiles en pratique.",
    why2Title: "Expérience de livraison enterprise",
    why2Body: "Habitude de travailler de façon structurée et de livrer proprement.",
    why3Title: "Approche sans blabla",
    why3Body: "Comprendre le point de blocage puis résoudre de manière ciblée.",
    processEyebrow: "Ma méthode",
    processTitle: "Court, clair, efficace",
    process1: "On regarde où le temps se perd.",
    process2: "Je propose une correction simple et réaliste.",
    process3: "Je construis et livre rapidement.",
    process4: "On ajuste si nécessaire.",
    contactEyebrow: "Contact",
    contactTitle: "Commencez par un intake rapide",
    contactLead: "Remplissez le chat avec vos coordonnées, votre préférence de contact, l’urgence et tout contexte utile.",
    chatKicker: "Intake Rhino Digital",
    chatTitle: "Rapide et simple",
    chatNote: "Quelques étapes courtes, puis une réponse ciblée.",
    labelName: "Nom",
    labelEmail: "Contact",
    labelCompany: "Entreprise (facultatif)",
    labelUrgency: "Urgence",
    urgency1: "Dès que possible",
    urgency2: "Cette semaine",
    urgency3: "Ce mois-ci",
    urgency4: "Simplement pour explorer",
    labelDetails: "Informations supplémentaires (facultatif)",
    nextButton: "Suivant",
    submitButton: "Envoyer",
    undoButton: "← Retour",
    summaryTitle: "Résumé",
    skipLink: "Aller au contenu",
    cookieText: "Nous utilisons Google Analytics pour suivre anonymement la façon dont les visiteurs utilisent le site, afin de l'améliorer.",
    cookieAccept: "Accepter",
    cookieDecline: "Refuser",
  },
};

const state = {
  step: 0,
  lang: "nl",
  data: {
    name: "",
    email: "",
    company: "",
    urgency: "Deze maand",
    details: "",
  },
};

// Paste your Google Apps Script deployment URL here
const ENDPOINT = atob(
  "aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J4SFNiZVVLYW5rTFlxZmpFeGdoa1Zrcmw1dlcta0x0ZVd3dXpic1N5MXpkeFlXdnhHVE13dWF2dWpsM3J5V2hZOW4vZXhlYw=="
);

const chatLog = document.getElementById("chatLog");
const chatForm = document.getElementById("chatForm");
const nextButton = document.getElementById("nextButton");
const undoButton = document.getElementById("undoButton");
const detailInput = document.getElementById("details");

const steps = [
  { field: "name", id: "fieldName", type: "input" },
  { field: "email", id: "fieldEmail", type: "input" },
  { field: "company", id: "fieldCompany", type: "input" },
  { field: "urgency", id: "fieldUrgency", type: "choice" },
  { field: "details", id: "fieldDetails", type: "input" },
];

function t(key) {
  return translations[state.lang][key] ?? translations.nl[key] ?? key;
}

function m(key) {
  return messages[state.lang][key] ?? messages.nl[key] ?? key;
}

function setLang(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) {
      node.textContent = translations[lang][key];
    }
  });

  detailInput.placeholder = m("placeholderDetails");

  document.querySelectorAll(".lang-button").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  if (state.step < steps.length) showStep(state.step);
  renderMessages();
}

function appendBubble(content, isUser = false) {
  const bubble = document.createElement("article");
  bubble.className = `chat-bubble${isUser ? " is-user" : ""}`;
  bubble.innerHTML = content;
  chatLog.appendChild(bubble);
}

function renderMessages() {
  chatLog.innerHTML = "";
  appendBubble(`<strong>Rhino Digital</strong><p>${m("greeting")}</p>`);
  appendBubble(`<p>${m("askName")}</p>`);
  if (state.step > 0) appendBubble(`<strong>${t("labelName")}</strong><p>${escapeHtml(state.data.name)}</p>`, true);
  if (state.step > 1) {
    appendBubble(`<p>${m("askEmail")}</p>`);
    appendBubble(`<strong>${t("labelEmail")}</strong><p>${escapeHtml(state.data.email)}</p>`, true);
  }
  if (state.step > 2) {
    appendBubble(`<p>${m("askCompany")}</p>`);
    appendBubble(`<strong>${t("labelCompany")}</strong><p>${escapeHtml(state.data.company) || "—"}</p>`, true);
  }
  if (state.step > 3) {
    appendBubble(`<p>${m("askUrgency")}</p>`);
    const urgencyLabel = m("summaryUrgency")[state.data.urgency] || escapeHtml(state.data.urgency);
    appendBubble(`<strong>${t("labelUrgency")}</strong><p>${urgencyLabel}</p>`, true);
  }
  if (state.step > 4) {
    appendBubble(`<p>${m("askDetails")}</p>`);
    appendBubble(`<strong>${t("labelDetails")}</strong><p>${escapeHtml(state.data.details) || "—"}</p>`, true);
    appendBubble(`<p>${m("ready")}</p>`);
  }
}

function showStep(index) {
  steps.forEach((step, currentIndex) => {
    const element = document.getElementById(step.id);
    element.classList.toggle("hidden", currentIndex !== index);
  });

  const current = steps[index];
  const isLast = index === steps.length - 1;
  const isChoice = current?.type === "choice";

  // Pre-fill existing values so undo feels natural
  if (current) {
    if (current.type === "input") {
      const input = document.getElementById(current.field);
      if (input) input.value = state.data[current.field] || "";
    } else if (current.type === "choice") {
      const existing = state.data[current.field];
      if (existing) {
        const radio = document.querySelector(`input[name="${current.field}"][value="${existing}"]`);
        if (radio) radio.checked = true;
      }
    }
  }

  // Choice steps auto-submit on click — no send button needed
  nextButton.classList.toggle("hidden", isChoice);
  const labelSpan = nextButton.querySelector(".sr-only");
  if (labelSpan) labelSpan.textContent = isLast ? t("submitButton") : t("nextButton");
  nextButton.disabled = false;

  // Undo available from step 1 onwards
  undoButton.classList.toggle("hidden", index === 0);
}

function getCurrentField() {
  return steps[state.step];
}

function focusCurrentField() {
  const current = getCurrentField();
  const element = document.getElementById(current.id);
  const focusTarget = element.querySelector("input, textarea");
  if (focusTarget) focusTarget.focus();
}

function showSubmitError() {
  const bubble = chatLog.lastElementChild;
  bubble.innerHTML = `<p>${m("errorMsg")}<a href="mailto:rhino@rdigital.be">rhino@rdigital.be</a></p>`;
  chatLog.scrollTop = chatLog.scrollHeight;
}

async function submitForm() {
  appendBubble(`<p>${m("submitting")}</p>`);
  chatLog.scrollTop = chatLog.scrollHeight;

  // URLSearchParams avoids a CORS preflight — Apps Script handles it without issues
  const body = new URLSearchParams({
    name: state.data.name,
    contact: state.data.email,
    company: state.data.company || "—",
    urgency: state.data.urgency,
    details: state.data.details || "—",
    hp: document.querySelector('input[name="hp"]')?.value || "",
  });

  try {
    const res = await fetch(ENDPOINT, { method: "POST", body });

    if (res.ok) {
      chatLog.lastElementChild.innerHTML = `<p>${m("success")}</p>`;
    } else {
      showSubmitError();
    }
  } catch {
    showSubmitError();
  }

  chatLog.scrollTop = chatLog.scrollHeight;
}

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const current = getCurrentField();
  const formData = new FormData(chatForm);
  const value = String(formData.get(current.field) ?? "").trim();

  if (current.field === "name" && !value) {
    document.getElementById("name").reportValidity();
    return;
  }

  if (current.field === "email" && !value) {
    document.getElementById("email").focus();
    return;
  }

  if ((current.field === "urgency") && !value) return;

  state.data[current.field] = value;
  state.step += 1;
  renderMessages();

  if (state.step >= steps.length) {
    chatForm.classList.add("hidden");
    submitForm();
  } else {
    showStep(state.step);
    focusCurrentField();
  }
});

undoButton.addEventListener("click", () => {
  state.step -= 1;
  renderMessages();
  showStep(state.step);
  focusCurrentField();
});

document.querySelectorAll(".choice-row input, .choice-grid input").forEach((radio) => {
  radio.addEventListener("change", () => {
    setTimeout(() => chatForm.requestSubmit(), 80);
  });
});

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => setLang(button.dataset.lang));
});

// ========================
// Cookie consent + GA4
// ========================
const GA_ID = "G-GY8QDENFFK"; // Replace with your GA4 Measurement ID

function loadAnalytics() {
  if (!GA_ID || GA_ID === "G-XXXXXXXXXX") return;
  const s = document.createElement("script");
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag("js", new Date());
  gtag("config", GA_ID, { anonymize_ip: true });
}

const cookieBanner = document.getElementById("cookieBanner");
const cookieAcceptBtn = document.getElementById("cookieAccept");
const cookieDeclineBtn = document.getElementById("cookieDecline");

const savedConsent = localStorage.getItem("rdigital_consent");
if (savedConsent === "accepted") {
  loadAnalytics();
} else if (!savedConsent) {
  cookieBanner.classList.remove("hidden");
}

cookieAcceptBtn.addEventListener("click", () => {
  localStorage.setItem("rdigital_consent", "accepted");
  cookieBanner.classList.add("hidden");
  loadAnalytics();
});

cookieDeclineBtn.addEventListener("click", () => {
  localStorage.setItem("rdigital_consent", "declined");
  cookieBanner.classList.add("hidden");
});

// ========================
// Initialise
// ========================
setLang("nl");
