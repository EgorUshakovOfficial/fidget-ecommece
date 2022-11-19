import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useContext} from 'react';
import {ProductContext} from '../../context/ProductContext';
import {
  Backdrop,
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  IconButton
} from '@mui/material';
import {Close} from '@mui/icons-material';
import ConfirmEditProductModal from './ConfirmEditProductModal';
import useEditProductModal from '../../hooks/useEditProductModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid lightgray',
  borderRadius:"8px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};

export default function EditProductModal() {
  const {
    editProductId,
    handleModalCloseIconClick,
    handleEditProductModalClose
  } = useContext(ProductContext);

  const {
    image,
    title,
    description,
    quantity,
    price,
    handleTitleOnChange,
    handleDescriptionOnChange,
    handlePriceOnChange,
    handleQuantityOnChange
  } = useEditProductModal();

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (<Modal
        open={editProductId !== ""}
        onClose={handleEditProductModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={{ ...style, width: matches ? 400 : "90%"}}>
          <IconButton
            onClick={handleModalCloseIconClick}
            sx={{
              position:"absolute",
              left:"86%",
              top:"2.5%"
            }}
          >
            <Close />
          </IconButton>
          <Typography component="h2" variant="h6" sx={{marginBottom:"0.4em"}}>Edit Post</Typography>
            <form
              style={{
                display:"flex",
                flexDirection:"column",
                gap:"0.6em",
              }}
            >
              <Box sx={{
                position:"relative",
                width: matches ? "80%" : "60%",
                marginInline:"auto"
              }}>
                <Box
                  component="img"
                  src={image}
                  alt="Picture of product"
                  sx={{
                    width:"100%",
                    height:"auto"
                  }}
                />
                <IconButton
                  sx={{
                    position:"absolute",
                    top:"3%",
                    left:"83%"
                  }}
                >
                  <Close />
                </IconButton>
              </Box>
              <TextField
                id="edit-product-modal-title"
                label="Title"
                fullWidth
                value={title}
                onChange={handleTitleOnChange}
                required
              />
              <TextField
                id="edit-product-modal-description"
                label="Description"
                fullWidth
                value={description}
                onChange={handleDescriptionOnChange}
                required
              />
              <TextField
                id="edit-product-modal-price"
                label="Price"
                fullWidth
                value={price}
                onChange={handlePriceOnChange}
                required
              />
              <TextField
                id="edit-product-modal-quantity"
                label="Quantity"
                fullWidth
                value={quantity}
                onChange={handleQuantityOnChange}
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="medium"
                color="success"
              >
                Save changes
              </Button>
            </form>
          <ConfirmEditProductModal />
        </Box>
      </Modal>);
}