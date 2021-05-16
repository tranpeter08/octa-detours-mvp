import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styles from './TrafficRow.module.css';

export default function DataRow({data}) {
  const d = data;

  return (
    <TableRow className={styles.trafficRow}>
      <TableCell className={styles.location} scrope="row" align="center">
        {d.location}
      </TableCell>
      <TableCell align="center">{d.closure && 'X'}</TableCell>
      <TableCell align="center">{d.delay && 'X'}</TableCell>
      <TableCell align="center">{d.from}</TableCell>
      <TableCell align="center">{d.through}</TableCell>
    </TableRow>
  );
}
