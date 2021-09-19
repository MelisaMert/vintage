import Link from 'next/link';

export default function Header() {
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
                    <Link href="/vintage">
                       <a>VINTAGE</a> 
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                       <a>CONTACT</a>
                    </Link>
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