import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#44a6c6",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Subjects, NQF_Level, ID) {
  return { Subjects, NQF_Level, ID };
}

const rows = [
  createData(
    "National Certificate: N1: Engineering Studies",
    "NQF Level 01",
    67109
  ),
  createData(
    "National Certificate: N2: Engineering Studies",
    "NQF Level 02",
    67375
  ),
  createData(
    "National Certificate: N3: Engineering Studies",
    "NQF Level 03",
    67491
  ),
  createData(
    "National Certificate: N4 Engineering Studies (Electrical Engineering)",
    "NQF Level 05",
    "66881(Electrical)"
  ),
  createData(
    "National Certificate: N5: Engineering Studies (Electrical Engineering)",
    "NQF Level 05",
    "66960(Electrical)"
  ),
  createData(
    "National Certificate: N6: Engineering Studies (Electrical Engineering)",
    "NQF Level 05",
    "67005(Electrical)"
  ),

  createData(
    "National Certificate: N4 Engineering Studies (Mechanical Engineering)",
    "NQF Level 05",
    "66881(Mechanical)"
  ),

  createData(
    "National Certificate: N5: Engineering Studies (Mechanical Engineering)",
    "NQF Level 05",
    "66960(Mechanical)"
  ),
  createData(
    "National Certificate: N6: Engineering Studies (Mechanical Engineering)",
    "NQF Level 05",
    "67005(Mechanical)"
  ),
];

const rows2 = [
  createData("National Certificate: N4 Educare", "NQF Level 05", 66883),
  createData("National Certificate: N5: Educare", "NQF Level 05", 66971),
  createData("National Certificate: N6 Educare", "NQF Level 05", 67007),
  createData(
    "National Certificate: N4 Management Assistant",
    "NQF Level 05",
    66876
  ),
  createData(
    "National Certificate: N5 Management Assistant",
    "NQF Level 05",
    66956
  ),
  createData(
    "National Certificate: N6 Management Assistant",
    "NQF Level 05",
    67001
  ),
  createData(
    "National Certificate: N4 Financial Management",
    "NQF Level 05",
    66874
  ),
  createData(
    "National Certificate: N5 Financial Management",
    "NQF Level 05",
    66954
  ),
  createData(
    "National Certificate: N6 Financial Management",
    "NQF Level 05",
    66998
  ),

  createData(
    "National Certificate: N4 Human Resource Management",
    "NQF Level 05",
    66873
  ),
  createData(
    "National Certificate: N5 Human Resource Management",
    "NQF Level 05",
    66953
  ),
  createData(
    "National Certificate: N6 Human Resource Management",
    "NQF Level 05",
    66997
  ),
];

const rows3 = [
  createData("ARTICULATED DUMP TRUCK", "R 3,800", "1 WEEK"),
  createData("TRACTOR LOADER BACKHOE (TLB)", "R 3,500", "1 WEEK"),
  createData("FRONT END LOADER", "R 3,800", "1 WEEK"),
  createData("GRADER", "R 4,300", "1 WEEK"),
  createData("EXCAVATOR", "R 4,300", "1 WEEK"),
  createData("BULLDOZER", "R 3,800", "1 WEEK"),
  createData("LHD SCOOP", "R 5,500", "1 WEEK"),
  createData("DRILL RIG", "R 6,000", "1 WEEK"),
  createData("MOBILE CRANE (45 TONNES)", "R 5,000", "1 WEEK"),
  createData("MOBILE CRANE (100 TONNES)", "R 8,500", "1 WEEK"),
  createData("TOWER CRANE ", "R 4,500", "1 WEEK"),
  createData("OVERHEAD CRANE", "R 5,000", "1 WEEK"),
  createData("COUNTERBALANCE", "R 2,500", "1 WEEK"),
];

const rows4 = [
  createData("WORKING AT HEIGHTS", "R 9,000", "3 MONTHS"),
  createData("BOILER MAKER", "R 9,000", "3 MONTHS"),
  createData("FITTING TURNING", "R 9,000", "3 MONTHS"),
  createData("PIPE FITTING", "R 8,000", "3 MONTHS"),
  createData("DIESEL MECHANIC", "R 10,000", "3 MONTHS"),
  createData("BRICKLAYING", "R 9,000", "3 MONTHS"),
  createData("WELDING", "R 8,000", "3 MONTHS"),
  createData("SHEREP", "R 6,000", "1 WEEK"),
  createData("FIREFIGHTER", "R 7,500", "1 WEEK"),
];

