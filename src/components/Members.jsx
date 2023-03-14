import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AashishPahuja from "../assets/aashish_pahuja.jpeg";
import MehulGupta from "../assets/mejul_gupta.png";
import RakeshKumar from "../assets/rakesh_kumar.jpeg";
import SandeepSharma from "../assets/sandeep_sharma.jpeg";
import Rohit from "../assets/rohit.jpeg";
import useMediaQuery from "@mui/material/useMediaQuery";

const Members = () => {
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box></Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: 4,
            border: "1px solid rgba(0,0,0, 0.2)",
            borderRadius: 2,
            width: isLargeScreen ? "300px" : "100%"
            
          }}
        >
          <img
            src={MehulGupta}
            width={140}
            height={140}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "0",
            }}
          />
          <Box>
            <Typography variant="h6" mt={4} width="100%" textAlign="center">
              Aashish Pahuja
            </Typography>
            <Typography variant="body2" width="100%" textAlign="center">
              FOUNDER
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: 4,
            border: "1px solid rgba(0,0,0, 0.2)",
            borderRadius: 2,
            width: isLargeScreen ? "300px" : "100%"
          }}
        >
          <img
            src={AashishPahuja}
            width={140}
            height={140}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "0",
            }}
          />
          <Typography variant="h6" mt={4}>
            Aashish Pahuja
          </Typography>
          <Typography variant="body2">MEMBER</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: 4,
            border: "1px solid rgba(0,0,0, 0.2)",
            borderRadius: 2,
            width: isLargeScreen ? "300px" : "100%"
          }}
        >
          <img
            src={SandeepSharma}
            width={140}
            height={140}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "0",
            }}
          />
          <Typography variant="h6" mt={4}>
            Sandeep Sharma
          </Typography>
          <Typography variant="body2">MEMBER</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: 4,
            border: "1px solid rgba(0,0,0, 0.2)",
            borderRadius: 2,
            width: isLargeScreen ? "300px" : "100%"
          }}
        >
          <img
            src={Rohit}
            width={140}
            height={140}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "0 -10px",
            }}
          />
          <Typography variant="h6" mt={4}>
            Rohit
          </Typography>
          <Typography variant="body2">MEMBER</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: 4,
            border: "1px solid rgba(0,0,0, 0.2)",
            borderRadius: 2,
            width: isLargeScreen ? "300px" : "100%"
          }}
        >
          <img
            src={RakeshKumar}
            width={140}
            height={140}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Typography variant="h6" mt={4}>
            Rakesh Kumar
          </Typography>
          <Typography variant="body2">MEMBER</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Members;
