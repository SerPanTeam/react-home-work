# Структура проекта

```plaintext
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── App.tsx
│   ├── interfaces.ts
│   ├── main.tsx
│   ├── UserForm.tsx
│   ├── UserList.tsx
│   └── vite-env.d.ts
├── .gitignore
├── codewr.js
├── combined-files.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

# Файлы .ts, .tsx, .css

## src\App.tsx

```typescript
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
import { useCallback, useState } from "react";
import { faker } from "@faker-js/faker";
import { User } from "./interfaces";
const fullUserArray: User[] = [];

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

  const handleOnChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    setUsersArray(filterUsersMemo(event.target.value));
  };

  function filterUsers(filter: string) {
    //const newUserArray: User[] = [];

    return fullUserArray.filter((val) =>
      val.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const filterUsersMemo = useCallback(
    (filter: string) => filterUsers(filter),
    []
  );

  const handleClickGenerate = () => {
    //const newArr = [];
    for (let i = 0; i < 1000; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      fullUserArray.push({
        id: i,
        name: firstName + " " + lastName,
        email: faker.internet.email({
          firstName: firstName,
          lastName: lastName,
        }),
      });
    }
    // console.log(newArr);
    setUsersArray(fullUserArray);
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
          {/* <Button color="inherit" onClick={handleClickOpen}>
            Add user
          </Button> */}
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: { xs: 9, sm: 11 } }}>
        <TextField
          label="Filter by Name"
          variant="outlined"
          value={filter}
          onChange={(e) => handleOnChangeFilter(e)}
        />
        <UserList usersArray={usersArray} />
        <UserForm open={open} handleClose={handleClose} />
      </Container>
    </>
  );
}

export default App;

```

## src\interfaces.ts

```typescript
export interface User {
  id: number;
  name: string;
  email: string;
}

```

## src\main.tsx

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## src\UserForm.tsx

```typescript
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
// import { useState } from 'react';
function UserForm({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserForm;

```

## src\UserList.tsx

```typescript
import {
//   IconButton,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import EditIcon from "@mui/icons-material/Edit";
import { User } from "./interfaces";

function UserList({ usersArray }: { usersArray: User[] }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersArray.map((val) => {
            return (
              <TableRow key={val.id}>
                <TableCell align="right">{val.id}</TableCell>
                <TableCell align="right">{val.name}</TableCell>
                <TableCell align="right">{val.email}</TableCell>
                {/* <TableCell align="right">
                  <IconButton color="secondary">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary">
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserList;

```

## src\vite-env.d.ts

```typescript
/// <reference types="vite/client" />

```

## vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

# Дополнительные файлы

## index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

