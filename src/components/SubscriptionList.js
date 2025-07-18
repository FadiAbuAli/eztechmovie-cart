import React from "react";
import data from "../Data";

const SubscriptionList = ({ addToCart, subscriptionsInCart }) => {
  const handleAdd = (item) => {
    const isSubscription = item.type === "subscription";
    const subscriptionAlreadyInCart = subscriptionsInCart.some(
      (cartItem) => cartItem.type === "subscription"
    );

    if (isSubscription && subscriptionAlreadyInCart) {
      alert("Only one subscription can be added at a time.");
      return;
    }

    addToCart(item);
  };

  return (
    <div style={styles.container}>
      <h2>Available Items</h2>
      <ul style={styles.list}>
        {data.map((item) => (
          <li key={item.id} style={styles.item}>
            <div>
              <strong>{item.name}</strong> - ${item.price}
            </div>
            <button onClick={() => handleAdd(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "1rem 2rem"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
};

export default SubscriptionList;
