import React from 'react';
import clsx from "clsx";
import Link from "next/link";

import styles from './Room.module.scss';

import {Button} from "../Button";

interface RoomProps {
    title: string;
}

export const Room: React.FC<RoomProps> = ({title}) => {
    return (
        <div className={styles.wrapper}>
            <div className='d-flex align-items-center justify-content-between'>
                <h2>{title}</h2>
                <div className={clsx('d-flex align-items-center', styles.actionButtons)}>
                    <Link href='/rooms'>
                        <Button color='gray' className={styles.leaveButton}>
                            <img width={18} height={18} src='/static/peace.png' alt='Hand black'/>
                            Leave quietly
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='users'>

            </div>
        </div>
    );
};