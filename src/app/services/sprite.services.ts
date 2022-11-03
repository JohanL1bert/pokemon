import axios from 'axios';
import { IImageSprite } from 'interface/imageRequest.interface';

const createImageEndpoint = (number: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
};

const BlobImage = (response: IImageSprite<ArrayBuffer>) => {
  const blob = new Blob([response.data]);
  const image = URL.createObjectURL(blob);
  return image;
};

const requestEveryPokemonServicesImages = async (imageArray: Array<number>) => {
  const allSprites = imageArray.map((key: number) => createImageEndpoint(key));
  return Promise.all(
    allSprites.map((endpoint) =>
      axios
        .get<ArrayBuffer>(endpoint, { responseType: 'arraybuffer' })
        .then((response: IImageSprite<ArrayBuffer>) => BlobImage(response))
    )
  );
};

export { requestEveryPokemonServicesImages };
