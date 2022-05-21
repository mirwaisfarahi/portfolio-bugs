const openNav = document.querySelector('#menu');

openNav.addEventListener('click', () => {
  document.querySelector('#mobileNav').style.height = '812px';
});

const closeNav = document.querySelector('.close-button');
closeNav.addEventListener('click', () => {
  document.querySelector('#mobileNav').style.height = '0%';
});

const closes = document.querySelectorAll('.close');
Array.from(closes).forEach((close) => {
  close.addEventListener('click', () => {
    document.querySelector('#mobileNav').style.height = '0%';
  });
});

// popup window for works section
const projects = [
  {
    project_id: 'project1',
    name: 'Tonic',
    experiance: ['CANOPY', 'Backend Dev', '2015'],
    description: 'Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum?',
    technologies: ['html', 'css', 'javaScript'],
    image: 'images/snapshoot-portfolio-1.svg',
    link: ['https://mirwaisfarahi.github.io/', 'https://github.com/mirwaisfarahi'],
  },
  {
    project_id: 'project2',
    name: 'Multi-Post Stories',
    experiance: ['CANOPY', 'Backend Dev', '2015'],
    description: 'Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum?',
    technologies: ['html', 'css', 'javaScript'],
    image: 'images/snapshoot-portfolio-2.svg',
    link: ['https://mirwaisfarahi.github.io/', 'https://github.com/mirwaisfarahi'],
  },
  {
    project_id: 'project3',
    name: 'Tonic',
    experiance: ['CANOPY', 'Backend Dev', '2015'],
    description: 'Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum?',
    technologies: ['html', 'css', 'javaScript'],
    image: 'images/snapshoot-portfolio-3.svg',
    link: ['https://mirwaisfarahi.github.io/', 'https://github.com/mirwaisfarahi'],
  },
  {
    project_id: 'project4',
    name: 'Multi-Post Stories',
    experiance: ['CANOPY', 'Backend Dev', '2015'],
    description: 'Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum?',
    technologies: ['html', 'css', 'javaScript'],
    image: 'images/snapshoot-portfolio-4.svg',
    link: ['https://mirwaisfarahi.github.io/', 'https://github.com/mirwaisfarahi'],
  },
];

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const Overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;

  const modals = document.querySelectorAll('.modal');

  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].project_id === modal.id) {
      modals.forEach((modal) => {
        const htmlBody = document.querySelector('body');
        const title = modal.firstElementChild.firstElementChild;
        const body = modal.lastElementChild;
        htmlBody.style.overflow = 'hidden';
        title.innerHTML = `<h3> ${projects[i].name} </h3>`;
        body.innerHTML = `<ul id = "experience"> ${projects[i].experiance[0]}
                            <li class = "type"> ${projects[i].experiance[1]} </li> 
                            <li class = "type"> ${projects[i].experiance[2]} </li>
                          </ul>
                          <img class = "modal-img" src="${projects[i].image}" alt="">
                          <div id = "project-desc">
                            <p class = "description">${projects[i].description}</p>
                            <div id = "description-subsection">
                              <ul id="technologies">
                               ${projects[i].technologies.map((technology) => `
                                <li class = "tech-type">${technology}</li>
                                `)}
                            </ul >
                            <div id='project-buttons'>
                              <a class = "link" href="${projects[i].link[0]}" target="_blank">See Live <img src='images/live-icon.png'></a>
                              <a class = "link" href="${projects[i].link[1]}" target="_blank">See Source <img src='images/github-icon.png'></a>
                            </div>
                            </div >
                          </div > `;
      });

      modal.classList.add('active');
      Overlay.classList.add('active');
    }
  }
}

function closeModal(modal) {
  if (modal == null) return;

  const htmlBody = document.querySelector('body');
  htmlBody.style.overflow = 'scroll';
  modal.classList.remove('active');
  Overlay.classList.remove('active');
}

function display(modal) {
  const htmlBody = document.querySelector('body');
  htmlBody.style.overflow = 'scroll';
  modal.classList.remove('active');
  Overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

Overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

// form validation

const form = document.querySelector('#contact_form');
const emailError = document.querySelector('#emailError');
const email = document.querySelector('#email_address');

form.addEventListener('submit', (e) => {
  if (!(email.value.match(/^[a-z@.0-9-_]*$/))) {
    e.preventDefault();
    email.style.border = '2px solid red';
    emailError.classList.add('active');
  }
});
