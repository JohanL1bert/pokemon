import { put, takeEvery } from '@redux-saga/core/effects';
import { getPokemonImagesCreateAction } from 'app/store/PokemonImages/pokemonImages.reducer';

function* getPokemonImagesWorker(
  action: ReturnType<typeof getPokemonImagesCreateAction.getPokemonImages>
) {
  try {
    yield put(getPokemonImagesCreateAction.startGetPokemonImages());
    console.log(action);
  } catch (e) {
    yield put(getPokemonImagesCreateAction.errorGetPokemonImages());
  }
}

function* getPokemonImagesWatcher() {
  yield takeEvery(getPokemonImagesCreateAction.getPokemonImages, getPokemonImagesWorker);
}

export { getPokemonImagesWatcher };
