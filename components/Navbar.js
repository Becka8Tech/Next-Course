import Posts from "@/pages/posts"
import styles from "../styles/Navbar.module.css"
import Link from "next/link"

export default function Navbar(){
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <Link href='/'>
                <li>Home</li>
                </Link>
                <Link href='/posts'>
                <li>Posts</li>
                </Link>
                <Link href='/users'>
                <li>Users</li>
                </Link>
                <imput placeholder='Search...' type="text" ></imput>
            </ul>
        </nav>
    )
}