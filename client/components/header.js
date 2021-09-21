import Link from 'next/link';
import classes from '../public/styles/header.module.scss';
// import Search from '../components/search'

export default function Header() {

    return <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>HOME</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>ABOUT</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>CONTACT</a>
                    </Link>
                </li>
                <li>
                    <Link href="/vintage">
                        <a>VINTAGE</a>
                    </Link>
                </li>
                <li>
                    <Link href="/chiefs">
                        <a>CHIEFS</a>
                    </Link>
                </li>
                <li>
                    {/* <a>{<Search/>}</a> */}
                </li>
            </ul>
        </nav>
    </header>
}