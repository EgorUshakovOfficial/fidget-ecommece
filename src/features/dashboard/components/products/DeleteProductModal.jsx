import {useContext} from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    Backdrop,
    Box,
    Modal,
    Fade,
    Button,
    Typography
} from '@mui/material';
import {ProductContext} from '../../context/ProductContext';
import useDeleteProductModal from '../../hooks/products/useDeleteProductModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius:"8px",
  border:"1px solid lightgray",
  boxShadow: 24,
  p: 4,
};

export default function DeleteProductModal(){
  const {
    deleteProductId,
    handleDeleteProductModalClose
  } = useContext(ProductContext);

  const {handleDeleteProductClick} = useDeleteProductModal();

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const open = deleteProductId !== "";

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleDeleteProductModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={{...style, width: matches ? 400 : '90%'}}>
            <Typography id="delete-product-modal-title" variant="h6" component="h2">
              Delete Post
            </Typography>
            <Typography id="delete-product-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to delete this product?
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
                <Button variant="secondary" style={{textTransform:"none"}} size="medium" onClick={handleDeleteProductModalClose}>
                    Cancel
                </Button>
                <Button variant="contained" color="error" style={{textTransform:"none"}} onClick={handleDeleteProductClick} size="medium">
                    Yes, delete it
                </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}