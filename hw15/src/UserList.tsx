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