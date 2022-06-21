import { useReducer } from "react";

export default function useForm() {
  const formReducer = (state, action) => {
    console.log(state);
  };

  const defaultState = {};

  const [reducerState, dispatch] = useReducer(formReducer, defaultState);
}
