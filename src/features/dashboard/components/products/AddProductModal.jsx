import {useContext} from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
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
import useAddProductModal from '../../hooks/useAddProductModal';
import {validateNumericalInput} from '../../../../utils/validators';
import { ProductContext } from '../../context/ProductContext';

export default function AddProductModal() {
  const {openAddProductModal, handleAddProductModalClose} = useContext(ProductContext);

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
  } = useAddProductModal();

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div>
      <Modal
        aria-labelledby="product-modal"
        aria-describedby="add-new-product"
        open={openAddProductModal}
        onClose={handleAddProductModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openAddProductModal}>
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
                width: matches ? 400 : "90%",
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
                            name="image"
                            onChange={handleProductImageUpload}
                        />
                    </Button>
                    :
                    <Box style={{
                        position:"relative",
                        width: matches ? '80%' : '60%',
                        marginInline:"auto"
                    }}
                    >
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
                    id="add-product-modal-title"
                    label="Title"
                    fullWidth
                    value={title}
                    onChange={handleTitleOnChange}
                    required
                 />
                <TextField
                    id="add-product-modal-description"
                    multiline
                    label="Description"
                    rows={2}
                    fullWidth
                    value={description}
                    onChange={handleDescriptionOnChange}
                    required
                 />
                <TextField
                    id="add-product-modal-price"
                    label={"Price"}
                    error={validateNumericalInput(price) === "Input is not valid"}
                    fullWidth
                    value={price}
                    helperText={validateNumericalInput(price)}
                    onChange={handlePriceOnChange}
                    required
                 />
                <TextField
                    id="add-product-modal-quantity"
                    label="Quantity"
                    type="number"
                    error={quantity === "Input is not valid"}
                    fullWidth
                    value={quantity}
                    min="1"
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