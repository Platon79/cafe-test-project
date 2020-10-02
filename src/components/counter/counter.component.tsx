import React, {useState} from 'react';
import './counter.css';

interface ICounterProps {
	value?: number,
}

const Counter: React.FC<ICounterProps> = () => {
	const [counter, setCounter] = useState<number>(0);

	const decrement = () => {
		if (counter > 0)  setCounter((prev) => prev - 1);
	};

	const increment = () => {
		setCounter((prev) => prev + 1);
	};

	return (
		<div className="counter">
			<button onClick={decrement}>-</button>
			<span>{counter}</span>
			<button onClick={increment}>+</button>
		</div>
	);
};

export default Counter;