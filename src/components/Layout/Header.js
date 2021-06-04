import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  // Button,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import classes from "./Header.module.css";
import { red } from "@material-ui/core/colors";
// import SideNavigationBar from "./SideNavigationBar";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#400CCC",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "right",
  },
  menuButton: {
    color: red,
    marginRight: theme.spacing(2),
  },
}));

const Header = (props) => {
  console.log("props in header ", props);
  const { header, logo } = useStyles();
  const femmecubatorLogo = (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={props.showDrawer}
        // onClick={this.props.openDrawerHandler}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="h1" className={logo}>
        Mutual Funds
      </Typography>
    </>
  );

  // const getMenuButtons = () => {
  //   return headersData.map(({ label, href }) => {
  //     return (
  //       <Button
  //         {...{
  //           key: label,
  //           color: "inherit",
  //           to: href,
  //         }}
  //       >
  //         {label}
  //       </Button>
  //     );
  //   });
  // };

  return (
    <header>
      <AppBar>
        <Toolbar>
          {femmecubatorLogo}
          {/* {getMenuButtons()} */}
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default Header;
