import {IAction, IDish, IOrderState} from 'types';
import {ORDER_CHANGE} from '../constants';
import {AddOrderArgs} from '../ac/order.action';

const initialState: IOrderState = {
	restaurants: {},
};

export const orderReducer = (state: IOrderState = initialState, action: IAction): IOrderState => {
	switch (action.type) {
		case ORDER_CHANGE:
			const {restaurant, dish, count} = action.payload as AddOrderArgs;
			const newState = {
				restaurants: {...state.restaurants}
			};
			if (count === 0 && newState.restaurants[restaurant.id] && newState.restaurants[restaurant.id].dishes[dish.id]) {
				delete newState.restaurants[restaurant.id].dishes[dish.id];
				if (Object.keys(newState.restaurants[restaurant.id].dishes).length === 0) {
					delete newState.restaurants[restaurant.id];
				}
				return newState;
			}
			if (!newState.restaurants[restaurant.id]) {
				newState.restaurants[restaurant.id] = {
					id: restaurant.id,
					name: restaurant.name,
					dishes: {},
				};
			}
			if (!newState.restaurants[restaurant.id].dishes[dish.id]) {
				newState.restaurants[restaurant.id].dishes[dish.id] = {
					id: dish.id,
					name: dish.name,
					count,
				}
			} else {
				newState.restaurants[restaurant.id].dishes[dish.id].count = count;
			}
			return newState;
	}
	return state;
};