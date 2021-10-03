import React from 'react';
import styles from '../public/styles/Layout.module.css'
import Nav from "./Nav";

const Layout = ({children}) => {
    return (<>
        <Nav />
        <div className={styles.container}>
            <div className={styles.main}>
              {children}
            </div>
        </div>
    </>)
}

export default Layout;