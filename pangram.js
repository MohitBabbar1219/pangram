export const isPangram = string => (new Set([...string.split('')
  .filter(character => character.toLowerCase() <= 'z' && character >= 'a')]))
  .size === 26;
