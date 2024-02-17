import React from 'react';
import styles from './style.module.scss'
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <span className={styles.logo}>createe.</span>
            <div className={styles.sidebarContent}>
                <div className={styles.menu}>
                    <p className={`${styles.menuItem} ${styles.active}`}>Calendar</p>
                    <p className={styles.menuItem}>Planned</p>
                </div>
                <span className={styles.version}>Version 1.0</span>
            </div>

        </div>
    );
};

export default Sidebar;
