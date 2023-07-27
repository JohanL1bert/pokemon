/* eslint-disable camelcase */
export interface IPokemonCard {}

export interface IPokemonCardNameUrl {
  name: string;
  url: string;
}

interface IPokemonEvolutionDetails {
  gender: null;
  held_item: null;
  item: null;
  known_move: null;
  known_move_type: null;
  location: null;
  min_affection: null;
  min_beauty: null;
  min_happiness: null;
  min_level: number;
  needs_overworld_rain: false;
  party_species: null;
  party_type: null;
  relative_physical_stats: null;
  time_of_day: string;
  trade_species: null;
  trigger: IPokemonCardNameUrl;
  turn_upside_down: false;
}

export interface IPokemonEvolutionCard {
  evolution_details: [] | Array<IPokemonEvolutionDetails>;
  evolves_to: [] | Array<IPokemonEvolutionCard>;
  is_baby: boolean;
  species: IPokemonCardNameUrl;
}

export interface IPokemonEvolutionObj {
  baby_trigger_item: null;
  chain: IPokemonEvolutionCard;
  id: number;
}

export interface IPokekmonCardSpecies {
  base_happiness: number;
  capture_rate: number;
  color: IPokemonCardNameUrl;
  egg_groups: Array<IPokemonCardNameUrl>;
  evolution_chain: Pick<IPokemonCardNameUrl, 'url'>;
  evolves_from_species: IPokemonCardNameUrl;
  flavor_text_entries: Array<any>;
  form_descriptions: Array<any>;
  forms_switchable: boolean;
  gender_rate: number;
  genera: Array<{ genus: string; language: IPokemonCardNameUrl }>;
  generation: IPokemonCardNameUrl;
  growh_rate: IPokemonCardNameUrl;
  habitat: IPokemonCardNameUrl;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Array<{ language: string; name: string }>;
  order: number;
  pal_park_encounters: Array<{ area: IPokemonCardNameUrl; base_score: number; rate: number }>;
  pokedex_numbers: Array<{ entry_number: number; pokedex: IPokemonCardNameUrl }>;
  shape: IPokemonCardNameUrl;
  varieties: Array<{ is_default: boolean; pokemon: IPokemonCardNameUrl }>;
}
