const snakeize = require('snakeize');

const formatColumns = (data) => {
  const columns = Object.keys(snakeize(data));
  return columns.join(', ');
};

const formatPlaceholders = (data) => {
  const values = Object.keys(data).map((_key) => '?');
  return values.join(', ');
};

module.exports = {
  formatColumns,
  formatPlaceholders,
};