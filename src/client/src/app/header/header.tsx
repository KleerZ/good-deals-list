import styles from './page.module.scss'
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><Link href={"/"}>Main</Link></li>
                    <li><Link href={"/profile"}>Profile</Link></li>
                </ul>
                
                <ul>
                    <li><Link href={"/login"}>Login</Link></li>
                    <li><Link href={"/registration"}>Registration</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header