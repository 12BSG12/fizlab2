import React from 'react';
import TableCell from '@mui/material/TableCell';
import { rows } from '../common/dataTables'

export const TC = ({ id, item, index, isSpan }) => {
  const [state, setState] = React.useState(item);
  
  return (
    <>
      {isSpan ? (
        <TableCell>{item}</TableCell>
      ) : (
        <TableCell align="right" sx={{ cursor: 'pointer' }}>
          <input value={state} onChange={({ target }) => setState(target.value)} type="text" />
        </TableCell>
      )}
    </>
  );
};
