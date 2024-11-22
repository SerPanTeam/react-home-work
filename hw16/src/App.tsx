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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
            Home work #16
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>
            Login
          </Button>
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
    </>
  );
}

export default App;
