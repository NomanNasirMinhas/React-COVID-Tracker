import React, {useState, useEffect} from 'react';
import {Radar, Pie} from 'react-chartjs-2';
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
    margin: "10",

  },

  indicator1:{
    height: 15,
    width: 100,
    backgroundColor: "rgba(6, 115, 62,1)",
    display: "flex",
  },
  indicator2:{
    height: 15,
    width: 100,
    backgroundColor: "rgba(21, 120, 232)",
    display: "flex",
  },
  indicator3:{
    height: 15,
    width: 100,
    backgroundColor: "rgba(187, 0, 0)",
    display: "flex",
  }
}));

export default function RadarData(){
//   displayName: 'RadarExample',

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

  const countName = [];
  const countCases = [];
  const countActive = [];
  const countDeaths = [];

  countData.forEach((item, index)=>{
    //console.log(countData[index].title);
    if(countData[index].title != null)
    {
      countName.push(countData[index].title);
      countCases.push(countData[index].total_cases);
      countActive.push(countData[index].total_active_cases);
      countDeaths.push(countData[index].total_deaths);
    }

  });

const data = {
  labels: countName,
  datasets: [
    {
      label: 'Total Cases',
      backgroundColor: 'rgba(6, 115, 62)',
      borderColor: 'rgba(6, 115, 62,1)',
      pointBackgroundColor: 'rgba(6, 115, 62,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(6, 115, 62,1)',
      data: countCases
    },
    {
      label: 'Active Cases',
      backgroundColor: 'rgba(21, 120, 232)',
      borderColor: 'rgba(21, 120, 232,1)',
      pointBackgroundColor: 'rgba(21, 120, 232,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(21, 120, 232,1)',
      data: countActive
    },
    {
      label: 'Total Deaths',
      backgroundColor: 'rgba(187, 0, 0)',
      borderColor: 'rgba(187, 0, 0,1)',
      pointBackgroundColor: 'rgba(187, 0, 0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(187, 0, 0,1)',
      data: countDeaths
    }
  ]
};

const data1 = {
  labels: countName.slice(0, 21),
  datasets: [
    {
      label: 'Total Cases',
      backgroundColor: 'rgba(6, 115, 62)',
      data: countCases.slice(0, 21)
    },
    {
      label: 'Active Cases',
      backgroundColor: 'rgba(21, 120, 232)',
      data: countActive.slice(0, 21)
    },
    {
      label: 'Total Deaths',
      backgroundColor: 'rgba(187, 0, 0)',
      data: countDeaths.slice(0, 21)
    }
  ]
};

const data2 = {
  labels: countName.slice(21, 41),
  datasets: [
    {
      label: 'Total Cases',
      backgroundColor: 'rgba(6, 115, 62)',
      data: countCases.slice(21, 41)
    },
    {
      label: 'Active Cases',
      backgroundColor: 'rgba(21, 120, 232)',
      data: countActive.slice(21, 41)
    },
    {
      label: 'Total Deaths',
      backgroundColor: 'rgba(187, 0, 0)',
      data: countDeaths.slice(21, 41)
    }
  ]
};

const data3 = {
  labels: countName.slice(41, 61),
  datasets: [
    {
      label: 'Total Cases',
      backgroundColor: 'rgba(6, 115, 62)',
      data: countCases.slice(41, 61)
    },
    {
      label: 'Active Cases',
      backgroundColor: 'rgba(21, 120, 232)',
      data: countActive.slice(41, 61)
    },
    {
      label: 'Total Deaths',
      backgroundColor: 'rgba(187, 0, 0)',
      data: countDeaths.slice(41, 61)
    }
  ]
};

const data4 = {
  labels: countName.slice(61, 81),
  datasets: [
    {
      label: 'Total Cases',
      backgroundColor: 'rgba(6, 115, 62)',
      data: countCases.slice(61, 81)
    },
    {
      label: 'Active Cases',
      backgroundColor: 'rgba(21, 120, 232)',
      data: countActive.slice(61, 81)
    },
    {
      label: 'Total Deaths',
      backgroundColor: 'rgba(187, 0, 0)',
      data: countDeaths.slice(61, 81)
    }
  ]
};

const data5 = {
  labels: countName.slice(81, 101),
  datasets: [
    {
      label: 'Total Cases',
      backgroundColor: 'rgba(6, 115, 62)',
      data: countCases.slice(81, 101)
    },
    {
      label: 'Active Cases',
      backgroundColor: 'rgba(21, 120, 232)',
      data: countActive.slice(81, 101)
    },
    {
      label: 'Total Deaths',
      backgroundColor: 'rgba(187, 0, 0)',
      data: countDeaths.slice(81, 101)
    }
  ]
};

const data6 = {
  labels: countName.slice(101, 121),
  datasets: [
    {
      label: 'Total Cases',
      backgroundColor: 'rgba(6, 115, 62)',
      data: countCases.slice(101, 121)
    },
    {
      label: 'Active Cases',
      backgroundColor: 'rgba(21, 120, 232)',
      data: countActive.slice(101, 121)
    },
    {
      label: 'Total Deaths',
      backgroundColor: 'rgba(187, 0, 0)',
      data: countDeaths.slice(101, 121)
    }
  ]
};

const data7 = {
  labels: countName.slice(121, 141),
  datasets: [
    {
      label: 'Total Cases',
      backgroundColor: 'rgba(6, 115, 62)',
      data: countCases.slice(121, 141)
    },
    {
      label: 'Active Cases',
      backgroundColor: 'rgba(21, 120, 232)',
      data: countActive.slice(121, 141)
    },
    {
      label: 'Total Deaths',
      backgroundColor: 'rgba(187, 0, 0)',
      data: countDeaths.slice(121, 141)
    }
  ]
};

const data8 = {
  labels: countName.slice(141, 161),
  datasets: [
    {
      label: 'Total Cases',
      backgroundColor: 'rgba(6, 115, 62)',
      data: countCases.slice(141, 161)
    },
    {
      label: 'Active Cases',
      backgroundColor: 'rgba(21, 120, 232)',
      data: countActive.slice(141, 161)
    },
    {
      label: 'Total Deaths',
      backgroundColor: 'rgba(187, 0, 0)',
      data: countDeaths.slice(141, 161)
    }
  ]
};

const data9 = {
  labels: countName.slice(161, 184),
  datasets: [
    {
      label: 'Total Cases',
      backgroundColor: 'rgba(6, 115, 62)',
      data: countCases.slice(161, 184)
    },
    {
      label: 'Active Cases',
      backgroundColor: 'rgba(21, 120, 232)',
      data: countActive.slice(161, 184)
    },
    {
      label: 'Total Deaths',
      backgroundColor: 'rgba(187, 0, 0)',
      data: countDeaths.slice(161, 184)
    }
  ]
};

const classes = useStyles();

    return (
      <div className={classes.root}>
        <h2>Corona Cases Country-viz</h2>
        <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className={classes.indicator1}></div>
          <h6>Total Cases</h6>
        </Grid>

        <Grid item xs={4}>
          <div className={classes.indicator2}></div>
          <h6>Total Active Cases</h6>
        </Grid>

        <Grid item xs={4}>
          <div className={classes.indicator3}></div>
          <h6>Total Deaths</h6>
        </Grid>

        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Pie data={data1} /></Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}><Pie data={data2}/></Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}><Pie data={data3}/></Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}><Pie data={data4}/></Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}><Pie data={data5}/></Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}><Pie data={data6}/></Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}><Pie data={data7}/></Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}><Pie data={data8}/></Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}><Pie data={data9}/></Paper>
        </Grid>

        </Grid>

      </div>
    );
}