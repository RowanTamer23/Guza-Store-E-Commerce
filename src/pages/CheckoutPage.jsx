import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";

function CheckoutPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Shipping Address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="First Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Last Name" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Address Line 1" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="City" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Zip Code" />
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" size="large">
            Place Order
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default CheckoutPage;
