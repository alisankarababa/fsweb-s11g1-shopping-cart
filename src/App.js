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
    // verilen itemi sepete ekleyin
  };

  return (
    <div className="App">

        <ProductContext.Provider value={ { products, cart, addItem } }>
            <Navigation cart={cart} />

            {/* Routelar */}
            <main className="content">
              <Route exact path="/">
                <Products />
              </Route>

            </main>
        </ProductContext.Provider>
    </div>
  );
}

export default App;
