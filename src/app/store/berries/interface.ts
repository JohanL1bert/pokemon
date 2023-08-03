import {
  INameAndUrl,
  IIdAndName,
  INamesIncludesNameAndLanguage,
} from 'app/store/storeGlobalInterfaces';

export interface IBerries extends IIdAndName {
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: INameAndUrl;

  flavorts: [
    {
      potency: number;
      flavor: INameAndUrl;
    }
  ];
  item: INameAndUrl;
  natural_gift_type: INameAndUrl;
}

export interface IBerryFirmnesses extends IIdAndName {
  berries: Array<INameAndUrl>;
  names: Array<INamesIncludesNameAndLanguage>;
}

export interface IBerryFlavors extends IIdAndName, Pick<IBerryFirmnesses, 'names'> {
  berries: Array<{ potency: number; berry: INameAndUrl }>;
  contest_type: INameAndUrl;
}
