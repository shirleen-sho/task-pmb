import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ButtonAction from '../../components/ButtonAction';

const Layout = () => {

  // untuk buka tutup dialog confirmation Delete
  const [openConfirmation, setOpenConfirmation] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const handleOpenConfirmation = () => { setOpenConfirmation(true); }
  const handleCloseConfirmation = () => { setOpenConfirmation(false); }

  // untuk mereset atau menghapus semua data
  const handleDeleteAll = () => {
    localStorage.removeItem('inventoryList')
    window.location.reload()
  }
  return (
    <>
        <div className='flex flex-row gap-2 bg-orange-500 text-white font-semibold p-3 justify-end w-full'>
            {/* <Link to="/" className='px-6 py-3 uppercase hover:underline hover:underline-offset-8 hover:decoration-2'>Inventory</Link> */}
            <ButtonAction color="orange-outline" action={handleOpenConfirmation}>
              <div className='flex flex-row gap-2 items-center'> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <span>Reset Data</span>
              </div>
            </ButtonAction>
        </div>
        <div className='p-10'>
            <Outlet />
            <Dialog
              fullScreen={fullScreen}
              open={openConfirmation}
              onClose={handleCloseConfirmation}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                Confirmation
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to <span className='text-orange-600'>delete all items </span> 
                  in the list ? <br/> This action can't be undone.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseConfirmation}>
                  Cancel
                </Button>
                <Button color="error" autoFocus onClick={handleDeleteAll}>
                  Delete
                </Button>
            </DialogActions>
          </Dialog>
        </div>
    </>
  )
};

export default Layout;