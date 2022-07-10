import { IGetPokemonData, IPokemonImagePromise } from 'app/store/getPokemon/interface';

export const createPokemonObject = (
  requestData: IGetPokemonData,
  images: Array<IPokemonImagePromise<string>>
) => {
  const PokemonImage = images.map((key) => key);
  return { ...requestData, PokemonImage };
};
