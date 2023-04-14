import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { rootReducer } from './reducers';
import { loadState, saveState } from './localStorage';

import throttle from 'lodash/throttle';

export const configureStore = () => {
  const persistedState = loadState();

  let store;

  if (persistedState?.todosReducer.todos.length === 0) {
    store = createStore(rootReducer, devToolsEnhancer());
    saveState({
      todosReducer: store.getState().todosReducer,
    });
  } else {
    store = createStore(rootReducer, persistedState, devToolsEnhancer());
  }

  store.subscribe(
    throttle(() => {
      saveState({
        todosReducer: store.getState().todosReducer,
      });
    }, 1000)
  );

  return store;
};
