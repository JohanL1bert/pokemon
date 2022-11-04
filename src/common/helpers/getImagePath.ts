import { pathPaginationImages } from 'common/const/app.const';

export const pokemonImagesPath = (array: Array<number>) => {
  return array.map((item) => `${pathPaginationImages}${item}.png`);
};
