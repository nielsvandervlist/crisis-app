import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {Fetcher} from 'ra-fetch'
import List from '@/components/Lists/List'
import Link from 'next/link'

const Participants = () => {

    const {user} = useAuth({middleware: 'auth'})
    const [participants, setParticipants] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend')
                .index('participants', {
                    user_id: user?.id,
                })
                .then(response => setParticipants(response))
        }
    }, [user?.id])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Participants
                </h2>
            }>

            <Head>
                <title>Participants</title>
            </Head>

            <div className={'card col-span-4 flex flex-col'}>
                <h3 className={'mb-4'}>Ont this page you can view your participants</h3>
                <p className={'mb-8'}>Or you can create a new one! Also you can edit or delete your participants easily from here.</p>
                <button className={'btn btn--primary'}><Link href={`participants/create`}>Create participant</Link></button>
            </div>

            {participants && <List items={participants} setItems={setParticipants} type={'participants'}/>}
        </AppLayout>
    )
}

export default Participants
