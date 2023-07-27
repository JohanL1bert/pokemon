import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums/reducer-name';
import { LOADSTATUS, TloadStatusValue } from 'common/enums/enum-status';

interface IPokemonCardState {
  loadStatus: TloadStatusValue;
  error: null | string;
}

const initialState: IPokemonCardState = {
  loadStatus: LOADSTATUS.loading,
  error: null,
};

const { reducer, actions } = createSlice({
  name: ReducerName.GET_POKEMON_CARD,
  initialState,
  reducers: {
    startGetPokemonCard: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.loading,
      error: null,
    }),
    sucessPokemonCard: (state) => ({
      ...state,
      loadStatus: LOADSTATUS.succes,
      error: null,
    }),
    errorPokemonCard: (state, action: PayloadAction<{ error: string }>) => ({
      ...state,
      loadStatus: LOADSTATUS.fail,
      error: action.payload.error,
    }),
  },
});

const getPokemonCardActionCreator = {
  ...actions,
  getPokemonCard: createAction('GET_POKEMON_CARD'),
};

export { reducer, getPokemonCardActionCreator };
