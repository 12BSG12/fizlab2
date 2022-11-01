import './App.scss';
import React from 'react';
import { T } from './components/Table';
import { Header } from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShow, setResultData } from './redux/slice/data';
import { Math } from './components/Math';
import { Graphics } from './components/Graphics';

export const App = () => {
  const dispatch = useDispatch();
  const { isShow, data, firstGraphic, thirdGraphic, secondGraphic } = useSelector(
    (state) => state.data,
  );

  React.useEffect(() => {
    dispatch(setResultData());
  }, [data]);

  return (
    <div className="root">
      <Header />
      <T isFirst />
      {isShow && (
        <>
          <T isLast />
          <Math />
          <Graphics
            firstGraphic={firstGraphic}
            thirdGraphic={thirdGraphic}
            secondGraphic={secondGraphic}
          />
        </>
      )}
    </div>
  );
};
