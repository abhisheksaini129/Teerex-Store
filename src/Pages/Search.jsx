import React, { useEffect, useState, useRef } from "react";
import "./Styles/Search.css";
import { useDispatch, useSelector } from "react-redux";
import {setSearch, filterChng} from '../store/productSlice';
let debounceHandler = null;
const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const didMount = useRef(false);
  const filterFlag = useSelector((state)=>state.products.filterState)
  const dispatch=useDispatch();
  //useDebounce
  useEffect(() => {
    //without didMount ref this would be execued when the component mounts, which we don't want
    if (didMount.current) {
      debounceHandler = setTimeout(() => {
        fetchData(searchValue);
      }, 1000);
      //cleanUp function
      return () => {
        clearTimeout(debounceHandler);
      };
    } else {
      didMount.current = true;
    }
  }, [searchValue]);

  function fetchData(input) {
    dispatch(setSearch(searchValue))
  }
  function filterFun(){
    dispatch(filterChng(!filterFlag));
  }

  // function onClear() {
  //   setSearchValue("");
  // }

  return (
    <div className="Search-box">
      <div className="inputBox">
        <input
          className="search"
          placeholder="Search for products..."
          type="search"
          name="search"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className="icon-container">
      <div className="iconbar searching">
        <svg xmlns="http://www.w3.org/2000/svg"x="0px"y="0px"width="65"height="40"viewBox="0 -1 24 26"  >
          <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
        </svg>
      </div>
      <div className="iconbar filter" onClick={()=>{filterFun()}} >
       {
        filterFlag?<svg xmlns="http://www.w3.org/2000/svg" x="0px"y="0px"width="65"height="40"  viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>:
      <svg xmlns="http://www.w3.org/2000/svg" x="0px"y="0px"width="65"height="40" viewBox="0 0 512 512"><path d="M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z"/></svg>
       } 
      </div>
      </div>
    </div>
  );
};

export default Search;
