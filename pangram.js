export const isPangram = string => (new Set([...string.split('')
  .filter(character => character <= 'z' && character >= 'a')]))
  .size === 26;
