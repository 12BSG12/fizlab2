import { createSlice } from '@reduxjs/toolkit';
import { rows } from '../../common/dataTables';
import { createDataLastTable } from '../../util/helper';

const initialState = {
  data: rows,
  resultData: [],
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
    setResultData(state) {
      state.resultData = state.data.map((item) =>
        createDataLastTable(item.id, item.I, item.UK, item.UC, state.R, state.RK),
      );
    },
    clearData(state) {
      state.isClear = true;
      state.data = state.data.map((item) => ({ id: item.id, F: item.F }));
      state.resultData = [];
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

export const { updateData, setIsEdit, setR, setRK, clearData, setResultData } = dataSlice.actions;
export default dataSlice.reducer;
