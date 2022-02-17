
import classes from './Header.module.css';
import React from 'react'

export default function Header() {
    return (
        <header className={classes.header}>
            <h1>Redux Auth Test</h1>
            <nav>
                <ul>
                    <li>
                        <a href='/'>My Products</a>
                    </li>
                    <li>
                        <a href='/'>My Sales</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
