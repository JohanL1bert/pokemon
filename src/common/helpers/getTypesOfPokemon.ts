import { PokeTypes } from 'common/enums/poke-types.enum';
import { PokeColor } from 'common/enums/poke-color.enum';
import {
  normalType,
  waterType,
  steelType,
  rockType,
  psychicType,
  poisonType,
  iceType,
  groundType,
  grassType,
  ghostType,
  flyingType,
  fireType,
  fightingType,
  fairyType,
  electricType,
  dragonType,
  darkType,
  bugType,
} from 'common/const/image.types.const';
import { IPokemonTypesRequest } from 'app/store/PokemonInfo/interface';

const reduceTypesToColor = (value: any) => {
  switch (value.type.name) {
    case PokeTypes.NORMAL:
      return { ...value, color: PokeColor.GREYNORMAL, imgType: normalType };
    case PokeTypes.FIRE:
      return { ...value, color: PokeColor.REDFIRE, imgType: fireType };
    case PokeTypes.WATER:
      return { ...value, color: PokeColor.BLUEWATER, imgType: waterType };
    case PokeTypes.GRASS:
      return { ...value, color: PokeColor.GREENGRASS, imgType: grassType };
    case PokeTypes.ELECTRIC:
      return { ...value, color: PokeColor.YELLOWELECTIC, imgType: electricType };
    case PokeTypes.ICE:
      return { ...value, color: PokeColor.LAZUREICE, imgType: iceType };
    case PokeTypes.FIGHTING:
      return { ...value, color: PokeColor.ORANGEFIGHTING, imgType: fightingType };
    case PokeTypes.POISON:
      return { ...value, color: PokeColor.VIOLETPOISON, imgType: poisonType };
    case PokeTypes.GROUND:
      return { ...value, color: PokeColor.BROWNGROUND, imgType: groundType };
    case PokeTypes.FLYING:
      return { ...value, color: PokeColor.BLUEFLYING, imgType: flyingType };
    case PokeTypes.PSYCHIC:
      return { ...value, color: PokeColor.PINKPSYCHIC, imgType: psychicType };
    case PokeTypes.BUG:
      return { ...value, color: PokeColor.YELLOWBUG, imgType: bugType };
    case PokeTypes.ROCK:
      return { ...value, color: PokeColor.GREYROCK, imgType: rockType };
    case PokeTypes.GHOST:
      return { ...value, color: PokeColor.BURGUNDYGHOST, imgType: ghostType };
    case PokeTypes.DARK:
      return { ...value, color: PokeColor.BLACKDARK, imgType: darkType };
    case PokeTypes.DRAGON:
      return { ...value, color: PokeColor.BLUEDRAGON, imgType: dragonType };
    case PokeTypes.STEEL:
      return { ...value, color: PokeColor.BLUESTEEL, imgType: steelType };
    case PokeTypes.FAIRY:
      return { ...value, color: PokeColor.PINKFAIRY, imgType: fairyType };
    default: {
      return {
        ...value,
      };
    }
  }
};

const getTypesToColor = (item: Array<IPokemonTypesRequest>) => {
  return item.map((value) => reduceTypesToColor(value));
};

export const getPokemonTypesHelper = (arrayData: Array<Array<IPokemonTypesRequest>>) => {
  return arrayData.map((item) => getTypesToColor(item));
};
