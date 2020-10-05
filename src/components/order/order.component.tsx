import React from 'react';
import {RootState} from 'redux/reducer';
import {connect, ConnectedProps} from 'react-redux';
import OrderRestaurant from './order-restaurant';
import {changeOrder} from 'redux/ac/order.action';
import './order.css';
import {IOrderDish, IOrderRestaurant} from 'types';

const mapStateToProps = (state: RootState) => ({
	orderRestaurants: state.order.restaurants,
});

const mapDispatchToProps = {
	changeOrder
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Order: React.FC<PropsFromRedux> = ({orderRestaurants, changeOrder}) => {
	if (Object.keys(orderRestaurants).length === 0) return null;

	const restaurantsArr = Object.values(orderRestaurants);

	const handleChangeOrder = (count: number, dish: IOrderDish, restaurant: IOrderRestaurant) => {
		changeOrder({restaurant, dish, count});
	};

	return (
		<div className="cafe-order">
			<div className="order-block">
				<h3 className="order-title">Your order:</h3>
				<div className="order-restaurants">
					{restaurantsArr.map((restaurant) => (
						<OrderRestaurant restaurant={restaurant} changeOrder={handleChangeOrder} key={restaurant.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default connector(Order);