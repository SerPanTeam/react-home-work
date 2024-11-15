# Структура проекта

```plaintext
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── App.tsx
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
import { AppBar, Toolbar, Typography, Container, CssBaseline, Button } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import UserList from './UserList';
import UserForm from './UserForm';

function App() {

  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <ContactsIcon sx={{ mr: 2 }} />
          <Typography sx={{ flexGrow: 1 }}>Home work #15</Typography>
          <Button color="inherit">Add user</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: { xs: 9, sm: 11 } }}>
        <UserList />
        <UserForm />
      </Container>
    </>
  )
}

export default App

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
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material';
import { useState } from 'react';
function UserForm() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
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
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
            </DialogActions>
        </Dialog>)
}

export default UserForm;
```

## src\UserList.tsx

```typescript
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

function UserList() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">UserName</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow>
                        <TableCell component="th" scope="row"> 0 </TableCell>
                        <TableCell align="right">1</TableCell>
                        <TableCell align="right">2</TableCell>
                        <TableCell align="right">3</TableCell>
                        <TableCell align="right">4</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell component="th" scope="row"> 0 </TableCell>
                        <TableCell align="right">1</TableCell>
                        <TableCell align="right">2</TableCell>
                        <TableCell align="right">3</TableCell>
                        <TableCell align="right">4</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>)
}

export default UserList
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

