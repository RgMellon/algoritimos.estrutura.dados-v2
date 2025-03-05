module.exports = function toDefaultString(value) {
  if (value === null) {
    return "NULL";
  }

  if (value === undefined) {
    return "UNDEFINED";
  }

  if (typeof value == "string" || value instanceof String) {
    return `${value}`;
  }

  return value.toString();
};
