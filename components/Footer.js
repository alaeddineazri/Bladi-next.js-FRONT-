import React from 'react'
import  Link  from 'next/link'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Azri Alaeddine </p>
      <p>
        <Link href='/about'>About This Project</Link>
      </p>
    </footer>
  )
}

export default Footer