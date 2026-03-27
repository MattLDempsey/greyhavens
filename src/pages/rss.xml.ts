import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

const posts = [
  {
    title: 'Landlord Electrical Safety: Your Legal Obligations',
    slug: 'landlord-electrical-safety-legal-obligations',
    date: '2026-03-26',
    description:
      'A clear guide to landlord electrical safety requirements in England — EICR regulations, compliance timescales, penalties of up to £30k, and what you need to do to stay compliant.',
  },
  {
    title: 'Smart Home on a Budget: Where to Start',
    slug: 'smart-home-on-a-budget-where-to-start',
    date: '2026-03-24',
    description:
      'A practical, phased approach to building a smart home without overspending — from WiFi infrastructure and smart lighting to security cameras, with advice on what to prioritise first.',
  },
  {
    title: 'What Is Part P and Why Does It Matter?',
    slug: 'what-is-part-p-and-why-does-it-matter',
    date: '2026-03-22',
    description:
      'Part P of the Building Regulations explained simply — what electrical work is notifiable, what homeowners can do themselves, and why compliance matters for house sales and insurance.',
  },
  {
    title: 'Rewiring a House: Signs, Costs, and What to Expect',
    slug: 'rewiring-a-house-signs-costs-and-what-to-expect',
    date: '2026-03-20',
    description:
      'How to tell if your home needs rewiring, what the process involves, typical costs by house size, and how to combine a rewire with other electrical improvements.',
  },
  {
    title: 'EV Charger Installation: Home Charging Explained',
    slug: 'ev-charger-installation-home-charging-explained',
    date: '2026-03-18',
    description:
      'A practical guide to home EV charger installation — charger types, tethered vs untethered, grant eligibility, installation requirements, smart features, and running costs vs petrol.',
  },
  {
    title: 'Planning Smart Home Wiring for New Builds and Renovations',
    slug: 'smart-home-wiring-new-builds',
    date: '2026-03-12',
    description:
      'If you are building or renovating, this is the ideal time to install structured cabling, WiFi access points, and smart lighting infrastructure. Here is what to consider before the walls close up.',
  },
  {
    title: 'Can I Install My Own EV Charger?',
    slug: 'can-i-install-my-own-ev-charger',
    date: '2026-03-08',
    description:
      'Why you cannot legally install a hardwired EV charger yourself in the UK — Part P regulations, insurance risks, the limits of granny chargers, and what a professional installation involves.',
  },
  {
    title: 'How Often Should Electrics Be Tested?',
    slug: 'how-often-should-electrics-be-tested',
    date: '2026-03-04',
    description:
      'EICR testing frequency for homeowners, landlords, and commercial properties — plus when to test outside the normal schedule and what the inspection result codes mean.',
  },
  {
    title: 'Cat5 vs Cat6 vs Cat6a: Which Ethernet Cable Do You Need?',
    slug: 'cat5-vs-cat6-vs-cat6a-ethernet-cable-guide',
    date: '2026-02-28',
    description:
      'A comparison of Cat5e, Cat6, and Cat6a ethernet cables — speeds, shielding, costs, and which cable type is best for home and commercial network installations.',
  },
  {
    title: 'How Much Does an EICR Cost?',
    slug: 'how-much-does-an-eicr-cost',
    date: '2026-02-24',
    description:
      'A clear breakdown of EICR pricing in 2026 — what affects the cost, what the inspection involves, how often you need one, and the legal requirements for landlords.',
  },
  {
    title: 'How to Improve WiFi in an Old House',
    slug: 'how-to-improve-wifi-in-an-old-house',
    date: '2026-02-20',
    description:
      'Why older homes struggle with WiFi and the best solutions ranked — from repositioning your router to hardwired access points, mesh systems, and professional WiFi surveys.',
  },
  {
    title: 'What Does an Electrician Charge Per Hour in Essex?',
    slug: 'what-does-an-electrician-charge-per-hour',
    date: '2026-02-14',
    description:
      'Typical electrician hourly rates and day rates in Essex and Suffolk, what affects pricing, why some jobs are fixed price, and how to ensure you get a fair quote.',
  },
  {
    title: 'Do I Need a Consumer Unit Upgrade?',
    slug: 'do-i-need-a-consumer-unit-upgrade',
    date: '2026-02-10',
    description:
      'If your home still has an old fuse box, it may not be providing the protection you need. Learn the signs that your consumer unit needs replacing and what a modern upgrade involves.',
  },
];

export function GET(context: APIContext) {
  return rss({
    title: 'Grey Havens Blog',
    description:
      'Practical guides and expert advice on electrical work, smart home technology, and property compliance.',
    site: context.site!.toString(),
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: new Date(post.date),
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>en-GB</language>',
  });
}
