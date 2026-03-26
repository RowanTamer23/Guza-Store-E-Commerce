import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { useCart } from "../context/CartContext";

function ProductCard({ product, onAddSuccess, sx }) {
  const { cart, addToCart, updateQuantity } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);

  const handleAdd = () => {
    addToCart(product);
    onAddSuccess(product.title);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        maxWidth: "250px",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
        transition: "transform 0.2s",
        "&:hover": { transform: "translateY(-5px)", boxShadow: 2 },
        ...sx,
      }}
    >

      <Box sx={{ height: 180, bgcolor: "#f5f5f5" }}>
        <CardMedia
          component="img"
          image={product.thumbnail}
          alt={product.title}
          sx={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Box>

      <CardContent
        sx={{ p: 2, flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            height: "2.8em",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            mb: 1,
          }}
        >
          {product.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            height: "4.2em",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            mb: 2,
          }}
        >
          {product.description}
        </Typography>

        <Box sx={{ mt: "auto" }}>
          <Divider sx={{ mb: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              ${product.price}
            </Typography>


            {cartItem ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => updateQuantity(product.id, -1)}
                  sx={{ minWidth: 32, height: 32, p: 0, fontWeight: "bold" }}
                >
                  -
                </Button>
                <Typography
                  sx={{ fontWeight: "bold", minWidth: 20, textAlign: "center" }}
                >
                  {cartItem.quantity}
                </Typography>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => updateQuantity(product.id, 1)}
                  sx={{ minWidth: 32, height: 32, p: 0, fontWeight: "bold" }}
                >
                  +
                </Button>
              </Box>
            ) : (
              <Button
                variant="contained"
                size="small"
                onClick={handleAdd}
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  borderRadius: 2,
                }}
              >
                Add to Cart
              </Button>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
