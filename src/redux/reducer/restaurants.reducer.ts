import {IAction, IRestaurant} from '../../types';
import {REVIEW_ADD, RESTAURANTS_HIDE_LOADER, RESTAURANTS_SET_LIST, RESTAURANTS_SHOW_LOADER} from '../constants';

export interface IRestaurantsState {
	loader: boolean,
	list: IRestaurant[],
}

const initialState: IRestaurantsState = {
	loader: false,
	list: [],
};

export const restaurantsReducer = (state: IRestaurantsState = initialState, action: IAction): IRestaurantsState => {
	switch (action.type) {
		case RESTAURANTS_HIDE_LOADER:
			return {...state, loader: false};
		case RESTAURANTS_SHOW_LOADER:
			return {...state, loader: true};
		case RESTAURANTS_SET_LIST:
			return {...state, list: action.payload};
		case REVIEW_ADD:
			const newList = [...state.list];
			const restaurantIndex = newList.findIndex((el) => el.id === action.payload.restId);
			const newReviews = [...newList[restaurantIndex].reviews];
			newReviews.push(action.payload.review);
			newList[restaurantIndex] = {...newList[restaurantIndex], reviews: newReviews};
			return {
				...state,
				list: newList,
			};
		default:
			return state;
	}
}