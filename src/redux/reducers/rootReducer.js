import { combineReducers } from 'redux';

// Reducers
import CategoryReducer from './CategoryReducer';

const rootReducer = combineReducers({
  selectedOption: CategoryReducer,
});

export default rootReducer;
