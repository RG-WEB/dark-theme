const switchBtn = document.querySelector(".switch-btn");

const section = document.querySelector("section");

switchBtn.addEventListener("click", function switchToDarkTheme() {
  document.documentElement.classList.toggle("dark-theme");
});

const articles = [
  {
    id: 1,
    title: "the WET Codbase",
    date: new Date(2020, 9, 4),
    length: 11,
    snippet: `I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of.`,
  },
  {
    id: 2,
    title: "goodby, clean code",
    date: new Date(2019, 10, 22),
    length: 5,
    snippet: `Biodiesel artisan seitan plaid sriracha copper mug venmo shabby chic. Kickstarter raclette kombucha, yr post-ironic jianbing try-hard flexitarian vaporware normcore.`,
  },
  {
    id: 3,
    title: "my decade in review",
    date: new Date(2018, 7, 11),
    length: 5,
    snippet: `Direct trade shabby chic four dollar toast, tilde actually try-hard bicycle rights aesthetic forage. Meditation keytar asymmetrical tacos artisan truffaut. Pabst jean shorts roof party scenester.`,
  },
  {
    id: 4,
    title: "what are the react team principles",
    date: new Date(2015, 5, 4),
    length: 5,
    snippet: `Selvage street art hammock affogato VHS. Mustache shaman literally wayfarers schlitz. Direct trade four loko narwhal VHS pop-up, chartreuse trust fund typewriter street art swag thundercats art party.`,
  },
];

function displayContent(textContent) {
  const text = textContent.map(function (item) {
    // console.log(item);
    const date = new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "medium",
    }).format(new Date());
    return `
    <article class="product-content">
    <h2 class="title-content">${item.title}</h2>
    <div class="product-date">
    <span>${date}</span>
    <span class="product-length">${item.length} read time</span>
    </div>
        <div class="product-info">
        <p class="content-text">${item.snippet}</p>
        </div>
        </article>`;
  });
  section.innerHTML = text.join("");
}

displayContent(articles);
