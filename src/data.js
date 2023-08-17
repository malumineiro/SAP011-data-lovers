export const filtroPaises = (paises,continente) =>{
  return paises.filter(
    (pais)=> pais.continents[0] === continente 
  )
}