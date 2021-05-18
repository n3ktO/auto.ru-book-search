import initialState from "../initialState";

export default function loadingReducer(
  state: AbortController = initialState.loading,
  { type, loading }: { type: string, loading: AbortController }
) {
  switch (type) {
    case "SET_LOADING": {
      return loading;
    }
    default: {
      return state;
    }
  }
}