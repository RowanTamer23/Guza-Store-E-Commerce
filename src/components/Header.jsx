import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { ColorModeContext } from "../theme/ThemeContext";
import { useCart } from "../context/CartContext";

function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { cartCount } = useCart();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
  ];

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", fontWeight: "bold" }}
        >
          GUZA STORE
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              component={NavLink}
              to={link.path}
              sx={{
                color: "white",
                "&.active": { bgcolor: "rgba(255,255,255,0.2)" },
              }}
            >
              {link.label}
            </Button>
          ))}

          <Button onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>

          <Button component={NavLink} to="/cart" color="inherit">
            Cart ({cartCount})
          </Button>

          <Button
            component={NavLink}
            to="/login"
            variant="contained"
            color="info"
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
