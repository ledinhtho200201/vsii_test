import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds } from "../redux/actions/breedsActions";
import { RootState, AppDispatch } from "../redux/store/store";
import {
    AppBar,
    Box,
    CircularProgress,
    Container,
    List,
    ListItem,
    ListItemText,
    Typography,
    Toolbar,
} from "@mui/material";
import { ThunkDispatch } from "@reduxjs/toolkit";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const App: React.FC = () => {
    const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch<AppDispatch>();
    const { loading, breeds, error } = useSelector((state: RootState) => state.breeds);

    useEffect(() => {
        dispatch(fetchBreeds());
    }, [dispatch]);

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Dog Breeds
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {loading ? (
                    <Box textAlign="center" mt={4}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Typography color="error" variant="h6" mt={4}>
                        {error}
                    </Typography>
                ) : (

                    //                 <TableContainer component={Paper}>
                    //   <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    //     <TableHead>
                    //       <TableRow>
                    //       {breeds.map((breed) => (
                    //                         <ListItem key={breed.id}>
                    //                             <ListItemText
                    //                                 primary={breed.attributes.name}
                    //                                 secondary={breed.attributes.temperament}
                    //                             />
                    //                         </ListItem>
                    //                     ))}
                    //         <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                    //         <StyledTableCell align="right">Calories</StyledTableCell>
                    //         <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                    //         <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                    //         <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                    //       </TableRow>
                    //     </TableHead>
                    //     <TableBody>
                    //       {rows.map((row) => (
                    //         <StyledTableRow key={row.name}>
                    //           <StyledTableCell component="th" scope="row">
                    //             {row.name}
                    //           </StyledTableCell>
                    //           <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    //           <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    //           <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    //           <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    //         </StyledTableRow>
                    //       ))}
                    //     </TableBody>
                    //   </Table>
                    // </TableContainer>
                    <List>
                        {breeds.map((breed) => (
                            <ListItem key={breed.id}>
                                <ListItemText
                                    primary={breed.attributes.name}
                                    secondary={breed.attributes.temperament}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Container>
        </Box>
    );
};

export default App;
