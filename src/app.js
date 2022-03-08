import React, { useEffect } from "react";
import { Box } from "@chakra-ui/core";
import Form from "./components/Form";

export default function App() {
  useEffect(() => {
    console.log("load form");
  }, []);
  return (
    <Box>
      <Form />
    </Box>
  );
}
