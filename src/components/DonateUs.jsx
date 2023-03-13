import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const DonateUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 20
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Our Foundation Is Not Accepting Payments Right Now
      </Typography>
      <Typography fontWeight="bold" variant="h4" color="green">
        THANKYOU FOR VISITING
      </Typography>
    </Box>
  );
};

export default DonateUs;
