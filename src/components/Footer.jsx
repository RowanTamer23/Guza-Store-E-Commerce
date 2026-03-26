import { Box, Typography, Container, Divider } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[900],
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ mb: 2 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            GUZA STORE
          </Typography>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Built with React & Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
