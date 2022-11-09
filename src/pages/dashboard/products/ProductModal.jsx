import {useContext} from 'react';
import {
    Backdrop,
    Box,
    Modal,
    Fade,
    Button,
    TextField,
    IconButton
} from '@mui/material';
import {CameraAlt, Close} from '@mui/icons-material';
import useProductModal from '../../../hooks/useProductModal';
import { ProductContext } from '../../../context/ProductContext';


export default function ProductModal() {
  const {openProductModal, handleProductModalClose} = useContext(ProductContext);
  const {
    handleProductImageClick,
    productImage,
    productImageUrl,
    title,
    description,
    price,
    quantity,
    handleTitleOnChange,
    handleDescriptionOnChange,
    handlePriceOnChange,
    handleQuantityOnChange,
    handleProductImageUpload,
    onProductModalSubmit
  } = useProductModal();
  return (
    <div>
      <Modal
        aria-labelledby="product-modal"
        aria-describedby="add-new-product"
        open={openProductModal}
        onClose={handleProductModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openProductModal}>
          <Box
            component="form"
            onSubmit={onProductModalSubmit}
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                display:"flex",
                flexDirection:"column",
                gap:"0.8em",
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                borderRadius:"8px",
                border:"1px solid lightgray",
                p: 4,
            }}
          >
                {productImage===null  ?
                    <Button
                        component="label"
                        size="medium"
                        fullWidth
                        endIcon={<CameraAlt />}
                    >
                        Add photos
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleProductImageUpload}
                        />
                    </Button>
                    :
                    <Box style={{position:"relative"}}>
                        <Box
                            component="img"
                            alt="Picture of new product"
                            src={productImageUrl}
                            sx={{
                                width:"100%",
                                height:"auto"
                            }}
                        />
                        <IconButton
                            sx={{
                                position:"absolute",
                                top:"2%",
                                left:"85%"
                            }}
                            onClick={handleProductImageClick}
                        >
                            <Close />
                        </IconButton>
                    </Box>
                }
                <TextField
                    id="product-modal-email"
                    label="Title"
                    fullWidth
                    value={title}
                    onChange={handleTitleOnChange}
                    required
                 />
                <TextField
                    id="product-modal-description"
                    multiline
                    label="Description"
                    rows={2}
                    fullWidth
                    value={description}
                    onChange={handleDescriptionOnChange}
                    required
                 />
                <TextField
                    id="product-modal-price"
                    label="Price"
                    fullWidth
                    value={price}
                    onChange={handlePriceOnChange}
                    required
                 />
                <TextField
                    id="product-modal-quantity"
                    label="Quantity"
                    fullWidth
                    value={quantity}
                    onChange={handleQuantityOnChange}
                    required
                 />
                 <Button
                    variant="contained"
                    color="success"
                    size="medium"
                    type="submit"
                 >
                    Create post
                 </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}