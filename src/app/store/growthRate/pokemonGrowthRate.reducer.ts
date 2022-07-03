import { createAction, createSlice } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums/reducer-name';
import { LOADSTATUS } from 'common/enums/enum-status';

const initialState = {
  loadStatus: LOADSTATUS.loading,
};

const { reducer, actions } = createSlice({
  name: ReducerName.GET_POKEMON_GROWTH_RATE,
  initialState,
  reducers: {
    startGetPokemonGrowthRate: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.loading,
    }),
    errorGetPokemonGrowthRate: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.fail,
    }),
  },
});
const getPokemonGrowthRateActionCreator = {
  ...actions,
  getPokemonGrowthRate: createAction('GET_POKEMON_GROWTH_RATE'),
};

export { reducer, getPokemonGrowthRateActionCreator };
