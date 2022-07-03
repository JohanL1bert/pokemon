import { createAction, createSlice } from '@reduxjs/toolkit';
import { LOADSTATUS } from 'common/enums/enum-status';
import { ReducerName } from 'common/enums/reducer-name';

const initialState = {
  loadStatus: LOADSTATUS.loading,
};

const { reducer, actions } = createSlice({
  name: ReducerName.GET_POKEMON_IMAGES,
  initialState,
  reducers: {
    startGetPokemonImages: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.loading,
    }),
    succesGetPokemonImages: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.succes,
    }),
    errorGetPokemonImages: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.fail,
    }),
  },
});

const getPokemonImagesCreateAction = {
  ...actions,
  getPokemonImages: createAction('GET_POKEMON_IMAGES', (data: string) => ({ payload: data })),
};

export { reducer, getPokemonImagesCreateAction };
