import {restaurants} from '../fixtures';
import {IRestaurant} from '../types';

const makeRequest = <T>(data: T): Promise<T> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 1000);
	});
};

export const fetchRestaurants = () => {
	return makeRequest(restaurants as IRestaurant[]);
};