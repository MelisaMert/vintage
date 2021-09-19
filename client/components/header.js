import Link from 'next/link';
import Search from "@material-ui/icons/Search";
import TextField from '@mui/material/TextField';

export default function Header() {

    const searchBar = () => {
        return (<>
            <TextField 
               id="outlined-basic" 
               label={<Search/>} 
               variant="outlined" 
               size="small"
            />
        </>)
    }

    return <header className="header">
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
                    <a>{searchBar()}</a>
                </li>
            </ul>
        </nav>
        <style jsx>{`
             .header {
                background: #fff;
                border-bottom: 1px solid #ccc;
                ul {
                   display: flex;
                   width: 70%;
                   margin: auto;
                   li {
                       color:red;
                       a {
                         display: flex;
                         height: 60px;
                         align-items: center;
                         padding: 0 40px;
                         color: #333;
                         font-size: 18px;
                         font-family: "Lucida Console", Courier, monospace;
                         text-decoration: none;
                       }
                   }
                }
            } 
        `}</style>
    </header>
}