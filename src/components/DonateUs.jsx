import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const DonateUs = () => {
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  return (
    <Box
      id="DONATEUS"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: isLargeScreen ? 20 : 10,
      }}
    >
      <Typography
        variant={isLargeScreen ? "h4" : "h6"}
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        Our Foundation Is Not Accepting Payments Right Now
      </Typography>
      <Typography
        fontWeight="bold"
        variant={isLargeScreen ? "h4" : "h6"}
        color="green"
      >
        THANKYOU FOR VISITING
      </Typography>
    </Box>
  );
};

export default DonateUs;
