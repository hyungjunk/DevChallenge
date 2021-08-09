import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useEffect, useReducer, useState } from "react";
import getItems from "./getItems";
import TextLoop from "react-text-loop";

const duration = 1000;

const defaultStyle = {
  position: "relative",
  transition: `all ${duration}ms ease`,
};

// const transitionStyles = {
//   entering: { opacity: 0, transform: "translateY(1rem)" },
//   entered: { opacity: 1 },
//   exiting: { opacity: 1, transform: "translateY(-1rem)" },
//   exited: { opacity: 0, transform: "translateY(-10rem)" },
// };

// type transitionPhase = keyof typeof transitionStyles;

function reducer(state, action) {
  switch (action.type) {
    case "inProp":
      return {
        ...state,
        inProp: !state.inProp,
      };
    case "next":
      if (state.total[state.idx + 1] == null) {
        return state;
      }
      return {
        ...state,
        total: [...state.total],
        current: state.total[state.idx + 1],
        idx: state.idx + 1,
        inProp: true,
      };
    case "new":
      return {
        ...state,
        total: action.payload,
        current: action.payload[0],
        idx: 0,
        inProp: state.inProp,
      };
    case "removeCurrent":
      return {
        ...state,
        inProp: false,
      };
    default:
      break;
  }
}

const Fade = () => {
  const [state, dispatch] = useReducer(reducer, {
    total: ["1", "2", "3", "4"],
    current: "",
    idx: 0,
    inProp: true,
  });
  const { total, current, inProp } = state;
  useEffect(() => {
    setTimeout(() => {
      const fetchItems = async () => {
        const is = await getItems();
        dispatch({ type: "new", payload: is });
      };
      fetchItems();
    }, 4000);
  }, [dispatch]);

  return (
    <div>
      <TextLoop interval={1000}>
        {total.map((i) => (
          <div>{i}</div>
        ))}
      </TextLoop>
    </div>
  );
};
export default Fade;
