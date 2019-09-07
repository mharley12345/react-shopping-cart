import React,{useContext} from 'react';
import {ProductContext} from '../Context/ProductContext'

// Components

import Product from './Product';
// eslint-disable-next-line
const { products, addItem } = useContext(ProductContext);
const Products = props => {
	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
