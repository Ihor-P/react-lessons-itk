import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={styles.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt="mainHeader(workTable)" />
        <div className={styles.loginBlock} >
            { props.isAuth? props.login :
            <NavLink to='/login'>Login</NavLink> }
        </div>
    </header>
}

export default Header;