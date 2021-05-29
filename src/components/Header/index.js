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
                    <img src={'https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'} alt={'User'} />
                </a>
            </div>
        </header>
    );
}

export default Header;