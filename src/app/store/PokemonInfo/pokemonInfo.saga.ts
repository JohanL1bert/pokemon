import { call, put, takeEvery } from '@redux-saga/core/effects';
import axios from 'axios';
import { pokemonInfoActionCreator } from 'app/store/PokemonInfo/pokemonInfo.reducer';

const requestPokemonInfo = async (name: string) => {
  const getPokemonInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  return getPokemonInfo;
};

function* getPokemonInfoWorker(action: ReturnType<typeof pokemonInfoActionCreator.getPokemonInfo>) {
  yield put(pokemonInfoActionCreator.startGetPokemonInfo());
  const pokemonInfo: unknown = yield call(requestPokemonInfo, action.payload);
  console.log(pokemonInfo);
}

function* getPokemonInfoWatcher() {
  yield takeEvery(pokemonInfoActionCreator.getPokemonInfo, getPokemonInfoWorker);
}

export { getPokemonInfoWatcher };
