import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./Styles/Cart.css";
function Cart() {
  const products = useSelector((state) => state.cart);
  console.log(products);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  // console.log(products);
  return (
    <div className="Cart">
      <h3>Shopping Cart </h3>
      <div className="cart-area">
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard" id={product.id}>
            <img src={product.imageURL} className="productImgcart" alt="" />
            <div className="config">
              <h4>{product.name}</h4>
              <h5>₹ {product.price}</h5>
            </div>
            <div className="action-cart">
                <div id="myDropdown" className="btncart">Qty
                  <select className="selectbox">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              <div
                className="btncart"
                onClick={() => handleRemove(product.id)}>
                Delete
              </div>
              
            </div>
          </div>
        ))}
      </div>
      <div className="payment-page">
      </div>
      </div>
    </div>
  );
}

export default Cart;
