import {
  IIdAndName,
  INameAndUrl,
  INamesIncludesNameAndLanguage,
} from 'app/store/storeGlobalInterfaces';

export interface IGames extends IIdAndName {
  abilities: Array<unknown>;
  main_region: INameAndUrl;
  moves: Array<INameAndUrl>;
  names: Array<INamesIncludesNameAndLanguage>;
  pokemon_species: Array<INameAndUrl>;
  types: Array<INameAndUrl>;
  version_groups: Array<INameAndUrl>;
}

export interface IGamesPokedex extends IIdAndName {
  is_main_series: boolean;
  descriptions: Array<INameAndUrl>;
  pokemon_entries: Array<{ entry_number: number; pokemon_species: INameAndUrl }>;
  region: INameAndUrl;
  version_groups: Array<INameAndUrl>;
}

export interface IGamesVersion extends IIdAndName {
  names: Array<INamesIncludesNameAndLanguage>;
  version_group: INameAndUrl;
}

export interface IGamesVersionGroups extends IIdAndName {
  order: number;
  generation: INameAndUrl;
  move_learn_methods: Array<INameAndUrl>;
  pokedexes: Array<INameAndUrl>;
  regions: Array<INameAndUrl>;
  versions: Array<INameAndUrl>;
}
