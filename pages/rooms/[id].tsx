import React from "react";

import {Header} from '../../components/Header/Header';
import {BackButton} from "../../components/BackButton/BackButton";
import {Room} from "../../components/Room/Room";
import Axios from "../../core/axios";

export default function RoomPage({room}) {
    return (
        <>
            <Header/>
            <div className='container mt-40'>
                <BackButton title='All rooms' href='/rooms'/>
            </div>
            <Room title={room.title}/>
        </>
    );
}

export const getServerSideProps = async (ctx) => {
    console.log(ctx)
    try {
        const {data} = await Axios.get('/rooms.json');
        const room = data.find(obj => obj.id === ctx.query.id);
        return {
            props: {
                room
            }
        }
    } catch (error) {
        return {
            props: []
        }
    }
};