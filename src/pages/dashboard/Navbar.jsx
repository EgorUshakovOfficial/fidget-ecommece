import {useState} from 'react';
import {
  AppBar,
  Box,
  Typography,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  List
} from '@mui/material';
import {Person, ShoppingCartCheckout, Email, Inventory, Menu} from '@mui/icons-material';
import AccountMenu from './AccountMenu';
import AdminInfo from './AdminInfo';
import NavItem from './NavItem';

const drawerWidth = 240;

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handles  navigation toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <AdminInfo />
      <List>
        <NavItem text="Customers" icon={<Person />} />
        <NavItem text="Products" icon={<ShoppingCartCheckout />} />
        <NavItem text="Orders" icon={<Inventory />} />
        <NavItem text="Subscribers" icon={<Email />} />
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:"transparent",
          color:"black",
        }}
      >
        <Toolbar sx={{
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            E-commerce Dashboard
          </Typography>
          <AccountMenu />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
