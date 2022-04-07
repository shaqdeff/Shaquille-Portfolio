const projectCards = [
  {
    card: 1,
    name: 'Tonic',
    name2: 'Tonic',
    image: 'images/tonic1.svg',
    image2: 'images/nature.svg',
    description: `A daily selection of privately personalized reads; no accounts or
                            sign-ups required.`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['CANOPY', 'Back End Dev', '2015'],
  },
  {
    card: 2,
    name: 'Multi-Post Stories',
    name2: 'Multi-Post Stories',
    image: 'images/availability.svg',
    image2: 'images/multipost.svg',
    description: `Experimental content creation feature that allows users to add to
                            an existing story over the course of a day without spamming their
                            friends.`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['FACEBOOK', 'Full Stack Dev', '2015'],
  },
  {
    card: 3,
    name: 'Tonic',
    name2: 'Facebook 360',
    image: 'images/tonic2.svg',
    image2: 'images/facebook.svg',
    description: ` Exploring the future of media in Facebook's first Virtual Reality
                            app; a place to discover and enjoy 360 photos and videos on Gear
                            VR.`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['FACEBOOK', 'Full Stack Dev', '2015'],
  },
  {
    card: 4,
    name: 'Multi-Post Stories',
    name2: 'Uber Navigation',
    image: 'images/profprint.svg',
    image2: 'images/uber.svg',
    description: `  A smart assistant to make driving more safe, efficient, and fun by
                            unlocking your most expensive computer: your car.`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['UBER', 'Lead Developer', '2018'],
  },
];

const portfolioSection = document.getElementById('portfolio');
portfolioSection.innerHTML = projectCards.map((project, index) => `
  <article class="card ${index % 2 !== 0 ? 'card--two' : 'card-one'}">
        <img class="card__image" src="${project.image}" alt="Tonic image" />
        <img
          class="card__image2 image-scale"
          src="${project.image2}"
          alt="Nature image"
        />
        <h2 class="card__title">${project.name}</h2>
        <div class="card-items">
          <h2 class="title__desk">${project.name2}</h2>
          <div class="card__subtitle">
            <h3>${project.specifics[0]}</h3>
            <img src="images/counter.svg" alt="Counter icon" />
            <h3 class="light-text">${project.specifics[1]}</h3>
            <img src="images/counter.svg" alt="Counter icon" />
            <h3 class="light-text">${project.specifics[2]}</h3>
          </div>
          <div class="subtitle__desk">
            <h3>${project.specifics2[0]}</h3>
            <img src="images/counter.svg" alt="Counter icon" />
            <h3 class="light-text">${project.specifics2[1]}</h3>
            <img src="images/counter.svg" alt="Counter icon" />
            <h3 class="light-text">${project.specifics2[2]}</h3>
          </div>
          <div class="card__body">
            <p class="para-mobile">
            ${project.description}
            </p>
            <p class="para-desk move-text">
             ${project.description}
            </p>
            <ul class="categories">
              <li>${project.technologies[0]}</li>
              <li>${project.technologies[1]}</li>
              <li>${project.technologies[2]}</li>
            </ul>
            <ul class="categories-desk">
               <li>${project.technologies[0]}</li>
              <li>${project.technologies[1]}</li>
              <li>${project.technologies[2]}</li>
            </ul>
            <button data-modal="#modal" class="btn" type="button">
              See Project
            </button>
          </div>
        </div>
 </article>
  `).join('');

/* Modal Window */
const openModalButtons = document.querySelectorAll('[data-modal]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const modalTitle = document.querySelector('.title');
const modalImage = document.querySelector('.modal-img');
const modalDescription = document.querySelector('.modal-desc p');
const modalLangs = document.querySelector('.modal-categories');
const liveBtn = document.querySelector('.live-btn');
const codeBtn = document.querySelector('.code-btn');

const portfolio = [
  {
    name: 'Tonic',
    image: 'images/popup-tonic.svg',
    description: ` Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it 1960s with
              the releaLorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it 1960s
              with the releorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum han printer took a
              galley of type and scrambled it 1960s with the releawn
              printer took a galley of type and scrambled it 1960s with
              the releaLorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it 1960s
              with the release.`,
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
    liveButton: 'https://shaqdeff.github.io/Shaquille-Portfolio/',
    codeButton: 'https://github.com/shaqdeff/Shaquille-Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    image: 'images/multipost.svg',
    description: ` Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it 1960s with
              the releaLorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it 1960s
              with the releorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum han printer took a
              galley of type and scrambled it 1960s with the releawn
              printer took a galley of type and scrambled it 1960s with
              the releaLorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it 1960s
              with the release.`,
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
    liveButton: 'https://shaqdeff.github.io/Shaquille-Portfolio/',
    codeButton: 'https://github.com/shaqdeff/Shaquille-Portfolio',
  },
  {
    name: 'Facebook 360',
    image: 'images/facebook.svg',
    description: ` Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it 1960s with
              the releaLorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it 1960s
              with the releorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum han printer took a
              galley of type and scrambled it 1960s with the releawn
              printer took a galley of type and scrambled it 1960s with
              the releaLorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it 1960s
              with the release.`,
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
    liveButton: 'https://shaqdeff.github.io/Shaquille-Portfolio/',
    codeButton: 'https://github.com/shaqdeff/Shaquille-Portfolio',
  },
  {
    name: 'Uber Navigation',
    image: 'images/uber.svg',
    description: ` Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it 1960s with
              the releaLorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it 1960s
              with the releorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum han printer took a
              galley of type and scrambled it 1960s with the releawn
              printer took a galley of type and scrambled it 1960s with
              the releaLorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it 1960s
              with the release.`,
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
    liveButton: 'https://shaqdeff.github.io/Shaquille-Portfolio/',
    codeButton: 'https://github.com/shaqdeff/Shaquille-Portfolio',
  },
];

function updateModalWindow(index) {
  modalLangs.innerHTML = '';
  modalTitle.innerHTML = portfolio[index].name;
  modalImage.src = portfolio[index].image;
  modalDescription.innerHTML = portfolio[index].description;
  portfolio[index].technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.innerText = technology;
    modalLangs.appendChild(li);
  });
  liveBtn.href = portfolio[index].liveButton;
  codeBtn.href = portfolio[index].codeButton;
}

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modal);
    openModal(modal);
    updateModalWindow(Array.prototype.indexOf.call(openModalButtons, button));
  });
});

overlay.addEventListener('click', () => {
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