import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThnk from 'redux-thunk';
import PetTagReducer from './reducers/petTag';

const reducers = combineReducers({
  petTag: PetTagReducer,
});

const middleware = [ReduxThnk];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

export default store;
