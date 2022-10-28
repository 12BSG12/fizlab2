import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { clearData, setIsClear } from '../redux/slice/data';

export const AlertDialog = ({ open, handleClose }) => {
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(clearData())
    handleClose();
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title" sx={{pb: '3px'}}>{"Очистить всю таблицу?"}</DialogTitle>
      <DialogActions sx={{p: '0', display: 'flex', justifyContent: 'center'}}>
        <Button onClick={handleOnClick} autoFocus>
          Да
        </Button>
        <Button onClick={handleClose}>Нет</Button>
      </DialogActions>
    </Dialog>
  );
};
