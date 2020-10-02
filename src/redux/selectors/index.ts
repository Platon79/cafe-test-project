import {RootState} from '../reducer';
import {IRestaurant} from '../../types';

interface IRestaurantsObj {
	[key: string]: IRestaurant,
}

export const restaurantsObj = (store: RootState): IRestaurantsObj => {
	const obj: IRestaurantsObj = {};
	store.restaurants.list.forEach((restaurant) => {
		obj[restaurant.id] = restaurant;
	});
	return obj;
}

export const selectRestaurant = (store: RootState, ownProps: any) => {
	return restaurantsObj(store)[ownProps.restaurantId];
}
