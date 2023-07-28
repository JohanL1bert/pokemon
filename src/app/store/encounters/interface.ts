import {
  IIdAndName,
  INameAndUrl,
  INamesIncludesNameAndLanguage,
} from 'app/store/storeGlobalInterfaces';

export interface IEncounter extends IIdAndName {
  order: number;
  names: Array<INamesIncludesNameAndLanguage>;
}

export interface IEncounterConditions extends IIdAndName, Pick<IEncounter, 'names'> {
  values: Array<INameAndUrl>;
}

export interface IEncounterConditionValues extends IIdAndName, Pick<IEncounter, 'names'> {
  condition: INameAndUrl;
}
