/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
import { takeEvery, call, put, all } from '@redux-saga/core/effects';
import { AxiosError } from 'axios';
import { parseUrl } from 'common/helpers/urlParseParams';
import { getPokemonCardActionCreator } from 'app/store/pokeCard/pokemonCard.reducer';
import { ApiSearchServices } from 'app/services/MainSearchServices';
import {
  IPokemonEvolutionObj,
  IPokekmonCardSpecies,
  IPokemonEvolutionCard,
  IPokemonCardNameUrl,
} from 'app/store/pokeCard/interface';

const checkEvolutionOfPokemon = (
  evolution: IPokemonEvolutionCard
): unknown[] | Array<IPokemonCardNameUrl> => {
  const recursive = (
    obj: IPokemonEvolutionCard,
    arr: unknown[] | Array<IPokemonEvolutionCard> = []
  ): unknown[] | Array<IPokemonCardNameUrl> => {
    return obj === undefined || obj.species === undefined || Object.keys(obj).length === 0
      ? arr
      : recursive(obj.evolves_to[0], [...arr, obj.species]);
  };

  return recursive(evolution);
};

const getPokemonInfo = async (reqPokemon: IPokemonCardNameUrl) => {
  const result = await ApiSearchServices.searchByUrl({ url: reqPokemon.url });
  console.log(result, 'result');
};

function* getAllPokemonInfoByEvolution(evolutionInfo: unknown[] | Array<IPokemonCardNameUrl>) {
  // #FIXME: typing to unknown []
  if (evolutionInfo.length - 1 !== 0) {
    const evolve = [...evolutionInfo] as unknown as Array<IPokemonCardNameUrl>;
    yield all(evolve.map((evolution) => call(getPokemonInfo, evolution)));
  }
}

const requestForPokemonCardEvolutuion = async (name = 'ivysaur') => {
  const reqPokeSpeciesInfo = await ApiSearchServices.getPokemonSpeciesByName<
    string,
    IPokekmonCardSpecies
  >(name);
  const urlOfEvolution = parseUrl(reqPokeSpeciesInfo.data?.evolution_chain?.url);
  const reqAllPokemonEvolution = await ApiSearchServices.getRequestParams<
    string,
    IPokemonEvolutionObj
  >(urlOfEvolution);
  const { chain } = reqAllPokemonEvolution.data;
  return checkEvolutionOfPokemon(chain);
};

function* getPokemonCardWorker(action: any) {
  try {
    yield put(getPokemonCardActionCreator.startGetPokemonCard());
    const reqEvolutionOfPokemon: unknown[] | Array<IPokemonCardNameUrl> = yield call(
      requestForPokemonCardEvolutuion
    );
    yield call(getAllPokemonInfoByEvolution, reqEvolutionOfPokemon);
  } catch (e: unknown) {
    // #TODO: Create normal axios error
    const error = e as unknown as AxiosError;
    yield put(getPokemonCardActionCreator.errorPokemonCard({ error: error.message }));
  }
}

function* getPokemonCardWatcher() {
  yield takeEvery(getPokemonCardActionCreator.getPokemonCard, getPokemonCardWorker);
}

export { getPokemonCardWatcher };
