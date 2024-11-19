import { AppBar, Toolbar, Typography, Container, CssBaseline, Button } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import UserList from './UserList';
import UserForm from './UserForm';
import { useState } from 'react';
import { faker } from '@faker-js/faker';


function App() {

  const [usersArray, setusersArray] = useState([]); 
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickGenerate = () =>{
    console.log(faker.person.fullName());
    
  }

  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <ContactsIcon sx={{ mr: 2 }} />
          <Typography sx={{ flexGrow: 1 }}>Home work #15</Typography>
          <Button color="inherit" onClick={handleClickGenerate}>Generate 1000 Users</Button>
          <Button color="inherit" onClick={handleClickOpen}>Add user</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: { xs: 9, sm: 11 } }}>
        <UserList />
        <UserForm open={open} handleClose={handleClose} />
      </Container>
    </>
  )
}

export default App
