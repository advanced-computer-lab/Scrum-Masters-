import { React, useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
const UserProfile = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const token = window.sessionStorage.getItem("token");
  var decodedToken;
  if (token) decodedToken = jwt_decode(token);
  const [userFirst, setUserFirst] = useState();
  const [load, setLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function checkUserData() {
    const flag = JSON.parse(window.sessionStorage.getItem("letter"));
    console.log("calleddd listener");
    console.log(JSON.parse(window.sessionStorage.getItem("letter")));
    // if (flag) 
    setRefresh(flag);
  }
  useEffect(() => {
    window.addEventListener("storage", checkUserData);
    axios
      .get(`http://localhost:8081/user/profile/${decodedToken.id}`)
      .then((result) => {
        setUserFirst(result.data.firstName);
        setLoad(true);
        setRefresh(false);
        window.sessionStorage.setItem("letter", false);
      });
    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, [refresh]);
  return (
    <>
      {load && (
        <>
          <Tooltip title="Account">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar sx={{ width: 32, height: 32 }}>
                {userFirst.charAt(0)}
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem style={{ opacity: "1" }} component={Link} to="/account">
              <Avatar sx={{ width: 32, height: 32 }} /> View Profile
            </MenuItem>
            <MenuItem onClick={props.logOutClick} component={Link} to="/">
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      )}
    </>
  );
};

export default UserProfile;
