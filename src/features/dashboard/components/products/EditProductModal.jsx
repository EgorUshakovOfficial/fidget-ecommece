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
import {validateNumericalInput} from '../../../../utils/validators';

export default function AddProductModal() {

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div>
      <Modal
        aria-labelledby="edit-product-modal"
        aria-describedby="edit-product"
        open={true}
        onClose={() => {}}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openAddProductModal}>
          <Box
            component="form"
            onSubmit={() => {}}
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
                            onChange={() => {}}
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
                            alt="Picture of product"
                            src={"#"}
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
                            onClick={() => {}}
                        >
                            <Close />
                        </IconButton>
                    </Box>
                }
                <TextField
                    id="edit-product-modal-email"
                    label="Title"
                    fullWidth
                    value={""}
                    onChange={() => {}}
                    required
                 />
                <TextField
                    id="edit-product-modal-description"
                    multiline
                    label="Description"
                    rows={2}
                    fullWidth
                    value={description}
                    onChange={handleDescriptionOnChange}
                    required
                 />
                <TextField
                    id="edit-product-modal-price"
                    label={"Price"}
                    error={validateNumericalInput(price) === "Input is not valid"}
                    fullWidth
                    value={""}
                    helperText={validateNumericalInput("")}
                    onChange={() => {}}
                    required
                 />
                <TextField
                    id="edit-product-modal-quantity"
                    label="Quantity"
                    type="number"
                    error={quantity === "Input is not valid"}
                    fullWidth
                    value={""}
                    min="1"
                    onChange={() => {}}
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