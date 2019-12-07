import { combineReducers }from 'redux';
import authentication from './authentication';

const reducers = {authentication};

const combinedReducer = combineReducers(reducers);

export type CombinedState = $Call<typeof combinedReducer>;

export default combinedReducer;
