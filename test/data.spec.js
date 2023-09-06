import { calculateTotalPopulation,calculateIndividualPopulationPercentage } from '../src/data.js';


// dados Mockados para comprovração de eficácia da função de calculo de população global
const paises = [
  {
    population:5
  },
  {
    population:8
  },
  {
    population:5
  },
  {
    population:5
  },
  {
    population:4
  },
  {
    population:6
  },
  {
    population:5
  },
  {
    population:5
  },
  {
    population:3
  },
  {
    population:5
  },
  {
    population:12
  },
  {
    population:5
  },
]


describe('calculo de população', () => {
  it('calculo de população global', () => {
    expect(calculateTotalPopulation(paises)).toBe(68);
  });

  it('calculo de porcentagem de população', () => {
    expect(calculateIndividualPopulationPercentage(100,10)).toBe(10);
  });
});


