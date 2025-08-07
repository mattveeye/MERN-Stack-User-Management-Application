import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Link,
} from "@mui/material";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    const API_URL = process.env.REACT_APP_API_URL || '';
      
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
      credentials: "include",
    });

    if (response.ok) {
      window.location.href = "/main"; 
    } else {
      const error = await response.json();
      alert(error.error || "Login failed");
    }
  }

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        py: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          textAlign: "center",
          width: "100%",
          bgcolor: "background.paper",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        {/* Заголовок */}
        <Typography
          variant="h5"
          component="h1"
          fontWeight="bold"
          color="primary"
          mb={3}
        >
          🔐 Log In
        </Typography>

        {/* Форма входа */}
        <Box component="form" onSubmit={submitHandler}>
          <TextField
            label="Username"
            variant="outlined"
            type="text"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Log In
          </Button>
        </Box>

        {/* Ссылка на регистрацию */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Don’t have an account?{" "}
            <Link href="/" underline="hover" fontWeight="medium">
              Register
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}