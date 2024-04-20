import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const textContainer = {
  marginTop: "30px",
  marginLeft: "150px",
  maxWidth: "350px",
};
const titleStyle = {
  fontSize: "45px",
  fontWeight: 500,
};
const desciption = {};

const MainContainer = () => {
  return (
    <Grid container spacing={3} justifyContent={"space-between"} mt={5}>
      <Grid item xs={12} lg={6}>
        <div style={textContainer}>
          <h1
            style={{
              fontFamily: "sans-serif",
              fontSize: "64px",
              fontWeight: 700,
            }}
          >
            Avaya Call Reporting Reinvented
          </h1>
          <Typography style={{ fontSize: 16 }}>
            Step into the future of call center analytics with Comstice Avaya
            Call Reporting solution. Say goodbye to the need for an Avaya AES
            server and extra licenses for every agent, and say hello to a world
            of insightful analytics, cradle-to-grave reports, and automated
            agent and team reports by email.
          </Typography>
          <Box mt={2}>
            <Button
              variant="outlined"
              sx={{ bgcolor: "#4C3DFF", color: "white" }}
            >
              Request Demo
            </Button>
          </Box>
        </div>
      </Grid>
      <Grid item xs={12} lg={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // width: "100%",
            height: "auto",
            aspectRatio: 16 / 9,
            marginTop: "30px",
            marginLeft: "40px",
          }}
        >
          <img src="./images/hero.svg" />
        </div>
      </Grid>
    </Grid>
  );
};

export default MainContainer;
