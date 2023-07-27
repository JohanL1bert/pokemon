import { AxiosResponse } from 'axios';
import { parseUrl } from 'common/helpers/urlParseParams';
import $api from 'app/services/http.service';
import { TAxiosMethods } from 'app/services/MainSearchServices.interface';

export class ApiSearchServices {
  static async getPokemonSpecies() {
    const url = parseUrl();
    const res = await $api.get<any>(`/${url}`);
    return res;
  }

  // search by obj url = whole ulr to search, methods optional
  static async searchByUrl({ url, method = 'get' }: { url: string; method?: TAxiosMethods }) {
    return $api({ baseURL: url, method });
  }

  // name - string
  static async getPokemonSpeciesByName<P, A>(name: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/pokemon-species/${name}`);
  }

  // url - string
  static async getRequestParams<P, A>(url: P): Promise<AxiosResponse<A>> {
    const res = await $api.get<A>(`/${url}`);
    return res;
  }

  // id - number
  static async getPokemonEvolutionChainById<P, A>(id: P): Promise<AxiosResponse<A>> {
    return $api.get<A>(`/evolution-chain/${id}`);
  }
}
