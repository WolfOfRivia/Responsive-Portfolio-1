// FLOATING NAVIGATION
const floatingNavs = document.querySelectorAll('.floating__nav a');

const removeActiveClass = () => {
  floatingNavs.forEach(nav => {
    nav.classList.remove('active');
  })
}

floatingNavs.forEach(nav => {
  nav.addEventListener('click', () => {
    removeActiveClass();
    nav.classList.add('active');
  })
})

// RESUME
const resumeRight = document.querySelector('.resume__right');
const expBtn = document.querySelector('.exp__btn');
const eduBtn = document.querySelector('.edu__btn');
const skillsBtn = document.querySelector('.skills__btn');
const aboutBtn = document.querySelector('.about__btn');
const expContent = `
<h4>Experience</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestias odit iusto possimus beatae explicabo eum reprehenderit labore.</p>
<ul>
  <li>
    <h6>2018 - 2019</h6>
    <h5>Intern</h5>
    <p>Mobile Telecom Company</p>
  </li>
  <li>
    <h6>2019 - 2021</h6>
    <h5>Freelance Web Designer</h5>
    <p>Fiverr and Upwork</p>
  </li>
  <li>
    <h6>2021 - 2022</h6>
    <h5>Front End Developer</h5>
    <p>Tomcat USA</p>
  </li>
  <li>
    <h6>2022 - Present</h6>
    <h5>Fullstack Developer</h5>
    <p>KoA Creations</p>
  </li>
</ul>`;

const eduContent = `
<h4>Education</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestias odit iusto possimus beatae explicabo eum reprehenderit labore.</p>
  <ul>
    <li>
      <h5>College Education</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit sequi ducimus possimus. Nisi eaque assumenda iure placeat alias, doloribus nesciunt distinctio dolore voluptatibus molestias.</p>
    </li>
    <li>
      <h5>Front End Education</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit sequi ducimus possimus. Nisi eaque assumenda iure placeat alias, doloribus nesciunt distinctio dolore voluptatibus molestias.</p>
    </li>
    <li>
      <h5>Backend Education</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit sequi ducimus possimus. Nisi eaque assumenda iure placeat alias, doloribus nesciunt distinctio dolore voluptatibus molestias.</p>
    </li>
  </ul>
`;

const skillsContent = `
  <h4>Skills</h4>
  <ul>
    <li><img src="./assets/react.webp" alt="React JS logo"></li>
    <li><img src="./assets/next.png" alt="NextJS logo"></li>
    <li><img src="./assets/tailwind.png" alt="Tailwind logo"></li>
    <li><img src="./assets/prisma.png" alt="Prisma logo"></li>
    <li><img src="./assets/mongo.jpg" alt="MongoDB logo"></li>
    <li><img src="./assets/jwt.png" alt="JWT logo"></li>
    <li><img src="./assets/node.png" alt="NodeJS logo"></li>
  </ul>
`;

const abtContent = `
  <h4>About Me</h4>
  <ul>
    <li>
      <h6>Name:</h6>
      <h5>AJ Harris</h5>
    </li>
    <li>
      <h6>Experience:</h6>
      <h5>6 Years</h5>
    </li>
    <li>
      <h6>Email:</h6>
      <h5>email@email.com</h5>
    </li>
    <li>
      <h6>Nationality:</h6>
      <h5>American</h5>
    </li>
    <li>
      <h6>Freelance & Collabs:</h6>
      <h5>Available</h5>
    </li>
    <li>
      <h6>Languages:</h6>
      <h5>English, Japanese, Spanish, Korean, Mandarin</h5>
    </li>
    <li>
      <h6>Github:</h6>
      <h5>email@email.com</h5>
    </li>
    <li>
      <h6>Email:</h6>
      <h5>WolfOfRivia</h5>
    </li>
  </ul>
`;

// EXPERIENCE
expBtn.addEventListener('click', () => {
  // DISPLAY CONTENT
  resumeRight.innerHTML = expContent;
  // SET RESUME RIGHT CLASS TO ONLY RESUME RIGHT
  resumeRight.className = 'resume__right';
  // ADD ACTIVE CLASS TO BUTTON
  expBtn.classList.add('primary');
  // REMOVE ACTIVE CLASS FROM THE OTHER BUTTONS
  skillsBtn.classList.remove('primary');
  aboutBtn.classList.remove('primary');
  eduBtn.classList.remove('primary');
});

// EDUCATION
eduBtn.addEventListener('click', () => {
  // DISPLAY CONTENT
  resumeRight.innerHTML = eduContent;
  // RESET RESUME RIGHT CLASS
  resumeRight.className = 'resume__right';
  // ADD EDU CLASS TO RESUME RIGHT
  resumeRight.classList.add('edu');
  // ADD ACTIVE CLASS TO BUTTON
  eduBtn.classList.add('primary');
  // REMOVE ACTIVE CLASS FROM THE OTHER BUTTONS
  skillsBtn.classList.remove('primary');
  aboutBtn.classList.remove('primary');
  expBtn.classList.remove('primary');
});

// SKILLS
skillsBtn.addEventListener('click', () => {
  // DISPLAY CONTENT
  resumeRight.innerHTML = skillsContent;
  // RESET RESUME RIGHT CLASS
  resumeRight.className = 'resume__right';
  // ADD SKILLS CLASS TO RESUME RIGHT
  resumeRight.classList.add('skills');
  // ADD ACTIVE CLASS TO BUTTON
  skillsBtn.classList.add('primary');
  // REMOVE ACTIVE CLASS FROM THE OTHER BUTTONS
  eduBtn.classList.remove('primary');
  aboutBtn.classList.remove('primary');
  expBtn.classList.remove('primary');
});

// ABOUT
aboutBtn.addEventListener('click', () => {
  // DISPLAY CONTENT
  resumeRight.innerHTML = abtContent;
  // RESET RESUME RIGHT CLASS
  resumeRight.className = 'resume__right';
  // ADD about CLASS TO RESUME RIGHT
  resumeRight.classList.add('about');
  // ADD ACTIVE CLASS TO BUTTON
  aboutBtn.classList.add('primary');
  // REMOVE ACTIVE CLASS FROM THE OTHER BUTTONS
  eduBtn.classList.remove('primary');
  skillsBtn.classList.remove('primary');
  expBtn.classList.remove('primary');
});

// SET EXP CONTENT TO DEFAULT CONTENT ON RESUME RIGHT AS PAGE LOADS
resumeRight.innerHTML = expContent;

// MIX IT UP JS FOR THE PROJECT SECTION
const containerEl = document.querySelector('.projects__container');
let mixer = mixitup(containerEl, {
  animation: {
    enable: false
  }
})

mixer.filter('*');