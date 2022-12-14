import {Box, Button} from '@mui/material';
export default function RefundControls(){
    return (
        <Box
            display="flex"
            justifyContent="flex-end"
            gap="0.25em"
            marginTop="0.5em"
        >
            <Button
                size="medium"
                variant="contained"
                disableRipple
                onClick={() => {}}
            >
                Cancel
            </Button>
            <Button
                color="success"
                variant="contained"
                size="medium"
                disableRipple
                onClick={() => {}}
            >
                Refund
            </Button>
        </Box>
    )
};