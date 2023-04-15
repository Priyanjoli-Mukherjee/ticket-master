import React from "react";
import { Event } from "./Event";
import { Box, Drawer, Typography } from "@mui/material";

type Props = {
  event: Event;
  numTickets: number;
  onCancel: () => void;
};

export function CheckOutDrawer(props: Props) {
  return (
    <Drawer open anchor="right" onClose={props.onCancel}>
      <Box
        display="flex"
        justifyContent="space-between"
        width={400}
        padding={3}
      >
        <Typography variant="h5">Total</Typography>
        <Typography variant="h5">
          ${props.numTickets * props.event.price}
        </Typography>
      </Box>
    </Drawer>
  );
}
