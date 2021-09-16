module.exports = function empty(item) {
  if ([null, undefined].includes(item)) {
    return true;
  }
  if (Array.isArray(item)) {
    return item.length === 0;
  }
  if (typeof item === 'string') {
    return item.trim() === '';
  }
  return null;
};
