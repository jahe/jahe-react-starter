import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      /**
       * Conditionally add the Redux DevTools extension enhancer
       * if it is installed.
       */
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
