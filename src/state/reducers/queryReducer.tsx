import initialState from "../initialState";

export default function queryReducer(
  state: string = initialState.query,
  { type, query }: { type: string, query: string }
) {
  switch (type) {
    case "SET_QUERY": {
      return query;
    }
    default: {
      return state;
    }
  }
}