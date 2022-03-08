import React from "react";
import { Box, InputGroup, Input, InputLeftAddon } from "@chakra-ui/core";

export default function Form() {
  return (
    <>
      <Box bg="#F3F9EB" p="8" m="0">
        <InputGroup>
          <InputLeftAddon children="+91" />
          <Input type="tel" placeholder="mobile no number" />
        </InputGroup>
      </Box>
    </>
  );
}
