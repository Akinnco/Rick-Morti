import {createStore, combineReducers} from 'redux';
import app from '@redux/app/reducer';

const rootReducer = combineReducers({app});
const store = createStore(rootReducer);

export default store;
