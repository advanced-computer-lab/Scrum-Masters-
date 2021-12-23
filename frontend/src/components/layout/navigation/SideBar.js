import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PasswordIcon from "@mui/icons-material/Password";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Profile from "../../user/forms/Profile";
import Password from "../../user/forms/Password";
import { Container } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import axios from "axios";
const drawerWidth = 240;

const SideBar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(1);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const onClick = (e) => {
    console.log(e.currentTarget.id, "ploop");
    switch (e.currentTarget.id) {
      case "btn-info" && active !== 0:
        setActive(0);
        break;
      case "btn-password" && active !== 1:
        setActive(1);
        break;
      case "btn-billing" && active !== 2:
        setActive(2);
        break;

      default:
    }
  };
  const drawer = (
    <div>
      {/* <Divider /> */}
      <List>
        <ListItem button id="btn-info" onClick={onClick}>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Account Information" />
        </ListItem>
        <ListItem button id="btn-password" onClick={onClick}>
          <ListItemIcon>
            <PasswordIcon />
          </ListItemIcon>
          <ListItemText primary="Change Password" />
        </ListItem>
        <ListItem button id="btn-billing">
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary="Billing Information" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          top: "inherit",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              top: "inherit",
              left: "inherit",
              borderLeft: "1px solid rgba(0,0,0,0.12)",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              top: "inherit",
              left: "inherit",
              paddingTop: "24px",
              borderLeft: "1px solid rgba(0,0,0,0.12)",
              borderTop: "0px",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        <Container>
          {active === 0 && <Profile />}
          {active === 1 && <Password />}
        </Container>
      </Box>
    </Box>
  );
};

export default SideBar;
