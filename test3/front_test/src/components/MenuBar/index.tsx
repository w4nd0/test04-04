import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../logo.png";

const MenuBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ flexGrow: 1, background: "white" }}>
          <Toolbar>
            <img
              src={logo}
              alt="logo"
              style={{ maxHeight: "50px", marginRight: "15px" }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#000" }}
            >
              Lista de Tarefas
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default MenuBar;
