import React from 'react';
import {IOrderDish} from 'types';
import Counter from 'components/counter';

interface Props {
	dish: IOrderDish
	changeOrder: Function
}

const OrderDish: React.FC<Props> = ({dish, changeOrder}) => {
	const counterHandler = (newCount: number) => {
		changeOrder(newCount, dish);
	};

	return (
		<div className="order-dish">
			<div className="order-dish__name">{dish.name}</div>
			<div className="order-dish__count">
				<Counter value={dish.count} setVal={counterHandler} />
			</div>
		</div>
	);
};

export default OrderDish;