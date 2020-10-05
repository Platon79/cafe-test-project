import {combineReducers} from 'redux';
import {restaurantsReducer} from './restaurants.reducer';
import {orderReducer} from './order.reducer';

const reducer = combineReducers({
	restaurants: restaurantsReducer,
	order: orderReducer
});

export { reducer };

export type RootState = ReturnType<typeof reducer>