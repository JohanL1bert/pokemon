import { all, call, spawn } from '@redux-saga/core/effects';
import { getPokemonWatcher } from 'app/store/getPokemon/getPokemon.saga';
import { getPokemonInfoWatcher } from 'app/store/PokemonInfo/pokemonInfo.saga';
import { getPokemonImagesWatcher } from 'app/store/PokemonImages/pokemonImages.saga';
import { getPokemonGrowthRateWatcher } from 'app/store/growthRate/pokemonGrowthRate.saga';
import { getPokemonAbilitiesWatcher } from 'app/store/pokemonAbilities/pokemonAbilities.saga';
import { getPokemonCharWatcher } from 'app/store/pokemonCharacteristic/pokemonChar.saga';
import { getPokemonStatsWatcher } from 'app/store/pokemonStats/pokemonStats.saga';
import { getPokemonInputWatcher } from '../getPokemon/getInputPokemon.saga';

function* rootWatcher() {
  const sagas = [
    getPokemonWatcher,
    getPokemonInfoWatcher,
    getPokemonImagesWatcher,
    getPokemonGrowthRateWatcher,
    getPokemonAbilitiesWatcher,
    getPokemonCharWatcher,
    getPokemonStatsWatcher,
    getPokemonInputWatcher,
  ];
  const retrySagas = sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
        } catch (e) {
          console.log(e);
          throw new Error(`${e}, in saga watcher`);
        }
      }
    });
  });

  yield all(retrySagas);
}

export { rootWatcher };
