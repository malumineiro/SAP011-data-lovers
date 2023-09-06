import Countries from "./data/countries/countries.js"
import { filterByContinent, organize, calculateTotalPopulation } from "./data.js"

const totalPopulation = calculateTotalPopulation(Countries.countries)

let actualCountries = []
let ordenacao
let continente

const createCards = () => {
  const container = document.querySelector("#content-countries")
  let cards = actualCountries.map((country) => (
    `<div class="card grow">
      <img height="50%" src=${country.flags.png} alt=${country.flags.alt} >
      <span>${country.name.common}</span>
      <span>Capital: ${country.capital}</span>
      <span>Linguagens: ${country.languages && Object.values(country.languages).join(", ")}</span>
      <span>População: ${country.population.toLocaleString("pt-BR")}</span>
      <span>${Math.round(((country.population *100)/totalPopulation*100))/100 }% da população global </span>
    </div>
    `
  ))

  cards = cards.join(" ")
  container.innerHTML = cards
}

const setDefaultCountries = () => {
  if (continente) {
    actualCountries = filterByContinent(continente, Countries.countries)
  } else {
    actualCountries = [...Countries.countries]
  }

  if (ordenacao) {
    const organized = organize(ordenacao, actualCountries)
    actualCountries = organized
  }

  createCards()
}

const start = () => {
  setDefaultCountries()

  const filterContinent = document.querySelector("#filter-continents")
  filterContinent.addEventListener("change", (event) => {
    continente = event.target.value
    setDefaultCountries()
  })

  const filterAlphabetic = document.querySelector("#filter-aphabetic")
  filterAlphabetic.addEventListener("change", (event) => {
    ordenacao = event.target.value
    setDefaultCountries()
  })

  const homePage = document.querySelector("#home-page")
  const countriesPage = document.querySelector("#countries-page")
  const aboutPage = document.querySelector("#about-page")



  const btnHome = document.querySelector("#btn-home")
  const btnCountries = document.querySelector("#btn-countries")
  const btnAbout = document.querySelector("#btn-about")

  btnHome.addEventListener("click", () => {
    homePage.classList.remove("hidden")
    countriesPage.classList.add("hidden")
    aboutPage.classList.add("hidden")
  })

  btnCountries.addEventListener("click", () => {
    homePage.classList.add("hidden")
    countriesPage.classList.remove("hidden")
    aboutPage.classList.add("hidden")
  })

  btnAbout.addEventListener("click", () => {
    homePage.classList.add("hidden")
    countriesPage.classList.add("hidden")
    aboutPage.classList.remove("hidden")
  })



}


start()