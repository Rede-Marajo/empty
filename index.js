/**
 * Checks if a given value is empty.
 * @param {*} item - The value to check for emptiness.
 * @param {boolean} [throwOnUnknownType=false] - Whether to throw an error if the value has an unknown type.
 * @returns {boolean} - Returns true if the value is empty, false otherwise.
 * @throws {Error} - Throws an error if the value has an unknown type and `throwOnUnknownType` is set to true.
 */
module.exports = function empty(item, throwOnUnknownType = false) {
  if (["null", "undefined", ""].includes(String(item).trim())) {
    return true;
  }

  if (Array.isArray(item)) {
    return item.length === 0;
  }

  if (typeof item === "object") {
    return Object.keys(item).length === 0;
  }

  if (typeof item === "number") {
    return item === 0 || isNaN(item);
  }

  if (typeof item === "boolean") {
    return item === false;
  }

  if (item instanceof Date) {
    return isNaN(item.getTime());
  }

  if (throwOnUnknownType) {
    throw new Error("Unknown type passed to empty() function");
  }

  return false;
};
