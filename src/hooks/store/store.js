import { useEffect, useState } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

// Custom Hook to manage the state of Contexts

export const useStore = (shouldListen = true) => {
  // although we are using useState hook here, it will rerender the component every time it changes. But we want to keep the state same for other components which are actually not changing and still get rendered due to useState hook. So we have to manually use a conditional to avoid this behavior. we can accept shouldListen variable here.
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((listener) => listener !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};
