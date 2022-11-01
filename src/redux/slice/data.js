import { createSlice } from '@reduxjs/toolkit';
import { rows } from '../../common/dataTables';
import { createDataLastTable, getArray } from '../../util/helper';

const initialState = {
  data: rows,
  resultData: [],
  isEdit: false,
  R: 220,
  RK: 17.7,
  isClear: false,
  isShow: true,
  Q: {
    ULsres: 0,
    U: 7,
    res: 0,
  },
  firstGraphic: {
    xDomain: [0, 3, 3],
    yDomain: [0, 30],
    UL: [],
    UC: [],
    I: [],
  },
  secondGraphic: {
    xDomain: [0, 3, 3],
    yDomain: [0, 500],
    Z: [],
    XL: [],
    XC: [],
  },
  thirdGraphic: {
    xDomain: [0, 3, 3],
    yDomain: [-60, 40],
    fi: [],
  },
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateData(state, actions) {
      const { id, newValue, callName } = actions.payload;
      state.data = state.data.map((item) =>
        item.id === id ? { ...item, ...{ [callName]: +newValue } } : item,
      );
    },
    setResultData(state) {
      state.resultData = state.data.map((item) =>
        createDataLastTable(item.id, item.I, item.UK, item.UC, state.R, state.RK, item.F),
      );
      const ULs = +state.resultData[state.resultData.length - 1].UL;
      state.Q.ULsres = ULs;
      state.Q.res = +(ULs / state.Q.U).toFixed(2);

      state.firstGraphic.UL = getArray(state.resultData, 'f', 'UL');
      state.firstGraphic.UC = getArray(state.data, 'F', 'UC');
      state.firstGraphic.I = getArray(state.data, 'F', 'I');

      state.thirdGraphic.fi = getArray(state.resultData, 'f', 'F');

      state.secondGraphic.Z = getArray(state.resultData, 'f', 'Z');
      state.secondGraphic.XL = getArray(state.resultData, 'f', 'XL');
      state.secondGraphic.XC = getArray(state.resultData, 'f', 'XC');
    },
    clearData(state) {
      state.isClear = true;
      state.isShow = false;
      state.data = state.data.map((item) => ({ id: item.id, F: item.F }));
      state.resultData = [];
      state.R = 0;
      state.RK = 0;
    },
    setIsEdit(state, actions) {
      state.isEdit = actions.payload;
      if (state.isEdit) state.isShow = false;
    },
    setR(state, actions) {
      state.R = actions.payload;
    },
    setRK(state, actions) {
      state.RK = actions.payload;
    },
    setIsShow(state) {
      state.isShow = true;
    },
  },
});

export const { updateData, setIsEdit, setR, setRK, clearData, setResultData, setIsShow } =
  dataSlice.actions;
export default dataSlice.reducer;
