import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useAuth} from '@/hooks/auth'
import {Fetcher, useIndex} from 'ra-fetch'
import {useEffect, useState} from 'react'

const ParticipantDashboard = () => {

    const {user} = useAuth({middleware: 'auth'})

    const [timelinePosts, setTimelinePosts] = useState()
    const [timeline, setTimeline] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend')
                .index('posts', {
                    active: user?.participant[0].company_id,
                })
                .then(response => setTimelinePosts(response))
        }

    }, [user?.id])

    return (
        <AppLayout
            header={
                <h1>Dashboard</h1>
            }>

            <Head>
                <title>Dashboard</title>
            </Head>

            <div className={'social-posts col-span-12 card'}>

            </div>

        </AppLayout>
    )
}

export default ParticipantDashboard
