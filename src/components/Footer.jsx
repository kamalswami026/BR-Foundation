import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 10,
        background: "#111"
      }}
    >
      <Stack direction="row" spacing={2}></Stack>

      <Typography textAlign="center" color="white">
        It’s not how much we give,
        <br /> but how much love we put <br />
        into giving.
      </Typography>
    </Box>
  );
};

export default Footer;
