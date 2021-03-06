import React from 'react';
import Link from "next/link";
import clsx from "clsx";

import styles from './Profile.module.scss';

import {Avatar} from "../Avatar/Avatar";
import {Button} from "../Button";
import {BackButton} from "../BackButton/BackButton";

interface ProfileProps {
    fullname: string;
    userName: string;
    avatarUrl: string;
    about: string;
}

export const Profile: React.FC<ProfileProps> = ({fullname, userName, avatarUrl, about}) => {
    return (
        <>
            <Link href='/rooms'>
                <BackButton title='Back' href='/rooms'/>
            </Link>
            <div className='d-flex align-items-center'>
                <div className='d-flex align-items-center'>
                    <Avatar src={avatarUrl} width='100px'
                            height='100px'/>
                    <div className='d-flex flex-column ml-30 mr-30'>
                        <h2 className='mt-0 mb-0'>{fullname}</h2>
                        <h3 className={clsx(styles.username, 'mt-0 mb-0')}>@{userName}</h3>
                    </div>
                </div>
                <Button className={styles.followButton} color='blue'>Follow</Button>
            </div>
            <p className={styles.about}>{about}</p>
        </>
    );
};