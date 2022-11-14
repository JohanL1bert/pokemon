import { AxiosResponse } from 'axios';
import { parseUrl } from 'common/helpers/urlParseParams';
import $api from 'app/services/http.service';

export class ApiSearchServices {
  static async getPokemonSpecies() {
    const url = parseUrl();
    const res = await $api.get<any>(`/${url}`);
    return res;
  }

  static async getPokemonSpeciesByName(name: string) {
    return $api.get<any>(`/pokemon-species/${name}`);
  }

  static async getPokemonEvolutionChain(/* url: string */): Promise<AxiosResponse<any>> {
    const url = parseUrl();
    const res = await $api.get<any>(`/${url}`);
    console.log(res, 'res');
    return res;
  }

  static async getPokemonEvolutionChainById(id: number): Promise<AxiosResponse<any>> {
    return $api.get<any>(`/evolution-chain/${id}`);
  }
}
