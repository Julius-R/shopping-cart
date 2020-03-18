import React from 'react';

export default function Product({ product }) {
	return (
		<article className="product">
			<figure className="product__image">
				<img src={product.image} alt={product.name} />
				<figcaption>{product.name}</figcaption>
			</figure>
			<section className="product__info">
				<div className="price">
					<p className="price__amount">{product.price.amount}</p>
					<span className="price__currency">
						{product.price.currency}
					</span>
					/
					<span className="price__unit">
						{product.price.measureUnit}
					</span>
				</div>
				<button className="btn">Add to Cart</button>
			</section>
		</article>
	);
}
