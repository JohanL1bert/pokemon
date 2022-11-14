import { createAction, createSlice } from '@reduxjs/toolkit';
import { LOADSTATUS } from 'common/enums/enum-status';
import { ReducerName } from 'common/enums/reducer-name';

const initialState: any = {
  pokemonTypes: [],
  loadStatus: LOADSTATUS.loading,
};

const { reducer, actions } = createSlice({
  name: ReducerName.GET_POKEMON_TYPES,
  initialState,
  reducers: {
    startGetPokemon: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.loading,
    }),
    succesGetPokemon: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.succes,
    }),
    errorGetPokemon: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.fail,
    }),
  },
});

const getPokemonTypesActionCreator = {
  ...actions,
  getPokemonTypes: createAction('GET_POKEMON_TYPES' /* , (data: any) => ({ payload: data }) */),
};

export { reducer, getPokemonTypesActionCreator, actions };
