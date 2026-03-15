export interface Location {
  name: string;
  slug: string;
  county: string;
  intro: string;
  localDescription: string;
  localFaqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const locations: Location[] = [
  {
    name: 'Colchester',
    slug: 'colchester',
    county: 'Essex',
    intro: 'Grey Havens provides premium electrical and smart home services across Colchester and the surrounding areas. As one of the largest towns in Essex, Colchester has a diverse mix of period properties, modern housing, and new developments — all of which benefit from quality electrical work and smart technology.',
    localDescription: 'From Victorian terraces in the town centre to new-build estates on the outskirts, we work across Colchester delivering everything from consumer unit upgrades and rewires to EV charger installations and whole-home smart systems. Whether you\'re in the town centre, Lexden, Mile End, or the surrounding villages, we\'re here to help.',
    localFaqs: [
      { question: 'Do you cover all areas of Colchester?', answer: 'Yes. We cover Colchester town centre and all surrounding areas including Lexden, Stanway, Mile End, Highwoods, Wivenhoe, and the surrounding villages.' },
      { question: 'How quickly can you attend a job in Colchester?', answer: 'Colchester is within our core service area. For non-emergency work, we typically schedule within a few days. For urgent issues, contact us and we\'ll do our best to attend promptly.' },
      { question: 'Do you work on older Colchester properties?', answer: 'Absolutely. Many Colchester properties have older wiring that benefits from inspection, upgrading, or rewiring. We\'re experienced with period properties and their specific requirements.' },
    ],
    seoTitle: 'Electrician in Colchester | Grey Havens Electrical',
    seoDescription: 'Trusted electrician in Colchester. Electrical services, EV chargers, smart home installation, EICRs, and more. Quality workmanship across Colchester and surrounding areas.',
  },
  {
    name: 'Mersea Island',
    slug: 'mersea-island',
    county: 'Essex',
    intro: 'Grey Havens serves Mersea Island with quality electrical and smart home services. As a unique coastal community with a mix of permanent homes, holiday properties, and listed buildings, Mersea Island has specific electrical needs that require care and experience.',
    localDescription: 'Island properties face particular challenges — from the effects of coastal weather on electrical installations to the need for reliable systems in rural settings. We understand these considerations and deliver work that\'s built to last in the Mersea environment. Whether you\'re on West Mersea, East Mersea, or the surrounding coastal areas, we provide the same high standard of service.',
    localFaqs: [
      { question: 'Do you regularly work on Mersea Island?', answer: 'Yes. Mersea Island is well within our core service area and we work there regularly, understanding the specific needs of island properties.' },
      { question: 'Can you work on listed buildings on Mersea?', answer: 'Yes. We have experience working on older and listed properties, taking the necessary care with heritage features while bringing electrics up to safe standards.' },
      { question: 'Do coastal properties need special attention?', answer: 'Coastal environments can accelerate wear on electrical installations. We use appropriate materials and methods to ensure longevity, and recommend more frequent inspection for coastal properties.' },
    ],
    seoTitle: 'Electrician on Mersea Island | Grey Havens Electrical',
    seoDescription: 'Local electrician serving Mersea Island. Smart home systems, rewires, EV chargers, EICRs, and more. Experienced with coastal and period properties.',
  },
  {
    name: 'Tiptree',
    slug: 'tiptree',
    county: 'Essex',
    intro: 'Grey Havens provides electrical and smart home services across Tiptree and the surrounding villages. This growing community benefits from modern electrical infrastructure, and we\'re here to help homeowners and landlords keep their properties safe, efficient, and connected.',
    localDescription: 'From established homes in the village centre to newer developments, we cover all types of electrical work in Tiptree. Whether you need a consumer unit upgrade, EV charger, full rewire, or smart home installation, we deliver quality work with minimal disruption.',
    localFaqs: [
      { question: 'Do you cover Tiptree and surrounding villages?', answer: 'Yes. We cover Tiptree and all nearby villages including Tolleshunt D\'Arcy, Layer de la Haye, Birch, and the surrounding rural areas.' },
      { question: 'Can you install EV chargers in Tiptree?', answer: 'Absolutely. We install home EV charging points across Tiptree and the surrounding area, with full electrical certification included.' },
      { question: 'Do you offer landlord services in Tiptree?', answer: 'Yes. We provide EICR inspections, remedial work, and ongoing electrical services for landlords with properties in and around Tiptree.' },
    ],
    seoTitle: 'Electrician in Tiptree | Grey Havens Electrical',
    seoDescription: 'Quality electrician in Tiptree, Essex. Consumer units, EV chargers, smart home installation, EICRs, and rewiring. Serving Tiptree and surrounding villages.',
  },
  {
    name: 'Witham',
    slug: 'witham',
    county: 'Essex',
    intro: 'Grey Havens delivers professional electrical and smart home services across Witham and the surrounding area. With a mix of older town-centre properties and modern housing, Witham homeowners benefit from quality electrical work that\'s done right first time.',
    localDescription: 'Whether you\'re in the town centre, Rivenhall, or the surrounding estates, we provide comprehensive electrical services from routine upgrades to full smart home installations. We understand the range of property types in Witham and adapt our approach accordingly.',
    localFaqs: [
      { question: 'How far from Witham do you cover?', answer: 'Witham is centrally located within our service area. We cover Witham itself and extend well into the surrounding villages and neighbouring towns.' },
      { question: 'Can you rewire older Witham properties?', answer: 'Yes. We regularly rewire older properties in Witham and the surrounding area, bringing them up to current BS 7671 standards with minimal disruption.' },
      { question: 'Do you offer free quotes in Witham?', answer: 'We offer free, no-obligation quotes for all planned work in Witham and our wider service area. Get in touch and we\'ll arrange a convenient time.' },
    ],
    seoTitle: 'Electrician in Witham | Grey Havens Electrical',
    seoDescription: 'Professional electrician in Witham, Essex. Rewires, consumer units, EV chargers, smart home systems, and EICRs. Quality electrical work across Witham.',
  },
  {
    name: 'Maldon',
    slug: 'maldon',
    county: 'Essex',
    intro: 'Grey Havens serves Maldon with premium electrical and smart home services. This historic riverside town has a wonderful mix of period properties and modern homes, each with their own electrical requirements and opportunities for smart technology.',
    localDescription: 'From the historic high street properties to homes along the Blackwater estuary, we provide quality electrical services throughout Maldon. Our work ranges from essential safety upgrades and compliance inspections to modern EV charging and smart home installations.',
    localFaqs: [
      { question: 'Do you cover all of the Maldon district?', answer: 'Yes. We cover Maldon town, Heybridge, and the surrounding villages throughout the Maldon district.' },
      { question: 'Can you work on Maldon\'s older properties?', answer: 'Yes. Maldon has many beautiful older properties that need careful electrical work. We have experience with period buildings and understand how to upgrade safely while respecting the character of the property.' },
      { question: 'Do you install smart home systems in Maldon?', answer: 'Yes. We design and install smart home systems for properties throughout Maldon, from smart lighting and heating to full home automation and networking.' },
    ],
    seoTitle: 'Electrician in Maldon | Grey Havens Electrical',
    seoDescription: 'Trusted electrician in Maldon, Essex. Electrical services, smart home installation, EV chargers, and property compliance. Serving Maldon and surrounding areas.',
  },
  {
    name: 'Diss',
    slug: 'diss',
    county: 'Suffolk',
    intro: 'Grey Havens extends its premium electrical and smart home services to Diss and the surrounding area. Sitting on the Norfolk–Suffolk border, Diss is a market town with a rich mix of heritage properties and modern homes, all of which benefit from quality electrical work.',
    localDescription: 'From the town centre around the Mere to the surrounding rural properties, we deliver professional electrical services throughout Diss and its neighbouring villages. Whether you need essential electrical work, compliance inspections, or want to bring smart technology into your home, we\'re here to help.',
    localFaqs: [
      { question: 'Do you cover Diss even though it\'s in Suffolk?', answer: 'Yes. Diss is within our service corridor covering parts of Essex and Suffolk. We regularly work in Diss and the surrounding area.' },
      { question: 'Can you work on rural properties near Diss?', answer: 'Absolutely. We serve the rural areas surrounding Diss, understanding the particular needs of country properties including longer cable runs and agricultural considerations.' },
      { question: 'What smart home services do you offer in Diss?', answer: 'We offer the full range of smart home services in Diss, including smart lighting, heating controls, security systems, networking, and whole-home automation.' },
    ],
    seoTitle: 'Electrician in Diss | Grey Havens Electrical',
    seoDescription: 'Quality electrician in Diss, Suffolk. Smart home systems, rewires, EV chargers, EICRs, and full electrical services. Serving Diss and surrounding villages.',
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(l => l.slug === slug);
}
