import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";
import { Breed } from "../type/breeds";
import { Link } from "react-router-dom";

interface BreedTableProps {
    breeds: Breed[];
}

const BreedTable: React.FC<BreedTableProps> = ({ breeds }) => {
    return (
        <TableContainer component={Paper} sx={{ marginTop: 3 }}>
            <Table>
                <TableHead>
                    <TableRow sx={{
                        backgroundColor: (theme) =>
                            "green",
                        "&:hover": {
                            backgroundColor: (theme) => theme.palette.action.selected,
                        }
                    }}>
                        <TableCell>Breed Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hypoallergenic</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {breeds.map((breed) => (
                        <TableRow key={breed.id}>
                            <Link to={`/breed/${breed.id}`} style={{ textDecoration: "none", color: "blue" }}>
                                {breed.attributes.name}
                            </Link>
                            <TableCell>{breed.attributes.description}</TableCell>
                            <TableCell>{breed.attributes.hypoallergenic ? "Yes" : "No"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
};

export default BreedTable;
