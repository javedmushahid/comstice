import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const MiddleContainer = () => {
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
            Lower Cost of Ownership
          </Typography>
          <Typography mt={2} fontSize={13}>
            No Avaya AES TSAPI license costs with CMS-Based Reporting and
            real-time feed.
          </Typography>
        </Box>
        <Box maxWidth={300}>
          <Typography variant="h6" fontWeight={"bold"}>
            Lower Cost of Ownership
          </Typography>
          <Typography mt={2} fontSize={13}>
            Real-time and historical agent scorecards to improve agent
            occupancy.
          </Typography>
        </Box>
        <Box maxWidth={300}>
          <Typography variant="h6" fontWeight={"bold"}>
            Lower Cost of Ownership
          </Typography>
          <Typography mt={2} fontSize={13}>
            Minimize rebeat callers. handle more customers, convert more
            business.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default MiddleContainer;
