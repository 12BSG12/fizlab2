import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TC } from './TableCell';
import { rows } from '../common/dataTables';

export const TBody = () => {
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={row.F} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TC item={row.F} isSpan/>
          <TC item={row.UR} index={index} id='UR'/>
          <TC item={row.UK} index={index} id='UK'/>
          <TC item={row.UC} index={index} id='UC'/>
          <TC item={row.I} index={index} id='I'/>
        </TableRow>
      ))}
    </TableBody>
  );
};
