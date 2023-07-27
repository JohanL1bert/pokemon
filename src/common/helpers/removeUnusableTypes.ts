const SHADOW = 'shadow';
const UNKNOWN = 'unknown';

export const removeUnusableTypes = (types: Array<{ name: string; url: string }>) => {
  return types.filter((item) => item.name !== SHADOW && item.name !== UNKNOWN);
};
