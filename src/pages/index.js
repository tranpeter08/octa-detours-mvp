import Head from 'next/head';
import styles from '../styles/Home.module.css';
import DetourTable from '../components/DetourTable';
import TrafficAdvisoryTable from '../components/TrafficAdvisoryTable';
import commonStyles from '../styles/Common.module.css';
import MainContext from '../context/MainContext';
import DetourModal from '../components/DetourModal';

export default function Detours() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OCTA Detour for Operators MVP</title>
        <meta name="description" content="MVP for OCTA Detours" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContext.Provider>
        <DetourModal />
        <h1 className={commonStyles.centerText}>Detour Summary</h1>
        <div className={commonStyles.centerChildren}>
          <DetourTable />
          <TrafficAdvisoryTable />
        </div>

        <footer className={styles.footer}></footer>
      </MainContext.Provider>
    </div>
  );
}
