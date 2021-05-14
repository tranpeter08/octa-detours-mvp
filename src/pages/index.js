import Head from 'next/head';
import styles from '../styles/Home.module.css';
import DetourTable from '../components/DetourTable';
import commonStyles from '../styles/Common.module.css';
import {format} from 'date-fns';

export default function Detours() {
  const date = format(new Date(), 'MMMM do, uuuu');

  return (
    <>
      <Head>
        <title>OCTA Detour for Operators MVP</title>
        <meta name="description" content="MVP for OCTA Detours" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={commonStyles.centerText}>Detour Summary</h1>
      <h2 className={commonStyles.centerText}>{date}</h2>
      <div className={commonStyles.centerChildren}>
        <DetourTable />
      </div>

      <footer className={styles.footer}></footer>
    </>
  );
}
