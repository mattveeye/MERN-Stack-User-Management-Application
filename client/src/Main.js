import UpdateUser from "./UpdateUser";
import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";
import AllUsers from "./AllUsers";

import {
  Container,
  Grid,
  Button,
  Paper,
  Divider,
  Typography,
  Stack,
} from "@mui/material";

export default function Main() {
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      localStorage.removeItem("token");
      console.log("Logged out");
      window.location.href = "/";
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Заголовок и кнопка выхода */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" component="h1" fontWeight="600" color="primary">
          🔐 Admin Panel
        </Typography>
        <Button
          onClick={handleLogout}
          variant="outlined"
          color="error"
          size="large"
          sx={{ fontWeight: 600 }}
        >
          Logout
        </Button>
      </Stack>

      {/* Три карточки в одной строке */}
      <Grid container spacing={1} sx={{ mb: 5 }}>
        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
          <AddUser />
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
          <UpdateUser />
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
          <DeleteUser />
        </Grid>
      </Grid>

      {/* Разделитель */}
      <Divider sx={{ my: 4, borderColor: "divider" }} />

      {/* Список всех пользователей */}
      <Paper elevation={2} sx={{ p: 3, borderRadius: 3, bgcolor: "background.default" }}>
        <Typography variant="h5" component="h2" fontWeight="600" color="text.primary" mb={2}>
          📋 All Users
        </Typography>
        <AllUsers />
      </Paper>
    </Container>
  );
}