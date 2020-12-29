import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import applicationReducers from './reducers';
import { rootSaga } from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();
// just log all the state transients for now.
const middlewares = [sagaMiddleware];

let enhancers;
if (process.env.NODE_ENV !== "production") {
    enhancers = composeWithDevTools(
        applyMiddleware(...middlewares),
      )
}
else {
    enhancers = applyMiddleware(...middlewares);
}
// Let us assume the initial state of our application is none.
const store = createStore(applicationReducers, {}, enhancers)
sagaMiddleware.run(rootSaga);

export { store };
