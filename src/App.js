import React, { useState, useEffect } from "react";
import SubscriptionList from "./components/SubscriptionList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import subscriptions from "./Data";

const App = () => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("eztech-cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("eztech-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const isSubscription = item.type === "subscription";
    const subscriptionExists = cart.some((i) => i.type === "subscription");

    if (isSubscription && subscriptionExists) {
      alert("Only one subscription can be added at a time.");
      return;
    }

    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  return (
    <div>
      <Navbar cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)} />
      <SubscriptionList addToCart={addToCart} subscriptionsInCart={cart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

export default App;
