import React from 'react';
import {IDish} from '../../types';
import Dish from '../dish';
import './menu.css';

interface IMenuProps {
	dishes: IDish[]
}

const Menu: React.FC<IMenuProps> = ({dishes}) => {
	return (
		<div className="menu-block">
			{dishes.map((dish) => (
				<Dish dish={dish} key={dish.id} />
			))}
		</div>
	);
};

export default Menu;