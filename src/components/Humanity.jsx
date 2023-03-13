import { Button, Grid } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Image from "../assets/image_one.avif";

const Humanity = () => {
  return (
    <Box>
      <Grid container>
        <Grid item sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 4,
              height: "600px",
              padding: 10,
            }}
          >
            <Typography variant="h4" textAlign="center">
              WE ALWAYS <br /> SERVE THE HUMANITY
            </Typography>
            <Typography textAlign="center">
              Our organization is dedicated to improving the lives of people in
              need. Through our various programs and initiatives, we strive to
              provide essential resources and support to those who are
              marginalized, vulnerable, or facing difficulties. Whether it's
              providing food, shelter, education, or healthcare, we believe in
              the power of compassion and kindness to bring about positive
              change in the world. Join us in our mission to make a difference
              and serve humanity.
            </Typography>

            <Stack direction="row">
              <Button>CONTACT US</Button>
              <Button>DONATE NOW</Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box>
            <img
              src={Image}
              alt=""
              width="100%"
              height="600px"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Humanity;
