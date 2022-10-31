import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { TBody } from './TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const T = ({ isFirst, isLast }) => {
  return (
    <>
      {isFirst && (
        <TableContainer component={Paper} sx={{ mb: '20px', maxHeight: 450, mt: '80px' }}>
          <Table sx={{ minWidth: 375 }} size="small" stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={100}>
                  Измерить
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>f&nbsp;(кГц)</TableCell>
                <TableCell align="right">
                  U<span className="smallSymbol">R</span>&nbsp;(B)
                </TableCell>
                <TableCell align="right">
                  U<span className="smallSymbol">K</span>&nbsp;(B)
                </TableCell>
                <TableCell align="right">
                  U<span className="smallSymbol">C</span>&nbsp;(B)
                </TableCell>
                <TableCell align="right">I&nbsp;(мА)</TableCell>
              </TableRow>
            </TableHead>
            <TBody isFirst />
          </Table>
        </TableContainer>
      )}
      {isLast && (
        <TableContainer component={Paper} sx={{ mb: '20px', maxHeight: 450 }}>
          <Table sx={{ minWidth: 375 }} size="small" stickyHeader aria-label="sticky table">
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
            <TBody isLast />
          </Table>
        </TableContainer>
      )}
    </>
  );
};
