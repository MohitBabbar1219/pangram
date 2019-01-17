export const isPangram = string => (new Set([...string.split('').map(character => character)])).size === 26;
