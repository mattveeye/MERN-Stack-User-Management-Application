import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Container,
} from "@mui/material";

export default function AllUsers() {
  const [items, setItems] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL || '';
  useEffect(() => {
    fetch(`${API_URL}/mydata`, {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          console.error("Expected array, got:", data);
          setItems([]);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setItems([]);
      });
  }, [API_URL]);

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
            bgcolor: "primary.main",
            color: "white",
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" component="h3" fontWeight="600">
            🛠️ Your Data
          </Typography>
        </Box>

        <CardContent>
          {items.length === 0 ? (
            <Typography
              variant="body1"
              color="text.secondary"
              align="center"
              fontStyle="italic"
            >
              No data yet. 🤔
            </Typography>
          ) : (
            <List disablePadding>
              {items.map((item, index) => (
                <Box key={item._id || index}>
                  <ListItem
                    sx={{
                      borderRadius: 2,
                      mb: 0.5,
                      "&:hover": {
                        bgcolor: "action.hover",
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          fontWeight="600"
                          color="text.primary"
                        >
                          {item.name}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          variant="body2"
                          color="error.main"
                          sx={{ mt: 0.5 }}
                        >
                          Password: <strong>{item.password}</strong>
                        </Typography>
                      }
                    />
                  </ListItem>
                  {index < items.length - 1 && (
                    <Divider sx={{ mx: 2, borderColor: "divider" }} />
                  )}
                </Box>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}