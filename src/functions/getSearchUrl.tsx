export default function getSearchUrl(query: string, limit: number, page: number) {
  const searchUrl: URL = new URL('https://openlibrary.org/search.json');
  searchUrl.searchParams.append('q', query);
  searchUrl.searchParams.append('limit', limit.toString());
  searchUrl.searchParams.append('page', page.toString());
  return searchUrl.href;
}