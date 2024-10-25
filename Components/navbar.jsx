import React from 'react'
import styles from "../styles/navbar.module.css"
import Link from 'next/link'
function Navbar() {
  return (
    <div>
        <ul className={styles.ul}>
            <li className={styles.li}><Link className={styles.a} href="/home">Home</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/staticPost">Static</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/contact">Contact</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/about">About</Link></li>
        </ul>
    </div>
  )
}

export default Navbar