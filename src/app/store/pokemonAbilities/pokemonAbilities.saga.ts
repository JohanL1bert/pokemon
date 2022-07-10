import { put, takeEvery } from '@redux-saga/core/effects';
import { getPokemonAbilitiesActionCreator } from 'app/store/pokemonAbilities/pokemonAbilities.reducer';

function* getPokemonAbilitiesWorker() {
  try {
    yield put(getPokemonAbilitiesActionCreator.startGetPokemoAbilities());
  } catch (e) {
    yield put(getPokemonAbilitiesActionCreator.errorGetPokemonAbilities());
  }
}

function* getPokemonAbilitiesWatcher() {
  yield takeEvery(getPokemonAbilitiesActionCreator.getPokemonAbilities, getPokemonAbilitiesWorker);
}
export { getPokemonAbilitiesWatcher };
