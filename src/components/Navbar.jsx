import { Button, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const menu = ["HOME", "ABOUT", "IMAGES", "VIDEOS", "CONTACT US"];

  const isLargeScreen = useMediaQuery("(min-width:600px)");


  function useScroll() {
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const [bodyOffset, setBodyOffset] = useState(
      document.body.getBoundingClientRect()
    );

    const [scrollY, setScrollY] = useState(bodyOffset.top);

    const [scrollX, setScrollX] = useState(bodyOffset.left);
    const [scrollDirection, setScrollDirection] = useState("down");

    const listener = (e) => {
      setBodyOffset(document.body.getBoundingClientRect());
      setScrollY(-bodyOffset.top);
      setScrollX(bodyOffset.left);
      setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
      setLastScrollTop(-bodyOffset.top);
    };

    useEffect(() => {
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    });

    return {
      scrollY,
      scrollX,
      scrollDirection,
    };
  }

  const { scrollY, scrollDirection } = useScroll();

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        display: scrollDirection == "down" ? "block" : "none",
        transition: "all 1s ease-in-out",
        zIndex: 99999999,
        background: scrollY > 200 ? "rgba(0, 0, 0, 0.5)" : "transparent",
        transition: "all .3s ease-in-out",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
          px: isLargeScreen ? 12 : 2,
          background: "transparent",
          width: "100%",
        }}
      >
        <Stack direction="row" alignItems="center" gap={2}>
          <img src={Logo} width={isLargeScreen ? "50px" : "35px"} />
          <Typography
            color="white"
            fontWeight="bold"
            fontSize={isLargeScreen ? 10 : 15}
          >
            BR FOUNDATION
          </Typography>
        </Stack>

        <Box
          sx={{
            display: isLargeScreen ? "flex" : "none",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Stack direction="row" alignItems="center" gap={3}>
            {menu.map((item) => (
              <a href={`#${item}`}>
                <Typography color="white">{item}</Typography>
              </a>
            ))}
          </Stack>
          <a href="#DONATEUS">
            <Button
              variant="contained"
              sx={{ background: "#FED60F", fontWeight: "bold", color: "black" }}
            >
              DONATE NOW
            </Button>
          </a>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "2px",
          backgroundColor: "white",
          opacity: 0.1,
        }}
      />
    </Box>
  );
};

export default Navbar;
