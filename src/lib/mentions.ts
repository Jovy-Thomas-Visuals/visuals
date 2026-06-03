export interface MediaItem {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  link?: string;
}

export interface FeatureCard {
  iconKey: 'award' | 'star' | 'newspaper';
  title: string;
  description: string;
  image: { src: string; alt: string; aspect: 'square' | 'video'; constrain?: boolean };
  link?: { href: string; label: string };
}

export const npsImages: MediaItem[] = [
  { src: '/awards/nps_1.png.avif', alt: 'NPS Award September 2017' },
  { src: '/awards/nps_2.png.avif', alt: 'NPS Award August 2017' },
  { src: '/awards/nps_3.png.avif', alt: 'NPS Award August 2017' },
  { src: '/awards/nps_4.png.avif', alt: 'NPS Award August 2017' }
];

export const magicOfChildhoodImages: MediaItem[] = [
  { src: '/awards/magic_of_childhood.avif', alt: 'Magic of Childhood Feature' },
  { src: '/awards/magic_of_childhood_2.avif', alt: 'Magic of Childhood Feature' }
];

export const featureCards: FeatureCard[] = [
  {
    iconKey: 'star',
    title: 'Affinity Photo for iPad',
    description: 'My work got featured in Affinity Photo for iPad.',
    image: { src: '/awards/affinity.png.avif', alt: 'Affinity Photo Feature', aspect: 'video' },
    link: { href: 'https://affinity.serif.com/en-us/photo/ipad/', label: 'Visit Affinity Photo' }
  },
  {
    iconKey: 'star',
    title: 'DSLR Official Instagram - Daily Feature',
    description:
      'This image got published in DSLR official on Instagram as Daily Feature on September 25, 2016.',
    image: {
      src: '/awards/dslr_official.avif',
      alt: 'DSLR Official Feature',
      aspect: 'square',
      constrain: true
    },
    link: { href: 'https://www.instagram.com/dslrofficial/', label: 'Visit @dslrofficial' }
  },
  {
    iconKey: 'star',
    title: "Jessica Drossin's Site Feature",
    description:
      "The following image of mine is featured in super talented Jessica Drossin's site for showcasing Evergreen - Before and After effect from JD Looking Glass: Cool Presets.",
    image: {
      src: '/awards/jessica_drossin.avif',
      alt: 'Jessica Drossin Feature',
      aspect: 'video'
    },
    link: {
      href: 'https://jessicadrossinstore.com/jd-looking-glass-cool-presets/',
      label: "Visit Jessica Drossin's Site"
    }
  },
  {
    iconKey: 'award',
    title: 'Photo of the Day',
    description: 'Selected as photo of the day on October 5th, 2016.',
    image: { src: '/awards/photo_of_the_day.avif', alt: 'Photo of the Day', aspect: 'video' },
    link: { href: 'https://www.facebook.com/thedslr/', label: 'Visit The DSLR on Facebook' }
  },
  {
    iconKey: 'newspaper',
    title: "Shubh Yatra - Air India's Inflight Magazine",
    description:
      "My picture of Ethipothala waterfalls got featured in Shubh Yatra, Air India's inflight magazine.",
    image: { src: '/awards/shubh_yatra.avif', alt: 'Shubh Yatra Feature', aspect: 'video' },
    link: { href: 'http://shubh-yatra.in/rush-hour', label: 'Read the Article' }
  }
];

export const mediaCoverageItems: MediaItem[] = [
  {
    src: '/mentions/maternity_article.avif',
    alt: 'Maternity Photo Session Article',
    title: 'Maternity Photo Session',
    description: 'Featured article about maternity photography'
  },
  {
    src: '/mentions/new_indian_express.avif',
    alt: 'The New Indian Express Article',
    title: 'The New Indian Express',
    description: 'Featured in The New Indian Express'
  },
  {
    src: '/mentions/deccan_chronicle.avif',
    alt: 'Deccan Chronicle Article',
    title: 'Deccan Chronicle',
    description: 'August 19, 2020'
  },
  {
    src: '/mentions/resilience_exhibition.avif',
    alt: 'Resilience Exhibition Hyderabad',
    title: 'Exhibition - Resilience',
    description: 'Hyderabad - March 2020'
  },
  {
    src: '/mentions/resilience_exhibition_2.avif',
    alt: 'Resilience Exhibition Hyderabad',
    title: 'Exhibition - Resilience',
    description: 'Hyderabad - March 2020'
  },
  {
    src: '/mentions/hansindia_womenia.avif',
    alt: 'The HansIndia Womenia Article',
    title: 'The HansIndia - Womenia',
    description: 'September 9, 2019',
    link: 'https://epaper.thehansindia.com/m5/2320179/HYDERABAD-MAIN/HYDERABAD-MAIN#page/5/1'
  },
  {
    src: '/mentions/world_photography.avif',
    alt: 'World Photography - Capturing Memories of Lockdown',
    title: 'World Photography',
    description: 'Capturing the Memories of Lockdown'
  }
];

