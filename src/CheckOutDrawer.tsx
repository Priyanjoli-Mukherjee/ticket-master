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
      <Box width={400} padding={5}>
        <Box display="flex" justifyContent="space-between" marginBottom={4}>
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5">
            ${props.numTickets * props.event.price}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box width={300}>
            <Typography variant="h6">{props.event.title}</Typography>
            <Typography>{props.event.artist}</Typography>
            <Typography variant="body2" style={{ fontStyle: "oblique" }}>
              {props.event.description}
            </Typography>
          </Box>
          <Typography variant="h6">
            ${props.event.price} &times; {props.numTickets}
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
