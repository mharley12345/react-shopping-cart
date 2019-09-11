import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from "./Context/ProductContext"
import {CartContext} from './Context/CartContext'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
        <>
		<CartContext.Provider value={cart}>
			        <ProductContext.Provider value={{products, addItem}}>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/" component={Products} />
		
			

			<Route
				path="/cart"/>
				 <ShoppingCart cart={cart} />}
			

    	</div>
        </ProductContext.Provider>
		</CartContext.Provider>
         </>
	);
	}

export default App;
