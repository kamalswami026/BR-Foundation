import { Button, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";
import React from "react";
import Logo from "../assets/logo.png";
const Navbar = () => {
  const menu = ["HOME", "ABOUT", "IMAGES", "VIDEOS", "CONTACT US"];

  return (
    <Box sx={{ position: "fixed", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
          px: 12,
          background: "transparent",
          width: "100%",
        }}
      >
        <Stack direction="row" alignItems="center" gap={2}>
          <img src={Logo} width="50px" />
          <Typography color="white" fontWeight="bold">
            BR FOUNDATION
          </Typography>
        </Stack>

        <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Stack direction="row" alignItems="center" gap={3}>
            {menu.map((item) => (
              <Typography color="white">{item}</Typography>
            ))}
          </Stack>
          <Button variant="contained">DONATE NOW</Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "2px",
          backgroundColor: "white",
          opacity: 0.1,
        }}
      />
    </Box>
  );
};

export default Navbar;
