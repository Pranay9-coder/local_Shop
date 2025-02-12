import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
`;

const ShopCard = ({ shop }) => {
  return (
    <Card>
      <h3>{shop.name}</h3>
      <p>{shop.description}</p>
      <p><strong>Location:</strong> {shop.location}</p>
    </Card>
  );
};

export default ShopCard;
