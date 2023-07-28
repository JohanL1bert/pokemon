import {
  IIdAndName,
  INameAndUrl,
  INamesIncludesNameAndLanguage,
} from 'app/store/storeGlobalInterfaces';

export interface IEvolution {
  id: number;
  baby_trigget_item: null;
  chain: {
    is_baby: boolean;
    species: INameAndUrl;
    evolution_details: null | {
      item: null;
      trigger: INameAndUrl;
      gender: null;
      held_item: null;
      known_move: null;
      know_move_type: null;
      location: null;
      min_level: number;
      min_happiness: null;
      min_beaty: null;
      min_affection: null;
      need_overworld_rain: boolean;
      party_species: null;
      party_type: null;
      relative_physical_stats: null;
      time_of_day: string;
      trade_species: null;
      turn_upside_down: boolean;
      evolves_to: Array<Pick<IEvolution, 'chain'>> | Array<unknown>;
    };
    evolves_to: Array<Pick<IEvolution, 'chain'>> | Array<unknown>;
  };
}

export interface IEvolutionTriggers extends IIdAndName {
  names: Array<INamesIncludesNameAndLanguage>;
  pokemon_species: Array<INameAndUrl>;
}
