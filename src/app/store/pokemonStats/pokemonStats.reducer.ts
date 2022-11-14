import { createAction, createSlice } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums/reducer-name';
import { LOADSTATUS } from 'common/enums/enum-status';

const initialState = {
  loadStatus: LOADSTATUS.loading,
};

const { reducer, actions } = createSlice({
  name: ReducerName.GET_POKEMON_STATS,
  initialState,
  reducers: {
    startGetPokemonStats: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.loading,
    }),
    errorGetPokemonStats: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.fail,
    }),
  },
});

const getPokemonStatsActionCreator = {
  ...actions,
  getPokemonStats: createAction('GET_POKEMON_STATS'),
};
export { reducer, getPokemonStatsActionCreator };
