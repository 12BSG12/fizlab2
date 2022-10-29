import './App.scss';
import React from 'react';
import { T } from './components/Table';
import { Header } from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { setResultData } from './redux/slice/data';
import { Math } from './components/Math';

export const App = () => {
  const dispatch = useDispatch();
  const { isClear, data } = useSelector((state) => state.data);
  React.useEffect(() => {
    dispatch(setResultData());
  }, [data]);
  return (
    <div className="root">
      <Header />
      <T isFirst />
      {!isClear && (
        <>
          <T isLast />
          <Math />
        </>
      )}
    </div>
  );
};
