import React from "react";
import Link from "next/link";
import styles from "../public/styles/Nav.module.css";

const Nav = () => {
    return (<>
        <nav className={styles.nav}>
        <ul>
           <li>
              <Link href="/">
              <a><span>Vintage</span></a>
              </Link>
           </li>
           <li>
           <Link href="/vintage">
              <a>Home</a>
           </Link>
           </li>
           <li>
           <Link href="/about">
             <a>About</a>
           </Link>
           <Link href="/restaurants">
             <a>Restaurants</a>
           </Link>
           </li>
           <li>
           <Link href="/posts">
              <a>Posts</a>
           </Link>
           <Link href="/comments">
              <a>Comments</a>
           </Link>
           <Link href="/videos">
              <a>Videos</a>
           </Link>
           </li>
        </ul>
        </nav>
    </>)
}

export default Nav;


/*
 <nav className={styles.nav}>
        <ul>
           <li>
           <Link href="/">
              <a>Home</a>
           </Link>
           </li>
           <li>
           <Link href="/about">
              <a>About</a>
           </Link>
           </li>
           <li>
           <Link href="/videos">
              <a>Video</a>
           </Link>
           </li>
        </ul>
        </nav>
*/