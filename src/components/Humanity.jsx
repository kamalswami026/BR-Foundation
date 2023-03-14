import { Button, Grid } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Image from "../assets/image_one.avif";
import useMediaQuery from "@mui/material/useMediaQuery";

const Humanity = () => {
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  return (
    <Box>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 8,
              height: "600px",
              padding: isLargeScreen ? 10 : 2,
              background: "#F7F7F7",
            }}
          >
            <Typography
              variant={isLargeScreen ? "h4" : "h6"}
              textAlign="center"
              fontWeight="bold"
            >
              WE ALWAYS <br /> SERVE THE HUMANITY
            </Typography>
            <Typography textAlign="center" fontSize={isLargeScreen ? 20 : 15}>
              Our organization is dedicated to improving the lives of people in
              need. Through our various programs and initiatives, we strive to
              provide essential resources and support to those who are
              marginalized, vulnerable, or facing difficulties. Whether it's
              providing food, shelter, education, or healthcare, we believe in
              the power of compassion and kindness to bring about positive
              change in the world. Join us in our mission to make a difference
              and serve humanity.
            </Typography>

            <Stack direction="row" spacing={5}>
              <Button
                variant="outlined"
                size={isLargeScreen ? "large" : "small"}
                sx={{
                  borderColor: "#FED60F",
                  color: "#FED60F",
                  fontWeight: "bold",
                }}
              >
                CONTACT US
              </Button>
              <Button
                variant="contained"
                sx={{
                  background: "#FED60F",
                  fontWeight: isLargeScreen ? "bold" : "none",
                  color: "black",
                }}
                size={isLargeScreen ? "large" : "small"}
                disableElevation
              >
                DONATE NOW
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
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
