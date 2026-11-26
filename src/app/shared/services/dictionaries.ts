// All visible texts. German is the reference; English must have the same shape.
// Entries in [brackets] are placeholders that still need real content.
// One block of the privacy policy; "sub" renders as h3, "showContact" adds the controller contact block
type PrivacySection = {
  title: string;
  sub?: boolean;
  paragraphs: string[];
  items?: string[];
  closing?: string[];
  showContact?: boolean;
};

const de = {
  nav: {
    label: 'Hauptnavigation',
    why: 'Warum ich',
    skills: 'Skills',
    skillSet: 'Meine Skills',
    work: 'Projekte',
    contact: 'Kontakt',
    contactMe: 'Kontakt',
    home: 'Zum Seitenanfang',
    open: 'Menü öffnen',
    close: 'Menü schließen',
    language: 'Sprache wählen',
    next: 'Zum nächsten Bereich',
    toTop: 'Zum Seitenanfang',
    back: 'Zurück zur Startseite',
  },
  social: { email: 'E-Mail schreiben', linkedin: 'LinkedIn-Profil', github: 'GitHub-Profil' },
  hero: { photoAlt: 'Porträt von Matthias Tausch', city: 'Husum' },
  why: {
    title: 'Warum ich',
    text: 'Ich bin Frontend Developer mit Fokus auf moderne, performante und zugängliche Web-Anwendungen. Ich arbeite gerne mit TypeScript, durchdachten UI-Konzepten und sauberem, wartbarem Code – von der ersten Idee bis zum fertigen Interface.',
    iAm: 'Ich bin',
    located: 'in Husum zu Hause',
    remote: 'offen für Remote-Arbeit',
    cta: 'Schreib mir',
  },
  skills: {
    title: 'Meine Skills',
    intro:
      'Technologien und Methoden, die ich in Projekten konkret einsetze – ohne künstliche Prozentwerte.',
    challenge: 'Fordere mich',
    more: 'Ich lerne gerne dazu und arbeite mich in neue Technologien ein.',
    cta: 'Lass uns reden',
  },
  work: {
    title: 'Projekte',
    titleMore: 'Mehr Projekte',
    about: 'Über das Projekt',
    tech: 'Technologien',
    learned: 'Was ich gelernt habe',
    learnedTexts: {
      join: 'Arbeit im Team, JavaScript, Authentifizierung und Datenspeicherung mit Firebase sowie die Abstimmung und Kommunikation in der Gruppe.',
      pollo: 'Objektorientierte Programmierung mit JavaScript.',
      pokedex: 'Der Umgang mit einer API: Daten abrufen, auslesen und übersichtlich darstellen.',
      whatEat: 'Eine App von der Entwicklung bis zur Veröffentlichung: Arbeit mit Capacitor, Android Studio und der Google Play Console.',
    },
    live: 'Live testen',
    showMore: 'Mehr anzeigen',
    showLess: 'Weniger anzeigen',
    screenshot: 'Screenshot von',
    ongoing: 'Aktuelles Projekt',
    ongoingText: 'Derzeit arbeite ich an der Brunnen Bau Suite, einer Webanwendung und App für den professionellen, handwerklichen Bereich. Ich setze dabei die Wünsche echter Kunden um.',
    cta: 'Lass uns reden',
    descriptions: {
      join: 'Kanban-Board zur Aufgabenverwaltung mit Drag & Drop, Kontaktverwaltung und Login/Gastzugang. Die Daten werden über Firebase gespeichert.',
      pollo:
        "2D-Jump-'n'-Run im Browser mit Canvas-Rendering, Gegner-KI, Endgegner-Kampf und objektorientierter Spiellogik.",
      pokedex:
        'Web-App zum Durchsuchen und Filtern von Pokémon. Sie lädt Daten live über die PokéAPI und zeigt Details in einer Kartenansicht.',
      whatEat:
        'Android-App, die per Knopfdruck ein Gericht aus der eigenen Liste vorschlägt. Die Gerichte werden lokal auf dem Gerät gespeichert.',
    },
  },
  references: {
    title: 'Referenzen',
    carousel: 'Karussell',
    goTo: 'Referenz anzeigen',
    quote: '[Platzhalter: Hier folgt eine echte Referenz.]',
    name: '[Name]',
    project: '[Projekt]',
  },
  contact: {
    title: 'Kontakt',
    lead: 'Lass uns zusammenarbeiten.',
    text: 'Ich bin offen für ausgewählte Projekte und Zusammenarbeit. Schreib mir – ich freue mich auf deine Nachricht.',
    name: 'Dein Name',
    email: 'Deine E-Mail',
    message: 'Deine Nachricht',
    privacyStart: 'Ich habe die',
    privacyLink: 'Datenschutzerklärung',
    privacyEnd: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
    send: 'Senden',
    sending: 'Wird gesendet …',
    success: 'Danke! Deine Nachricht wurde gesendet.',
    failure:
      'Das Senden hat nicht geklappt. Bitte versuche es später erneut oder schreib mir direkt per E-Mail.',
    errors: {
      name: 'Bitte gib deinen Namen an.',
      email: 'Bitte gib eine gültige E-Mail-Adresse an.',
      message: 'Bitte gib eine Nachricht ein.',
      privacy: 'Bitte stimme der Datenverarbeitung zu.',
    },
  },
  footer: { legal: 'Impressum', privacy: 'Datenschutz' },
  legal: {
    title: 'Impressum',
    responsible: 'Verantwortliche(r)',
    address: 'Postanschrift',
    contact: 'Kontakt',
    email: 'E-Mail',
    phone: 'Telefon',
    generatorStart: 'Dieses Impressum wurde mit Hilfe des',
    generatorLink: 'Impressums-Generators der activeMind AG',
    generatorEnd: 'erstellt (Version 2024-07-21).',
  },
  privacy: {
    title: 'Datenschutz',
    sections: [
      {
        title: 'Verantwortlicher',
        paragraphs: [
          'Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutz-Grundverordnung (DSGVO), ist:',
        ],
        showContact: true,
      },
      {
        title: 'Ihre Betroffenenrechte',
        paragraphs: [
          'Unter den angegebenen Kontaktdaten können Sie gemäß EU-Datenschutz-Grundverordnung (DSGVO) jederzeit folgende Rechte ausüben:',
        ],
        items: [
          'Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),',
          'Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),',
          'Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),',
          'Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),',
          'Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und',
          'Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).',
        ],
        closing: [
          'Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.',
          'Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.',
          'Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.',
        ],
      },
      { title: 'Kontaktaufnahme', paragraphs: [] },
      {
        title: 'Art und Zweck der Verarbeitung',
        sub: true,
        paragraphs: [
          'Auf dieser Website gibt es ein Kontaktformular für die elektronische Kontaktaufnahme. Nimmt ein Nutzer diese Möglichkeit wahr, werden die in die Eingabemaske eingegebenen Daten (Name, E-Mail-Adresse und Nachricht) an uns übermittelt. Die Übermittlung erfolgt per E-Mail an unser Postfach; auf der Website selbst werden die Daten nicht weiter gespeichert.',
          'Eine Kontaktaufnahme ist auch über die bereitgestellte E-Mail-Adresse möglich. In diesem Fall werden die mit der E-Mail übermittelten personenbezogenen Daten des Nutzers gespeichert. Hierzu zählen Datum und Uhrzeit des E-Mailversands, E-Mail-Adresse, IP-Adressen sowie Informationen zu den an der E-Mail-Kommunikation beteiligten Servern.',
          'Sie können auch über die bereitgestellte Telefonnummer Kontakt zu uns aufnehmen. Hierbei erheben wir Protokolldaten, die Ihre Telefonnummer und die Dauer des Gesprächs beinhalten.',
          'Unabhängig von der gewählten Kommunikationsart erheben wir den Inhalt Ihrer Anfrage. Ihre Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert.',
        ],
      },
      {
        title: 'Rechtsgrundlage',
        sub: true,
        paragraphs: [
          'Die Verarbeitung der Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).',
          'Unser berechtigtes Interesse an der Verarbeitung Ihrer Daten ist die Ermöglichung einer unkomplizierten Kontaktaufnahme.',
          'Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).',
        ],
      },
      {
        title: 'Empfänger',
        sub: true,
        paragraphs: [
          'Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden (siehe Abschnitt „Hosting und Server-Logfiles“).',
        ],
      },
      {
        title: 'Speicherdauer',
        sub: true,
        paragraphs: [
          'Daten werden spätestens sechs Monate nach Bearbeitung der Kontaktaufnahme gelöscht.',
          'Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen. Diese betragen grundsätzlich 6 oder 10 Jahre aus Gründen der ordnungsmäßigen Buchführung und steuerrechtlichen Anforderungen.',
        ],
      },
      {
        title: 'Bereitstellung vorgeschrieben oder erforderlich',
        sub: true,
        paragraphs: [
          'Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns die erforderlichen Daten und den Grund der Anfrage mitteilen.',
        ],
      },
      {
        title: 'Widerspruch',
        sub: true,
        paragraphs: [
          'Lesen Sie dazu die Informationen über Ihr Widerspruchsrecht nach Art. 21 DSGVO weiter unten.',
        ],
      },
      {
        title: 'Hosting und Server-Logfiles',
        paragraphs: [
          'Diese Website wird bei ALL-INKL.COM – Neue Medien Münnich, Inhaber René Münnich, Hauptstraße 68, 02742 Friedersdorf, gehostet. Beim Aufruf der Website werden technisch bedingt Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp) in Server-Logfiles verarbeitet.',
          'Die Verarbeitung erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO). Unser berechtigtes Interesse ist der sichere und stabile Betrieb dieser Website. Der Hoster wird für uns als Auftragsverarbeiter tätig. Die Speicherdauer der Server-Logfiles richtet sich nach den Vorgaben des Hosters.',
        ],
      },
      {
        title: 'Lokale Speicherung der Spracheinstellung',
        paragraphs: [
          'Diese Website speichert die von Ihnen gewählte Sprache (Deutsch oder Englisch) im lokalen Speicher Ihres Browsers (localStorage). Der Eintrag verbleibt auf Ihrem Gerät und wird nicht an uns übertragen. Es werden keine Cookies gesetzt und keine Tracking- oder Analysewerkzeuge eingesetzt.',
        ],
      },
      {
        title: 'Externe Links',
        paragraphs: [
          'Diese Website enthält Links zu LinkedIn und GitHub. Es sind keine Social-Media-Plugins eingebunden. Daten werden erst an den jeweiligen Anbieter übertragen, wenn Sie einen Link anklicken. Es gelten dann die Datenschutzbestimmungen des jeweiligen Anbieters.',
        ],
      },
      {
        title: 'Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO',
        paragraphs: [],
      },
      {
        title: 'Einzelfallbezogenes Widerspruchsrecht',
        sub: true,
        paragraphs: [
          'Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.',
          'Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.',
        ],
      },
      { title: 'Empfänger eines Widerspruchs', sub: true, paragraphs: [], showContact: true },
      {
        title: 'Änderung unserer Datenschutzerklärung',
        paragraphs: [
          'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.',
        ],
      },
      {
        title: 'Fragen zum Datenschutz',
        paragraphs: [
          'Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an den oben genannten Verantwortlichen.',
        ],
      },
    ] as PrivacySection[],
    note: {
      start: 'Diese Datenschutzerklärung wurde mit Hilfe der',
      link: 'activeMind AG',
      end: 'erstellt (Version 2026-11-24) und um die Angaben zu dieser Website ergänzt.',
    },
  },
  notFound: { title: 'Seite nicht gefunden', text: 'Diese Seite gibt es nicht.' },
};

