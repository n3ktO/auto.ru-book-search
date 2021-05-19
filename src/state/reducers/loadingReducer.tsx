import initialState from '../initialState';

type LoadingReducerType =
  | { type: 'loading/set'; loading: boolean };
  
export default function loadingReducer(
  state: boolean = initialState.loading,
  { type, loading }: LoadingReducerType
) {
  if (type === 'loading/set') {
    return loading;
  }

  return state;
}