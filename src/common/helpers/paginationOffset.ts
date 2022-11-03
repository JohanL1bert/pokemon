const offsetPokemon = 32;

export const paginationOffsetHelper = (number: number, paramCallback: any) => {
  if (number === 1) return paramCallback(0);
  return paramCallback((number - 1) * offsetPokemon);
};
