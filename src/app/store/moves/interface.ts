import {
  IIdAndName,
  INameAndUrl,
  INamesIncludesNameAndLanguage,
} from 'app/store/storeGlobalInterfaces';

interface IEffectChanges {
  effect_changes: Array<unknown>;
}

// FIXME: effect_changes https://pokeapi.co/docs/v2#moves-section
// names also
export interface IMoves extends IIdAndName {
  accuracy: number;
  effect_chance: null;
  pp: number;
  priority: number;
  power: number;
  contest_combos: {
    normal: {
      use_before: Array<INameAndUrl>;
    };
    super: {
      use_before: null;
      use_after: null;
    };
  };
  contest_type: INameAndUrl;
  contest_effect: { url: string };
  damage_class: INameAndUrl;
  effect_entries: Array<
    { effect: string; short_effect: string; language: INameAndUrl } & IEffectChanges
  >;
  generaion: INameAndUrl;
  meta: {
    ailment: INameAndUrl;
    category: INameAndUrl;
    min_hits: null;
    max_hits: null;
    mint_turns: null;
    max_turns: null;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;
    names: Array<INamesIncludesNameAndLanguage>;
  };
}
export interface IMoveAliments {}
export interface IMoveBattleStyles {}
export interface IMoveCategories {}
export interface IMoveDamageClasses {}
export interface IMoveLearnMethods {}
export interface IMoveTargets {}
