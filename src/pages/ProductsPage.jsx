import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Tabs,
  Tab,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  const [openAlert, setOpenAlert] = useState(false);
  const [alertName, setAlertName] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = (event, newValue) => {
    setCategory(newValue);
    if (newValue === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === newValue));
    }
  };

  const triggerAlert = (name) => {
    setAlertName(name);
    setOpenAlert(true);
  };

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 4 }}>
        Our Collection
      </Typography>

      <Tabs
        value={category}
        onChange={handleCategoryChange}
        variant="scrollable"
        sx={{ mb: 4 }}
      >
        {categories.map((cat) => (
          <Tab key={cat} label={cat} value={cat} />
        ))}
      </Tabs>

      <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
        {filteredProducts.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              "@media (min-width: 1536px)": {
                flexBasis: "20%",
                maxWidth: "20%",
              },
            }}
          >
            <ProductCard
              product={product}
              onAddSuccess={triggerAlert}
              sx={{ flexGrow: 1 }}
            />
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          {alertName} added to cart!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default ProductsPage;
