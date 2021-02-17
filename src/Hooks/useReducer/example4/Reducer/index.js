export const initialstate = {
  loading: true,
  error: false,
  data: {},
};

export function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCESS":
      return {
        loading: false,
        error: "",
        data: action.payload,
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went wrong ... !",
        data: {},
      };

    default:
      return state;
  }
}
