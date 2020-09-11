import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {},
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function ButtonAppBar({screenType}) {
  const classes = useStyles();

  //const [screenType, setScreenType] = useState(0);
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              screenType(0);
              console.log(screenType);
            }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            PIAIC Covid-19 Tracker
          </Typography>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => {
              screenType(1);
              console.log(screenType);
            }}
          >
            Countries List
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => {
              screenType(2);
              console.log(screenType);
            }}
          >
            Visualization
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
