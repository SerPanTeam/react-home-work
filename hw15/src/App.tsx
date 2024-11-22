import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
  Button,
  TextField,
} from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import UserList from "./UserList";
import UserForm from "./UserForm";
import { useState, useMemo, useCallback } from "react";
import { faker } from "@faker-js/faker";
import { User } from "./interfaces";

function App() {
  const [usersArray, setUsersArray] = useState<User[]>([]);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChangeFilter = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFilter(event.target.value);
  };

  const filterUsers = useCallback(
    (filter: string) =>
      usersArray.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [usersArray]
  );

  const filteredUsers = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  );

  const handleClickGenerate = () => {
    const newUsersArray: User[] = [];
    for (let i = 0; i < 1000; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      newUsersArray.push({
        id: i,
        name: firstName + " " + lastName,
        email: faker.internet.email({
          firstName: firstName,
          lastName: lastName,
        }),
      });
    }
    setUsersArray(newUsersArray);
  };

  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <ContactsIcon sx={{ mr: 2 }} />
          <Typography sx={{ flexGrow: 1 }}>Home work #15</Typography>
          <Button color="inherit" onClick={handleClickGenerate}>
            Generate 1000 Users
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: { xs: 9, sm: 11 } }}>
        <TextField
          label="Filter by Name"
          variant="outlined"
          value={filter}
          onChange={handleOnChangeFilter}
        />
        <UserList usersArray={filteredUsers} />
        <UserForm open={open} handleClose={handleClose} />
      </Container>
    </>
  );
}

export default App;
