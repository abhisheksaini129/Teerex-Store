import React, { useEffect,useState  } from "react";
import axios from "axios";
import Sidebar from '../Pages/Sidebar'
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import "../Pages/Styles/Product.css";
import { setProducts } from "../store/productSlice";
const Products = () => {
  const products = useSelector((state)=>state.products.data)
  const dispatch = useDispatch();
  const sidefilter =useSelector((state)=>state.products.filterState);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      dispatch(setProducts(res.data));
    };
    fetchProducts();
  }, []);

  const HandleAdd = (product) => {
    dispatch(add(product));
  };
  // const handleFilter=()=>{
  //   sidefilterLoading(!sidefilter);
  // }

  return (
    <div className="productsWrapper">
      {
      <div className="side-filter">
        {
          sidefilter?<Sidebar/>:<></>

        }
      </div>
      }
      {products.map((product) => (
        <div className="card" key={product.id}>
          <div className="image-area">
            <h4>{product.name}</h4>
            <img
              className="productImg"
              src={product.imageURL}
              alt={product.name}
            />
          </div>
          <div className="action">
            <h5>Rs {product.price}</h5>
            <button onClick={() => HandleAdd(product)} className="btn">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
