import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const VideoGallery = ({ videos }) => {
  const [counter, setCounter] = useState(4);

  return (
    <Box
    id="VIDEOS"
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Grid container spacing={5}>
        {videos.slice(0, counter).map((video, index) => (
          <Grid item sm={6} xs={12} key={index}>
            <iframe
              width="100%"
              height="600"
              src={`https://www.youtube-nocookie.com/embed/${video}`}
              style={{ borderRadius: 10 }}
            ></iframe>
          </Grid>
        ))}
      </Grid>
      <Button variant="outlined" onClick={() => setCounter((old) => old + 2)} sx={{mt:5}}>
        View More
      </Button>
    </Box>
  );
};

export default VideoGallery;
