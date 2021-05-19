import initialState from '../initialState';

type QueryReducerType =
  | { type: 'query/set'; query: string };

export default function queryReducer(
  state: string = initialState.query,
  { type, query }: QueryReducerType
) {
  if (type === 'query/set') {
    return query;
  }

  return state;
}