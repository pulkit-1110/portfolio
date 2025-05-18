import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  git,
  nextjs,
  mongodb,
  expressjs,
  nodejs,
  expo,
  docker,
  reactnative,
  tailwind,
  leherLogo,
  theSparksFoundationLogo,
  devops,
  mysteryMessage,
  expressEcho,
  chatNexus,
  github,
  postman,
  cplus,
  python,
  c,
  aws,
  mysql,
  figma,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About Me',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Full Stack Developer',
    icon: web,
  },
  {
    title: 'Mobile App Developer',
    icon: mobile,
  },
  {
    title: 'DevOps Enthusiast',
    icon: devops,
  },
]

const technologies = [
  { name: 'HTML 5', icon: html },
  { name: 'CSS 3', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'Next.js', icon: nextjs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Express.js', icon: expressjs },
  { name: 'Node.js', icon: nodejs },
  { name: 'React', icon: reactjs },
  { name: 'React Native', icon: reactnative },
  { name: 'Expo', icon: expo },
  { name: 'Git', icon: git },
  // { name: 'Docker', icon: docker },
  { name: 'Tailwind CSS', icon: tailwind },
]

const experiences = [
  {
    title: 'Software Developer Engineer',
    company_name: 'Leher',
    icon: leherLogo,
    iconBg: '#fff',
    date: 'July 2024 - Present',
    points: [
      'Managed backend development and infrastructure.',
      'Contributed to Pilot PWA and Admin Console frontend.',
      'Implemented feedback, notifications, and referral system in Leher app.',
      'Developed WhatsApp workflows for order creation and feedback.',
      'Collaborated with product and design teams to align development with business goals.',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company_name: 'Leher',
    icon: leherLogo,
    iconBg: '#fff',
    date: 'Sept 2023 - May 2024',
    points: [
      'Built RESTful APIs using Node.js and Express.js.',
      'Optimized data storage and retrieval with MongoDB.',
    ],
  },
  {
    title: 'Web Development and Designing Intern',
    company_name: 'The Sparks Foundation',
    icon: theSparksFoundationLogo,
    iconBg: '#fff',
    date: 'March 2023 - April 2023',
    points: [
      'Developed a banking website with improved UX.',
      'Enhanced customer experience with personalized dashboards.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Chat Nexus',
    description:
      'A real-time chat platform with authentication and real-time messaging. Built with React.js, Node.js, and MongoDB, it enables seamless communication with a responsive UI.',
    tags: [
      {
        name: 'React JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient',
      },
    ],
    image: chatNexus,
    source_code_link: 'https://github.com/pulkit-1110/chat-nexus-frontend',
  },
  {
    name: 'Mystery Message',
    description:
      'A Next.js-powered platform that lets users receive anonymous messages via a unique sharable link! Senders can generate messages using AI or write their own.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'GenerativeAI',
        color: 'green-text-gradient',
      },
      {
        name: 'WebDev',
        color: 'pink-text-gradient',
      },
    ],
    image: mysteryMessage,
    source_code_link: 'https://github.com/pulkit-1110/mystery-message',
  },
  {
    name: 'Express Echo',
    description:
      'A blogging platform for creating and sharing content. Developed using ReactJS, Appwrite, and Tailwind CSS, it offers a smooth and customizable writing experience.',
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Appwrite',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: expressEcho,
    source_code_link: 'https://github.com/pulkit-1110/ExpressEcho',
  },
]

export { services, technologies, experiences, testimonials, projects }

export const Skill_data = [
  {
    skill_name: 'Html 5',
    Image: html,
    width: 120,
    height: 120,
  },
  {
    skill_name: 'CSS',
    Image: css,
    width: 120,
    height: 120,
  },
  {
    skill_name: 'Tailwind Css',
    Image: tailwind,
    width: 120,
    height: 120,
  },
  {
    skill_name: 'Figma',
    Image: figma,
    width: 100,
    height: 100,
  },
  {
    skill_name: 'Git',
    Image: git,
    width: 140,
    height: 140,
  },
  // {
  //   skill_name: 'Redux',
  //   Image: '/redux.png',
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: 'React Query',
  //   Image: '/reactquery.png',
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: 'Type Script',
  //   Image: '/ts.png',
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: 'Next js 13',
  //   Image: '/next.png',
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: 'Framer Motion',
  //   Image: '/framer.png',
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: 'Stripe Payment',
  //   Image: '/stripe.webp',
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: 'Node js',
  //   Image: '/node-js.png',
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: 'Mongo db',
  //   Image: '/mongodb.png',
  //   width: 40,
  //   height: 40,
  // },
]

export const Socials = [
  {
    name: 'Discord',
    src: '/instagram.svg',
  },
  {
    name: 'Facebook',
    src: '/facebook.svg',
  },
  {
    name: 'Instagram',
    src: '/discord.svg',
  },
]

export const languages = [
  {
    skill_name: 'C',
    Image: c,
    width: 100,
    height: 100,
  },
  {
    skill_name: 'C++',
    Image: cplus,
    width: 100,
    height: 100,
  },
  {
    skill_name: 'Python',
    Image: python,
    width: 120,
    height: 120,
  },
  {
    skill_name: 'Java Script',
    Image: javascript,
    width: 120,
    height: 120,
  },
  {
    skill_name: 'Type Script',
    Image: typescript,
    width: 120,
    height: 120,
  },
  {
    skill_name: 'MySQL',
    Image: mysql,
    width: 140,
    height: 140,
  },
]

export const Frontend_skill = [
  {
    skill_name: 'Next Js',
    Image: nextjs,
    width: 120,
    height: 120,
  },
  {
    skill_name: 'React JS',
    Image: reactjs,
    width: 100,
    height: 100,
  },
  {
    skill_name: 'React Native',
    Image: reactnative,
    width: 140,
    height: 140,
  },
  {
    skill_name: 'Expo',
    Image: expo,
    width: 100,
    height: 100,
  },
  // {
  //   skill_name: 'Material UI',
  //   Image: '/mui.png',
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: 'React',
  //   Image: reactjs,
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: 'Redux',
  //   Image: reactjs,
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: 'React Query',
  //   Image: '/reactquery.png',
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: 'Type Script',
  //   Image: typescript,
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: 'Next js 13',
  //   Image: nextjs,
  //   width: 80,
  //   height: 80,
  // },
]

export const Backend_skill = [
  {
    skill_name: 'Node js',
    Image: nodejs,
    width: 100,
    height: 100,
  },
  {
    skill_name: 'Express js',
    Image: expressjs,
    width: 100,
    height: 100,
  },
  {
    skill_name: 'Mongo db',
    Image: mongodb,
    width: 120,
    height: 120,
  },
  // {
  //   skill_name: 'Fire base',
  //   Image: ,
  //   width: 55,
  //   height: 55,
  // },
  // {
  //   skill_name: 'Postger SQL',
  //   Image: '/postger.png',
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: 'My SQL',
  //   Image: mysql,
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: 'Prisma',
  //   Image: '/prisma.webp',
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: 'Graphql',
  //   Image: '/graphql.png',
  //   width: 80,
  //   height: 80,
  // },
]

export const Full_stack = [
  {
    skill_name: 'AWS',
    Image: aws,
    width: 100,
    height: 100,
  },
  {
    skill_name: 'Docker',
    Image: docker,
    width: 100,
    height: 100,
  },
]

export const Other_skill = [
  {
    skill_name: 'Postman',
    Image: postman,
    width: 100,
    height: 100,
  },
]
