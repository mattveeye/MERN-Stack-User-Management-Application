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

export default function UpdateUser() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState();

  function handleChangingName(e) {
    setName(e.target.value);
  }

  function handleChangingPassword(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const API_URL = process.env.REACT_APP_API_URL || "";

    await fetch(`${API_URL}/updatedata`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, newPassword: password }),
      credentials: "include",
    });
    window.location.reload();
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
            bgcolor: "warning.main",
            color: "white",
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" component="h3" fontWeight="600">
            🔐 Update Password
          </Typography>
        </Box>
        <CardContent>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Set a new password for an existing user.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={handleChangingName}
              required
            />
            <TextField
              label="New Password"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={handleChangingPassword}
              required
              helperText="Enter the new password"
            />
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                color="warning"
                size="large"
                sx={{ px: 4, py: 1.2, fontWeight: 600 }}
              >
                Update Password
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
