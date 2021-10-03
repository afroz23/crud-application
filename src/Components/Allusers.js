import React from 'react';
import {getUsers} from '../Service/api.js';
import {Table,TableBody,TableCell,TableHead,TableRow,makeStyles} from '@material-ui/core';
const useStyles=makeStyles({
    table:{
        width:'90%',
        margin:'50px 0 0 50px'
    },
    tableCell:{
        background: '#000000',
        color:'#ffffff',
        fontSize:18
    }
})
const Allusers=()=> {
    const [user,setUsers]=React.useState([]);
    const classes=useStyles();
    React.useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell className={classes.tableCell}>Id</TableCell>
                    <TableCell className={classes.tableCell}>Name</TableCell>
                    <TableCell className={classes.tableCell}>Username</TableCell>
                    <TableCell className={classes.tableCell}>Email</TableCell>
                    <TableCell className={classes.tableCell}>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    user.map(user=> (
                        <TableRow>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
}
export default Allusers
