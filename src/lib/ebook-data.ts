export interface Stat {
  value: string;
  label: string;
}

export interface Chapter {
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  cards: { heading: string; body: string; accent: "primary" | "accent" | "tertiary" | "quaternary" }[];
  stat?: Stat;
}

export const CHAPTERS: Chapter[] = [
  {
    number: "01",
    title: "AI är inte längre en feature.",
    subtitle: "Det är infrastrukturen.",
    intro:
      "2026 är AI inbäddat i varje touchpoint — från första annonsvisningen till retention-mejlet sex månader senare. Frågan är inte om du använder AI, utan hur synligt det blir för kunden.",
    cards: [
      {
        heading: "Generativ sökning",
        body: "70% av Gen Z börjar sina köpresor i ChatGPT, Perplexity eller Gemini. SEO blir GEO — Generative Engine Optimization.",
        accent: "primary",
      },
      {
        heading: "Hyperpersonalisering",
        body: "Varje besökare ska känna att sajten är byggd för dem. Dynamiska hero-sektioner, copy och CTA:er — allt i realtid.",
        accent: "accent",
      },
      {
        heading: "Agentic commerce",
        body: "AI-agenter handlar åt användaren. Din produktdata måste vara läsbar för maskiner, inte bara för människor.",
        accent: "tertiary",
      },
    ],
    stat: { value: "73%", label: "av marknadsförare använder generativ AI dagligen 2026" },
  },
  {
    number: "02",
    title: "Content i en post-feed-värld.",
    subtitle: "Algoritmerna har vunnit. Nu då?",
    intro:
      "Feeds är döda. Gen Z scrollar vertikalt på TikTok, lyssnar på podcasts på 1.8x och söker svar i AI-chattar. Content-strategin måste byggas för fragmenterad uppmärksamhet — inte för en hemsida.",
    cards: [
      {
        heading: "Short-form först",
        body: "9-sekunders video som funkar utan ljud, utan kontext, utan logo. Hooken är allt.",
        accent: "quaternary",
      },
      {
        heading: "Audio renaissance",
        body: "Branded podcasts, ljudbrev, AI-genererade voice-overs. Öronen är den sista lediga skärmen.",
        accent: "primary",
      },
      {
        heading: "Long-form trust",
        body: "Djupa guides och e-böcker (precis som denna) bygger auktoritet som AI-svaren citerar tillbaka.",
        accent: "accent",
      },
    ],
    stat: { value: "8s", label: "är medelvärdet på en användares uppmärksamhet 2026" },
  },
  {
    number: "03",
    title: "First-party data eller dö.",
    subtitle: "Cookies är borta. För riktigt den här gången.",
    intro:
      "Tredjepartscookies är historia. iOS, Android och alla EU-direktiv har dödat tracking. De varumärken som vinner 2026 är de som äger sin egen relation med kunden — inte hyr den från Meta.",
    cards: [
      {
        heading: "Loyalty som data-motor",
        body: "Klubbar, communities och appar som ger värde i utbyte mot beteendedata. Frivilligt. Transparent.",
        accent: "tertiary",
      },
      {
        heading: "Server-side tracking",
        body: "GA4 är inte nog. Dataflöden måste gå via egen infrastruktur för att överleva ad-blockers och privacy-lagar.",
        accent: "quaternary",
      },
      {
        heading: "Predictive segments",
        body: "AI-modeller på din egen data slår vilken third-party audience som helst. Egen data = egen edge.",
        accent: "primary",
      },
    ],
    stat: { value: "0", label: "tredjepartscookies kvar i Chrome från Q2 2026" },
  },
  {
    number: "04",
    title: "Webben blir snabbare. Och konstigare.",
    subtitle: "Performance möter konst.",
    intro:
      "Generic SaaS-mallar är ute. 2026 vinner sajter som vågar — brutalism, typografi som stjäl scenen, scroll-storytelling och 60fps interaktioner. Men allt under 2 sekunder att ladda.",
    cards: [
      {
        heading: "Edge everything",
        body: "Render på edge, AI på edge, A/B-test på edge. Latens under 100ms överallt i världen.",
        accent: "accent",
      },
      {
        heading: "Motion som copy",
        body: "Animationer berättar saker som text inte kan. Framer Motion, GSAP, Lottie — verktygen är gratis. Modet är inte det.",
        accent: "tertiary",
      },
      {
        heading: "Brutal är det nya minimalt",
        body: "Stora typer, hårda kanter, oväntade färger. Designen ska stoppa scrollen, inte smälta in.",
        accent: "primary",
      },
    ],
    stat: { value: "1.8s", label: "är max LCP innan Google straffar dig" },
  },
];

export const PRINCIPLES = [
  { num: "01", text: "Bygg för maskiner OCH människor" },
  { num: "02", text: "Äg din data — hyr aldrig" },
  { num: "03", text: "Hastighet är en designprincip" },
  { num: "04", text: "Tråkigt konverterar inte" },
  { num: "05", text: "Distribuera där folk är" },
  { num: "06", text: "Mät det som rör sig pengar" },
];
