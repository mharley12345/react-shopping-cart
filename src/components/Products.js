import React,{useContext} from 'react';
import {ProductContext} from '../Context/ProductContext'

// Components

import Product from './Product';
//  eslint-disable-next-line

const Products =  () => {
const{ products , addItem }=useContext(ProductContext)
	return (
		<ProductContext.Provider>
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
		</ProductContext.Provider>
	);
};

export default Products;
