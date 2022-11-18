import {Fragment, useContext} from 'react';
import {Box, Modal, Button, Typography} from '@mui/material';
import {ProductContext} from '../../context/ProductContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '1px solid lightgray',
    borderRadius:"8px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


export default function ConfirmEditProductModal(){
    const {
      setEditProductId,
      openConfirmEditProductModal,
      handleConfirmEditProductModalClose
    } = useContext(ProductContext);
    return (
      <Fragment>
        <Modal
          hideBackdrop
          open={openConfirmEditProductModal}
          onClose={() => {}}
          aria-labelledby="confirm-edit-product-modal-title"
          aria-describedby="confirm-product-edits"
        >
          <Box sx={{ ...style, width: 450 }}>
            <Typography component="h3" variant="h6" sx={{marginBottom:"0.2em"}}>Unsaved changes</Typography>
            <Typography variant="subtitle1" sx={{marginBottom:"0.2em"}}>
              Changes you made will not be saved
            </Typography>
            <Box sx={{
              display:"flex",
              alignItems:"center",
              justifyContent:"flex-end",
              gap:"0.6em"
            }}>
                <Button
                    variant="secondary"
                    size="medium"
                    onClick={handleConfirmEditProductModalClose}
                    sx={{textTransform:"none"}}
                >
                    Keep Editing
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={() => setEditProductId("")}
                    sx={{textTransform:"none"}}
                >
                    Discard
                </Button>
            </Box>
          </Box>
        </Modal>
      </Fragment>
    );
};