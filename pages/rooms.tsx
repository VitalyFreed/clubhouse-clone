import React from 'react';
import Link from 'next/link';
import Axios from '../core/axios';

import {Header} from '../components/Header/Header';
import {Button} from "../components/Button";
import {ConversationCard} from "../components/ConversationCard";

interface RoomsType {
    id: number;
    title: string;
    avatars: Array<string>;
    guests: Array<string>;
    guestCount: number;
    speakersCount: number;
}

export default function RoomsPage({rooms = []}) {
    return (
        <>
            <Header/>
            <div className='container'>
                <div className='mt-40 d-flex align-items-center justify-content-between'>
                    <h1>All conversations</h1>
                    <Button color='green'>+ Start room</Button>
                </div>
                <div className='grid mt-30'>
                    {rooms.map(obj => <Link key={obj.id} href={`/rooms/${obj.id}`}>
                            <a>
                                <ConversationCard
                                    title={obj.title}
                                    avatars={obj.avatars}
                                    guests={obj.guests}
                                    guestCount={obj.guestCount}
                                    speakersCount={obj.speakersCount}
                                />
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async () => {
    try {
        const {data} = await Axios.get('/rooms.json');
        return {
            props: {
                rooms: data
            }
        }
    } catch (error) {
        return {
            props: []
        }
    }
};