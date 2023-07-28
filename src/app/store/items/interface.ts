import {
  IIdAndName,
  INameAndUrl,
  INamesIncludesNameAndLanguage,
} from 'app/store/storeGlobalInterfaces';

export interface IItem extends IIdAndName {
  cost: number;
  fling_power: number;
  fling_effect: INameAndUrl;
  attributes: Array<INameAndUrl>;
  category: INameAndUrl;
  effect_entries: Array<
    { effect: string; short_effect: string } & Pick<INamesIncludesNameAndLanguage, 'language'>
  >;
  flavor_text_entries: Array<
    { text: string; version_group: INameAndUrl } & Pick<INamesIncludesNameAndLanguage, 'language'>
  >;
  game_indices: { game_index: number; generation: INameAndUrl };
  names: Array<INamesIncludesNameAndLanguage>;
  sprites: {
    default: string;
  };
  held_by_pokemon: Array<{
    pokemon: INameAndUrl;
    version_deatils: { rarity: number; version: INameAndUrl };
  }>;
  baby_trigger_for: {
    url: string;
  };
}

export interface IItemAttributes extends IIdAndName {}
export interface IItemFlingEffects {}
export interface IItemPockets {}
