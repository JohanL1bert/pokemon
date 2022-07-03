import { createAction, createSlice } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums/reducer-name';

const initialState = {};

const { reducer, actions } = createSlice({
  name: ReducerName.GET_POKEMON_ABILITIES,
  initialState,
  reducers: {
    startGetPokemoAbilities: (state) => ({
      ...state,
    }),
    errorGetPokemonAbilities: (state) => ({
      ...state,
    }),
  },
});

const getPokemonAbilitiesActionCreator = {
  ...actions,
  getPokemonAbilities: createAction('GET_POKEMON_ABILITIES'),
};

export { reducer, getPokemonAbilitiesActionCreator };
