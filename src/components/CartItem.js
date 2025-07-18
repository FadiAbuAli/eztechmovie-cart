import React from "react";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <li style={styles.item}>
      <div>
        {item.name} - ${item.price} x {item.quantity}
      </div>

      <div>
        {item.type === "accessory" && (
          <>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              –
            </button>
            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
          </>
        )}
        <button onClick={() => onRemove(item.id)} style={styles.remove}>
          Remove
        </button>
      </div>
    </li>
  );
};

const styles = {
  item: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  remove: {
    marginLeft: "0.5rem",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "0.3rem 0.6rem",
    cursor: "pointer"
  }
};

export default CartItem;
