import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { IconButton } from "@mui/material";

export default function NavigationBar() {
  useEffect(() => {
    // TODO: Highlight appropriate tab based on page user visits
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Compass
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Resources</Button>
          <Button color="inherit">About</Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PermIdentityIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
