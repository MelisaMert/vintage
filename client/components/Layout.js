import React from 'react';
import styles from '../public/styles/Layout.module.css'
import Nav from "./Nav";
import AdvancedNav from "./AdvancedNav";

const Layout = ({children}) => {
    return (<>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    </>)
}

export default Layout;