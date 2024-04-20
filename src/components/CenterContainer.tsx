import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const CenterContainer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F3F7FA",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <Grid container spacing={3} justifyContent={"space-around"} mt={3}>
        <Grid item xs={12} lg={6}>
          <div>
            <img
              src="./images/measure.svg"
              style={{ width: "400px", height: "auto", marginLeft: 100 }}
            />
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div
            style={{
              display: "flex",
              //   justifyContent: "space-between",
              // width: "100%",
              fontFamily: "sans-serif",
              flexDirection: "column",
            }}
          >
            <h1 style={{ maxWidth: "600px", fontSize: "50px" }}>
              Measure, Analyze improve{" "}
            </h1>
            <p>
              Visualise your historical performance to understand customer
              behavior, customer patience and the demand for customer service
              using out of the box analvtics features and performance
              indicators.
            </p>
          </div>
          <Box
            sx={{
              display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",

              flexDirection: "column",
            }}
          >
            <Box maxWidth={300} mt={2}>
              <Typography variant="h6" fontWeight={"bold"}>
                No Avava AES Server Needed
              </Typography>
              <Typography mt={2} fontSize={13}>
                Avava CMS data is used for all the reports and charts. No TSAPI
                licenses or AES Server needed.
              </Typography>
            </Box>
            <Box maxWidth={300} mt={2}>
              <Typography variant="h6" fontWeight={"bold"}>
                Lower Cost of Ownership
              </Typography>
              <Typography mt={2} fontSize={13}>
                Real-time and historical agent scorecards to improve agent
                occupancy.
              </Typography>
            </Box>
            <Box maxWidth={300} mt={2}>
              <Typography variant="h6" fontWeight={"bold"}>
                Lower Cost of Ownership
              </Typography>
              <Typography mt={2} fontSize={13}>
                Minimize rebeat callers. handle more customers, convert more
                business.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CenterContainer;
