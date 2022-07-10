import { createAction, createSlice } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums/reducer-name';
import { LOADSTATUS } from 'common/enums/enum-status';

const initialState = {
  name: '',
  sprites: {
    back_default: '',
    back_female: '',
    back_shiny: '',
    back_shiny_female: '',
    front_default: '',
    front_female: '',
    front_shiny: '',
    front_shiny_female: '',
    other: {
      dream_world: {
        front_default: '',
        front_female: '',
      },
      home: {
        front_default: '',
        front_female: '',
        front_shiny: '',
        front_shiny_female: '',
      },
      official_artwok: {
        front_default: '',
      },
    },
  },
};

const { reducer, actions } = createSlice({
  name: ReducerName.GET_POKEMON_INFO,
  initialState,
  reducers: {
    startGetPokemonInfo: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.loading,
    }),
    succesGetPokemonInfo: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.succes,
    }),
    errorGetPokemonInfo: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.fail,
    }),
  },
});

const pokemonInfoActionCreator = {
  ...actions,
  getPokemonInfo: createAction('GET_POKEMON_INFO', (data: string) => ({ payload: data })),
};

export { reducer, pokemonInfoActionCreator };
