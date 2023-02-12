const header = {
  homepage: '/',
  title: 'JK',
}

const intro = {
  name: 'João Knoller',
  role: 'Desenvolvedor Front End',
  resume: '/curriculo.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/joao-knoller',
    github: 'https://github.com/joaoknoller',
  },
}

const about = {
  description: 'Curioso por natureza, atualmente trabalho como desenvolvedor front-end com experiência em HTML, CSS e JavaScript. Estou terminando o curso de Sistemas de Informação no CEFET/RJ e busco sempre estar a par das tecnologias do mercado. Como nunca gostei de limitações quando o assunto era adquirir conhecimento, sempre me atualizo nas diversas áreas de um sistema, seja back-end, devops, testes ou o que mais for necessário :)'
}

const projects = [
  {
    name: 'Quiz',
    description:
      'Jogo de perguntas e respostas',
    stack: ['React', 'TypeScript', 'CSS'],
    sourceCode: 'https://github.com/joaoknoller/quiz',
    livePreview: 'https://quiz-joaoknoller.vercel.app/',
  },
  {
    name: 'Admin Template',
    description:
      'Template para dashboard com autenticação. Obs.: Login não está funcionando no momento pois firebase está desativado no projeto',
    stack: ['TailwindCSS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/joaoknoller/template-admin',
    livePreview: 'https://template-admin-joaoknoller.vercel.app/',
  },
  // {
  //   name: 'CRUD',
  //   description:
  //     '',
  //   stack: ['TailwindCSS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React/Next',
  'SASS',
  'TailwindCSS',
  'Git',
  'CI/CD',
  'Jest',
  'Linux Server',
  'PHP',
  'Gulp',
  'Webpack',
]

const contact = {
  email: 'joaofelipeknollermarques@gmail.com',
  linkedin: 'https://linkedin.com/in/joao-knoller'
}

export { header, intro, about, projects, skills, contact }
