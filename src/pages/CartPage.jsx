import React from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Divider,
  Stack,
  Card,
  CardMedia,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 4 }}>
        Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Paper sx={{ p: 6, textAlign: "center", borderRadius: 4 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Your cart is empty
          </Typography>
          <Button variant="contained" component={Link} to="/products">
            Shop Now
          </Button>
        </Paper>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              {cart.map((item) => (
                <Card
                  key={item.id}
                  sx={{
                    display: "flex",
                    p: 2,
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    boxShadow: "none",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.thumbnail}
                    alt={item.title}
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: 2,
                      objectFit: "cover",
                    }}
                  />

                  <Box sx={{ ml: 3, flexGrow: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mr: 1 }}
                      >
                        Quantity:
                      </Typography>

                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => updateQuantity(item.id, -1)}
                        sx={{
                          minWidth: 32,
                          height: 32,
                          p: 0,
                          fontWeight: "bold",
                        }}
                      >
                        -
                      </Button>

                      <Typography
                        sx={{
                          minWidth: 24,
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        {item.quantity}
                      </Typography>

                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => updateQuantity(item.id, 1)}
                        sx={{
                          minWidth: 32,
                          height: 32,
                          p: 0,
                          fontWeight: "bold",
                        }}
                      >
                        +
                      </Button>
                    </Box>

                    <Box sx={{ textAlign: "right" }}>
                      <Button
                        color="error"
                        size="small"
                        onClick={() => removeFromCart(item.id)}
                        sx={{
                          textTransform: "none",
                          fontWeight: "bold",
                          fontSize: "0.75rem",
                        }}
                      >
                        Remove Item
                      </Button>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "none",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
                Summary
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography color="text.secondary">Subtotal</Typography>
                <Typography sx={{ fontWeight: 700 }}>${cartTotal}</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography variant="h6">Total</Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: 900 }}
                >
                  ${cartTotal}
                </Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                size="large"
                component={Link}
                to="/checkout"
                sx={{ borderRadius: 2, fontWeight: "bold", py: 1.5 }}
              >
                Proceed to Checkout
              </Button>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default CartPage;
