import React, {useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {IDish, IRestaurant} from 'types';
import {RootState} from 'redux/reducer';
import {changeOrder} from 'redux/ac/order.action';
import Counter from '../counter';
import './dish.css';

interface IDishProps {
	dish: IDish
	restaurant: IRestaurant
}

const mapStateToProps = (state: RootState) => ({
	orderRestaurants: state.order.restaurants
});

const mapDispatchToProps = {
	changeOrder,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Dish: React.FC<PropsFromRedux & IDishProps> = ({
	dish,
	restaurant,
	orderRestaurants,
	changeOrder,
}) => {
	const currentOrderRestaurant = orderRestaurants[restaurant.id];
	const currentOrderDish = currentOrderRestaurant ? currentOrderRestaurant.dishes[dish.id] : null;
	const dishCount = currentOrderDish ? currentOrderDish.count : 0;

	console.log('Dish component', currentOrderRestaurant, currentOrderDish, dishCount)

	const changeDishCount = (newCount: number): void => {
		if (newCount !== dishCount) {
			changeOrder({
				restaurant,
				dish,
				count: newCount,
			});
		}
	};

	return (
		<div className="dish-block">
			<div className="dish-left">
				<div className="dish-name">{dish.name}</div>
				<div className="dish-ingredients">{dish.ingredients.join(', ')}</div>
				<div className="dish-price">${dish.price}</div>
			</div>
			<div className="dish-right">
				<Counter value={dishCount} setVal={changeDishCount} />
			</div>
		</div>
	);
};

export default connector(Dish);