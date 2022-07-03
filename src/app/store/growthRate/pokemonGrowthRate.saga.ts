import { put, takeEvery } from '@redux-saga/core/effects';
import { getPokemonGrowthRateActionCreator } from 'app/store/growthRate/pokemonGrowthRate.reducer';

function* getPokemonGrowthRateWorker(
  action: ReturnType<typeof getPokemonGrowthRateActionCreator.getPokemonGrowthRate>
) {
  try {
    console.log(action);
  } catch (e) {
    yield put(getPokemonGrowthRateActionCreator.errorGetPokemonGrowthRate());
  }
}

function* getPokemonGrowthRateWatcher() {
  yield takeEvery(
    getPokemonGrowthRateActionCreator.getPokemonGrowthRate,
    getPokemonGrowthRateWorker
  );
}

export { getPokemonGrowthRateWatcher };
