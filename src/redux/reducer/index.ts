import {combineReducers} from 'redux';
import { restaurantsReducer } from './restaurants.reducer';

const reducer = combineReducers({
	restaurants: restaurantsReducer,
});

export { reducer };

export type RootState = ReturnType<typeof reducer>