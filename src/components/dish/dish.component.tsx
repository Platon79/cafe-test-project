import React from 'react';
import {IDish} from "../../types";
import Counter from '../counter';
import './dish.css';

interface IDishProps {
	dish: IDish
}

const Dish: React.FC<IDishProps> = ({dish}) => {
	return (
		<div className="dish-block">
			<div className="dish-left">
				<div className="dish-name">{dish.name}</div>
				<div className="dish-ingredients">{dish.ingredients.join(', ')}</div>
				<div className="dish-price">${dish.price}</div>
			</div>
			<div className="dish-right">
				<Counter />
			</div>
		</div>
	);
};

export default Dish;