import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <nav style={styles.nav}>
      <h1>EZTechMovie</h1>
      <div style={styles.cart}>
        Cart: {cartCount}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#333",
    color: "#fff"
  },
  cart: {
    fontSize: "1.2rem"
  }
};

export default Navbar;
