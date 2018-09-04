import React from 'react';

// Translate import
// import i18n from '../i18n';

// Styles import
import styles from '../assets/styles/css/NavBarTop.css';

function NavBar() {
  return (
    <nav className={styles.navBarTop}>
      <div className={styles.upperNav}>
        <div>back</div>
        <div>title</div>
        <div>
          <button>action</button>
          <span>m</span>
        </div>
      </div>
      <div className={styles.lowerNav} />
    </nav>
  );
}
export default NavBar;
