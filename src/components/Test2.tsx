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
import { RootState, AppDispatch } from "../redux/store";
import {
    AppBar,
    Box,
    CircularProgress,
    Container,
    Typography,
    Toolbar,
} from "@mui/material";
import { fetchBreeds } from "../redux/reducers/breedsSlice";


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
    const { loading, breeds, error } = useSelector((state: RootState) => state.breeds)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchBreeds());
        console.log('ooo', breeds)
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

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Breed name</StyledTableCell>
                                    <StyledTableCell align="right">Description</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {breeds.map((row) => (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell component="th" scope="row">{row.attributes.name}</StyledTableCell>
                                        <StyledTableCell component="th" scope="row">{row.attributes.description}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Container>
        </Box>
    );
};

export default App;
