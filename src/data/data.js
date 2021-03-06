import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tony Wei-Han Chen', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'I am Tony, a fullstack developer. Welcome to my website!', // e.g: Welcome to my website
};

// HOE DATA
export const helloData = {
  key: 'hello',
  title: 'Hello!',
  intro: `
    I am Tony.
    I am a <strong>fullstack developer</strong> with 8 years of experience building SaaS web applications in tech startups.
    My expertise is building <span class="text-highlight">user-centred</span> solutions that are both <span class="text-highlight">powerful</span> and <span class="text-highlight">beautiful</span> to solve user pain points.
    I am experienced in the full software development cycle and have created multiple products from scratch and shipped them into production environments.
  `
};

export const experienceData = {
  key: 'experience',
  title: 'I Worked At',
  companies: [{
    key: 'nown',
    name: 'Nōwn (formerly Lucova)',
    dateRange: {
      from: '2014/05/01',
      to: '2019/12/31'
    },
    titles: [{
      key: nanoid(),
      name: 'Senior Fullstack Developer',
      dateRange: {
        from: '2018/10/01',
        to: '2019/12/31'
      }
    }, {
      key: nanoid(),
      name: 'Web Developer',
      dateRange: {
        from: '2014/05/01',
        to: '2018/09/30'
      }      
    }],
    projects: [{
      key: nanoid(),
      name: 'FIITPOS/NōwnPOS',
      highlights: [{
        key: nanoid(),
        description: 'Worked with a team of 5 developers to create SaaS point-of-sales solutions tailored for different market segments',
        tags: ['frontend', 'backend', 'database']
      }, {
        key: nanoid(),
        description: 'Led a re-implementation of the user interface and workflow to better capture retail and quick-serve market segment',
        tags: ['frontend']
      }, {
        key: nanoid(),
        description: 'Improved transaction and reporting logic to help streamline client financial reconciliation and tax filing',
        tags: ['frontend', 'backend', 'database']
      }, {
        key: nanoid(),
        description: 'Prepared staging builds and data migration scripts to preserve client data integrity during production rollout',
        tags: ['frontend', 'backend', 'database']
      }, {
        key: nanoid(),
        description: 'Collaborated with the customer success team to break down client needs into stories to ensure deliverability and product reliability',
        tags: ['design', 'frontend', 'backend', 'database']
      }, {
        key: nanoid(),
        description: 'Provided ongoing maintenance and debugged issues using various tools and strategies, including Chrome Dev Tools, Honeybadger, database audit tables, and custom server-side logging',
        tags: ['frontend', 'backend', 'database']
      }],
      techStacks: [
        { name: 'AngularJS', level: 0 },
        { name: 'Java', level: 0 },
        { name: 'Dropwizard', level: 1 },
        { name: 'Hibernate', level: 1 },
        { name: 'MySQL', level: 0 }
      ]
    }, {
      key: nanoid(),
      name: 'Data and Campaign Dashboard',
      highlights: [{
        key: nanoid(),
        description: 'Designed and developed a back-office dashboard that works in conjunction with FIITPOS/NōwnPOS payment engines to better provide business owners with analytics',
        tags: ['design', 'frontend', 'backend', 'database']
      }, {
        key: nanoid(),
        description: 'Collaborated with the business development team to gather requirements, formulate critical KPIs, and create user interface and graphics to display those metrics in a meaningful and visually-appealing manner',
        tags: ['design', 'frontend', 'backend', 'database']
      }, {
        key: nanoid(),
        description: 'Implemented a transactional email delivery system allowing business owners to send hyper-focused marketing to specific user segments based on analytics ',
        tags: ['design', 'frontend']
      }],
      techStacks: [
        { name: 'AngularJS', level: 0 },
        { name: 'Ruby', level: 0 },
        { name: 'Sinatra', level: 1 },
        { name: 'Mongoid', level: 1 },
        { name: 'MongoDB', level: 0 }
      ]
    }]
  }, {
    key: 'bcs',
    name: 'Bedside Clinical System',
    dateRange: {
      from: '2011/11/01',
      to: '2014/4/30'
    },
    titles: [{
      key: nanoid(),
      name: 'Clinical Software Developer',
    }],
    projects: [{
      key: nanoid(),
      name: 'BedsidePEWS',
      highlights: [{
        key: nanoid(),
        description: 'Implemented user interfaces and vital sign algorithms for a patient health early warning system, which analyzes patient vital signs and provides recommendations to prevent clinical deterioration',
        tags: ['design', 'frontend', 'backend']
      }, {
        key: nanoid(),
        description: 'Developed custom multi-domain time-series charts using D3.js to help nurses and clinicians visualize patient vital trends',
        tags: ['frontend']
      }, {
        key: nanoid(),
        description: 'Reviewed, recommended, and implemented changes to internal development processes in order to obtain ISO 13485 Quality Management System Certification and FDA 501(k) approval for the application',
        tags: ['frontend', 'backend']
      }],
      techStacks: [
        { name: 'AngularJS', level: 0 },
        { name: 'Java', level: 0 },
        { name: 'Vaddin', level: 1 },
        { name: 'Spring', level: 1 },
        { name: 'Hibernate', level: 1 },
        { name: 'PostgresSQL', level: 0 }
      ]
    }]
  }]
};

export const skillData = {
  key: 'skill',
  title: 'I Use',
  domains: [{
    key: 'frontend',
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'SASS', 'JavaScript', 'AngularJS 1.x', 'D3.js', 'NPM', 'Webpack', 'Chrome Dev Tools']
  }, {
    key: 'backend',
    name: 'Backend',
    skills: ['Java', 'Dropwizard', 'Hibernate', 'Ruby', 'Sinatra', 'Mongoid', 'Node.js', 'Puppeteer']
  }, {
    key: 'database',
    name: 'Database',
    skills: ['MongoDB', 'MySQL']
  }, {
    key: 'design',
    name: 'Design',
    skills: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign']
  }],
  current: {
    description: 'I am also currently learning React and Gatsby to experience different frontend tools to deliver solutions.'
  }
};

export const hobbyData = {
  key: 'hobby',
  title: 'I Also Like',
  hobbies: [{
    key: 'coffee-brewing',
    name: 'Coffee',
    images: ['coolbeans.jpg'],
    description: 'Since the COVID-19 lockdown I have determined not to stop my love for coffee. I have been honing up my pour-over coffee brewing skill, and have created a simple tracker using MERN stack to help me track down new, interesting coffee beans from some of my favourite local coffee roasters.',
    action: 'Check out great coffee from around Toronto',
    link: 'https://coolbeans.tonywchen.com'
  }, {
    key: 'street-photography',
    name: 'Street Photography',
    images: ['street-photography.jpg'],
    description: 'I enjoy the energy of city living and how people come together with each other and with the urban environment. I find these scenes inspiring and make photographs during my free time, including my recent 3-month-long trip to Taiwan.',
    action: 'Come see with my eyes',
    link: 'https://www.instagram.com/twcsnaps'
  }, {
    key: 'hugo',
    name: 'Hugo the Havanese Dog',
    images: ['hugo.jpg'],
    description: 'Hugo is a small Havanese dog. Hugo thinks he is a big boy. Hugo demands treats and my attention. Now Hugo is on Instagram for your attention.',
    action: 'Give Hugo your attention',
    link: 'https://www.instagram.com/hugothedivo'
  }]
};
