
export const filterByContinent = (continent, paises) => {
  return paises.filter((pais) =>
    pais.continents[0].toLowerCase().includes(continent)
  );
};

export const organize = (ordem, paises) => {
  switch (ordem) {
  case "asc":
    return paises.sort((a, b) => {

      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
    });
  case "desc":
    return paises.sort((a, b) => {
      if (a.name.common > b.name.common) {
        return -1;
      }
      if (a.name.common < b.name.common) {
        return 1;
      }
      return 0;
    });
  default:
    break;
  }
};


export const calculateTotalPopulation = (countries) => {
  let population = 0

  countries.forEach(country => {
    population += country.population
  });

  return population

}

export const calculateIndividualPopulationPercentage = (total,individual)=>{
  return Math.round(
    ((individual *100)/total ) * 100
  )/100 
}

