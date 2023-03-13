import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center", color: "white" }}>
        CHANGE THE LIFE OF THOSE,
        <br /> WHO HAVE <span style={{ color: "#FED70D" }}>NO HOPE</span>
      </Typography>
      <Typography sx={{ color: "white" }}>
        Be the reason someone smiles today
      </Typography>
      <Button variant="contained" size="large">
        DONATE NOW
      </Button>
    </Box>
  );
};

export default Home;
