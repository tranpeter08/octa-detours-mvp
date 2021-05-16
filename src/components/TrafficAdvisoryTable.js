import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DataRow from './TrafficRow';
import styles from './DetourTable.module.css';
import commonStyles from '../styles/Common.module.css';
import Divider from '@material-ui/core/Divider';

const labels = ['Location', 'Closure', 'Delay', 'From', 'Through'];

function createRow(location, closure, delay, from, through) {
  return {location, closure, delay, from, through};
}

const data = [
  createRow(
    'The 405 project will widen the freeway from Bristol St to Seal Beach Blvd. There will be 18 bridges either rebuilt or retrofitted affecting 17 OCTA routes.  Watch for workers and vehicles. Reduce speed, allow extra travel time & follow signs and detours',
    true,
    true,
    2018,
    2023
  ),
];

export default function TrafficAdvisoryTable() {
  return (
    <TableContainer
      className={styles.tableContainer}
      component={Paper}
      elevation={3}
    >
      <h2 className={commonStyles.centerText}>Traffic Advisory</h2>
      <Divider />
      <Table className={styles.table} aria-label="Traffic Advisory table">
        <TableHead>
          <TableRow>
            {labels.map((label) => (
              <TableCell key={label} align="center">
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d, i) => (
            <DataRow key={`${d.route}-${i}`} data={d} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
