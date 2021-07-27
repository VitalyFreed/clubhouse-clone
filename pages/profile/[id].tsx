import React from "react";
import {useRouter} from "next/router";

import {Profile} from "../../components/Profile/Profile";
import {Header} from '../../components/Header/Header';

const ProfilePage = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <>
            <Header/>
            <div className='container mt-30'>
                <Profile fullname='Vitaliy Tolkachev'
                         userName='tolkachev'
                         avatarUrl='https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'
                         about="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley
                of type and scrambled it to make a type specimen book it has?"
                />
            </div>
        </>
    );
};

export default ProfilePage;