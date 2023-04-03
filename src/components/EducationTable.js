import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { educationTableData, educationTableHeadings } from "../constants/data";

const EducationTable = () => {
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {educationTableHeadings.map((heading) => {
                return (
                  <TableCell
                    sx={{
                      color: "rgb(210,210,210)",
                      fontSize: "large",
                      fontWeight: "600",
                    }}
                  >
                    {heading}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {educationTableData.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {row.map((item) => {
                  return (
                    <TableCell
                      align="left"
                      sx={{
                        color: "rgb(210,210,210)",
                      }}
                    >
                      {item}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EducationTable;
