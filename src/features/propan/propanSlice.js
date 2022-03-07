import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: '/home',
};

export const propanSlice = createSlice({
  name: 'propane',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    }
  },
});

export const { setMenu } = propanSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectMenu = (state) => state.propan.menu;


export default propanSlice.reducer;
