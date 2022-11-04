/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import { LOADSTATUS } from 'common/enums/enum-status';

export interface IPokemonTypes {
  name: string;
  url: string;
}

export interface IGetPokemonInfo {
  name: string;
  loadStatus: LOADSTATUS;
  height: number | null;
  weight: number | null;
  base_experience: number | null;
  types: Array<IPokemonTypes>;
  stats: TPokeStatsCreator;
}

interface IPokemonAbilities {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
}

interface IPokemonIndices {
  game_index: number;
  version: Array<IPokemonTypes>;
}

export interface IPokemonStats {
  base_stat: number;
  effort: number;
  stat: IPokemonTypes;
}

export interface IPokemonTypesRequest {
  slot: number;
  type: Array<IPokemonTypes>;
}

export interface IPokemonRequest {
  abilities: Array<IPokemonAbilities>;
  base_experience: number;
  form: Array<IPokemonTypes>;
  game_indices: Array<IPokemonIndices>;
  height: number;
  held_items: Array<unknown>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<unknown>; // need to change
  name: string;
  order: number;
  past_types: Array<unknown>;
  species: Array<IPokemonTypes>;
  sprites: Array<unknown>; // need to change
  stats: Array<IPokemonStats>;
  types: Array<IPokemonTypesRequest>;
  weight: number;
}

export interface IPokemonPromise<T> {
  status: string;
  data: AxiosResponse<T>;
}

export type TPokemonInfo = Omit<IGetPokemonInfo, 'loadStatus'>;

export type TPokeStatsCreator = {
  hp: number | null;
  attack: number | null;
  defense: number | null;
  special_attack: number | null;
  special_defense: number | null;
  speed: number | null;
};
