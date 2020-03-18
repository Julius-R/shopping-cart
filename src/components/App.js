import React, { Component } from 'react';

import Cart from './Cart';
import Products from './Products';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [
				{
					id: 1,
					name: 'K Plus Svježa jaja A klasa',
					image:
						'https://d17zv3ray5yxvp.cloudfront.net/variants/W1ymDizfe679XsfX9uP8A5bU/7b27a910a7194c812eacf34700e38dcab3abed02f30837d1dad313c5651bb5fa',
					price: {
						amount: 7.99,
						currency: 'Kn',
						measureUnit: 'Kom'
					}
				},
				{
					id: 2,
					image:
						'https://d17zv3ray5yxvp.cloudfront.net/variants/b1qEMnNGbwiwV5cWysofPoqz/7b27a910a7194c812eacf34700e38dcab3abed02f30837d1dad313c5651bb5fa',
					name: 'Dukat Trajno mlijeko 2,8% m.m. 1 l',
					price: {
						amount: 4.99,
						currency: 'Kn',
						measureUnit: 'Kom'
					}
				},
				{
					id: 3,
					image:
						'https://d17zv3ray5yxvp.cloudfront.net/variants/1avpwnxKAEqEpTf1k3VCbBbg/7b27a910a7194c812eacf34700e38dcab3abed02f30837d1dad313c5651bb5fa',
					name: 'Sirela Ribanac 4x40 g 3+1 gratis',
					price: {
						amount: 44.99,
						currency: 'Kn',
						measureUnit: 'Kg'
					}
				},
				{
					id: 4,
					name: 'Svježi posni sir K Plus 500 g',
					image:
						'https://d17zv3ray5yxvp.cloudfront.net/variants/3DA8n1qQnuziMNBQjZCH2XKB/7b27a910a7194c812eacf34700e38dcab3abed02f30837d1dad313c5651bb5fa',
					price: {
						amount: 9.99,
						currency: 'Kn',
						measureUnit: 'Kom'
					}
				},
				{
					id: 5,
					image:
						'https://d17zv3ray5yxvp.cloudfront.net/variants/A6V76f1zeu3NWkf5seBERe6c/7b27a910a7194c812eacf34700e38dcab3abed02f30837d1dad313c5651bb5fa',
					name: 'Kinder Pingui chocolate mliječni desert 4x30 g',
					price: {
						amount: 14.99,
						currency: 'Kn',
						measureUnit: 'Kom'
					}
				},
				{
					id: 6,
					image:
						'https://d17zv3ray5yxvp.cloudfront.net/variants/DW7VY421uYHJLnNgCUEMYYqH/7b27a910a7194c812eacf34700e38dcab3abed02f30837d1dad313c5651bb5fa',
					name: 'Dukatino svježi sir s voćem (6x50 g) 300 g',
					price: {
						amount: 13.99,
						currency: 'Kn',
						measureUnit: 'Kom'
					}
				}
			],
			cart: []
		};
	}
	render() {
		return (
			<main>
				<Products products={this.state.products} />
				<Cart />
			</main>
		);
	}
}

export default App;
