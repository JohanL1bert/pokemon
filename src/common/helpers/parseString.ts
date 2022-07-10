import { IGetPokemonData } from 'app/store/getPokemon/interface';

export const parseRequestString = (listOfPokemon: IGetPokemonData) => {
  const arrayOfPokemonNumber: Array<number> = [];
  const regexPattern = /[0-9]+\/$/;
  const listNumbers = listOfPokemon.results;

  Object.values(listNumbers).forEach((key) => {
    const { url } = key;
    const matchNumber = url.match(regexPattern)![0];
    if (matchNumber !== null) {
      const sliceLastSymbol = matchNumber.slice(0, matchNumber.length - 1);
      arrayOfPokemonNumber.push(Number(sliceLastSymbol));
    }
  });

  return arrayOfPokemonNumber;
};
