const header = {
  homepage: '/',
  title: 'KENE.',
}

const about = {
  name: 'Kene Arionye',
  role: 'Software Engineer',
  description: "I am a software engineer with a passion for building software that is user-friendly and easy to use. I'm valued for driving quality and consistency throughout all phases of software development. Collaborating effectively with Backend Engineers, Frontend Engineers and UI/UX Engineers.",
  resume: 'https://docs.google.com/document/d/1xQJC2SRCvshd8p55IJlGdElhZDLRwJfu00GeuooQBuw/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/kenechukwu-arionye-57759722a/',
    github: 'https://github.com/kenechiaugustine',
  },
}

const projects = [
  {
    name: "PEIWA",
    description:
      'An Estate Management App, which will enable admin to manage PEIWA estate. I collaborated with Backend engineers to deliver this app.',
    stack: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'Javascript', 'jQuery'],
    sourceCode: '#',
    livePreview: 'http://peiwasites.com/',
  },
  {
    name: 'Laragigs',
    description:
      'Laragigs is a job listing app that allows users to share job openings. It is a web app that is built with Laravel  and MySQL. It is a fully functional app that allows authenticated users to create, read, update and delete job listings.',
    stack: ['PHP', 'Laravel', 'SQL', 'Tailwind'],
    sourceCode: 'https://github.com/kenechiaugustine/laravel-listings',
    livePreview: 'https://laravel-listings.herokuapp.com/',
  },
  {
    name: 'WhisperApp',
    description:
      'Whisper is a social and dating app that allows users find friends, build relationships and chat with each other. It is built with NodeJS, Express, and React. The mobile app was built with Dart and Flutter. Currently, it is still in development.',
    stack: ['NodeJS', 'ExpressJS', 'TypeScript', 'React', 'Dart', 'Flutter'],
    sourceCode: '#',
    livePreview: 'https://whisperapp.co.uk/',
  },
  {
    name: "Okonor's Crib",
    description:
      'An assessment app, which will enable students to read and practice exams by taking quizzes. I collaborated with UX designers, Frontend engineers and Backend engineers to deliver this app.',
    stack: ['NestJS', 'TypeScript', 'Postgres', 'React'],
    sourceCode: '#',
    livePreview: 'https://okonorlistic.com/',
    // livePreview: https://admin.okonorlistic.com/
  },
  {
    name: 'Tuzz',
    description:
      'A Fun and Awarding Application, where a user can choose a wild variety of games like Ludo, Whoot, Ayo and even Fantasy Premier League (FPL)',
    stack: ['Flutter', 'Dart', 'NodeJS', 'ExpressJS', 'TypeScript'],
    sourceCode: '#',
    livePreview: 'https://tuzzapp.com/',
  }
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
