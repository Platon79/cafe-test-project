import React from 'react';
import './header.css';
import Logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
	return (
		<div className="header">
			<div className="header-logo">
				<img src={Logo} alt="Logo"/>
			</div>
		</div>
	);
};

export default Header;