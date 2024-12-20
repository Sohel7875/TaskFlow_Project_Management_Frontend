import React from 'react';
import styles from './AuthLayout.module.css';

const AuthLayout = ({ children }) => {
  return (
    <main className={styles.AuthLayout}>
      <aside className={styles.leftSideMenu}>
        <nav>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </nav>
      </aside>
      <section className={styles.content}>{children}</section>
      <aside className={styles.RightSideMenu}>
        <div>
          <p>Additional Information</p>
        </div>
      </aside>
    </main>
  );
};

export default AuthLayout;
