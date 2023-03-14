import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeadingContainer = ({ heading, children }) => {
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        p: isLargeScreen ? 5 : 2,
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
