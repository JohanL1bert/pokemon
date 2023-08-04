import { AxiosResponse } from 'axios';
/* import { parseUrl } from 'common/helpers/urlParseParams'; */
import $api from 'app/services/http.service';
import { TAxiosMethods } from 'app/services/MainSearchServices.interface';

export abstract class ApiSearchServices {
  /*   static async getPokemonSpecies() {
    const url = parseUrl();
    const res = await $api.get<any>(`/${url}`);
    return res;
  } */

  // search by obj url = whole ulr to search, methods optional
  static async searchByUrl({ url, method = 'get' }: { url: string; method?: TAxiosMethods }) {
    return $api({ baseURL: url, method });
  }

  // name - string
  static async getPokemonSpeciesByName<P extends string, A>(name: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/pokemon-species/${name}`);
  }

  // url - string
  static async getRequestParams<P extends string, A>(url: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/${url}`);
  }

  // id - number
  static async getPokemonEvolutionChainById<P extends number, A>(id: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/evolution-chain/${id}`);
  }

  // Berries section
  // Berries search id or name
  static async getBerries<P extends string | number, A>(idOrName: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/berry/${idOrName}`);
  }

  // id - string or number
  static async getBerriesFirmnesses<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`berry-firmness/${idOrName}`);
  }

  // berry flavor
  static async getBerriesFlavor<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`berry-flavor/${idOrName}`);
  }

  // Contest section
  // contest
  static async getContestTypes<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`contest-type/${idOrName}`);
  }

  // contest effect
  static async getContestEffect<P extends number, A>(id: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`contest-type/${id}`);
  }

  static async getSuperContestEffect<P extends number, A>(id: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`super-contest-effect/${id}`);
  }

  // Encounter section
  static async getEncounterMethods<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`encounter-method/${idOrName}`);
  }

  static async getEncounterConditions<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`encounter-condition/${idOrName}`);
  }

  static async getEncounterConditionValues<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`encounter-condition-value/${idOrName}}`);
  }

  // Evolution section
  static async getEvolutionChains<P extends number, A>(id: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/evolution-chain/${id}`);
  }

  static async getEvolutionTriggers<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/evolution-trigger/${idOrName}`);
  }

  // Games section
  static async getGamesGeneration<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/generation/${idOrName}`);
  }

  static async getGamesPokedexes<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/pokedex/${idOrName}`);
  }

  static async getGamesVersion<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/version/${idOrName}`);
  }

  static async getGamesVersionGroup<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/version-group/${idOrName}`);
  }

  // Items section
  static async getItem<P extends string | number, A>(idOrName: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/item/${idOrName}`);
  }

  static async getItemAtrributes<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/item-attribute/${idOrName}`);
  }

  static async getItemCategories<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/item-category/${idOrName}`);
  }

  static async getItemFlingEfect<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/item-fling-effect/${idOrName}`);
  }

  static async getItemPockets<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/item-pocket/${idOrName}`);
  }

  // Location section
  static async getLocation<P extends string | number, A>(idOrName: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/location/${idOrName}`);
  }

  static async getLocationAreas<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/location-area/${idOrName}`);
  }

  static async getPalParkAreas<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/pal-park-area/${idOrName}`);
  }

  static async getRegions<P extends string | number, A>(idOrName: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/region/${idOrName}`);
  }

  // Machines section
  static async getMachines<P extends number, A>(id: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/machine/${id}`);
  }
  // Moves section

  // Pokemon
  static async getPokeAbilty<P extends string | number, A>(idOrName: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/ability/${idOrName}`);
  }

  static async getPokeCharacteristics<P extends number, A>(id: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/characteristic/${id}`);
  }

  static async getPokeEggGroups<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/egg-group/${idOrName}`);
  }

  static async getPokeGender<P extends string | number, A>(idOrName: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/gender/${idOrName}`);
  }

  static async getPokeGrowthRate<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/growth-rate/${idOrName}`);
  }

  static async getPokeNatures<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/nature/${idOrName}`);
  }

  static async getPokeathlonStats<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/pokeathlon-stat/${idOrName}`);
  }

  static async getPokemon<P extends string | number, A>(idOrName: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/pokemon/${idOrName}`);
  }

  static async getPokeLocationAreas<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/pokemon/${idOrName}/encounters`);
  }

  static async getPokeColors<P extends string | number, A>(idOrName: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/pokemon-color/${idOrName}`);
  }

  static async getPokeForms<P extends string | number, A>(idOrName: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/pokemon-form/${idOrName}`);
  }

  static async getPokeHabitats<P extends string | number, A>(
    idOrName: P
  ): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/pokemon-habitat/${idOrName}`);
  }

  static async getPokeShapes<P extends string | number, A>(idOrName: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/pokemon-shape/${idOrName}`);
  }

  static async getPokeSpecies<P extends number, A>(idOrName: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/pokemon-species/${idOrName}`);
  }

  static async getPokeStats<P extends string | number, A>(idOrName: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/stat/${idOrName}/`);
  }

  static async getPokeTypes<P extends string | number, A>(idOrName: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/type/${idOrName}`);
  }
}
