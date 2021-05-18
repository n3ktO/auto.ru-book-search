import initialState from '../initialState';

type LoadingReducerType =
  | { type: 'loading/set'; loading: AbortController };
  
export default function loadingReducer(
  state: AbortController = initialState.loading,
  { type, loading }: LoadingReducerType
) {
  if (type === 'loading/set') {
    return loading;
  }

  return state;
}