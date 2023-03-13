import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HeadingContainer = ({ heading, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        p: 5,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={5}
        sx={{ textDecoration: "underline", textDecorationColor: "#FED70D" }}
      >
        {heading}
      </Typography>
      {children}
    </Box>
  );
};

export default HeadingContainer;
