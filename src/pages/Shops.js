import React from "react";
import ShopCard from "../components/ShopCard";
import shops from "../data/shops";

const Shops = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Nearby Shops</h1>
      {shops.map((shop, index) => (
        <ShopCard key={index} shop={shop} />
      ))}
    </div>
  );
};

export default Shops;
