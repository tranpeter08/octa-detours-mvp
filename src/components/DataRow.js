import {useContext} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styles from './DataRow.module.css';
import MainContext from '../context/MainContext';

export default function DataRow({data}) {
  const d = data;
  const ctx = useContext(MainContext.Ctx);

  function handleClick() {
    ctx.actions.openModal(data.fileName);
  }

  return (
    <TableRow onClick={handleClick} className={styles.dataRow}>
      <TableCell align="center">{d.route}</TableCell>
      <TableCell align="center">{d.from}</TableCell>
      <TableCell align="center">{d.through}</TableCell>
      <TableCell align="center">{d.otherRoutes}</TableCell>
      <TableCell align="center">{d.location}</TableCell>
    </TableRow>
  );
}
