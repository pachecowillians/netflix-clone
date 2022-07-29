import React from 'react'
import styles from './Header.module.css'

function Header({ black }) {
    return (
        <header className={black ? styles.headerBlack : ''}>
            <div className={styles.headerLogo}>
                <a href={'/'}>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'} alt={'Netflix'} />
                </a>
            </div>
            <div className={styles.headerUser}>
                <a href={'/'}>
                    <img src={'https://ih0.redbubble.net/image.618427277.3222/flat,400x400,075,f.u2.jpg'} alt={'User'} />
                </a>
            </div>
        </header>
    );
}

export default Header;