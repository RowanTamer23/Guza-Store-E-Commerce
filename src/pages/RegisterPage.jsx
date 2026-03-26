import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Registering user:", data);
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6, mb: 6 }}>
      <Paper sx={{ p: 4, width: "100%", maxWidth: 450 }}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Create Account
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Join the GUZA community today.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            {...register("fullName", { required: "Name is required" })}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />
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
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Minimum 8 characters" },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </form>

        <Typography variant="body2" align="center">
          Already have an account?{" "}
          <MuiLink component={Link} to="/login">
            Login here
          </MuiLink>
        </Typography>
      </Paper>
    </Box>
  );
}

export default RegisterPage;
