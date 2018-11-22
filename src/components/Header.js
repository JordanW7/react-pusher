import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<header>
			<a href="/">
				<img className="header-logo" height="90" src="/images/header-logo.png" alt="MuzMatch"/>
            </a>
		</header>
		);
}

export default Header;