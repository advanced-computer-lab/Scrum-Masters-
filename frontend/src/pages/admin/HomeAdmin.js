import { React, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import background from "../../images/background.jpg";

const HomeAdmin = () => {
  // useEffect(() => {
  //   window.sessionStorage.setItem("hideTopbar", true);
  //   var e = new Event("storage");
  //   e.originalEvent = {
  //     key: "hideTopbar",
  //     oldValue: false,
  //     newValue: true,
  //   };
  //   console.log(e);
  //   window.dispatchEvent(e);
  // }, []);

  return (
    <div style={{ backgroundImage: `url(${background})`, height: "100vh" }}>
      <Stack direction="column" spacing={5} sx={{ alignItems: "center" }}>
        <Avatar
          src="/broken-image.jpg"
          sx={{ width: 250, height: 250, marginTop: "3%" }}
        />
        <Typography sx={{ fontSize: 30, color: "white" }}>
          Adminstrator
        </Typography>
        <Button
          variant="contained"
          sx={{ width: 250, backgroundColor: "#5390d9" }}
        >
          <Link
            to="/schedule"
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            Sign In{" "}
          </Link>
        </Button>
      </Stack>
    </div>
  );
};

export default HomeAdmin;
