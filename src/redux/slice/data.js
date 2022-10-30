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
      state.isClear = false;
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
      state.firstGraphic.UL = state.resultData.slice(0, -1).map((item) => ({
        x: item.f,
        y: item.UL,
      }));
      state.firstGraphic.UC = state.data.slice(0, -1).map((item) => ({ x: item.F, y: item.UC }));
      state.firstGraphic.I = state.data.slice(0, -1).map((item) => ({ x: item.F, y: item.I }));
      state.thirdGraphic.fi = state.resultData
        .slice(0, -1)
        .map((item) => ({ x: item.f, y: item.F }));
      state.secondGraphic.Z = state.resultData
        .slice(0, -1)
        .map((item) => ({ x: item.f, y: item.Z }));
      state.secondGraphic.XL = state.resultData
        .slice(0, -1)
        .map((item) => ({ x: item.f, y: item.XL }));
      state.secondGraphic.XC = state.resultData
        .slice(0, -1)
        .map((item) => ({ x: item.f, y: item.XC }));
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
