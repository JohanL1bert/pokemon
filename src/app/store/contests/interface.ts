import { IIdAndName, INameAndUrl } from 'app/store/storeGlobalInterfaces';

export interface IContests extends IIdAndName {
  berry_flavor: INameAndUrl;
  names: Array<{ name: string; color: string; language: INameAndUrl }>;
}

export interface IContestsEffects {
  id: number;
  appeal: number;
  jam: number;
  effect_entries: Array<{ language: INameAndUrl }>;
  flavor_text_entries: Array<{ flavor_text: string; language: INameAndUrl }>;
}

export interface ISuperContestEffects
  extends Pick<IContestsEffects, 'id' | 'appeal' | 'flavor_text_entries'> {
  moves: Array<INameAndUrl>;
}
