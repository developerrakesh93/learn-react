import React from "react";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ListIcon from "@material-ui/icons/List";
// const styles = (theme) => ({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: "auto",
//   },
// });
const sideList = (props) => {
  console.log("props-------- in side List", props);
  return (
    <div
      // className={classes.list}
      role="presentation"
      onClick={props.toggleDrawerHandler}
      onKeyDown={props.toggleDrawerHandler}
    >
      <List>
        {["Dashboard", "List of Mutual funds", "Report"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? <DashboardIcon /> : ""}
              {index === 1 ? <ListIcon /> : ""}
              {index === 2 ? <AssessmentIcon /> : ""}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};

const SideNavigationBar = (props) => {
  console.log("props in side Navigation Bar", props);
  return (
    <>
      {" "}
      <Drawer open={props.left} onClose={props.toggleDrawerHandler}>
        {" "}
        {sideList(props)}
      </Drawer>
      {/* <Drawer open={props.left} onClose={props.toggleDrawerHandler}>
        {sideList("left")}
      </Drawer> */}
      {/* <Drawer>{sideList("left")}</Drawer> */}
    </>
  );
};

export default SideNavigationBar;
