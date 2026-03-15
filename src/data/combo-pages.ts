export interface ComboPage {
  locationSlug: string;
  locationName: string;
  serviceSlug: string;
  serviceName: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  intro: string;
  localAngle: string;
  whyLocal: string[];
  faqs: { question: string; answer: string }[];
}

export const comboPages: ComboPage[] = [
  // ── COLCHESTER ──────────────────────────────────────────────
  {
    locationSlug: 'colchester',
    locationName: 'Colchester',
    serviceSlug: 'ev-charger-installation',
    serviceName: 'EV Charger Installation',
    seoTitle: 'EV Charger Installation Colchester | Grey Havens',
    seoDescription: 'Home EV charger installation in Colchester. From Victorian terraces to new-build estates — we solve the cable routing challenges other installers avoid.',
    headline: 'EV Charger Installation in Colchester',
    intro: 'Colchester\'s housing runs the full spectrum — Georgian townhouses on East Hill, 1930s semis in Lexden, post-war estates in Highwoods, and brand-new developments out past the Northern Gateway. Each one presents a different EV charger installation challenge, and the difference between a good job and a bodge usually comes down to how the cable gets from the consumer unit to the charging point.',
    localAngle: 'The most common challenge we see in Colchester is the distance between the consumer unit (usually under the stairs or in a hallway cupboard) and where the car actually parks. In terraced properties around North Station or the Dutch Quarter, that can mean routing through multiple rooms or externally around the building. On newer estates around Stanway and Berechurch, it\'s often more straightforward — but even there, builders don\'t always put the consumer unit where an EV installer would want it. We work out the cleanest route before we pick up a drill, because a visible cable draped across your front wall isn\'t what anyone wants.',
    whyLocal: [
      'We\'ve installed chargers across Colchester\'s full range of housing — we know what to expect before we arrive',
      'Careful cable routing that respects the look of your property, not just the quickest path',
      'If your consumer unit needs upgrading to handle the extra load, we do that too — one contractor, one visit where possible',
      'We handle the building control notification so you don\'t have to',
    ],
    faqs: [
      { question: 'My Colchester terrace has no driveway — can I still get an EV charger?', answer: 'It depends on your situation. If you have off-street parking to the rear, we can route to that. If you only have on-street parking, home charger installation isn\'t usually practical, but we\'re happy to discuss your options.' },
      { question: 'I\'m in a new-build in Colchester — is the wiring already prepared for an EV charger?', answer: 'Some newer Colchester developments include pre-wired EV circuits or at least conduit runs to the garage. We\'ll check what\'s already in place during the survey and work with it — this often makes installation faster and cheaper.' },
    ],
  },
  {
    locationSlug: 'colchester',
    locationName: 'Colchester',
    serviceSlug: 'eicr-certificates',
    serviceName: 'EICR Certificates',
    seoTitle: 'EICR Certificates Colchester | Landlord & Homeowner | Grey Havens',
    seoDescription: 'Thorough EICR inspections in Colchester — not tick-box exercises. Landlord compliance, homeowner safety, and honest reporting.',
    headline: 'EICR Certificates in Colchester',
    intro: 'Colchester has one of the largest rental markets in Essex. If you\'re a landlord here, you\'re legally required to hold a valid EICR for every tenanted property — and the regulations have teeth. But beyond compliance, an EICR is genuinely useful. It tells you whether the electrical installation in your property is safe, and if it isn\'t, exactly what needs fixing.',
    localAngle: 'We inspect a lot of rental properties in Colchester. The HMOs around the university and North Hill, the converted Victorians near the town centre, the ex-council stock in Greenstead — each has its own typical issues. The HMOs often have overloaded circuits from years of ad-hoc additions. The older conversions frequently have wiring that\'s been left alone since the building was split into flats. We know what to look for because we see it regularly, and we report honestly — we won\'t invent observations to generate work, but we won\'t gloss over genuine safety issues either.',
    whyLocal: [
      'We inspect rental properties across Colchester every week — the patterns are familiar to us',
      'Portfolio rates for landlords with multiple Colchester properties',
      'Same-company remedial work if issues are found, avoiding the delay of finding a second contractor',
      'Reports written in plain English, not just codes — so you understand what\'s actually going on',
    ],
    faqs: [
      { question: 'I manage several rental properties in Colchester — do you offer a portfolio rate?', answer: 'Yes. If you have multiple properties needing inspection, we offer competitive rates and can schedule them efficiently. Get in touch with your portfolio details and we\'ll put together a quote.' },
      { question: 'My Colchester rental property was last inspected 4 years ago. Do I need a new EICR?', answer: 'The legal requirement is every 5 years or at each change of tenancy, whichever comes first. If you\'re approaching a tenancy change, you\'ll need a current one regardless of when the last was done.' },
    ],
  },
  {
    locationSlug: 'colchester',
    locationName: 'Colchester',
    serviceSlug: 'consumer-unit-replacement',
    serviceName: 'Consumer Unit Replacement',
    seoTitle: 'Consumer Unit Replacement Colchester | Fuse Box Upgrades | Grey Havens',
    seoDescription: 'Fuse box and consumer unit upgrades in Colchester. From Victorian rewirable fuse boxes to modern RCD-protected units — done in a day.',
    headline: 'Consumer Unit Replacement in Colchester',
    intro: 'Open the cupboard under your stairs in a pre-1990s Colchester home and there\'s a fair chance you\'ll find a fuse box with rewirable fuses, no RCD protection, and wiring colours that haven\'t been current for decades. It works — until it doesn\'t. And when it doesn\'t, the consequences can be serious. A consumer unit replacement is the single most effective safety upgrade most Colchester homes can have.',
    localAngle: 'We see the full range in Colchester. The Victorian properties around Lexden Road and the town centre often have fuse boxes that have been added to over the years — a circuit here, a spur there — resulting in overcrowded, poorly labelled boards. The 1960s–70s housing in areas like Highwoods and Monkwick typically has boards that were fine when installed but now lack the RCD protection that current regulations require. In both cases, the solution is a modern consumer unit with proper circuit protection, clear labelling, and room for future additions. We complete most replacements within a single day, and every installation comes with a full Electrical Installation Certificate.',
    whyLocal: [
      'One-day turnaround for most Colchester properties — minimal time without power',
      'We assess your full installation during the replacement, not just the board itself',
      'If your circuits need attention beyond the consumer unit, we\'ll tell you upfront rather than discovering it mid-job',
      'Building control notification included — one less thing for you to deal with',
    ],
    faqs: [
      { question: 'My Colchester house has a mix of old and new fuse boxes — what do you do?', answer: 'We\'ll consolidate everything into a single, properly sized consumer unit. Multiple boards are usually a sign of piecemeal additions over the years, and combining them into one well-designed unit is safer and neater.' },
      { question: 'Will a consumer unit replacement fix my tripping problems?', answer: 'If the tripping is caused by a faulty RCD or inadequate circuit separation in your current board, then yes. If there\'s an underlying fault on a circuit, we\'ll identify that during the installation and advise on the best course of action.' },
    ],
  },
  {
    locationSlug: 'colchester',
    locationName: 'Colchester',
    serviceSlug: 'smart-home-installation',
    serviceName: 'Smart Home Installation',
    seoTitle: 'Smart Home Installation Colchester | Grey Havens',
    seoDescription: 'Smart home systems in Colchester that actually work. Proper infrastructure, not plug-in gadgets. Lighting, heating, security, and networking.',
    headline: 'Smart Home Installation in Colchester',
    intro: 'Most people\'s experience of "smart home" technology is a voice assistant that mishears them, a smart bulb that drops offline, and a thermostat that\'s no easier to use than the old one. The problem isn\'t the technology — it\'s the installation. Smart home systems work brilliantly when they\'re built on proper infrastructure. They\'re frustrating when they\'re cobbled together from consumer gadgets competing for bandwidth on an overloaded WiFi network.',
    localAngle: 'In Colchester, we work across everything from new-build developments where smart infrastructure can be wired in from scratch, to period properties around Castle Park and Lexden where retrofitting needs more creative solutions. The key difference in our approach is that we start with the infrastructure — network cabling, access point placement, power where it\'s needed — before we think about the devices that sit on top of it. A smart switch is only smart if the network it relies on actually works. We\'ve fitted out homes in Colchester with full lighting automation, zoned heating control, integrated security, and multi-room audio — all controlled from a single app, all working reliably because the backbone was done properly.',
    whyLocal: [
      'We build the infrastructure first — network, power, and control wiring — then add the smart layer on top',
      'Platform-agnostic: we work with Apple Home, Google, Home Assistant, and proprietary systems depending on what suits you',
      'Retrofit experience in Colchester\'s older housing stock where running new cables requires thought and care',
      'We hand over a system you can actually use — not a tech demo that only we understand',
    ],
    faqs: [
      { question: 'I already have some smart devices — can you integrate them into a proper system?', answer: 'Usually, yes. We\'ll audit what you have, identify what\'s worth keeping, and build a coherent system around it. Sometimes a few existing devices need replacing, but we won\'t suggest that unless there\'s a genuine reason.' },
      { question: 'How much does a smart home installation cost in Colchester?', answer: 'It varies enormously depending on scope. A few smart light switches and a thermostat is a few hundred pounds. A full-house system with networking, lighting control, security, and automation runs into the thousands. We\'ll scope it with you and give you a clear quote before any work starts.' },
    ],
  },
  {
    locationSlug: 'colchester',
    locationName: 'Colchester',
    serviceSlug: 'ethernet-wiring',
    serviceName: 'Ethernet Wiring',
    seoTitle: 'Ethernet Wiring Colchester | Home Network Cabling | Grey Havens',
    seoDescription: 'Structured ethernet cabling in Colchester homes. Cat6 runs, patch panels, wall plates — installed properly and tested to commercial standards.',
    headline: 'Ethernet Wiring in Colchester',
    intro: 'If you work from home in Colchester — and a lot of people do now — you already know that WiFi isn\'t always enough. Video calls freeze, file transfers crawl, and your connection drops at the worst possible moment. The fix isn\'t a better router or a mesh system. It\'s a cable. Ethernet gives you a connection that\'s fast, stable, and doesn\'t care how many other devices are on your network.',
    localAngle: 'The way we approach ethernet wiring depends entirely on your property. In modern Colchester homes — the newer builds around Stanway, Berechurch, or the Northern Gateway developments — there\'s often accessible loft space and stud walls that make cable runs relatively straightforward. Older properties around the town centre, Lexden, or Wivenhoe are a different proposition: solid walls, lathe-and-plaster ceilings, and limited access. We\'ve cabled homes in both types across Colchester, and the goal is always the same — get the cables where they need to go without leaving visible evidence. That means routing through lofts, dropping down cavity walls where they exist, using floor voids, and occasionally getting creative with decorative trunking when there\'s genuinely no hidden route available.',
    whyLocal: [
      'We install to commercial cabling standards — every run is tested with a proper cable tester, not just plugged in to see if it works',
      'Clean installations: cables are hidden in walls, lofts, and floors wherever possible',
      'We understand networking as well as cabling — we can advise on switches, access points, and network architecture',
      'Single-room home office setups through to whole-house structured cabling with central patch panels',
    ],
    faqs: [
      { question: 'Can you cable an older Colchester property without chasing into every wall?', answer: 'Yes. We use a combination of loft routing, floor voids, and existing cable routes to minimise visible impact. In some cases we use slim decorative trunking, but hidden runs are always the priority.' },
      { question: 'Is it worth wiring ethernet if I already have good WiFi?', answer: 'For general browsing, WiFi is usually fine. But for home offices, gaming, media streaming, or smart home backbone connections, wired ethernet is dramatically more reliable. If you work from home, it\'s the single best upgrade you can make to your setup.' },
    ],
  },
  {
    locationSlug: 'colchester',
    locationName: 'Colchester',
    serviceSlug: 'fault-finding',
    serviceName: 'Fault Finding',
    seoTitle: 'Electrical Fault Finding Colchester | Grey Havens',
    seoDescription: 'Methodical electrical fault diagnosis in Colchester. We find the actual cause, not just the symptom. Fast response for urgent issues.',
    headline: 'Electrical Fault Finding in Colchester',
    intro: 'Something\'s wrong with your electrics. Maybe a circuit keeps tripping. Maybe a socket is dead. Maybe there\'s a smell you can\'t explain. The temptation is to reset the breaker, jiggle the switch, and hope it goes away — but electrical faults don\'t fix themselves, and some of them are genuinely dangerous.',
    localAngle: 'The most common fault calls we get in Colchester fall into a few patterns. In the older properties around the town centre and Lexden, deteriorating cable insulation is a frequent culprit — rubber and lead-sheathed cables break down over decades, and eventually insulation resistance drops to the point where RCDs trip or circuits fail. In the 1970s–80s housing across Highwoods and Monkwick, we often find faults caused by corroded connections or aluminium wiring that\'s worked loose. And across all property types, nuisance tripping from degraded RCDs or MCBs is something we diagnose regularly. The important thing is diagnosis. We don\'t guess. We test systematically — isolating circuits, measuring insulation resistance, checking connections — until we find the actual cause. Then we fix it properly.',
    whyLocal: [
      'Systematic diagnostic approach — we find the root cause, not just the obvious symptom',
      'We carry common replacement parts and can usually complete repairs in the same visit',
      'If the fault reveals a bigger problem (deteriorating wiring, inadequate consumer unit), we\'ll explain your options honestly',
      'Fast response for urgent safety issues across Colchester',
    ],
    faqs: [
      { question: 'My RCD keeps tripping but I can\'t work out which appliance is causing it — can you help?', answer: 'Yes, this is one of our most common calls. We systematically isolate circuits and loads to identify exactly what\'s causing the trip — it could be an appliance, a wiring fault, or the RCD itself degrading. We\'ll find it.' },
      { question: 'Is a burning smell from a socket an emergency?', answer: 'Yes. Turn off the circuit at the consumer unit immediately and call us. A burning smell typically indicates a loose connection, overloaded circuit, or failing component — all of which can cause fires if left unaddressed.' },
    ],
  },

  // ── MERSEA ISLAND ──────────────────────────────────────────
  {
    locationSlug: 'mersea-island',
    locationName: 'Mersea Island',
    serviceSlug: 'ev-charger-installation',
    serviceName: 'EV Charger Installation',
    seoTitle: 'EV Charger Installation Mersea Island | Grey Havens',
    seoDescription: 'EV charger installation on Mersea Island — built to handle coastal conditions. Corrosion-resistant fixings, weatherproof enclosures, and full certification.',
    headline: 'EV Charger Installation on Mersea Island',
    intro: 'Installing an EV charger on Mersea Island isn\'t quite the same as installing one in a suburban cul-de-sac. Salt air, exposed positions, coastal weather — these things matter when you\'re fixing electrical equipment to the outside of a building and expecting it to last. We specify and install chargers on Mersea with these conditions in mind, because a unit that corrodes within two years isn\'t a bargain at any price.',
    localAngle: 'Beyond the environmental considerations, Mersea properties have their own layout quirks. Many homes on West Mersea have garages or parking areas set apart from the main building, which means longer cable runs and sometimes the need for a sub-board at the charging point. Some of the older cottages have consumer units that need upgrading before they can support a 7kW charger circuit. We assess all of this during a site survey and give you a complete picture of what\'s involved — no surprises on installation day. We also install chargers at Mersea holiday lets and second homes, which can be a genuine selling point for guests who drive electric.',
    whyLocal: [
      'Marine-grade fixings and IP-rated enclosures specified for the Mersea environment',
      'Experience with island property layouts — longer runs, outbuildings, exposed positions',
      'Full electrical assessment included, not just the charger itself',
      'Holiday property installations that add genuine value for EV-driving guests',
    ],
    faqs: [
      { question: 'Will a standard EV charger survive the salt air on Mersea?', answer: 'Standard domestic chargers are IP-rated for outdoor use, but the fixings, cable glands, and enclosures need to be specified appropriately for coastal locations. We use stainless steel fixings and ensure all connections are properly sealed against moisture ingress.' },
      { question: 'My garage is 20 metres from the house — is that a problem?', answer: 'Not at all, but it does affect the installation design. Longer cable runs may require larger cable to avoid voltage drop, and we may recommend a small sub-board at the garage rather than running everything back to the main consumer unit. We\'ll design the right solution for your layout.' },
    ],
  },
  {
    locationSlug: 'mersea-island',
    locationName: 'Mersea Island',
    serviceSlug: 'electrician',
    serviceName: 'Electrician',
    seoTitle: 'Electrician on Mersea Island | Grey Havens',
    seoDescription: 'Trusted electrician on Mersea Island. Coastal property expertise, listed building experience, and the full range of electrical and smart home services.',
    headline: 'Your Electrician on Mersea Island',
    intro: 'Finding a reliable electrician on Mersea Island means finding someone who actually comes to the island regularly, understands what coastal properties need, and doesn\'t treat it as a distant callout with a surcharge attached. We work on Mersea routinely — it\'s part of our core service area, not an afterthought.',
    localAngle: 'Mersea\'s housing is wonderfully varied. There are weather-boarded cottages in the lanes behind the waterfront, larger Victorian and Edwardian homes set back from the coast, modern builds, and everything in between. Several are listed. Many are holiday homes that need their electrics to be reliable year-round even when the owners are only there part-time. We understand these properties. We know that salt air corrodes copper faster, that exposed coastal positions stress cable fixings, and that a holiday home with an electrical fault while the owner is in London needs an electrician who can respond quickly and is already familiar with the property. Whether you need a socket added, a rewire, an EICR, a smart home system, or just someone to diagnose why the lights keep flickering, we\'re a straightforward call away.',
    whyLocal: [
      'Mersea Island is in our core service area — no travel surcharges, no delays waiting for someone to come from Chelmsford',
      'Listed building experience: we work with heritage properties carefully, respecting original features while making electrics safe',
      'Holiday home support: we can respond quickly when something goes wrong between your visits',
      'We understand coastal property challenges — from corrosion to condensation — and specify materials accordingly',
    ],
    faqs: [
      { question: 'Is there an extra charge for Mersea Island?', answer: 'No. Mersea is within our standard service area. We don\'t add callout surcharges or travel fees for island work.' },
      { question: 'I have a listed cottage on Mersea — can you work on it?', answer: 'Yes. We regularly work on listed and older properties on Mersea. We\'re careful with original features and experienced with the constraints that listed buildings impose on electrical installations. Where surface-mounted solutions or specific cable types are needed, we know how to deliver a result that\'s safe, compliant, and sympathetic to the building.' },
    ],
  },
  {
    locationSlug: 'mersea-island',
    locationName: 'Mersea Island',
    serviceSlug: 'smart-home-installation',
    serviceName: 'Smart Home Installation',
    seoTitle: 'Smart Home Installation Mersea Island | Grey Havens',
    seoDescription: 'Smart home systems for Mersea Island properties. Remote monitoring for holiday homes, smart heating, security, and coastal-ready networking.',
    headline: 'Smart Home Installation on Mersea Island',
    intro: 'Mersea Island is one of those places where smart home technology solves real problems, not just interesting ones. If you own a holiday home on the island, the ability to check your heating remotely in January, see who\'s at the front door from your phone in London, or get an alert if the power goes out isn\'t a luxury — it\'s genuinely practical. And if you live on Mersea full-time, the benefits of smart lighting, automated heating schedules, and integrated security are just as relevant as anywhere else.',
    localAngle: 'For Mersea holiday homes specifically, we typically recommend a core system built around three things: smart heating control (so you\'re not heating an empty house all winter, but can warm it up before you arrive), a security camera or two covering entry points, and a reliable network to support it all. For permanent residents, the scope is wider — full lighting control, multi-room audio, automated blinds, smart locks, and integration with your heating system. The critical foundation in both cases is networking. Mersea\'s broadband can be variable, and WiFi coverage in older stone or rendered properties is often poor. We always address connectivity first — usually with a wired network backbone and strategically placed access points — before layering on the smart devices.',
    whyLocal: [
      'Practical systems for holiday homes: heating control, security, and remote monitoring that actually saves you money and worry',
      'Networking-first approach: we solve the connectivity problem before adding devices that depend on it',
      'Coastal-rated equipment: outdoor cameras and access points specified for exposed positions',
      'We design systems for how you actually use your Mersea property, not a theoretical ideal',
    ],
    faqs: [
      { question: 'Can I monitor my Mersea holiday home when I\'m not there?', answer: 'Yes — that\'s one of the most common things we set up for Mersea holiday homeowners. Smart cameras, heating controls, leak sensors, and power monitoring can all be checked from your phone. We design the system around what gives you the most peace of mind.' },
      { question: 'The WiFi in my Mersea cottage is terrible — does that rule out smart home technology?', answer: 'No, it just means we need to fix the WiFi first. Thick-walled cottages on Mersea are notorious for poor WiFi coverage. We install proper access points with wired backhaul to solve this before adding any smart devices.' },
    ],
  },

  // ── MALDON ──────────────────────────────────────────────────
  {
    locationSlug: 'maldon',
    locationName: 'Maldon',
    serviceSlug: 'ev-charger-installation',
    serviceName: 'EV Charger Installation',
    seoTitle: 'EV Charger Installation Maldon | Grey Havens',
    seoDescription: 'Home EV charger installation in Maldon. Period properties, riverside homes, and modern housing — we handle the routing challenges properly.',
    headline: 'EV Charger Installation in Maldon',
    intro: 'Maldon is quietly going electric. The town\'s mix of housing — from the historic high street properties down to the riverside homes at Heybridge Basin, and the more modern estates between — means EV charger installations are never quite one-size-fits-all. The common thread is that homeowners want it done cleanly, safely, and without visible cable runs spoiling the look of their property.',
    localAngle: 'The high street and conservation area properties in Maldon centre present particular routing considerations. External fixings need to be sympathetic, cable routes need planning to avoid visible runs across frontages, and in some cases, listed building consent may be relevant. Out towards Heybridge, the properties tend to be more modern with easier access, but even there, garage positions and parking arrangements vary. We survey every Maldon property before quoting, because the difference between a quote and the actual cost of installation usually comes down to details the first installer didn\'t notice. We aim to remove that ambiguity upfront.',
    whyLocal: [
      'Sensitive installations for conservation area and character properties along Maldon\'s high street',
      'Coverage across Maldon town, Heybridge, Heybridge Basin, and surrounding villages',
      'Accurate quotes based on a proper site survey, not estimates based on a phone description',
      'Full service: dedicated circuit, consumer unit assessment, installation, testing, and certification',
    ],
    faqs: [
      { question: 'My property is in the Maldon conservation area — can I still have an EV charger?', answer: 'In most cases, yes. The charger itself is a permitted development for most residential properties, but placement and cable routing may need to be considered carefully. We\'ll advise on the most sympathetic installation approach for your specific property.' },
      { question: 'Do you cover Heybridge Basin?', answer: 'Yes. We cover all of the Maldon district including Heybridge, Heybridge Basin, and the surrounding villages.' },
    ],
  },
  {
    locationSlug: 'maldon',
    locationName: 'Maldon',
    serviceSlug: 'smart-home-installation',
    serviceName: 'Smart Home Installation',
    seoTitle: 'Smart Home Installation Maldon | Grey Havens',
    seoDescription: 'Smart home systems in Maldon that work with your property, not against it. Retrofit-friendly, properly networked, and designed for real use.',
    headline: 'Smart Home Installation in Maldon',
    intro: 'Maldon has a character that most people want to preserve, not plaster over with technology. The good news is that a well-designed smart home system is invisible. The switches look like switches. The heating just works more efficiently. The lighting creates the right mood without you thinking about it. The technology disappears into the background and the house just works better.',
    localAngle: 'We approach Maldon installations with the property\'s character in mind. In the period homes around the high street and Market Hill, we use smart switches that fit existing face plates, wireless sensors that don\'t require new cable runs, and discreet access points that maintain reliable connectivity without cluttering walls with tech. For the more modern properties around the edges of town and into Heybridge, we can be more ambitious with wired infrastructure, in-ceiling speakers, and integrated lighting control. The goal in both cases is a system you use every day without noticing the technology — it just makes living in your home a little bit better. Heating schedules that actually match your routine. Lighting that adjusts with the time of day. Security you can check from bed. None of it complicated.',
    whyLocal: [
      'Character-sensitive installations for Maldon\'s period properties — technology that doesn\'t compromise aesthetics',
      'Modern property setups with wired infrastructure for maximum reliability',
      'We design around your daily routine, not around what\'s technically impressive',
      'Networking installed first so that every smart device has a reliable connection',
    ],
    faqs: [
      { question: 'Will smart switches look out of place in my period Maldon home?', answer: 'Not the way we do it. We use smart switch modules that fit behind existing face plates, or quality smart switches that come in heritage-style finishes. The technology is hidden or sympathetic — not a white plastic rectangle on a Georgian wall.' },
      { question: 'Can I start small and add more later?', answer: 'Absolutely. In fact, we often recommend it. Start with smart heating and a few key lighting circuits, live with it for a few months, and then decide what to add. We design the underlying infrastructure to support expansion from the start.' },
    ],
  },
  {
    locationSlug: 'maldon',
    locationName: 'Maldon',
    serviceSlug: 'eicr-certificates',
    serviceName: 'EICR Certificates',
    seoTitle: 'EICR Certificates Maldon | Grey Havens',
    seoDescription: 'EICR inspections in Maldon — thorough, honest, and properly documented. Landlord compliance and homeowner safety across the Maldon district.',
    headline: 'EICR Certificates in Maldon',
    intro: 'An EICR isn\'t a pass or fail — it\'s a detailed assessment that grades every aspect of your electrical installation against current standards. The quality of that assessment depends entirely on the person doing it. A rushed inspection misses things. An overzealous one creates unnecessary alarm. What you want is someone thorough, honest, and experienced enough to know the difference between a genuine hazard and a minor observation.',
    localAngle: 'Maldon\'s property market includes a substantial number of rental properties, particularly in the town centre and Heybridge, and landlords are legally required to hold a valid EICR for each one. But we also inspect owner-occupied homes — particularly the older properties around the Maldon district where owners want reassurance that their electrics are safe, or are preparing for a sale and want to preempt any issues a buyer\'s surveyor might raise. What sets our approach apart is that we inspect, we don\'t just test. The numbers on the meter matter, but so does the visual inspection — the cable route through the loft that\'s been damaged by a roofer, the junction box that\'s been left open, the earth bond that\'s been disconnected during a kitchen refit. We look at the whole picture.',
    whyLocal: [
      'We inspect the installation, not just the numbers — visual assessment is as important as testing',
      'Honest reporting: we distinguish between genuine hazards and minor observations, and explain the difference',
      'Landlord compliance across the Maldon district with competitive portfolio rates',
      'If remedial work is needed, we can carry it out without you needing to find another contractor',
    ],
    faqs: [
      { question: 'I\'m selling my Maldon property — should I get an EICR first?', answer: 'It\'s not legally required for a sale, but it\'s increasingly expected. Getting one done before listing lets you fix any issues proactively rather than having them surface during a buyer\'s survey and potentially stalling the sale.' },
      { question: 'What\'s the difference between a C2 and a C3 on an EICR?', answer: 'A C2 is a deficiency that could become dangerous and needs attention. A C3 is a recommendation for improvement but not a safety concern. We explain every observation on your report clearly so you understand what needs action and what doesn\'t.' },
    ],
  },

  // ── TIPTREE ──────────────────────────────────────────────────
  {
    locationSlug: 'tiptree',
    locationName: 'Tiptree',
    serviceSlug: 'consumer-unit-replacement',
    serviceName: 'Consumer Unit Replacement',
    seoTitle: 'Consumer Unit Replacement Tiptree | Grey Havens',
    seoDescription: 'Consumer unit upgrades in Tiptree — replacing 1960s–80s fuse boxes with modern RCD-protected units. Done in a day, fully certified.',
    headline: 'Consumer Unit Replacement in Tiptree',
    intro: 'Tiptree grew substantially in the 1960s, 70s, and 80s, and a lot of the village\'s housing stock still has the electrical infrastructure from that era. The consumer units in these homes were perfectly adequate when installed — but electrical safety standards have moved on considerably since then, and what was compliant in 1975 doesn\'t meet today\'s requirements for RCD protection.',
    localAngle: 'The typical Tiptree consumer unit replacement we carry out involves removing a board with rewirable fuses or early MCBs and no RCD protection, and replacing it with a modern split-load or fully RCD-protected unit. It\'s a day\'s work in most cases. You\'ll be without power for a few hours during the changeover, but we plan the work to keep disruption to a minimum — and the result is a board that provides genuine protection against electric shock and fire, proper circuit separation, clear labelling, and space for future additions if you ever need to add circuits for an EV charger, home office, or extension. If we find any issues with your wiring during the replacement — loose connections, deteriorating cables, missing earth bonds — we\'ll flag them and discuss your options. We don\'t leave problems hidden behind a new board.',
    whyLocal: [
      'Familiar with Tiptree\'s 1960s–80s housing and the typical consumer unit issues these properties have',
      'Most replacements completed within a single day with minimal power outage',
      'We assess the wider installation during the work, not just the board itself',
      'Full certification and building control notification — no loose ends',
    ],
    faqs: [
      { question: 'My Tiptree house was built in the 1970s — does it definitely need a new consumer unit?', answer: 'Very likely. Most 1970s boards lack RCD protection, which is now considered essential for safety. We can assess yours specifically and advise, but in the majority of cases we inspect from that era, an upgrade is overdue.' },
      { question: 'Can you add extra circuits at the same time as the replacement?', answer: 'Yes. If you know you\'ll need additional circuits — for an EV charger, garden office, or extension — it makes sense to factor these in during the consumer unit replacement. We\'ll size the new unit to accommodate your current and planned needs.' },
    ],
  },
  {
    locationSlug: 'tiptree',
    locationName: 'Tiptree',
    serviceSlug: 'ev-charger-installation',
    serviceName: 'EV Charger Installation',
    seoTitle: 'EV Charger Installation Tiptree | Grey Havens',
    seoDescription: 'EV charger installation in Tiptree. Most properties have off-street parking — ideal for home charging. Dedicated circuit, full certification.',
    headline: 'EV Charger Installation in Tiptree',
    intro: 'One advantage of Tiptree\'s housing layout is that most properties have driveways and garages — which makes home EV charging straightforward compared to urban areas where parking is a challenge. If you\'ve got a driveway and a consumer unit with capacity for an additional circuit, you\'re halfway there.',
    localAngle: 'The main variable in Tiptree installations is the distance between the consumer unit and where you want the charger. In a typical Tiptree semi or detached with a front driveway and the consumer unit in the hallway, it\'s usually a short, clean run. If the charger is going on a detached garage or the consumer unit is at the rear of the house, it takes a bit more planning — but nothing unusual for us. We assess each property individually during a pre-installation survey, confirm the cable route, check that your existing consumer unit can handle the additional load (and if it can\'t, we\'ll include an upgrade in the quote), and give you a fixed price with no surprises. Installation day itself is typically half a day for a standard setup.',
    whyLocal: [
      'Tiptree\'s housing layout means most installations are straightforward — which keeps costs down',
      'Consumer unit assessment included: if you need an upgrade to support the charger, we\'ll tell you upfront',
      'Fixed-price quotes based on a proper site survey, not a rough estimate over the phone',
      'Clean cable management — even on a simple install, we make sure it looks right',
    ],
    faqs: [
      { question: 'I have a 1970s consumer unit — will it handle an EV charger?', answer: 'Older consumer units often don\'t have space for an additional circuit, and may lack the capacity to support a 32A EV charger safely. We\'ll assess your board during the survey. If an upgrade is needed, we can do both at the same time — often more cost-effective than two separate visits.' },
      { question: 'Can I charge my car from a standard socket instead?', answer: 'Technically yes, but it\'s very slow (8–12 hours for a partial charge) and puts sustained load on a circuit that wasn\'t designed for it. A dedicated 7kW charger on its own circuit is faster, safer, and better for your vehicle\'s battery.' },
    ],
  },

  // ── WITHAM ──────────────────────────────────────────────────
  {
    locationSlug: 'witham',
    locationName: 'Witham',
    serviceSlug: 'rewires',
    serviceName: 'Rewires',
    seoTitle: 'Rewiring Services Witham | Grey Havens',
    seoDescription: 'Full and partial rewiring in Witham. Older properties brought up to BS 7671 with care, quality materials, and minimal disruption to your home.',
    headline: 'Rewiring in Witham',
    intro: 'Witham has some genuinely characterful older properties, particularly around the town centre, along Newland Street, and in the conservation area. Many of these homes still have their original wiring — or wiring that was last updated when the house was still heated by coal. Rewiring a home is one of the bigger domestic electrical jobs, but when the existing installation has reached the end of its life, it\'s also one of the most important.',
    localAngle: 'The question we get asked most about rewires in Witham is "how much mess will it make?" — and it\'s a fair question. Rewiring means running new cables through walls, under floors, and across ceilings, and in older Witham properties that can mean lifting floorboards, chasing plaster, and temporarily dismantling things you\'d rather not touch. We take a careful, planned approach. Before work starts, we agree exactly where every socket, switch, and light will go. We discuss cable routes and identify where access is easiest and where we need to take extra care — particularly around original features, decorative plaster, or areas that have recently been redecorated. We work room by room so you can continue living in the house during the rewire, and we make good as we go rather than leaving a trail of damage behind us.',
    whyLocal: [
      'We plan rewires in detail before starting — the wall-chasing comes after the thinking, not before',
      'Room-by-room approach so you can stay in your home throughout',
      'Experienced with Witham\'s older construction: lathe-and-plaster walls, timber floors, historic features',
      'Making good is part of the job — we don\'t leave holes for your decorator to discover',
    ],
    faqs: [
      { question: 'How do I know if my Witham property needs rewiring?', answer: 'Warning signs include rubber or fabric-insulated cables (look in the loft), round-pin sockets, a fuse box with rewirable fuses, and any EICR that has flagged serious deficiencies. If your home was built before 1970 and hasn\'t been rewired, it\'s worth having an assessment.' },
      { question: 'Can you rewire without destroying original plaster?', answer: 'We try to preserve as much original plaster as possible. Cable routes are planned to use floor voids and loft access where we can. Where chasing is unavoidable, we keep it to a minimum and make good with appropriate materials. In listed or heritage properties, we discuss surface-mounted alternatives where chasing isn\'t appropriate.' },
    ],
  },
  {
    locationSlug: 'witham',
    locationName: 'Witham',
    serviceSlug: 'smart-home-installation',
    serviceName: 'Smart Home Installation',
    seoTitle: 'Smart Home Installation Witham | Grey Havens',
    seoDescription: 'Smart home installation in Witham — practical systems that make daily life easier, not tech for the sake of it.',
    headline: 'Smart Home Installation in Witham',
    intro: 'The best smart home systems are the ones your whole household actually uses. Not the ones that impress visitors but confuse your partner, or that work perfectly until someone changes the WiFi password. We install smart home systems in Witham that are designed for real life — intuitive, reliable, and genuinely useful.',
    localAngle: 'In Witham, we often start conversations with homeowners who\'ve already tried a few smart devices and found them underwhelming. A smart speaker that can\'t control the heating. Smart bulbs that go offline when the kids are streaming Netflix. A video doorbell that only works when it\'s in the mood. The issue is almost always infrastructure. The WiFi can\'t cope, the devices aren\'t compatible with each other, or nobody thought about where the router actually is in relation to the devices trying to reach it. Our approach in Witham — as everywhere — starts with the boring stuff: where does your router live, how many walls is the signal passing through, what\'s your broadband speed like, and do you have any ethernet available? Once the network is solid, the smart devices just work. That\'s when it stops being a novelty and starts being something the whole family uses without thinking about it.',
    whyLocal: [
      'We fix the infrastructure problems that make existing smart devices unreliable',
      'Systems designed for the whole household to use, not just the person who\'s into tech',
      'Practical starting points: smart heating and lighting that save energy and add convenience',
      'We help you avoid buying expensive devices that don\'t work together',
    ],
    faqs: [
      { question: 'I\'ve already got some smart devices that don\'t work well together — can you sort it out?', answer: 'Usually, yes. We\'ll look at what you have, identify the compatibility and connectivity issues, and design a coherent system. Sometimes that means keeping what works and replacing what doesn\'t. Sometimes it means fixing the WiFi. We\'ll give you an honest assessment.' },
      { question: 'What\'s the most useful smart home feature for a Witham family home?', answer: 'Smart heating control is almost always the biggest win — it saves money and makes the house more comfortable. After that, automated lighting (especially at bedtime and for coming home to a lit house) and a video doorbell tend to be the features that get used most.' },
    ],
  },
  {
    locationSlug: 'witham',
    locationName: 'Witham',
    serviceSlug: 'eicr-certificates',
    serviceName: 'EICR Certificates',
    seoTitle: 'EICR Certificates Witham | Grey Havens',
    seoDescription: 'EICR inspections in Witham — thorough assessments for landlords and homeowners. Honest reporting, clear explanations, and remedial work available.',
    headline: 'EICR Certificates in Witham',
    intro: 'If you\'re a Witham landlord, you know you need an EICR. The question is whether you want an inspection that\'s actually thorough, or one that takes 45 minutes and costs thirty quid. The cheap ones exist, and they\'re cheap for a reason — they miss things, they tick boxes without testing properly, and if something goes wrong with a tenant\'s electrics, that paperwork won\'t protect you.',
    localAngle: 'We carry out EICRs across Witham for landlords, homeowners, and property buyers. For landlords, it\'s legal compliance — but it should also be genuine reassurance that your property is electrically safe. For homeowners, particularly those in the older properties along the town centre and Guithavon Valley, an EICR is the most reliable way to find out whether your electrics need attention before a problem becomes an emergency. Our inspections typically take 2–4 hours for a standard domestic property. We test every circuit, inspect every accessible part of the installation, and produce a report that tells you clearly what\'s fine, what needs watching, and what needs fixing. If remedial work is needed, we can quote for it on the spot and often complete it within days — one contractor, no handoff delays.',
    whyLocal: [
      'Thorough inspections: 2–4 hours for a standard property, not a quick walk-round',
      'Clear reporting: every observation explained in plain language, not just codes on a form',
      'One-stop service: inspection, report, and any remedial work from the same electrician',
      'Landlord-friendly scheduling: we work around tenant access and can batch multiple properties efficiently',
    ],
    faqs: [
      { question: 'How is your EICR different from the cheap ones I see advertised?', answer: 'Time and thoroughness. A proper EICR for a typical house takes 2–4 hours of testing and inspection. If someone is offering it in an hour at rock-bottom prices, they\'re cutting corners. Our reports reflect genuine, circuit-by-circuit testing — not just a glance at the consumer unit and a signature.' },
      { question: 'My tenant is difficult about access — can you be flexible with scheduling?', answer: 'Yes. We understand the realities of tenant access and can work with your scheduling constraints. Morning, afternoon, or specific time windows — we\'ll accommodate what works.' },
    ],
  },

  // ── DISS ──────────────────────────────────────────────────
  {
    locationSlug: 'diss',
    locationName: 'Diss',
    serviceSlug: 'ev-charger-installation',
    serviceName: 'EV Charger Installation',
    seoTitle: 'EV Charger Installation Diss | Grey Havens',
    seoDescription: 'Home EV charger installation in Diss and surrounding Suffolk villages. Rural property experience, long cable runs, and outbuilding installations.',
    headline: 'EV Charger Installation in Diss',
    intro: 'Diss and the surrounding villages are exactly the kind of area where home EV charging makes the most sense. Public charging infrastructure is sparse in rural Suffolk, so having a reliable charging point at home isn\'t just convenient — for many EV owners around Diss, it\'s essential.',
    localAngle: 'Rural properties around Diss often come with generous plots, long driveways, and outbuildings — all of which affect how an EV charger installation is designed. A charger mounted next to a detached barn 30 metres from the main house is a fundamentally different installation to a wallbox on the front of a semi. We regularly handle these longer runs, specifying appropriately sized cable, assessing whether a sub-board at the outbuilding makes more sense than a single long run back to the main consumer unit, and ensuring proper earth provision throughout. For the properties in Diss town itself — the Victorian and Edwardian homes around the Mere, the newer estates to the south — installations are typically more straightforward, but we still survey every property individually. No two installations are identical, and a proper survey prevents surprises.',
    whyLocal: [
      'Experienced with rural property installations: barn conversions, outbuildings, and long cable runs across Diss and the surrounding villages',
      'Sub-board installations for detached garages and outbuildings where a direct run isn\'t practical',
      'Single-supply assessment: we check whether your incoming supply can handle an EV charger, particularly important for rural properties on older infrastructure',
      'No travel surcharges for Diss and surrounding areas — it\'s part of our regular service territory',
    ],
    faqs: [
      { question: 'My Diss property is on an older single-phase supply — can it handle an EV charger?', answer: 'Most single-phase supplies can support a 7kW charger, but older supplies may have a lower incoming fuse rating. We check this during the survey. If your supply needs upgrading, we\'ll advise on the process — which involves your distribution network operator, not us — or we can install a charger with load management that stays within your existing supply limits.' },
      { question: 'Can you install a charger at a barn conversion near Diss?', answer: 'Yes. Barn conversions and rural properties are some of our most common installations in the Diss area. We\'ll survey the property, design the cable route, and handle any sub-board or earth rod requirements as part of the installation.' },
    ],
  },
  {
    locationSlug: 'diss',
    locationName: 'Diss',
    serviceSlug: 'smart-home-installation',
    serviceName: 'Smart Home Installation',
    seoTitle: 'Smart Home Installation Diss | Grey Havens',
    seoDescription: 'Smart home systems for Diss and rural Suffolk. Security, heating, and automation that solve real problems for country and town properties.',
    headline: 'Smart Home Installation in Diss',
    intro: 'Rural properties around Diss have different smart home priorities to a flat in Colchester. Security matters more when your nearest neighbour is half a mile away. Heating control matters more when you\'re trying to keep a draughty farmhouse warm without spending a fortune. And connectivity matters more when your broadband is delivered over a copper line that\'s been in the ground since the 1990s.',
    localAngle: 'We design smart home systems for Diss and the surrounding area with these realities front and centre. For the larger rural properties — farmhouses, barn conversions, and country homes — we typically prioritise three things: a security system with cameras covering access points and outbuildings (viewable from your phone, day or night), smart heating that\'s zoned properly so you\'re not heating rooms nobody\'s using, and networking infrastructure that actually delivers reliable connectivity throughout the property including outbuildings. The networking piece is often the most transformative. Many rural properties around Diss have their router in the hallway, connected to broadband that struggles to reach the kitchen, let alone the annexe or the home office above the garage. We install structured cabling and access points that spread reliable connectivity throughout the property — and once that foundation is in place, every other smart device you add just works.',
    whyLocal: [
      'Security-first design for isolated rural properties: cameras, smart lighting, and alerts that give you real peace of mind',
      'Heating control that accounts for large, old, and draughty buildings — zoned systems that reduce waste',
      'Networking solutions for properties where broadband barely reaches past the front door',
      'Outbuilding connectivity: home offices, workshops, and annexes connected to the main property network',
    ],
    faqs: [
      { question: 'Can you get reliable WiFi to my detached home office near Diss?', answer: 'Almost certainly. We run ethernet from the main house to the outbuilding (buried or overhead, depending on the site) and install a dedicated access point. The result is a connection as fast and reliable as being next to the router in the house. We do this regularly for home workers around Diss.' },
      { question: 'Is smart home technology worth it for an older property near Diss?', answer: 'Especially so. Smart heating control alone can save significant money in older properties where heating costs are high. Add smart security for a rural location and reliable connectivity for home working, and the investment pays for itself surprisingly quickly.' },
    ],
  },
  {
    locationSlug: 'diss',
    locationName: 'Diss',
    serviceSlug: 'consumer-unit-replacement',
    serviceName: 'Consumer Unit Replacement',
    seoTitle: 'Consumer Unit Replacement Diss | Grey Havens',
    seoDescription: 'Consumer unit replacement in Diss. Older Suffolk properties and farmhouses upgraded to modern RCD-protected boards — safely and professionally.',
    headline: 'Consumer Unit Replacement in Diss',
    intro: 'The properties around Diss are some of the most interesting we work on — and some of the most electrically overdue for attention. Georgian townhouses by the Mere with fuse boxes that pre-date decimal currency. Victorian cottages in the surrounding villages with rewirable fuses and no earth bond. Farmhouses where the electrical installation has been added to piecemeal over fifty years, resulting in multiple boards, inconsistent earthing, and wiring of every vintage imaginable.',
    localAngle: 'A consumer unit replacement in this context isn\'t just swapping a board. It\'s an opportunity to rationalise the installation — consolidating circuits onto a single, properly designed board with correct RCD protection, assessing the earthing system (TT earthing is common in rural Suffolk, which has its own requirements), and identifying any circuit issues that need addressing while the board is being replaced. We approach each Diss property on its own merits. A straightforward replacement in a modern estate house on the outskirts of town is a very different job to a farmhouse that\'s had circuits added across three decades. Both get a modern, compliant consumer unit — but the assessment, the specification, and the work involved are quite different. We explain what we find, what we recommend, and what it will cost before we start.',
    whyLocal: [
      'Understanding of TT earthing systems common in rural Suffolk — and the specific consumer unit requirements they bring',
      'Experienced with multi-board rationalisation in older properties that have been extended and modified over the years',
      'Honest assessment: we\'ll tell you what else needs attention beyond the board itself, so you can make informed decisions',
      'Full Electrical Installation Certificate and building control notification included',
    ],
    faqs: [
      { question: 'My Diss farmhouse has three different fuse boards — can you consolidate them?', answer: 'Usually, yes. Multiple boards are typically the result of extensions and modifications over the years. We can consolidate to a single, properly designed consumer unit — though the scope depends on cable lengths and circuit layouts. We\'ll assess your installation and explain the options.' },
      { question: 'What is TT earthing and why does it matter?', answer: 'TT earthing means your property gets its earth from a rod in the ground rather than from the electricity supply. It\'s common in rural areas around Diss. It requires specific RCD protection arrangements in the consumer unit and the earth rod itself may need testing or replacing. We check all of this as part of our assessment.' },
    ],
  },
];

export function getComboPagesByLocation(locationSlug: string): ComboPage[] {
  return comboPages.filter(p => p.locationSlug === locationSlug);
}

export function getComboPagesByService(serviceSlug: string): ComboPage[] {
  return comboPages.filter(p => p.serviceSlug === serviceSlug);
}
