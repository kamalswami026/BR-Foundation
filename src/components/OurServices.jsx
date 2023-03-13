import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import GiveDonationIcon from "../assets/give_donation.svg";
import RightArrow from "../assets/right_arrow.png";
import HandShake from "../assets/handshake.svg";
import Share from "../assets/share.svg";

const Card = styled(Box)({
  height: "400px",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "330px",
  gap: 15,
});

const OurServices = () => {
  return (
    <Box width="100%">
      <Grid container justifyContent="center" width="100%">
        <Grid item sm={4}>
          <Card>
            <img src={GiveDonationIcon} width="80px" />
            <Typography>GIVE DONATION</Typography>
            <Typography textAlign="center">
              Give donations for the events which are conducting for the people
              in need
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography>GIVE DONATION</Typography>
              <img src={RightArrow} width="25px" />
            </Stack>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card>
            <img src={HandShake} width="80px" />
            <Typography>GIVE DONATION</Typography>
            <Typography textAlign="center">
              Give donations for the events which are conducting for the people
              in need
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography>GIVE DONATION</Typography>
              <img src={RightArrow} width="25px" />
            </Stack>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card>
            <img src={Share} width="80px" />
            <Typography>GIVE DONATION</Typography>
            <Typography textAlign="center">
              Give donations for the events which are conducting for the people
              in need
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography>GIVE DONATION</Typography>
              <img src={RightArrow} width="25px" />
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurServices;
