import initialState from "../initialState";

export default function loadingReducer(
  state: boolean = initialState.loading,
  { type, loading }: { type: string, loading: boolean }
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