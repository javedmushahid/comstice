import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const LastContainer = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
          gap: 16,
        }}
      >
        <Box maxWidth={300}>
          <Typography variant="h6" fontWeight={"bold"}>
            Download Data Sheet
          </Typography>
          <Typography mt={2} fontSize={13}>
            Click Here to Download data sheet
          </Typography>
        </Box>
        <Box maxWidth={300}>
          <Typography variant="h6" fontWeight={"bold"}>
            Access Sample Report
          </Typography>
          <Typography mt={2} fontSize={13}>
            View Sample Reports and scorecards
          </Typography>
        </Box>
        <Box maxWidth={300}>
          <Typography variant="h6" fontWeight={"bold"}>
            High-Level Design Guide
          </Typography>
          <Typography mt={2} fontSize={13}>
            Solution Topology ,integration and project plans
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LastContainer;