const rows5 = [
  createData("COMPUTER LITERACY", "R 2,500", "1 MONTH"),
  createData("MICROSOFT OFFICE (PACKAGE)", "R 6,000", "3 MONTH"),
  createData("WORD", "R 2,000", "1 MONTH"),
  createData("POWERPOINT", "R 2,000", "1 MONTH"),
  createData("EXCEL", "R 2,000", "1 MONTH"),
  createData("OUTLOOK", "R 2,000", "1 MONTH"),
  createData(
    "COMPUTER FAULT DIAGNOSTICS, MAINTENANCE, SERVICING & REPAIR",
    "R 9,000",
    "3 MONTH"
  ),
];

const rows6 = [
  createData(
    "1 SUBJECT",
    "R450 + REGISTRAION FEE (First month)",
    "R450 PER MONTH"
  ),
  createData(
    "2 SUBJECTS",
    `R750 + REGISTRAION FEE (First month)`,
    "R750 PER MONTH"
  ),
  createData(
    "3 SUBJECTS",
    "R900 + REGISTRAION FEE (First month)",
    "R900 PER MONTH"
  ),
  createData(
    "4 SUBJECTS",
    "R1000 + REGISTRAION FEE (First month)",
    "R1000 PER MONTH"
  ),
  createData(
    "5 SUBJECTS",
    "R1200 + REGISTRAION FEE (First month)",
    "R1200 PER MONTH"
  ),
  createData(
    "6 SUBJECTS",
    "R1500 + REGISTRAION FEE (First month)",
    "R1500 PER MONTH"
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{ padding: "15px" }}>
      <h3>
        <small>ENGINEERING STUDIES N1-N6 </small>
      </h3>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>PROGRAMME</StyledTableCell>
            <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
              NQF Level
            </StyledTableCell>
            <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
              ID
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.Subjects}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{ padding: "15px 5px" }}
              >
                {row.Subjects}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
                {row.NQF_Level}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
                {row.ID}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <h3>
        <small>BUSINESS STUDIES N4-N6 </small>
      </h3>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>PROGRAMME</StyledTableCell>
            <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
              NQF Level
            </StyledTableCell>
            <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
              ID
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map(row => (
            <StyledTableRow key={row.Subjects}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{ padding: "15px 5px" }}
              >
                {row.Subjects}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
                {row.NQF_Level}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
                {row.ID}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <h3>
        <small>EARTH MOVING MACHINES (THEORY & PRACTICAL)</small>
      </h3>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SUBJECT NAME</StyledTableCell>
            <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
              TUITION FEE
            </StyledTableCell>
            <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
              DURATION
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows3.map(row => (
            <StyledTableRow key={row.Subjects}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{ padding: "15px 5px" }}
              >
                {row.Subjects}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
                {row.NQF_Level}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
                {row.ID}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <h3>
        <small>SEMI-SKILLED (THEORY & PRACTICAL)</small>
      </h3>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SUBJECT NAME</StyledTableCell>
            <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
              TUITION FEE
            </StyledTableCell>
            <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
              DURATION
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows4.map(row => (
            <StyledTableRow key={row.Subjects}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{ padding: "15px 5px" }}
              >
                {row.Subjects}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
                {row.NQF_Level}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
                {row.ID}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <h3>
        <small>COMPUTER STUDIES (THEORY & PRACTICAL)</small>
      </h3>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SUBJECT NAME</StyledTableCell>
            <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
              TUITION FEE
            </StyledTableCell>
            <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
              DURATION
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows5.map(row => (
            <StyledTableRow key={row.Subjects}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{ padding: "15px 5px" }}
              >
                {row.Subjects}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
                {row.NQF_Level}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
                {row.ID}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <h3>
        <small>MATRIC RE-WRITE</small>
      </h3>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SUBJECT no.</StyledTableCell>
            <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
              REGISTRATION
            </StyledTableCell>
            <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
              FEES
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows6.map(row => (
            <StyledTableRow key={row.Subjects}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{ padding: "15px 5px" }}
              >
                {row.Subjects}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
                {row.NQF_Level}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ padding: "15px 5px" }}>
                {row.ID}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
