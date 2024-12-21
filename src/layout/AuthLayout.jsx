import React from 'react';
import styles from './AuthLayout.module.css';
import Sidebar from '../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

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
        <div>
          <p>Additional Information</p>
        </div>
      </aside>
    </main>
  );
};

export default AuthLayout;
