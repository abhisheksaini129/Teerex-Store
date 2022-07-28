import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setFilter, removeFilter } from "../store/productSlice";
import './Styles/sidebar.css'
function Sidebar() {
    const dispatch = useDispatch();
    const filters = useSelector((state)=>state.products.filterKey)
    console.log(filters);
    function handlefilter( flag,type){
        if(flag){
            dispatch(setFilter(type))
            
        }else{

            dispatch(removeFilter(type))
        }
    

    }
  return (
    <div className='filterBar'>
        <div className="color">Colour
        <div className="col-1">
            <input type="checkbox" onClick={(e)=>handlefilter(e.target.checked,'red')} name="Red" id="Red"  />Red
        </div>
        <div className="col-2">
            <input type="checkbox" onClick={(e)=>handlefilter(e.target.checked,'blue')} name="Blue" id="Blue" />Blue
        </div>
        <div className="col-3">
            <input type="checkbox" onClick={(e)=>handlefilter(e.target.checked,'green')} name="Green" id="Green" />Green
        </div>
        </div>
        <div className="gender">Gender
        <div className="male">
            <input type="checkbox" onClick={(e)=>handlefilter(e.target.checked,'men')} name="Men" id="Men" />Men
        </div>
        <div className="women">
            <input type="checkbox" onClick={(e)=>handlefilter(e.target.checked,'women')} name="Women" id="Women" />Women
        </div>
        </div>
        <div className="price">Price
        <div className="price-1">
            <input type="checkbox" onClick={(e)=>handlefilter(e.target.checked,'price-1')}  id="price1" />Below ₹250
        </div>
        <div className="price-2">
            <input type="checkbox" onClick={(e)=>handlefilter(e.target.checked,'price-2')}  id="price2" />₹251 - ₹450
        </div>
        <div className="price-3">
            <input type="checkbox" onClick={(e)=>handlefilter(e.target.checked,'price-3')}  id="price3" />Above ₹450
        </div>
        </div>
        <div className="type">Type
        <div className="type-1">
            <input type="checkbox" onClick={(e)=>handlefilter(e.target.checked,'polo')} name="polo" id="polo" />Polo
        </div>
        <div className="type-2">
            <input type="checkbox" onClick={(e)=>handlefilter(e.target.checked,'hoodie')} name="hoodie" id="hoodie" />Hoodie
        </div>
        <div className="type-3">
            <input type="checkbox" onClick={(e)=>handlefilter(e.target.checked,'basic')} name="basic" id="basic" />Basic
        </div>
        </div>
    </div>
  )
}

export default Sidebar;