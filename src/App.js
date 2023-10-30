import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./contexts/ProductContext";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    
    if ( cart.find( cartItem => cartItem.id === item.id ) )
        return;
    
    setCart( [ ...cart, item ] );
  };

  return (
    <div className="App">

        <ProductContext.Provider value={ { products, cart, addItem } }>
            <Navigation />

            {/* Routelar */}
            <main className="content">
              <Route exact path="/">
                <Products />
              </Route>

              <Route path="/cart">
                <ShoppingCart />
              </Route>
            </main>
        </ProductContext.Provider>
    </div>
  );
}

export default App;
