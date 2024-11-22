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
import React from 'react';


const UserList = React.memo(({ usersArray }: { usersArray: User[] }) => {
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
                <TableCell align="left">{val.id}</TableCell>
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
});

export default UserList;
