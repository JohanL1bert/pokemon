import {
  IIdAndName,
  INameAndUrl,
  INamesIncludesNameAndLanguage,
} from 'app/store/storeGlobalInterfaces';

type TOmitName = Omit<INamesIncludesNameAndLanguage, 'name'>;
type TPokeSpecies = { pokemon_species: Array<INameAndUrl> };

export interface IPokeAbilites extends IIdAndName {
  is_main_seris: boolean;
  generation: Array<INameAndUrl>;
  names: Array<INamesIncludesNameAndLanguage>;
  effect_entries: Array<{ effect: string; short_effect: string } & TOmitName>;
  effect_changes: Array<{
    version_group: INameAndUrl;
    effect_enries: { effect: string } & TOmitName;
  }>;
  flavor_text_entries: Array<{ flavor_text: string; version_group: INameAndUrl } & TOmitName>;
  pokemon: Array<{ is_hidden: boolean; slot: number; pokemon: INameAndUrl }>;
}

export interface IPokeCharacterstics {
  id: number;
  gene_modulo: number;
  possible_values: Array<number>;
  highest_state: INameAndUrl;
  description: Array<{ desription: string } & TOmitName>;
}

export interface IPokeEggGroups extends IIdAndName, TPokeSpecies {
  names: Array<INamesIncludesNameAndLanguage>;
}

export interface IPokeGenders extends IIdAndName {
  pokemon_species_details: Array<{ rate: number; pokemon_species: INameAndUrl }>;
  required_for_evolution: Array<INameAndUrl>;
}

export interface IPokeGrowthRate extends IIdAndName, TPokeSpecies {
  formula: string;
  description: Array<{ description: string } & TOmitName>;
  levels: Array<{ level: number; experience: number }>;
}

export interface IPokeNatures extends IIdAndName {
  decreased_stat: INameAndUrl;
  increased_stat: INameAndUrl;
  likes_flavor: INameAndUrl;
  hates_flavor: INameAndUrl;
  pokeathlon_stat_changes: Array<{ max_change: number; pokeathlon_state: INameAndUrl }>;
  move_battle_style_preferences: Array<{
    low_hp_preference: number;
    high_hp_preference: number;
    move_battle_style: INameAndUrl;
  }>;
  names: Array<INamesIncludesNameAndLanguage>;
}

export interface IPokeathlonStats extends IIdAndName {
  affecting_natures: {
    increase: Array<{ max_change: number; nature: INameAndUrl }>;
    decrease: Array<{ max_change: number; nature: INameAndUrl }>;
  };
  names: Array<INamesIncludesNameAndLanguage>;
}

export interface IPokemon extends IIdAndName {
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<{ ability: INameAndUrl; is_hidden: boolean; slot: number }>;
  forms: INameAndUrl;
  game_indices: Array<{ game_indices: number; version: INameAndUrl }>;
  held_items: Array<{
    item: INameAndUrl;
    version_details: Array<{ rarity: number; version: INameAndUrl }>;
  }>;
  location_area_encounter: string;
  moves: Array<{
    move: INameAndUrl;
    version_group_details: Array<{
      level_learned_at: number;
      version_group: INameAndUrl;
      move_learned_method: INameAndUrl;
    }>;
  }>;
  species: INameAndUrl;
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: { front_dedault: string | null; front_female: string | null };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      official_artwork: { front_default: string | null };
    };
    versions: {
      'generation-i': {
        'red-blue': {};
      };
    };
  };
}

export interface IPokeLocationAreas {}

export interface IPokeColors {}

export interface IPokeForms {}

export interface IPokeHabitats {}

export interface IPokeShapes {}
export interface IPokeSpecies {}
export interface IPokeStats {}
export interface IPokeTypes {}
