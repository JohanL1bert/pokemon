/* eslint-disable consistent-return */
import { takeEvery, call, put } from '@redux-saga/core/effects';
import { parseUrl } from 'common/helpers/urlParseParams';
import { getPokemonCardActionCreator } from 'app/store/pokeCard/pokemonCard.reducer';
import { ApiSearchServices } from 'app/services/MainSearchServices';
// #FIXME: rewrite
const checkEvolutionOfPokemon = (evolution: any): any => {
  console.log(evolution);
  const arr: Array<any> = [];
  const recursiveEvolves = (evolObj: any): any => {
    console.log(evolObj, 'inside rec');
    if (
      evolObj === undefined ||
      evolObj.species === undefined ||
      Object.keys(evolObj).length === 0
    ) {
      return evolObj;
    }
    arr.push(evolObj.species);
    recursiveEvolves(evolObj.evolves_to[0]);
  };
  recursiveEvolves(evolution);
  console.log(arr, 'arr');
};

const requestForPokemonCardEvolutuion = async (name = 'ivysaur') => {
  const pokeSpeciesInfo = await ApiSearchServices.getPokemonSpeciesByName(name);
  const url = parseUrl(pokeSpeciesInfo.data?.evolution_chain?.url);
  const allPokeEvolution = await ApiSearchServices.getRequestParams(url);
  const arr = checkEvolutionOfPokemon(allPokeEvolution.data.chain);
  console.log(arr);
};

function* getPokemonCardWorker(action: any) {
  try {
    console.log(action, 'any');

    yield put(getPokemonCardActionCreator.startGetPokemonCard());
    yield call(requestForPokemonCardEvolutuion);
  } catch (e) {
    console.warn(e);
    yield put(getPokemonCardActionCreator.errorPokemonCard());
  }
}

function* getPokemonCardWatcher() {
  yield takeEvery(getPokemonCardActionCreator.getPokemonCard, getPokemonCardWorker);
}

export { getPokemonCardWatcher };
