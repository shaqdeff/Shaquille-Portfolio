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
    image: '../images/popup-tonic.svg',
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
    image: '../images/multipost.svg',
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
    image: '../images/facebook.svg',
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
    image: '../images/uber.svg',
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