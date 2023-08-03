import {
  IIdAndName,
  INameAndUrl,
  INamesIncludesNameAndLanguage,
} from 'app/store/storeGlobalInterfaces';

export interface ILocations extends IIdAndName {
  region: INameAndUrl;
  names: Array<INamesIncludesNameAndLanguage>;
  game_indices: Array<{ game_index: number; generation: INameAndUrl }>;
  areas: INameAndUrl;
}

export interface ILocationsAreas extends IIdAndName, Pick<ILocations, 'names'> {
  game_index: number;
  encounter_methods_rates: Array<{
    encounter_method: INameAndUrl;
    version_details: Array<{ rate: number; version: INameAndUrl }>;
    location: INameAndUrl;
    pokemon_encounters: Array<{
      pokemon: INameAndUrl;
      version_details: Array<{
        version: INameAndUrl;
        max_chance: number;
        encounter_details: Array<{
          min_level: number;
          max_level: number;
          condition_values: Array<unknown>;
          chance: number;
          method: INameAndUrl;
        }>;
      }>;
    }>;
  }>;
}

export interface ILOcationPalParkAreas extends IIdAndName {
  names: Array<INamesIncludesNameAndLanguage>;
  pokemon_encounters: Array<{ base_score: number; rate: number; pokemon_species: INameAndUrl }>;
}

export interface ILocationRegions extends IIdAndName {
  locations: Array<INameAndUrl>;
  main_generation: INameAndUrl;
  names: Array<INamesIncludesNameAndLanguage>;
  pokedex: Array<INameAndUrl>;
  version_group: Array<INameAndUrl>;
}
