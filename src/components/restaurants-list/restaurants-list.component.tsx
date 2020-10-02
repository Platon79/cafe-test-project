import React, {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from "react-router-dom";
import Loader from "../loader";
import {getRestaurants} from 'redux/ac/restaurants.action';
import {RootState} from '../../redux/reducer';
import './restaurants-list.css';

const mapStateToProps = (state: RootState) => ({
	loader: state.restaurants.loader,
	restaurants: state.restaurants.list,
});

const mapDispatchToProps = {
	getRestaurants,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

const RestaurantsList: React.FC<PropsFromRedux> = ({loader, restaurants, getRestaurants}) => {
	useEffect(() => {
		getRestaurants();
	}, [])

	if (loader) {
		return <Loader />;
	}

	return (
		<div className="restaurants-list">
			<ul>
				{restaurants.map((restaurant) => (
					<li key={restaurant.id}>
						<Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default connector(RestaurantsList);