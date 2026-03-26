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

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
      <Paper sx={{ p: 4, width: "100%", maxWidth: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            {...register("email", { required: "Email required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            {...register("password", { required: "Password required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </form>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
          }}
        >
          <MuiLink component={Link} to="/forgot-password" variant="body2">
            Forgot Password?
          </MuiLink>
          <Typography variant="body2">
            Don't have an account?{" "}
            <MuiLink component={Link} to="/register">
              Sign Up
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default LoginPage;