export const googleReviews: string[] = [
  '/reviews/Google review Sindhu.jpg.avif',
  '/reviews/Pavan review 3.jpg.avif',
  '/reviews/baby photoshoot in hyderabad.png.avif',
  '/reviews/Screen Shot 2018-10-31 at 11_44_22 AM_pn.png.avif',
  '/reviews/Screen Shot 2018-10-31 at 11_44_33 AM_pn.png.avif',
  '/reviews/Screen Shot 2018-10-31 at 11_45_07 AM_pn.png.avif',
  '/reviews/Screenshot 2019-02-15 at 10_52_36 AM.png.avif',
  '/reviews/Screenshot 2019-02-15 at 10_52_46 AM.png.avif',
  '/reviews/8df3c2_2677a602da9e4045b41ac6c640329b9e~mv2.png.avif',
  '/reviews/8df3c2_2ce4913985714dff91365f4530cb0dcf~mv2.png.avif',
  '/reviews/8df3c2_4b2eb3450a424fc09048a6323090ffde~mv2.png.avif',
  '/reviews/8df3c2_67b20392b6664fa7897ea3fc16623fbc~mv2.jpg.avif',
  '/reviews/8df3c2_6ed52d28aa164b04a155bc6c780d2ee1~mv2.png.avif'
];

export const iapcpImages: MediaItem[] = [
  { src: '/iapcp/iapcp_1.jpg', alt: 'Best child photography Hyderabad, India' },
  { src: '/iapcp/iapcp_2.jpg', alt: 'Best kids photographer India, Hyderabad' },
  { src: '/iapcp/iapcp_3.jpg', alt: 'Kids photography India, Hyderabad' },
  { src: '/iapcp/iapcp_4.jpg', alt: 'Child photographer India, Hyderabad' },
  { src: '/iapcp/iapcp_5.jpg', alt: 'Whimsical portrait photography' },
  { src: '/iapcp/iapcp_6.jpg', alt: 'Creative child photography' }
];

export interface QA {
  question: string;
  answers: string[];
}

export const iapcpQA: QA[] = [
  {
    question:
      'How much time do you spend on the processing and any suggestion for the photographers who wish to do such work?',
    answers: [
      'My editing time per image ranges from 1 to 3 hours, although I find myself engaged in some pictures for days to add a unique element in them that matches my vision. My suggestion to photographers who want to do this genre is, be willing to do a lot of experiments with your pictures and have the courage to be different.',
      'I would say, do not refrain yourself and create what you visualize in your mind, no matter how crazy you think it is. I consider myself still in the learning process. And there is a vast world to explore.'
    ]
  },
  {
    question: 'Why you choose to do such photos?',
    answers: [
      'I create the images which appeal to my aesthetic sense and work for clients who appreciate the same. I started off by everyday pictures, but wanted to do more and experiment. This led to an adventure with some simple props and the imaginary world that could be created through my style of work.',
      'I should say everything I have read and watched has influenced me in creating such pictures. In other words, these pictures have an element of me in them. I have always loved to watch fairies and angel movies and used to admire their paintings. I am equally attracted to movies with vintage elements.',
      'Through my pictures, I try to re-create whatever I wish I had experienced, a different world altogether. Indeed, some of my own dreams and fantasies come to life through these pictures.'
    ]
  },
  {
    question: 'What lens do you generally use?',
    answers: [
      "In terms of the lens, I mostly use Canon's 135mm and 50mm as I find it best for portraits. It helps me in achieving lovely bokeh effect thus giving more attention to the subject."
    ]
  }
];
