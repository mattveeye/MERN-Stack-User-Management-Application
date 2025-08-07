import { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

export default function AddUser() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState();

  function handleChangingName(e) {
    setName(e.target.value);
  }

  function handleChangingPassword(e) {
    setPassword(e.target.value);
  }
  const API_URL = process.env.REACT_APP_API_URL || '';

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${API_URL}/adddata`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    });

    if (response.ok) {
      console.log("User added!");
      window.location.reload();
    } else {
      console.error("Failed to add user:", await response.text());
    }
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 6 }}>
      <Card
        elevation={4}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "background.paper",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            bgcolor: "success.main",
            color: "white",
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" component="h3" fontWeight="600">
            ➕ Add User
          </Typography>
        </Box>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={handleChangingName}
              required
              autoFocus
            />
            <TextField
              label="Password"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={handleChangingPassword}
              required
            />
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                color="success"
                size="large"
                sx={{ px: 4, py: 1.2, fontWeight: 600 }}
              >
                Add User
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}