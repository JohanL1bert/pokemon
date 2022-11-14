import { takeEvery, put, call } from '@redux-saga/core/effects';
import axios, { AxiosResponse } from 'axios';
import { removeUnusableTypes } from 'common/helpers/removeUnusableTypes';
import { getPokemonTypesActionCreator } from 'app/store/pokemonTypes/pokemonTypes.reducer';
import { IGetPokemonTypes } from 'app/store/pokemonTypes/interface';

const requestPokemonTypes = async (): Promise<AxiosResponse<IGetPokemonTypes>> => {
  const pokemonTyps = await axios.get<IGetPokemonTypes>(`https://pokeapi.co/api/v2/type/`);
  return pokemonTyps;
};

function* getPokemonTypesWorker() {
  try {
    yield put(getPokemonTypesActionCreator.startGetPokemon());
    const response: AxiosResponse<IGetPokemonTypes> = yield call(requestPokemonTypes);
    yield call(removeUnusableTypes, response.data.results); // remove results
    yield put(getPokemonTypesActionCreator.succesGetPokemon());
  } catch (e) {
    yield put(getPokemonTypesActionCreator.errorGetPokemon());
  }
}

function* getPokemonTypesWatcher() {
  yield takeEvery(getPokemonTypesActionCreator.getPokemonTypes, getPokemonTypesWorker);
}

export { getPokemonTypesWatcher };
