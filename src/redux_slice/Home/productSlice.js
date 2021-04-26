import productApi from '../../apis/Home/productApi';

const { createSlice,createAsyncThunk } = require("@reduxjs/toolkit");

export const getProducts = createAsyncThunk('product/getProducts',async (params, thunkAPI) => {
        const response = await productApi.getProducts();
        return response;
});
const productsSlice = createSlice({
    name:'product',
    initialState:{
      loading:false,
      error:'',
      data:[],
    },
    reducers:{},
    extraReducers: {
      [getProducts.pending]: (state) => {
        state.loading = true;
      },
      [getProducts.fulfilled]: (state, action) => {
          state.loading = false;
          const data = action.payload;
          state.data.push(...data);
      },
      [getProducts.rejected]: (state,action) => {
          state.loading = false;
          state.error=action.error
      },
    }
});
const {reducer:productReducer} = productsSlice;
export default productReducer;