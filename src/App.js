import './App.scss';
import React from 'react';
import { T } from './components/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Header } from './components/Header';
import Table from '@mui/material/Table';
import { rowsSecondTable } from './common/dataTables'

export const App = () => {

  return (
    <div className="root">
      <Header />
      <T />
      <TableContainer component={Paper} sx={{ mb: '20px', maxHeight: 440 }}>
        <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={100}>
                Вычислить
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                U<span className="smallSymbol">L</span>&nbsp;(B)
              </TableCell>
              <TableCell align="right">
                U<span className="smallSymbol">Rk</span>&nbsp;(B)
              </TableCell>
              <TableCell align="right">
                X<span className="smallSymbol">L</span>&nbsp;(Oм)
              </TableCell>
              <TableCell align="right">
                X<span className="smallSymbol">C</span>&nbsp;(Oм)
              </TableCell>
              <TableCell align="right">Z&nbsp;(Oм)</TableCell>
              <TableCell align="right">&#x3C6;&nbsp;(гр)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsSecondTable.map((row) => (
              <TableRow key={row.UL} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.UL}
                </TableCell>
                <TableCell align="right">{row.UR}</TableCell>
                <TableCell align="right">{row.XL}</TableCell>
                <TableCell align="right">{row.XC}</TableCell>
                <TableCell align="right">{row.Z}</TableCell>
                <TableCell align="right">{row.F}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
