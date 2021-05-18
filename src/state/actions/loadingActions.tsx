const setLoading = (loading: AbortController) => ({
  type: 'loading/set',
  loading
});

export { setLoading };