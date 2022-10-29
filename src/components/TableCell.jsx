import React from 'react';
import TableCell from '@mui/material/TableCell';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../redux/slice/data';

export const TC = ({ id, item, isSpan, callName }) => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState(item);
  const { isEdit, isClear } = useSelector((state) => state.data);
  
  const handleOnChange = (e) => {
    setState(e.target.value);
    dispatch(updateData({ id, newValue: e.target.value, callName }));
  };

  React.useEffect(() => {
    if(isClear){
      setState();
    }
  }, [item]);
  
  return (
    <>
      {isSpan ? (
        <TableCell>{item}</TableCell>
      ) : (
        <TableCell align="right" sx={{ cursor: 'pointer' }}>
          {isEdit ? (
            <input value={state??''} onChange={handleOnChange} type="text" disabled={!isEdit} />
          ) : (
            item
          )}
        </TableCell>
      )}
    </>
  );
};
