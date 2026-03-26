import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <Box>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 10,
          textAlign: "center",
          borderRadius: { xs: 0, md: "0 0 50px 50px" },
          mb: 6,
        }}
      >
        <Container>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            GUZA E-COMMERCE
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Modern Design. Seamless Shopping.
          </Typography>
          <Button
            variant="contained"
            color="info"
            size="large"
            component={Link}
            to="/products"
          >
            Shop Collection
          </Button>
        </Container>
      </Box>

      <Container>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
          Featured Products
        </Typography>
        <Grid container spacing={3} display={"flex"} justifyContent={"center"}>
          {products.slice(0, 4).map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: "center", pb: 6 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
            On Sale
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{ mb: 4 }}
            display={"flex"}
            justifyContent={"center"}
          >
            {products.slice(5, 9).map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/products"
          >
            Show More Products
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
