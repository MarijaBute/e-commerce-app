import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
  
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity,
        },
      ]);
    }
  };

  function removeFromCart(itemId) {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  }


  return (
    <div className="App">
      <Header cartItems={cartItems} removeFromCart={removeFromCart}/>
      <Body setShowGallery={setShowGallery} showGallery={showGallery} addToCart={addToCart}/>
      <ImageGallery setShowGallery={setShowGallery} showGallery={showGallery} />
      
    </div>
  );
}

export default App;
