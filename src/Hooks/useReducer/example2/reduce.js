export const initialvalue = {
  count: 0,
};

export function counter(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    case "reset":
      return initialvalue;

    default:
      return initialvalue;
  }
}
