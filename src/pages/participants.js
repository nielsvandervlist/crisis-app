import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {Fetcher} from 'ra-fetch'
import List from '@/components/Lists/List'

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
                </h2>
            }>

            <Head>
                <title>Laravel - Overview</title>
            </Head>

            {participants && <List items={participants} setItems={setParticipants} type={'participants'}/>}
        </AppLayout>
    )
}

export default Participants
