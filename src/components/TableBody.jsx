import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import { TC } from './TableCell';
import { useSelector } from 'react-redux';
import { createDataLastTable } from '../util/helper';
import TableCell from '@mui/material/TableCell';

export const TBody = ({ isFirst, isLast }) => {
  const { data, R, RK } = useSelector((state) => state.data);
  const dataResult = data.map((item) => createDataLastTable(item.I, item.UK, item.UC, R, RK));
  return (
    <>
      {isFirst && (
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TC item={row.F} isSpan />
              <TC item={row.UR} id={row.id} callName="UR" />
              <TC item={row.UK} id={row.id} callName="UK" />
              <TC item={row.UC} id={row.id} callName="UC" />
              <TC item={row.I} id={row.id} callName="I" />
            </TableRow>
          ))}
        </TableBody>
      )}
      {isLast && (
        <TableBody>
          {dataResult.map((row) => (
            <TableRow key={row?.UL} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row?.UL}</TableCell>
              <TableCell align="right">{row?.UR}</TableCell>
              <TableCell align="right">{row?.XL}</TableCell>
              <TableCell align="right">{row?.XC}</TableCell>
              <TableCell align="right">{row?.Z}</TableCell>
              <TableCell align="right">{row?.F}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      )}
    </>
  );
};
