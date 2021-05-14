import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styles from './DataRow.module.css';
import Link from 'next/link';

export default function DataRow({data}) {
  const d = data;

  return (
    <Link href={`/${data.fileName}.pdf`}>
      <TableRow className={styles.dataRow}>
        <TableCell component="th" scrope="row" align="center">
          {d.route}
        </TableCell>
        <TableCell align="center">{d.from}</TableCell>
        <TableCell align="center">{d.through}</TableCell>
        <TableCell align="center">{d.otherRoutes}</TableCell>
        <TableCell align="center">{d.location}</TableCell>
      </TableRow>
    </Link>
  );
}
