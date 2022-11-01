import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEdit, setIsShow, setR, setRK } from '../redux/slice/data';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { AlertDialog } from './AlertDialog';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Tooltip } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export const Header = () => {
  const dispatch = useDispatch();
  const { isEdit, R, RK, isShow } = useSelector((state) => state.data);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
            onClick={handleClickOpen}>
            <ClearRoundedIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
            onClick={() => dispatch(setIsEdit(false))}>
            <SaveIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
            onClick={() => dispatch(setIsEdit(true))}
            disabled={isEdit}>
            <EditIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
            onClick={() => dispatch(setIsShow())}
            disabled={isShow}>
            <VisibilityOutlinedIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} className="Column">
            <div className="headerInput">
              <label>R =</label>
              <input
                value={R}
                onChange={(e) => dispatch(setR(e.target.value))}
                placeholder="R"
                disabled={!isEdit}
              />
              <p>(Ом)</p>
            </div>
            <div className="headerInput">
              <label>
                R<span className="smallSymbol">K</span> =
              </label>
              <input
                value={RK}
                onChange={(e) => dispatch(setRK(e.target.value))}
                placeholder="R"
                disabled={!isEdit}
              />
              <p>(Ом)</p>
            </div>
          </Box>
          <a href="https://t.me/ty235" target="_blank">
            <Tooltip title="by Yuuu Fgyy">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                >
                <TelegramIcon />
              </IconButton>
            </Tooltip>
          </a>
        </Toolbar>
        <AlertDialog open={open} handleClose={handleClose} />
      </AppBar>
    </Box>
  );
};
