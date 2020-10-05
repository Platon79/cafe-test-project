import React, {useState, MouseEvent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {selectRestaurant} from 'redux/selectors';
import {RootState} from 'redux/reducer';
import Loader from '../loader';
import Menu from '../menu';
import Reviews from '../reviews';
import './restaurant.css';

type RestaurantProps = {
	restaurantId: string
}

const mapStateToProps = (state: RootState, ownProps: RestaurantProps) => ({
	restaurant: selectRestaurant(state, ownProps)
})

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

const Restaurant: React.FC<PropsFromRedux & RestaurantProps> = ({restaurant}) => {
	const [view, setView] = useState<string>('menu');

	const changeView = (event: MouseEvent<HTMLElement>, val: string): void => {
		event.preventDefault();
		setView(val);
	};

	if (!restaurant) {
		return <Loader />
	}

	const rating = restaurant.reviews.reduce((acc, val) => acc + val.rating, 0) / restaurant.reviews.length;
	const flooredRating = Math.floor(rating * 100) / 100;

	return (
		<div className="restaurant-block">
			<div className="restaurant-head">
				<strong>{restaurant.name}</strong> (rating {flooredRating}/5)
			</div>
			<nav className="restaurant-nav">
				<ul>
					<li onClick={(e) => changeView(e, 'menu')}>Menu</li>
					<li onClick={(e) => changeView(e, 'reviews')}>Reviews</li>
				</ul>
			</nav>
			<div className="restaurant-content">
				{view === 'menu'
					? <Menu dishes={restaurant.menu} restaurant={restaurant} />
					: <Reviews reviews={restaurant.reviews} restId={restaurant.id} />
				}
			</div>
		</div>
	);
};

export default connector(Restaurant);