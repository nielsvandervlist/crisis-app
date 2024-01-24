import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import useAuth from '@/hooks/auth'
import {Fetcher} from 'ra-fetch'
import {useEffect, useState} from 'react'
import Timeline from '@/components/Timeline/Timeline'
import RunCrisis from '@/components/Crisis/RunCrisis'
import ReactionForm from '@/components/Forms/ReactionForm'
import Modal from '@/components/Modal/Modal'
import PostWrapper from '@/components/PostTypes/PostWrapper'
import Link from 'next/link'
import NewCrisis from '@/components/Info/NewCrisis'

const Dashboard = () => {

    const {user} = useAuth({middleware: 'auth'})
    const [crises, setCrises] = useState()
    const [reaction, setReaction] = useState()
    const [participants, setParticipant] = useState()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend')
                .index('participants', {
                    user_id: user?.id,
                })
                .then(response => setParticipant(response))
        }

    }, [user?.id])

    useEffect(() => {
        if(participants && participants.data.length > 0){
            Fetcher.api('backend')
                .index('crises', {
                    company_id: participants.data[0].company_id,
                    status: 1,
                    guest: true,
                })
                .then(response => setCrises(response))
        }
    }, [participants])

    if(!crises){
        return <></>
    }

    return (
        <AppLayout
            header={
                <h1>Dashboard overview</h1>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <Modal open={open} setOpen={setOpen}>
                <ReactionForm requestType={'store'}/>
            </Modal>

        </AppLayout>
    )
}

export default Dashboard
