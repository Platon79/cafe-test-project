import {fetchRestaurants} from '../../api/api';
import {
	RESTAURANTS_HIDE_LOADER,
	RESTAURANTS_SHOW_LOADER,
	RESTAURANTS_SET_LIST,
	REVIEW_ADD,
} from '../constants';
import {IReview} from "../../types";

export function getRestaurants () {
	return (dispatch: any): void => {
		dispatch({type: RESTAURANTS_SHOW_LOADER});
		fetchRestaurants()
			.then((response) => {
				dispatch({
					type: RESTAURANTS_SET_LIST,
					payload: response,
				});
			})
			.finally(() => {
				dispatch({type: RESTAURANTS_HIDE_LOADER});
			});
	}
}

interface IAddReview {
	restId: string
	review: IReview,
}

export function addReview ({review, restId}: IAddReview) {
	return {
		type: REVIEW_ADD,
		payload: {
			review,
			restId,
		},
	}
}