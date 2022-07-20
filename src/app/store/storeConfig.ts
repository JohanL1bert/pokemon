import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { ReducerName } from 'common/enums/reducer-name';
import { rootWatcher } from 'app/store/rootWatcher/sagaRootWatcher';
import {
  getPokemonReducer,
  getPokemonInfoReducer,
  getPokemonImagesReducer,
  getPokemonAbilitiesReducer,
  getPokemonCharReducer,
  getPokemonGrowthRateReducer,
  getPokemonStatsReducer,
} from 'app/store/reducerRename/renameReducer';

const rootReducer = combineReducers({
  [ReducerName.GET_POKEMON]: getPokemonReducer,
  [ReducerName.GET_POKEMON_INFO]: getPokemonInfoReducer,
  [ReducerName.GET_POKEMON_IMAGES]: getPokemonImagesReducer,
  [ReducerName.GET_POKEMON_ABILITIES]: getPokemonAbilitiesReducer,
  [ReducerName.GET_POKEMON_CHARACTERISTIC]: getPokemonCharReducer,
  [ReducerName.GET_POKEMON_GROWTH_RATE]: getPokemonGrowthRateReducer,
  [ReducerName.GET_POKEMON_STATS]: getPokemonStatsReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleware],
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootWatcher);

export type TrootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
