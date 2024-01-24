import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'
import ParticipantForm from '@/components/Participants/ParticipantForm'
import useAuth from '@/hooks/auth'
import {Fetcher} from 'ra-fetch'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'

function Edit() {

    const router = useRouter()
    const {pid} = router.query
    const [participant, setParticipant] = useState()

    const {user} = useAuth({middleware: 'auth'})

    useEffect(() => {
        if (user?.id)
            Fetcher.api('backend')
                .show('participants', {
                    id: pid,
                })
                .then(response => setParticipant(response))

    }, [user?.id])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Edit Crisis</title>
            </Head>

            {participant && <ParticipantForm id={pid} participant={participant} requestType={'update'}/>}
        </AppLayout>
    )
}

export default Edit
