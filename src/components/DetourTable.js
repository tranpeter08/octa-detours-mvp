import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DataRow from './DataRow';
import styles from './DetourTable.module.css';

const labels = ['Route', 'From', 'Through', 'Other Routes', 'Location'];

function createRow(route, from, through, otherRoutes, location, fileName) {
  return {route, from, through, otherRoutes, location, fileName};
}

const data = [
  createRow(
    37,
    '04-19-21',
    'UFN',
    '',
    'Euclid, between Talbert & 405 Fwy',
    '37detour'
  ),
  createRow(66, '04-04-20', 'UFN', '90, 167', 'IVC', '66detour'),
];

export default function BasicTable() {
  return (
    <TableContainer className={styles.tableContainer} component={Paper}>
      <Table className={styles.table} aria-label="detour table">
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
