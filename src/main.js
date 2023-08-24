import paises from "./data/countries/countries.js";

const btnCountries= document.querySelector("#btn-countries") 
btnCountries.addEventListener("click",()=>{
  const home= document.getElementById("home-welcome") 
  home.classList.add("none")

  const pageCountries= document.getElementById("page-countries")
  pageCountries.classList.add("flex")

})



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

   // criação da capital
   const capital = document.createElement("span");
   capital.classList.add("card-informations");
   capital.innerText = `Capital: ${pais.capital}`;
   card.appendChild(capital);

  // criação da populaçãp 
  const population = document.createElement("span");
  population.classList.add("card-informations");
  population.innerText = `População: ${pais.population.toLocaleString("pt-BR")}`;
  card.appendChild(population);

   // criação das linguagens
   if (pais.languages) {
    const languages = document.createElement("span");
    languages.classList.add("card-informations");
    languages.innerText = `Idioma: ${Object.values(pais.languages).join(
      ", "
    )}`;
    card.appendChild(languages);
  }

  // renderiza o card na tela
  countriesConteiner.appendChild(card);
});

