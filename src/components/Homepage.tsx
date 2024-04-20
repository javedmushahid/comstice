import React from "react";
import MainContainer from "./MainContainer";
import { Box } from "@mui/material";
import MiddleContainer from "./MiddleContainer";
import CenterContainer from "./CenterContainer";
import LastContainer from "./LastContainer";

const Homepage = () => {
  return (
    <Box>
      <MainContainer />
      <MiddleContainer />
      <CenterContainer />
      <LastContainer />
    </Box>
  );
};

export default Homepage;
