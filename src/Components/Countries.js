import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 auto",
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 10,
    width: 200,
  },

  title: {
    color: "#3f51b5",
    textTransform: "capitalize",
  },

  data: {
    color: "#429DCE",
    margin: 10,
  },

  subHead: {
    color: "lightblue",
  },
}));

export default function StatsView() {
  const [countData, setCountData] = useState([{}]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.thevirustracker.com/free-api?countryTotals=ALL"
      );
      let data = await response.json();

      setCountData(Object.values(Object.values(data.countryitems)[0]));
      console.log(Object.values(Object.values(data.countryitems)[0]));
    }
    getData();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Corona Countries Stats</h1>
      <Grid container spacing={3}>
        {countData.map((key, ind) => {
          return (
            <Paper className={classes.paper} elevation={3}>
              <h2 className={classes.title}>{countData[ind].title}</h2>

              <h4 className={classes.data}>
                Total Cases = {countData[ind].total_cases}
              </h4>

              <h4 className={classes.data}>
                Total Active Cases ={countData[ind].total_active_cases}
              </h4>

              <h4 className={classes.data}>
                Total Deaths ={countData[ind].total_deaths}
              </h4>
            </Paper>
          );
        })}
      </Grid>
    </div>
  );
}
