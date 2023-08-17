import paises from "./data/countries/countries.js";


paises.countries.forEach((pais) => {
  const countriesConteiner = document.querySelector("#countries-conteiner");

  // criação do card
  const card = document.createElement("div");
  card.classList.add("card");

  // criação da imagem
  const imagem = document.createElement("img");
  imagem.src = pais.flags.png;
  imagem.width = "150";
  card.appendChild(imagem);

  // criação do titulo
  const title = document.createElement("span");
  title.classList.add("card-title");
  title.innerText = pais.name.common;
  card.appendChild(title);

  // criação das linguagens
  if (pais.languages) {
    const languages = document.createElement("span");
    languages.classList.add("card-informations");
    languages.innerText = `linguagens: ${Object.values(pais.languages).join(
      ", "
    )}`;
    card.appendChild(languages);
  }

  // criação da capital
  const capital = document.createElement("span");
  capital.classList.add("card-informations");
  capital.innerText = pais.capital;
  card.appendChild(capital);

  // renderiza o card na tela
  countriesConteiner.appendChild(card);
});
