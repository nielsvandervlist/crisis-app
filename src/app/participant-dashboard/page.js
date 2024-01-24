import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import useAuth from '@/hooks/auth'
import {Fetcher, useIndex} from 'ra-fetch'
import {useEffect, useState} from 'react'
import WelcomeText from '@/components/Info/WelcomeText'
import GetParticipants from '@/components/Participants/GetParticipants'
import DownloadList from '@/components/Lists/DownloadList'
import DownloadListParticipant from '@/components/Lists/DownloadListParticipant'
import ParticipantLine from '@/components/Timeline/ParticipantLine'

const ParticipantDashboard = () => {

    const {user} = useAuth({middleware: 'auth'})

    const [timelinePosts, setTimelinePosts] = useState()
    const [crisis, setCrisis] = useState()
    const [documents, setDocuments] = useState()


    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend').index('posts', {
                active: user?.participant[0].company_id,
            }).then(response => setTimelinePosts(response))

            Fetcher.api('backend').index('crises', {
                company_id: user?.participant[0].company_id,
                status: 1,
                timeline: true,
                company: true,
            }).then(response => setCrisis(response.data[0]))

            Fetcher.api('backend')
                .index('documents', {
                    user_id: user?.participant[0].user_id,
                })
                .then((res) => setDocuments(res))
        }

    }, [user?.id])

    console.log(crisis)

    if (!crisis) {
        return <></>
    }

    return (
        <AppLayout
            header={
                <h1>Dashboard</h1>
            }>

            <Head>
                <title>Dashboard</title>
            </Head>

            <WelcomeText user={user}/>
            <div className={'card col-span-6'}>
                <h2 className={'mb-4'}><b className={'block mb-1'}>Crisis title</b> <span>{crisis.title}</span></h2>
                <p className={'mb-4'}><b className={'block mb-1'}>Description of the crisis</b>
                    <span>{crisis.description}</span></p>
                <p className={'mb-4'}><b className={'block mb-1'}>Name of the company</b>
                    <span>{crisis.company.name}</span></p>
                <p className={'mb-4'}><b className={'block mb-1'}>Participants</b></p>
                <div className={'border rounded-md border-gray-100 p-4 flex-1 relative'}>
                    <GetParticipants company_id={crisis.company.id} participant={user?.participant[0]}/>
                </div>
            </div>

            {documents && <DownloadListParticipant items={documents} setItems={setDocuments} type={'documents'}/>}

            <div className={'col-span-12 card'}>
                <ParticipantLine timeline={crisis.timeline} duration={crisis.timeline.data.duration}/>
            </div>
        </AppLayout>
    )
}

export default ParticipantDashboard
