import { Box, Paper, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { getEventData } from "./getEventData";

export function EventListPage() {
  const events = useMemo(() => getEventData(), []);
  return (
    <Box margin={5}>
      {events.map((event) => (
        <Paper elevation={24} style={{ margin: 15, padding: 10 }}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5">{event.title}</Typography>
            <Typography variant="h5">{`$${event.price}`}</Typography>
          </Box>
          <Typography variant="h6">{event.artist}</Typography>
          <Typography variant="body1" style={{ fontStyle: "italic" }}>
            {event.description}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}
