import {useContext} from 'react';
import { styled, alpha } from '@mui/material/styles';
import {Menu, MenuItem} from '@mui/material';
import {Paid, LocalShipping, AllInbox, PriceCheck} from '@mui/icons-material';
import { OrderContext } from '../../context/OrderContext';
import useOrderRowEdit from '../../hooks/orders/useOrderRowEdit';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function OptionsMenu({orderId}) {
  const {orderSelected, anchorOptions, handleOrderOptionsClose} = useContext(OrderContext);

  // Order details props
  const orderDetailsProps = useOrderRowEdit(orderId);

  return (
      <StyledMenu
        anchorEl={anchorOptions}
        open={orderSelected.id === orderId && orderSelected.action==="selected"}
        onClose={handleOrderOptionsClose}
      >
        <MenuItem
          value="bought"
          onClick={orderDetailsProps.editOrderOnClick}
          disableRipple
        >
            <Paid />
            Bought
        </MenuItem>
        <MenuItem
          value="shipped"
          onClick={orderDetailsProps.editOrderOnClick}
          disableRipple
        >
            <LocalShipping />
            Shipped
        </MenuItem>
        <MenuItem
          value="delivered"
          onClick={orderDetailsProps.editOrderOnClick}
          disableRipple
        >
            <AllInbox />
            Delivered
        </MenuItem>
        <MenuItem
          value="refund"
          onClick={orderDetailsProps.openRefundModalOnClick}
          disableRipple
        >
           <PriceCheck />
           Refund
        </MenuItem>
      </StyledMenu>
  );
}