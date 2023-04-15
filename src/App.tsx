import React, { useState } from "react";
import "./App.css";
import { CheckOutPage } from "./CheckOutPage";
import { EventListPage } from "./EventListPage";

export function App() {
  const [isCheckOutPage, setCheckOutPage] = useState(false);

  return isCheckOutPage ? <CheckOutPage /> : <EventListPage />;
}
