import {useState, useContext} from 'react';
import {
    Backdrop,
    Box,
    Modal,
    Fade,
    Button,
    Typography
} from '@mui/material';
import {ProductContext} from '../../context/ProductContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:"8px",
  border:"1px solid lightgray",
  boxShadow: 24,
  p: 4,
};

export default function DeleteProductModal(){
  const {
    openDeleteProductModal,
    handleDeleteProductModalClose
  } = useContext(ProductContext);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDeleteProductModal}
        onClose={handleDeleteProductModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openDeleteProductModal}>
          <Box sx={style}>
            <Typography id="delete-product-modal-title" variant="h6" component="h2">
              Delete Post?
            </Typography>
            <Typography id="delete-product-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to delete post?
            </Typography>
            <Box
              sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"flex-end",
                gap:"0.6em",
                mt:2
              }}
            >
                <Button variant="secondary" size="medium" onClick={handleDeleteProductModalClose}>
                    Cancel
                </Button>
                <Button variant="contained" color="error" size="medium">
                    Delete
                </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}