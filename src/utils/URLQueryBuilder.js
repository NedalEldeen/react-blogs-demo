export const parseURLParams = (params = {}) => {
  let querySearch = '';
  const keys = Object.keys(params);
  if (keys.length > 0) {
    querySearch += '?';
    for (let i = 0; i < keys.length; i++) {
      querySearch += `${keys[i]}=${params[keys[i]]}`;
      if (i < keys.length - 1) querySearch += '&';
    }
  }

  return querySearch;
};

export const parseURLQuery = (key, queryString = window.location.search) => {
  const query = {};
  const pairs = (queryString[0] === '?'
    ? queryString.substr(1)
    : queryString
  ).split('&');
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    if (pair[0] && pair[1]) query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  if (key) {
    return query[key] || false;
  }
  return query;
};

export const addQueryParam = (
  key,
  value,
  queryString = window.location.search
) => {
  const params = parseURLQuery(false, queryString);
  params[key] = value;
  return parseURLParams(params);
};
