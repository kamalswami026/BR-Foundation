import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BackgroundImage from "../assets/home_background.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";

const Home = () => {
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  return (
    <Box
      id="HOME"
      sx={{
        width: "100%",
        height: "100vh",
        background: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: `url(${BackgroundImage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        variant={isLargeScreen ? "h3" : "h5"}
        sx={{ textAlign: "center", color: "white", letterSpacing: 5 }}
        gutterBottom
      >
        CHANGE THE LIFE OF THOSE,
        <br /> WHO HAVE <span style={{ color: "#FED70D" }}>NO HOPE</span>
      </Typography>
      <Typography sx={{ color: "white" }}>
        Be the reason someone smiles today
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: "#FED60F",
          fontWeight: "bold",
          color: "black",
          mt: 8,
        }}
        size="large"
      >
        DONATE NOW
      </Button>
    </Box>
  );
};

export default Home;
