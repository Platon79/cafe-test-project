import React, {useEffect, useState} from 'react';
import './counter.css';

interface ICounterProps {
	value: number,
	setVal: Function,
}

const Counter: React.FC<ICounterProps> = ({value, setVal}) => {
	useEffect(() => {
		setVal(value);
	}, [value]);

	const decrement = () => {
		if (value > 0)  setVal(value - 1);
	};

	const increment = () => {
		setVal(value + 1);
	};

	return (
		<div className="counter">
			<button onClick={decrement}>-</button>
			<span>{value}</span>
			<button onClick={increment}>+</button>
		</div>
	);
};

export default Counter;