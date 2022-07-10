import { createAction, createSlice } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums/reducer-name';

const initialState = {};

const { reducer, actions } = createSlice({
  name: ReducerName.GET_POKEMON_CHARACTERISTIC,
  initialState,
  reducers: {
    startGetPokemonChar: (state) => ({
      ...state,
    }),
    errorGetPokemonChar: (state) => ({
      ...state,
    }),
  },
});

const getPokemonCharacteristicAcionCreator = {
  ...actions,
  getPokemonChar: createAction('GET_POKEMON_CHAR'),
};

export { reducer, getPokemonCharacteristicAcionCreator };
