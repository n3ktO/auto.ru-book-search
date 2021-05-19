const setQuery = (query: string) => ({
  type: 'query/set',
  query
});

export { setQuery };