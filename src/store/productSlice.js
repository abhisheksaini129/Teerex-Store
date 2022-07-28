const { createSlice } = require("@reduxjs/toolkit");
const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const searchingKeys=["color","type","name","gender"];

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    temp:[],
    filterKey:[],
    filterState:false,
    status: STATUSES.IDLE, 
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
      state.temp = action.payload;
      // console.log(state.data);
    },
    setSearch(state,action){
      if(action.payload ===  ""){
        state.data=[...state.temp];
      }else{
        let newData = state.temp.filter(user =>(searchingKeys.some(key=>user[key].toLowerCase().includes(action.payload))))
        state.data=[...newData];
      }
    },
    setFilter(state,action){
      state.filterKey=[...state.filterKey,action.payload];
      // if(state.filterKey.length>0){
        let newData=[]
        for(let i=0;i<state.filterKey.length;i++){
          
          let arr1 = state.temp.filter(user =>(searchingKeys.some(key=>user[key].toLowerCase().includes(state.filterKey[i]))))
          newData=[...newData,...arr1]
        }
        state.data=[...newData];
      // }
    },removeFilter(state,action){
      let newData= state.filterKey.filter(key=>(key !== action.payload));
      state.filterKey=[...newData];
      if(state.filterKey.length===0){ 
        state.data=[...state.temp];
      }
    },
    filterChng(state,action){
      state.filterState=action.payload;
    }
  },
});

export const { setProducts, setSearch,setFilter,removeFilter,filterChng } = productSlice.actions;
export default productSlice.reducer;
