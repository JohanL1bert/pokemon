import { takeEvery, put } from '@redux-saga/core/effects';
import { getPokemonStatsActionCreator } from 'app/store/pokemonStats/pokemonStats.reducer';

function* getPokemonStatsWorker() {
  try {
    yield put(getPokemonStatsActionCreator.startGetPokemonStats());
  } catch (e) {
    yield put(getPokemonStatsActionCreator.errorGetPokemonStats());
  }
}
function* getPokemonStatsWatcher() {
  yield takeEvery(getPokemonStatsActionCreator.getPokemonStats, getPokemonStatsWorker);
}

export { getPokemonStatsWatcher };
