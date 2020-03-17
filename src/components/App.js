import React from 'react';

import Cart from './Cart';
import Products from './Products';

export default function App() {
	return (
		<main className="container">
			<Products />
			<Cart />
		</main>
	);
}
