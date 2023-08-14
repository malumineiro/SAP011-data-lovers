export const ordenarAaZ = (paises) => {
  return paises.sort((a, b) => {
    if (a.name.common > b.name.common) {
      return 1;
    }
    if (a.name.common < b.name.common) {
      return -1;
    }
    return 0;
  });
};
