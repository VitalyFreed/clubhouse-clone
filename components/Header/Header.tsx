import React from 'react';
import Link from "next/link";
import clsx from 'clsx';

import styles from './Header.module.scss';

import {Avatar} from '../Avatar/Avatar';

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className="container d-flex align-items-center justify-content-between">
                <Link href='/rooms'>
                    <div className={clsx(styles.headerLogo, 'd-flex align-items-center cup')}>
                        <img src="/static/hand-wave.png" alt="Logo" className="mr-5"/>
                        <h4>Clubhouse</h4>
                    </div>
                </Link>
                <Link href='/profile/1'>
                    <div className="d-flex align-items-center cup">
                        <b className="mr-15">Vitaliy Tolkachev</b>
                        <Avatar
                            src='https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'
                            width="40px"
                            height="40px"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};
