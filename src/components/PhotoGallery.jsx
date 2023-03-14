import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";

const PhotoGallery = ({ images }) => {
  const [counter, setCounter] = useState(6);
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  return (
    <Box
      id="IMAGES"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Grid container spacing={5} width="100%">
        {images.slice(0, counter).map((image, index) => (
          <Grid item sm={4} xs={12} key={index}>
            <img
              src={image.stringValue}
              width={isLargeScreen ? 400 : "100%" }
              height={400}
              style={{ objectFit: "cover", borderRadius: 5 }}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        size="large"
        sx={{ mt: 5 }}
        onClick={() => setCounter((old) => old + 3)}
      >
        View More
      </Button>
    </Box>
  );
};

export default PhotoGallery;
