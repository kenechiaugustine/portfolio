const header = {
  homepage: '/',
  title: 'KENE.',
}

const about = {
  name: 'Kenechukwu Arionye',
  role: 'Software Engineer',
  description:
    "I am a software engineer with a passion for building software that is user-friendly and easy to use. I'm valued for driving quality and consistency throughout all phases of software development. Collaborating effectively with Backend Engineers, Frontend Engineers and UI/UX Engineers.",
  resume:
    'https://docs.google.com/document/d/1xQJC2SRCvshd8p55IJlGdElhZDLRwJfu00GeuooQBuw/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/kenechukwu-arionye-57759722a/',
    github: 'https://github.com/kenechiaugustine',
  },
}

const projects = [
  {
    name: 'PEIWA',
    description:
      'I collaborated with Backend Engineers to deliver an Estate Management App that enables administrators to manage PEIWA estate.',
    stack: [
      'PHP',
      'Laravel',
      'MySQL',
      'HTML',
      'CSS',
      'Bootstrap',
      'Javascript',
      'jQuery',
    ],
    sourceCode: '#',
    livePreview: 'http://peiwasites.com/',
  },
  {
    name: 'Laragigs',
    description:
      'Laragigs is a web app built with Laravel and MySQL, designed for job listings where authenticated users can create, read, update and delete job openings. This fully functional app enables users to share job listings with ease.',
    stack: ['PHP', 'Laravel', 'SQL', 'Tailwind'],
    sourceCode: 'https://github.com/kenechiaugustine/laravel-listings',
    livePreview: 'https://laragigs.onrender.com/',
  },
  {
    name: 'WhisperApp',
    description:
      'Whisper is a social and dating app that is currently in development. The app is designed to enable users to find friends, build relationships, and chat with each other. It is built with NodeJS, Express, and React for the web version, and with Dart and Flutter for the mobile version.',
    stack: ['NodeJS', 'ExpressJS', 'TypeScript', 'React', 'Dart', 'Flutter'],
    sourceCode: '#',
    livePreview: 'https://whisperapp.co.uk/',
  },
  {
    name: "Okonor's Crib",
    description:
      'This app is an assessment app that enables students to read and practice exams through taking quizzes. It involves the collaboration of UX designers, Frontend Engineers, and Backend Engineers in its development.',
    stack: ['NestJS', 'TypeScript', 'Postgres', 'React'],
    sourceCode: '#',
    livePreview: 'https://okonorlistic.com/',
    // livePreview: https://admin.okonorlistic.com/
  },
  {
    name: 'Tuzz',
    description:
      'This application offers users a fun and rewarding experience by providing a wide variety of games to choose from, including Ludo, Whoot, Ayo, and even Fantasy Premier League (FPL).',
    stack: ['Flutter', 'Dart', 'NodeJS', 'ExpressJS', 'TypeScript'],
    sourceCode: '#',
    livePreview: 'https://tuzzapp.com/',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'NodeJS',
  'ExpressJS',
  'TypeScript',
  'PHP',
  'Laravel',
  'SASS',
  'Git',
  'MongoDB',
]

const contact = {
  email: 'kenechiaugustine@gmail.com',
}

export { header, about, projects, skills, contact }
