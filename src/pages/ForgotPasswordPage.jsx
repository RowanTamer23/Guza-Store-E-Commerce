import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Reset link sent to: ${data.email}`);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <Paper sx={{ p: 4, width: "100%", maxWidth: 400, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Reset Password
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Enter your email and we'll send you a link to get back into your
          account.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Reset Link
          </Button>
        </form>

        <MuiLink component={Link} to="/login" variant="body2">
          Back to Login
        </MuiLink>
      </Paper>
    </Box>
  );
}

export default ForgotPasswordPage;
