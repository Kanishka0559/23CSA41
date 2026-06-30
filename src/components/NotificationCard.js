import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip
} from "@mui/material";

function NotificationCard({ notification }) {
  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent>

        <Typography variant="h6">
          {notification.type}
        </Typography>

        <Typography variant="body1">
          {notification.message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {notification.timestamp}
        </Typography>

        <Chip
          label={notification.viewed ? "Viewed" : "Unread"}
          color={notification.viewed ? "success" : "error"}
          sx={{ marginTop: 1 }}
        />

      </CardContent>
    </Card>
  );
}

export default NotificationCard;