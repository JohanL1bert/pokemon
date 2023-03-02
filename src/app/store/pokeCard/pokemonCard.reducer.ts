import { createAction, createSlice /* PayloadAction */ } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums/reducer-name';
import { LOADSTATUS } from 'common/enums/enum-status';

const initialState = {
  loadStatus: LOADSTATUS.loading,
};

const { reducer, actions } = createSlice({
  name: ReducerName.GET_POKEMON_CARD,
  initialState,
  reducers: {
    startGetPokemonCard: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.loading,
    }),
    sucessPokemonCard: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.succes,
    }),
    errorPokemonCard: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.fail,
    }),
  },
});

const getPokemonCardActionCreator = {
  ...actions,
  getPokemonCard: createAction('GET_POKEMON_CARD'),
};

export { reducer, getPokemonCardActionCreator };
