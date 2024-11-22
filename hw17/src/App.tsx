import { useState } from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import CustomizedSwitches from "./CustomizedSwitches";

function App() {
  const [curThema, setCurThema] = useState("light");

  function changeThema() {
    if (curThema == "light") setCurThema("dark");
    else setCurThema("light");
  }

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#1976d2" },
    },

  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#90caf9" },
    },

  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={curThema == "light" ? lightTheme : darkTheme}>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home work #17
          </Typography>
          <CustomizedSwitches changeThema={changeThema} curThema={curThema} />
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h1">Welcome</Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<OpenInBrowserIcon />}
          onClick={handleClickOpen}
        >
          Open Dialog
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Диалоговое окно с текстом и кнопками для закрытия."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Диалоговое окно с текстом и кнопками для закрытия.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Закрыть</Button>
            <Button onClick={handleClose} autoFocus>
              Тоже Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
}

export default App;
