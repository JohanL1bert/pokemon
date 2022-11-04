import { IGetPokemonData, IPokemonImagePromise } from 'app/store/getPokemon/interface';

export const createPokemonObject = (
  requestData: IGetPokemonData,
  images: Array<IPokemonImagePromise<string>>,
  types: any
) => {
  const PokemonImage = images.map((key) => key);
  return { ...requestData, PokemonImage, types };
};