export type Dictionary = typeof de;

const en: Dictionary = {
  nav: {
    label: 'Main navigation',
    why: 'Why me',
    skills: 'Skills',
    skillSet: 'My Skill Set',
    work: 'My Work',
    contact: 'Contact',
    contactMe: 'Contact me',
    home: 'Back to top',
    open: 'Open menu',
    close: 'Close menu',
    language: 'Choose language',
    next: 'Go to next section',
    toTop: 'Back to top',
    back: 'Back to home',
  },
  social: { email: 'Send an email', linkedin: 'LinkedIn profile', github: 'GitHub profile' },
  hero: { photoAlt: 'Portrait of Matthias Tausch', city: 'Husum' },
  why: {
    title: 'Why me',
    text: 'I am a frontend developer focused on modern, fast and accessible web applications. I enjoy working with TypeScript, well-considered UI concepts and clean, maintainable code – from the first idea to the finished interface.',
    iAm: 'I am',
    located: 'located in Husum',
    remote: 'open to work remote',
    cta: 'Contact me',
  },
  skills: {
    title: 'My Skill Set',
    intro: 'Technologies and methods I actually use in projects – without made-up percentages.',
    challenge: 'Challenge me',
    more: 'I enjoy learning and getting familiar with new technologies.',
    cta: "Let's talk",
  },
  work: {
    title: 'My Work',
    titleMore: 'More Work',
    about: 'About the project',
    tech: 'Technologies',
    learned: 'What I have learned',
    learnedTexts: {
      join: 'Working in a team, JavaScript, authentication and data storage with Firebase, and communicating within the group.',
      pollo: 'Object-oriented programming with JavaScript.',
      pokedex: 'Working with an API: fetching, reading and clearly presenting data.',
      whatEat: 'Taking an app from development to release: working with Capacitor, Android Studio and the Google Play Console.',
    },
    live: 'Live Test',
    showMore: 'Show me more',
    showLess: 'Show me less',
    screenshot: 'Screenshot of',
    ongoing: 'Ongoing project',
    ongoingText: 'I am currently working on the Brunnen Bau Suite, a web application and app for the professional trades sector. I implement the requirements of real customers.',
    cta: "Let's talk",
    descriptions: {
      join: 'Kanban board for task management with drag & drop, contact management and login or guest access. Data is stored with Firebase.',
      pollo:
        '2D jump-and-run browser game with canvas rendering, enemy AI, a boss fight and object-oriented game logic.',
      pokedex:
        'Web app to browse and filter Pokémon. It loads data live from the PokéAPI and shows details in a card view.',
      whatEat:
        'Android app that suggests a dish from your own list at the push of a button. Dishes are stored locally on the device.',
    },
  },
  references: {
    title: 'References',
    carousel: 'carousel',
    goTo: 'Show reference',
    quote: '[Placeholder: A real reference will follow here.]',
    name: '[Name]',
    project: '[Project]',
  },
  contact: {
    title: 'Contact me',
    lead: 'Let us work together.',
    text: 'I am open to selected projects and collaborations. Send me a message – I look forward to hearing from you.',
    name: 'Your name',
    email: 'Your email',
    message: 'Your message',
    privacyStart: "I've read the",
    privacyLink: 'privacy policy',
    privacyEnd: 'and agree to the processing of my data.',
    send: 'Send',
    sending: 'Sending …',
    success: 'Thank you! Your message has been sent.',
    failure: 'Sending failed. Please try again later or email me directly.',
    errors: {
      name: 'Please enter your name.',
      email: 'Please enter a valid email address.',
      message: 'Please enter a message.',
      privacy: 'Please agree to the data processing.',
    },
  },
  footer: { legal: 'Legal notice', privacy: 'Privacy policy' },
  legal: {
    title: 'Legal Notice',
    responsible: 'Responsible person',
    address: 'Postal address',
    contact: 'Contact',
    email: 'Email',
    phone: 'Phone',
    generatorStart: 'This legal notice was created with the',
    generatorLink: 'legal notice generator by activeMind AG',
    generatorEnd: '(version 2024-07-21).',
  },
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        title: 'Controller',
        paragraphs: [
          'The controller within the meaning of data protection law, in particular the EU General Data Protection Regulation (GDPR), is:',
        ],
        showContact: true,
      },
      {
        title: 'Your rights as a data subject',
        paragraphs: [
          'Using the contact details above, you can exercise the following rights under the GDPR at any time:',
        ],
        items: [
          'Access to the data we store about you and how it is processed (Art. 15 GDPR),',
          'Rectification of inaccurate personal data (Art. 16 GDPR),',
          'Erasure of the data we store about you (Art. 17 GDPR),',
          'Restriction of processing, where we are not yet allowed to delete your data because of legal obligations (Art. 18 GDPR),',
          'Objection to the processing of your data by us (Art. 21 GDPR), and',
          'Data portability, where you have consented to the processing or concluded a contract with us (Art. 20 GDPR).',
        ],
        closing: [
          'If you have given us consent, you can withdraw it at any time with effect for the future.',
          'You can lodge a complaint with a supervisory authority at any time, for example with the competent authority of the federal state where you live or with the authority responsible for us as the controller.',
          'A list of the supervisory authorities (for the non-public sector) with addresses is available at: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.',
        ],
      },
      { title: 'Contact', paragraphs: [] },
      {
        title: 'Nature and purpose of the processing',
        sub: true,
        paragraphs: [
          'This website has a contact form for getting in touch electronically. If a user makes use of it, the data entered in the form (name, email address and message) is transmitted to us. It is delivered by email to our mailbox; the website itself does not store the data any further.',
          'You can also contact us at the email address provided. In that case, the personal data transmitted with the email is stored. This includes the date and time the email was sent, the email address, IP addresses and information about the servers involved in the email communication.',
          'You can also contact us by phone at the number provided. In that case, we collect log data containing your phone number and the duration of the call.',
          'Regardless of the means of communication, we collect the content of your request. Your data is stored for the purpose of communicating with you individually.',
        ],
      },
      {
        title: 'Legal basis',
        sub: true,
        paragraphs: [
          'The data is processed on the basis of a legitimate interest (Art. 6(1)(f) GDPR).',
          'Our legitimate interest in processing your data is to make it easy to get in touch with us.',
          'If you contact us to request a quote, the data is processed to carry out pre-contractual measures (Art. 6(1)(b) GDPR).',
        ],
      },
      {
        title: 'Recipients',
        sub: true,
        paragraphs: [
          'Recipients of the data may be technical service providers that act as processors for the operation and maintenance of our website (see section "Hosting and server log files").',
        ],
      },
      {
        title: 'Storage period',
        sub: true,
        paragraphs: [
          'Data is deleted no later than six months after your enquiry has been dealt with.',
          'If a contractual relationship results, we are subject to statutory retention periods. These are generally 6 or 10 years for reasons of proper bookkeeping and tax requirements.',
        ],
      },
      {
        title: 'Provision required by law or necessary',
        sub: true,
        paragraphs: [
          'You provide your personal data voluntarily. However, we can only deal with your enquiry if you give us the necessary data and the reason for your enquiry.',
        ],
      },
      {
        title: 'Objection',
        sub: true,
        paragraphs: [
          'Please see the information on your right to object under Art. 21 GDPR below.',
        ],
      },
      {
        title: 'Hosting and server log files',
        paragraphs: [
          'This website is hosted by ALL-INKL.COM – Neue Medien Münnich, owner René Münnich, Hauptstraße 68, 02742 Friedersdorf, Germany. When you visit the website, access data (for example IP address, date and time, page requested, browser type) is processed in server log files for technical reasons.',
          'The processing is based on a legitimate interest (Art. 6(1)(f) GDPR). Our legitimate interest is the secure and stable operation of this website. The hosting provider acts as a processor on our behalf. The storage period of the server log files depends on the hosting provider.',
        ],
      },
      {
        title: 'Local storage of the language setting',
        paragraphs: [
          'This website stores the language you have chosen (German or English) in your browser local storage (localStorage). The entry stays on your device and is not transmitted to us. No cookies are set and no tracking or analytics tools are used.',
        ],
      },
      {
        title: 'External links',
        paragraphs: [
          'This website contains links to LinkedIn and GitHub. No social media plugins are embedded. Data is only transmitted to the respective provider when you click a link. The provider privacy policy then applies.',
        ],
      },
      {
        title: 'Information on your right to object under Art. 21 GDPR',
        paragraphs: [],
      },
      {
        title: 'Right to object in individual cases',
        sub: true,
        paragraphs: [
          'You have the right to object at any time, on grounds relating to your particular situation, to the processing of personal data concerning you that is based on Art. 6(1)(f) GDPR (processing based on a balancing of interests); this also applies to profiling based on that provision within the meaning of Art. 4(4) GDPR.',
          'If you object, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing that override your interests, rights and freedoms, or the processing serves the establishment, exercise or defence of legal claims.',
        ],
      },
      { title: 'Recipient of an objection', sub: true, paragraphs: [], showContact: true },
      {
        title: 'Changes to this privacy policy',
        paragraphs: [
          'We reserve the right to amend this privacy policy so that it always meets current legal requirements or to reflect changes to our services, for example when introducing new services. The new privacy policy then applies to your next visit.',
        ],
      },
      {
        title: 'Questions about data protection',
        paragraphs: [
          'If you have questions about data protection, please send an email to the controller named above.',
        ],
      },
    ] as PrivacySection[],
    note: {
      start: 'This privacy policy was created with the help of',
      link: 'activeMind AG',
      end: '(version 2026-11-24) and supplemented with details about this website. The German version is legally binding.',
    },
  },
  notFound: { title: 'Page not found', text: 'This page does not exist.' },
};

export const dictionaries = { de, en };
