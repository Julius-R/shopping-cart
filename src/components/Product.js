import React from 'react';

export default function Product(props) {
	return (
		<article className="product">
			<figure className="product__image">
				<img src={props.product.image} alt={props.product.name} />
				<figcaption>{props.product.name}</figcaption>
			</figure>
			<section className="price__info"></section>
		</article>
	);
}
