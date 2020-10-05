import {IDish, IOrderDish, IOrderRestaurant, IRestaurant} from '../../types';
import {ORDER_CHANGE} from '../constants';

export interface AddOrderArgs {
	restaurant: IRestaurant | IOrderRestaurant
	dish: IDish | IOrderDish
	count: number
}

export interface AddOrderResult {
	type: string,
	payload: AddOrderArgs
}

export function changeOrder({restaurant, dish, count}: AddOrderArgs): AddOrderResult {
	return {
		type: ORDER_CHANGE,
		payload: {
			restaurant,
			dish,
			count,
		},
	};
}
