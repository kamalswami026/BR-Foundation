import { Button, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useMediaQuery from "@mui/material/useMediaQuery";

const ContactUs = () => {
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  return (
    <Box
      id="CONTACT US"
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        position: "relative",
        flexDirection: isLargeScreen ? "row" : "column",
      }}
    >
      <Box sx={{ flexGrow: 1, p: isLargeScreen ? 5 : 1, width: "100%" }}>
        <Stack gap={2}>
          <Typography fontWeight="bold" fontSize={20}>
            Email Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              background: "#fff8d8",
              px: 2,
            }}
          >
            <AccountCircleIcon sx={{ color: "#8F8C79" }} />
            <input
              type="text"
              width="100%"
              height="100%"
              placeholder="Your Name"
              style={{
                background: "#fff8d8",
                border: "none",
                outlineWidth: 0,
                padding: "15px 15px",
                borderRadius: 5,
                fontSize: isLargeScreen ? 20 : 15,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              background: "#fff8d8",
              px: 2,
            }}
          >
            <EmailIcon sx={{ color: "#8F8C79" }} />
            <input
              type="text"
              width="100%"
              height="100%"
              placeholder="Your Email"
              style={{
                background: "#fff8d8",
                border: "none",
                outlineWidth: 0,
                padding: "15px 15px",
                borderRadius: 5,
                fontSize: isLargeScreen ? 20 : 15,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",

              width: "100%",
              background: "#fff8d8",
              p: 2,
            }}
          >
            <MessageIcon sx={{ color: "#8F8C79" }} />
            <textarea
              rows={3}
              width="100%"
              height="100%"
              placeholder="Message"
              style={{
                background: "#fff8d8",
                border: "none",
                outlineWidth: 0,
                padding: "15px 15px",
                borderRadius: 5,
                fontSize: isLargeScreen ? 20 : 15,
              }}
            />
          </Box>
          <Button variant="contained" size="large" disableElevation>
            SEND
          </Button>
        </Stack>
      </Box>
      <Box sx={{ flexGrow: 1, py: 5, width: "100%" }}>
        <Stack gap={4}>
          <Typography fontWeight="bold" fontSize={20} sx={{ opacity: "0" }}>
            f
          </Typography>
          <Stack
            direction={isLargeScreen ? "row" : "column"}
            gap={2}
            sx={{
              p: "15px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            alignItems={isLargeScreen ? "none" : "center"}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CallIcon />
              <Typography
                fontWeight="bold"
                width={isLargeScreen ? "200px" : "100%"}
              >
                Mobile Number
              </Typography>
            </Box>
            <Typography>+91 9897875407</Typography>
          </Stack>

          <Stack
            direction={isLargeScreen ? "row" : "column"}
            gap={2}
            sx={{
              p: "15px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            alignItems={isLargeScreen ? "none" : "center"}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <EmailIcon />
              <Typography
                fontWeight="bold"
                width={isLargeScreen ? "200px" : "100%"}
              >
                Email Id
              </Typography>
            </Box>
            <Typography>brfoundation45@gmail.com</Typography>
          </Stack>

          <Stack
            direction={isLargeScreen ? "row" : "column"}
            gap={2}
            sx={{
              p: "15px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            alignItems={isLargeScreen ? "none" : "center"}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <InstagramIcon />
              <Typography
                fontWeight="bold"
                width={isLargeScreen ? "200px" : "100%"}
              >
                Instagram
              </Typography>
            </Box>
            <Typography>brfoundation_</Typography>
          </Stack>

          <Stack
            direction={isLargeScreen ? "row" : "column"}
            gap={2}
            sx={{
              p: "15px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            alignItems={isLargeScreen ? "none" : "center"}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <InstagramIcon />
              <Typography
                fontWeight="bold"
                width={isLargeScreen ? "200px" : "100%"}
              >
                YouTube
              </Typography>
            </Box>
            <Typography>BR Foundation</Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "2px",
          height: "100%",
          position: "absolute",
          left: "50%",
          backgroundColor: "#111",
          opacity: 0.1,
          display: isLargeScreen ? "block" : "none",
        }}
      />
    </Box>
  );
};

export default ContactUs;
