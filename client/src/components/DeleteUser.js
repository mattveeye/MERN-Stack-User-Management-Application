import { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";

export default function DeleteUser() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

  

    const API_URL = process.env.REACT_APP_API_URL || '';

    await fetch(`${API_URL}/deletedata`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
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
            bgcolor: "error.main",
            color: "white",
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" component="h3" fontWeight="600">
            ❌ Delete User
          </Typography>
        </Box>
        <CardContent>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Enter the username to delete it permanently.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={handleChange}
              required
              helperText="This action cannot be undone!"
            />
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                color="error"
                size="large"
                sx={{ px: 4, py: 1.2, fontWeight: 600 }}
              >
                Delete User
              </Button>
            </Box>
          </form>
          <Box sx={{ mt: 2 }}>
            <Alert severity="warning" sx={{ fontSize: "0.875rem" }}>
              This will permanently remove the user. Use with caution!
            </Alert>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}