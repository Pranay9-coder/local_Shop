import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ShoppingBag, Home, Store, PlusCircle, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <StyledWrapper>
      <div className="nav">
        <div className="container">
          <div className="brand">
            <ShoppingBag className="logo" size={36} />
            <div className="brand-text">
              <div className="title">SHOPWISE</div>
              <div className="subtitle">Your Local Marketplace</div>
            </div>
          </div>
          <div className="buttons">
            <Link to="/" className="btn">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/shops" className="btn">
              <Store size={18} />
              <span>Shops</span>
            </Link>
            <Link to="/add-product" className="btn">
              <PlusCircle size={18} />
              <span>Add Product</span>
            </Link>
            <Link to="/contact" className="btn">
              <Mail size={18} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .nav {
    position: relative;
    width: 100%;
    height: 70px;
    background: #10b981; /* Emerald-500 */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .container {
    width: 90%;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 14px; /* Increased spacing */
    flex-wrap: nowrap;
  }

  .logo {
    color: white;
    transition: transform 0.3s;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    overflow: hidden;
  }

  .title {
    font-size: 1.6em; /* Increased font size */
    font-weight: bold;
    color: white;
    letter-spacing: 0.05em;
  }

  .subtitle {
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 0.1em;
  }

  .buttons {
    display: flex;
    gap: 20px;
  }

  .btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0.5em 1.2em;
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 8px;
    font-weight: 500;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

export default Navbar;
