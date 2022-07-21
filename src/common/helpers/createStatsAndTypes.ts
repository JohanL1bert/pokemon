/* eslint-disable camelcase */
import {
  IPokemonStats,
  IPokemonTypesRequest,
  IPokemonRequest,
  TPokeStatsCreator,
  IPokemonTypes,
} from 'app/store/PokemonInfo/interface';

export const createStatAndTypes = (
  typesArray: Array<IPokemonTypesRequest>,
  statsArray: Array<IPokemonStats>,
  requestObject: IPokemonRequest
) => {
  const { height, weight, name, base_experience } = requestObject;
  const stats = statsArray.reduce((acc: {} | TPokeStatsCreator, curr) => {
    if (curr.stat.name.includes('-')) {
      const str = curr.stat.name.replace(`-`, `_`);
      return { ...acc, [str]: curr.base_stat };
    }
    return { ...acc, [curr.stat.name]: curr.base_stat };
  }, {}) as TPokeStatsCreator;
  const types = typesArray.map((item) => item.type) as unknown as Array<IPokemonTypes>;
  return { types, stats, height, weight, name, base_experience };
};
