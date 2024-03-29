/**
 * https://javascript.plainenglish.io/state-management-with-react-hooks-no-redux-or-context-api-8b3035ceecf8
 */
import { useEffect, useState } from "react";

let listeners = [];
let globalState = {};

const setState = (newState) => {
  state = { ...globalState, ...newState };
  listeners.forEach((listener) => {
    listener(state);
  });
};

const useGlobalState = () => {
  const _setState = useState()[1];
  useEffect(() => {
    listeners.push(_setState);
  }, []);

  return [globalState, setState];
};
