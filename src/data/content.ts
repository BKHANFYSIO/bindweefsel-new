export interface Flashcard {
  question: string;
  answer: string;
}

export interface MCQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const flashcards: Flashcard[] = [
  {
    question: "Wat zijn de drie fasen van bindweefselherstel?",
    answer: "1. Inflammatoire fase (0-3 dagen)\n2. Proliferatieve fase (3-21 dagen)\n3. Remodelleringsfase (21 dagen - 1 jaar)"
  },
  {
    question: "Wat is de primaire functie van fibroblasten in bindweefselherstel?",
    answer: "Fibroblasten zijn verantwoordelijk voor de productie van collageen en andere extracellulaire matrix componenten."
  },
  {
    question: "Wat is het verschil tussen type I en type III collageen?",
    answer: "Type I collageen is sterker en komt voor in volwassen weefsel, terwijl type III collageen (reticulair) zwakker is en voorkomt in nieuw gevormd weefsel."
  },
  {
    question: "Wat is de rol van mechanische belasting in bindweefselherstel?",
    answer: "Mechanische belasting stimuleert de collageensynthese en de oriëntatie van collageenvezels, wat leidt tot sterker weefsel."
  },
  {
    question: "Wat is het verschil tussen primaire en secundaire wondgenezing?",
    answer: "Primaire wondgenezing gebeurt met minimale littekenvorming, terwijl secundaire wondgenezing gepaard gaat met meer littekenweefsel en een langere hersteltijd."
  },
  {
    question: "Wat is de functie van matrix metalloproteïnases (MMPs)?",
    answer: "MMPs zijn enzymen die betrokken zijn bij de afbraak en reorganisatie van de extracellulaire matrix tijdens weefselherstel."
  },
  {
    question: "Wat is het verschil tussen acute en chronische ontsteking?",
    answer: "Acute ontsteking is kortdurend en beschermend, terwijl chronische ontsteking langdurig is en weefselbeschadiging kan veroorzaken."
  },
  {
    question: "Wat is de rol van groeifactoren in bindweefselherstel?",
    answer: "Groeifactoren reguleren celproliferatie, differentiatie en matrixsynthese tijdens het herstelproces."
  },
  {
    question: "Wat is het verschil tussen extensie en flexie oefeningen in bindweefselherstel?",
    answer: "Extensie oefeningen bevorderen de lengte van het weefsel, terwijl flexie oefeningen de kracht en stabiliteit verbeteren."
  },
  {
    question: "Wat is de invloed van leeftijd op bindweefselherstel?",
    answer: "Met het ouder worden neemt de kwaliteit en snelheid van bindweefselherstel af door verminderde celactiviteit en veranderingen in de extracellulaire matrix."
  }
];

export const mcQuestions: MCQuestion[] = [
  {
    question: "Welke fase van bindweefselherstel wordt gekenmerkt door de vorming van nieuw weefsel?",
    options: [
      "Inflammatoire fase",
      "Proliferatieve fase",
      "Remodelleringsfase",
      "Fibrotische fase"
    ],
    correctAnswer: 1,
    explanation: "De proliferatieve fase (3-21 dagen) wordt gekenmerkt door de vorming van nieuw weefsel door fibroblasten die collageen produceren."
  },
  {
    question: "Welke cel is het meest actief in de inflammatoire fase?",
    options: [
      "Fibroblast",
      "Neutrofiel",
      "Osteoblast",
      "Chondrocyt"
    ],
    correctAnswer: 1,
    explanation: "Neutrofielen zijn de eerste cellen die naar de beschadigde plek migreren en zijn essentieel voor het opruimen van beschadigd weefsel en het bestrijden van infecties."
  },
  {
    question: "Wat is de optimale timing voor het starten van oefentherapie na een bindweefselblessure?",
    options: [
      "Direct na het trauma",
      "Na 3 dagen",
      "Na 2 weken",
      "Na 6 weken"
    ],
    correctAnswer: 1,
    explanation: "Na 3 dagen is de inflammatoire fase grotendeels afgerond en kan voorzichtig begonnen worden met oefentherapie om het herstel te stimuleren."
  },
  {
    question: "Welke factor heeft de grootste negatieve invloed op bindweefselherstel?",
    options: [
      "Leeftijd",
      "Roken",
      "Diabetes",
      "Overgewicht"
    ],
    correctAnswer: 1,
    explanation: "Roken heeft de grootste negatieve invloed omdat het de bloedtoevoer vermindert en de celactiviteit verstoort, wat essentieel is voor weefselherstel."
  },
  {
    question: "Wat is het primaire doel van de remodelleringsfase?",
    options: [
      "Ontsteking verminderen",
      "Nieuw weefsel vormen",
      "Weefsel versterken",
      "Littekenweefsel verwijderen"
    ],
    correctAnswer: 2,
    explanation: "In de remodelleringsfase wordt het weefsel versterkt door reorganisatie van collageenvezels en toename van crosslinks tussen de vezels."
  },
  {
    question: "Welke type oefening is het meest effectief in de vroege fase van bindweefselherstel?",
    options: [
      "Maximale kracht",
      "Isometrische oefeningen",
      "Plyometrische oefeningen",
      "Uithoudingsvermogen"
    ],
    correctAnswer: 1,
    explanation: "Isometrische oefeningen zijn veilig en effectief in de vroege fase omdat ze het weefsel belasten zonder beweging, wat het risico op herletsel minimaliseert."
  },
  {
    question: "Wat is de belangrijkste functie van type III collageen?",
    options: [
      "Kracht leveren",
      "Snelle wondsluiting",
      "Elasticiteit geven",
      "Botvorming"
    ],
    correctAnswer: 1,
    explanation: "Type III collageen zorgt voor snelle wondsluiting in de vroege fase van herstel, maar is minder sterk dan type I collageen."
  },
  {
    question: "Welke factor bevordert bindweefselherstel het meest?",
    options: [
      "Absolute rust",
      "Progressieve belasting",
      "Maximale belasting",
      "Intermittente rust"
    ],
    correctAnswer: 1,
    explanation: "Progressieve belasting is het meest effectief omdat het het weefsel stimuleert om sterker te worden zonder overbelasting te veroorzaken."
  },
  {
    question: "Wat is de gemiddelde duur van de proliferatieve fase?",
    options: [
      "1-3 dagen",
      "3-21 dagen",
      "21-90 dagen",
      "90-365 dagen"
    ],
    correctAnswer: 1,
    explanation: "De proliferatieve fase duurt gemiddeld 3-21 dagen, afhankelijk van de ernst van het letsel en individuele factoren."
  },
  {
    question: "Welke marker is het meest betrouwbaar voor het monitoren van bindweefselherstel?",
    options: [
      "Pijn",
      "Stijfheid",
      "Kracht",
      "Zwelling"
    ],
    correctAnswer: 2,
    explanation: "Kracht is de meest betrouwbare marker omdat het objectief meetbaar is en direct gerelateerd is aan de weefselkwaliteit."
  }
]; 