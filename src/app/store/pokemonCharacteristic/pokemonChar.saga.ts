import { put, takeEvery } from '@redux-saga/core/effects';
import { getPokemonCharacteristicAcionCreator } from 'app/store/pokemonCharacteristic/pokemonChar.reducer';

function* getPokemonCharWorker() {
  try {
    yield put(getPokemonCharacteristicAcionCreator.startGetPokemonChar());
  } catch (e) {
    yield put(getPokemonCharacteristicAcionCreator.errorGetPokemonChar());
  }
}

function* getPokemonCharWatcher() {
  yield takeEvery(getPokemonCharacteristicAcionCreator.getPokemonChar, getPokemonCharWorker);
}

export { getPokemonCharWatcher };
