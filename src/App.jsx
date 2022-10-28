import './App.scss';
import React from 'react';
import { T } from './components/Table';
import { Header } from './components/Header';
import { useSelector } from 'react-redux';

export const App = () => {
  const { isClear } = useSelector((state) => state.data);

  return (
    <div className="root">
      <Header />
      <T isFirst />
      {!isClear && <T isLast />}
    </div>
  );
};
