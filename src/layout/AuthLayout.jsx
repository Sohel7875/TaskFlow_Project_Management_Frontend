import React from 'react';
import styles from './AuthLayout.module.css';
import Sidebar from '../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Sidemenu from '../components/sidemenu/Sidemenu';

const AuthLayout = () => {
  return (
    <main className={styles.AuthLayout}>
      <aside className={styles.leftSideMenu}>
        <nav>
         <Sidebar />
        </nav>
      </aside>
      <section className={styles.content}>  <Outlet /></section>
      <aside className={styles.RightSideMenu}>
        <Sidemenu />
      </aside>
    </main>
  );
};

export default AuthLayout;
