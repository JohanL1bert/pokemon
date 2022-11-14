const SHADOW = 'shadow';
const UNKNOWN = 'unknown';

export const removeUnusableTypes = (types: Array<{ name: string; url: string }>) => {
  const filteredTypes = types.filter((item) => item.name !== SHADOW && item.name !== UNKNOWN);
  console.log(filteredTypes, 'filtered types');
};
