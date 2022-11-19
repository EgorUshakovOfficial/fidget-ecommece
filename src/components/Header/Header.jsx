import {useContext} from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    MenuItem,
    Badge
} from '@mui/material';
import {ShoppingCart, Menu as MenuIcon} from "@mui/icons-material";
import logo from '../../assets/images/logo.png';
import { SHOPPING_PAGES } from "../../data/constants";
import useHeader from '../../hooks/useHeader';
import {StateContext} from '../../context/StateContext';

export default function Header() {
  const {handleShoppingCartSlider, cart} = useContext(StateContext);
  const {
    anchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
  }
   = useHeader();
  return (
    <AppBar
        position="fixed"
        color="transparent"
        sx={{background:"white"}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box
            component="img"
            sx={{
                height: 64,
                mr:1,
                borderRadius: "8px",
                display: {xs: "none", md:"flex"}
            }}
            alt="Fidget Spinner logo"
            src={logo}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 0.5,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none"
            }}
          >
            Fidget Spinners
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account-of-current-user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {SHOPPING_PAGES.map((page) => (
                <MenuItem key={page}  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            sx={{
                height: 64,
                mr:1,
                borderRadius: "8px",
                display: {xs: "flex", md:"none"}
            }}
            alt="Fidget Spinner logo"
            src={logo}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none"
            }}
          >
            Fidget Spinners
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {SHOPPING_PAGES.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block", fontWeight:600 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleShoppingCartSlider} sx={{ p: 0 }}>
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCart  />
                </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};