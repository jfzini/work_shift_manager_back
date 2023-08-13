const snakeize = require('snakeize');

const formatColumns = (data) => {
  const columns = Object.keys(snakeize(data));
  return columns.join(', ');
};

const formatPlaceholders = (data) => {
  const values = Object.keys(data).map((_key) => '?');
  return values.join(', ');
};

const insertQuery = (table, data) => {
  const columns = formatColumns(data);
  const placeholders = formatPlaceholders(data);
  return [`INSERT INTO ${table} (${columns}) VALUES (${placeholders})`, [...Object.values(data)]];
};

module.exports = {
  formatColumns,
  formatPlaceholders,
  insertQuery,
};