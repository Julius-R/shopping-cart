import React from 'react';

import Product from './Product';

export default function Products(props) {
	return (
		<section className="products">
			{props.products.map(product => {
				return <Product key={product.id} product={product} />;
			})}
		</section>
	);
}
