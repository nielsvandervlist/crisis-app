import React, {useState, useEffect} from 'react'
import axios from 'lib/axios'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import Head from 'next/head'
import Messagebox from '@/components/Chat/MessageBox'
import AppLayout from '@/components/Layouts/AppLayout'
import {useAuth} from '@/hooks/auth'
import {Fetcher} from 'ra-fetch'
import Link from 'next/link'

function Chat() {

    const {user} = useAuth({middleware: 'auth'})
    const [rooms, setRooms] = useState()
    const [participants, setParticipants] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend').index('chat_rooms', {
                user_id: user?.id,
            }).then(res => setRooms(res))

            Fetcher.api('backend').index('participants', {
                user_id: user?.id,
            }).then(res => setParticipants(res))
        }
    }, [user?.id])

    if (!participants) {
        return <></>
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>
            <div className={'col-span-12 chat card'}>
                <div className={'chat__wrapper grid-cols-12 grid-rows-6 grid gap-4'}>
                    <div className={'chat__channels col-span-4 row-span-6'}>
                        <h3 className={'mb-4'}>General</h3>
                        <div className={'chat__participant flex items-center'}>
                            General chat room
                        </div>

                        <h3 className={'mb-4'}>Participants</h3>
                        {
                            participants.data.map((participant, index) => {



                                return <Link href={`/rooms/${participant.id}`}>
                                    <a
                                        className={'chat__participant flex items-center'}
                                        key={index}
                                    >
                                        <span className={'w-2 h-2 rounded-full bg-success inline-block mr-2'}/>
                                        {participant.name}
                                    </a>
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Chat
