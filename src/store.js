import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

// Reducers from ./components/COMPONENT_NAME
import register from './components/pages/Register/_reducers';
import account from './components/pages/Login/_reducers';
import company from './components/pages/Wizard/NewCompany/_reducers';


const reducers = combineReducers({
  // Add reducers here:
  // register,
  account,
  company,
});
const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;
