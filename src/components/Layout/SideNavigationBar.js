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
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
