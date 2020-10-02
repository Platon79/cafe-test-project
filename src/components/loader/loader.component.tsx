import React from 'react';
import './loader.css';

interface IProps {
	color?: string,
	size?: number,
}

const Loader: React.FC<IProps> = ({ color = '#000', size = 30 }) => {
	const styles = {
		borderTopColor: color,
		width: `${size}px`,
		height: `${size}px`,
	};

	return (
		<div className="loader" style={styles} />
	);
};

export default Loader;