import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import List from '@/components/Lists/List'
import {useAuth} from '@/hooks/auth'
import {Fetcher, useIndex} from 'ra-fetch'
import {useEffect, useState} from 'react'
import Twitter from '@/components/PostTypes/Twitter'
import Facebook from '@/components/PostTypes/Facebook'
import Youtube from '@/components/PostTypes/Youtube'
import Timeline from '@/components/Timeline/Timeline'
import RunCrisis from '@/components/Crisis/RunCrisis'

const Dashboard = () => {

    const {user} = useAuth({middleware: 'auth'})
    const [crises, setCrises] = useState()
    const [timeline, setTimeline] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend')
                .index('crises', {
                    user_id: user?.id,
                    status: 1,
                })
                .then(response => setCrises(response))
        }

    }, [user?.id])

    return (
        <AppLayout
            header={
                <h1>Dashboard overview</h1>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            {
                crises &&
                <RunCrisis crises={crises}/>
            }
            {
                timeline &&
                <div className={'online-timeline col-span-12'}>
                    <Timeline/>
                </div>
            }

            <div className={'social-posts col-span-12 card'}>
            </div>

        </AppLayout>
    )
}

export default Dashboard
