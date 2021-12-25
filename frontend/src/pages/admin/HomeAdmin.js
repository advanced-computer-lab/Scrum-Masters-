import React from "react";
import Avatar from "@mui/material/Avatar";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const HomeAdmin = () => {
  return (
    <Container>
      <Stack direction="column" spacing={5} sx={{alignItems:"center"}} >
        <Avatar src="/broken-image.jpg" sx={{ width: 250, height: 250 }} />
        <Typography sx={{ fontSize:30}}>Adminstrator</Typography>
        <Button variant="contained" sx={{ width: 250 }}>Sign In</Button>
      </Stack>
    </Container>
  );
};

export default HomeAdmin;
