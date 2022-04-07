const projectCards = [
              {
                            card: 1,
                            name: 'Tonic',
                            image: 'images/tonic1.svg',
                            image2: 'images/nature.svg',
                            description: `A daily selection of privately personalized reads; no accounts or
                            sign-ups required.`,
                            technologies: ['html', 'css', 'javascript'],
              },
              {
                            card: 2,
                            name: "Multi-Post Stories",
                            image: 'images/availability.svg',
                            image2: "images/multipost.svg",
                            description: `Experimental content creation feature that allows users to add to
                            an existing story over the course of a day without spamming their
                            friends.`,
                            technologies: ["html", "css", "javascript"],
              },
              {
                            card: 3,
                            name: 'Tonic',
                            name2: "Facebook 360",
                            image: 'images/tonic2.svg',
                            image2: "images/facebook.svg",
                            description: ` Exploring the future of media in Facebook's first Virtual Reality
                            app; a place to discover and enjoy 360 photos and videos on Gear
                            VR.`,
                            technologies: ["html", "css", "javascript"],
              },
              {
                            card: 4,
                            name: 'Multi-Post Stories',
                            name2: "Uber Navigation",
                            image: 'images/profprint.svg',
                            image2: "images/uber.svg",
                            description: `  A smart assistant to make driving more safe, efficient, and fun by
                            unlocking your most expensive computer: your car.`,
                            technologies: ["html", "css", "javascript"],
              },
];

const portfolioSection = document.getElementById("portfolio");
portfolioSection.innerHTML = portfolio
              .map(
                            (project, index) => `
  <article class="card ${index % 2 === 0 ? "card-two" : "card-one"}">
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
            <h3>CANOPY</h3>
            <img src="images/counter.svg" alt="Counter icon" />
            <h3 class="light-text">Back End Dev</h3>
            <img src="images/counter.svg" alt="Counter icon" />
            <h3 class="light-text">2015</h3>
          </div>
          <div class="subtitle__desk">
            <h3>CANOPY</h3>
            <img src="images/counter.svg" alt="Counter icon" />
            <h3 class="light-text">Back End Dev</h3>
            <img src="images/counter.svg" alt="Counter icon" />
            <h3 class="light-text">2015</h3>
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
  `
              )
              .join("");

