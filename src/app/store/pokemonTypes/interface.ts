interface IGetPokemonTypesResults {
  name: string;
  url: string;
}

export interface IGetPokemonTypes {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<IGetPokemonTypesResults>;
}
