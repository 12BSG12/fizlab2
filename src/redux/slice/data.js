import { createSlice } from '@reduxjs/toolkit';
import { rows } from '../../common/dataTables';

const initialState = {
  data: rows,
  isEdit: false,
  R: 220,
  RK: 17.7,
  isClear: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateData(state, actions) {
      state.isClear = false;
      const { id, newValue, callName } = actions.payload;
      state.data = state.data.map((item) =>
      item.id === id ? { ...item, ...{ [callName]: +newValue } } : item,
      );
    },
    clearData(state) {
      state.isClear = true;
      state.data = state.data.map((item) => ({ id: item.id, F: item.F }));
      state.R = 0;
      state.RK = 0;
    },
    setIsEdit(state, actions) {
      state.isEdit = actions.payload;
    },
    setR(state, actions) {
      state.R = actions.payload;
    },
    setRK(state, actions) {
      state.RK = actions.payload;
    },
  },
});

export const { updateData, setIsEdit, setR, setRK, clearData } = dataSlice.actions;
export default dataSlice.reducer;
