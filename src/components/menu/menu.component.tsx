import React from 'react';
import {IDish, IRestaurant} from 'types';
import Dish from '../dish';
import './menu.css';

interface IMenuProps {
	dishes: IDish[]
	restaurant: IRestaurant
}

const Menu: React.FC<IMenuProps> = ({dishes, restaurant}) => {
	return (
		<div className="menu-block">
			{dishes.map((dish) => (
				<Dish dish={dish} restaurant={restaurant} key={dish.id} />
			))}
		</div>
	);
};

export default Menu;