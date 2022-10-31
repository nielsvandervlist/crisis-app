import { useRouter } from 'next/router'
import {Fetcher} from 'ra-fetch'
import {useEffect, useState} from 'react'
import {useAuth} from '@/hooks/auth'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CrisisForm from '@/components/Forms/CrisisForm'
import Timeline from '@/components/Timeline/Timeline'
import Link from 'next/link'

const TimelineEdit = () => {

    const router = useRouter()
    const { pid } = router.query
    const [timeline, setTimeline] = useState()

    const { user } = useAuth({ middleware: 'auth' })

    useEffect(() => {
        if(user?.id)
            Fetcher.api('backend')
                .show('timelines', {
                    id: pid,
                })
                .then(response => setTimeline(response))

    }, [user?.id])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Edit Timeline</title>
            </Head>

            <div className={'card col-span-4'}>
                <h3 className={'mb-4'}>Edit a timeline</h3>
                <p className={'mb-4'}>Before you create a timeline, make sure you have created a <Link
                    href={'/create/crisis'}><a className={'underline'}>crisis</a></Link></p>
                <p className={'mb-4'}>Timelines can be used for showing posts in your crisis simulation. You can specify specific posts and
                    the time the post is supposed to show.</p>
                <p>Dont worry you can also show posts while the crisis is running without using a timeline!</p>
            </div>

            {timeline && <Timeline edit={timeline}/>}

        </AppLayout>
    )
}

export default TimelineEdit
