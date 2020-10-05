import React from 'react';
import OrderDish from '../order-dish';
import {IOrderDish, IOrderRestaurant} from 'types';

interface Props {
	restaurant: IOrderRestaurant
	changeOrder: Function
}

const OrderRestaurant: React.FC<Props> = ({restaurant, changeOrder}) => {
	const dishes = Object.values(restaurant.dishes);

	const handleDishChange = (count: number, dish: IOrderDish) => {
		changeOrder(count, dish, restaurant);
	};

	return (
		<div className="order-restaurant">
			<h4>{restaurant.name}</h4>
			<div className="order-dishes">
				{dishes.map((dish) => (
					<OrderDish dish={dish} changeOrder={handleDishChange} key={dish.id} />
				))}
			</div>
		</div>
	);
};

export default OrderRestaurant;