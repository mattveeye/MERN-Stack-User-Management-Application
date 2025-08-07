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

export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    const API_URL = process.env.REACT_APP_API_URL || '';

    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    });

    if (response.ok) {
      window.location.href = "/login";
    } else {
      const error = await response.json();
      alert(error.error || "Registration failed");
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
          🧑‍💻 Register
        </Typography>

        {/* Форма */}
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
            Register
          </Button>
        </Box>

        {/* Разделитель и ссылка на вход */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Already have an account?{" "}
            <Link href="/login" underline="hover" fontWeight="medium">
              Log in
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}