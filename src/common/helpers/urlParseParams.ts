const removeTemplate = (url: string) => {
  const PATTERN = /(?<=\/api\/v2\/).*/;
  const matchURL = url.match(PATTERN)![0];
  if (matchURL === null) {
    throw new Error(`${matchURL} is null`);
  }

  return matchURL;
};

export const parseUrl = (urlParam = `https://pokeapi.co/api/v2/pokemon-species/1/`) => {
  const url = new URL(`${urlParam}`);
  const result = url.pathname;
  return removeTemplate(result);
};
