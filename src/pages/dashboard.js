import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useAuth} from '@/hooks/auth'
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
    const [timelinePosts, setTimelinePosts] = useState()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend')
                .index('crises', {
                    user_id: user?.id,
                    status: 1,
                    company: true,
                    timeline: true,
                })
                .then(response => setCrises(response))
        }

    }, [user?.id])

    useEffect(() => {
        if(crises && crises.data.length > 0) {
            Fetcher.api('backend')
                .index('timeline_posts', {
                    user_id: user?.id,
                    timline_id: crises.data[0].timeline.id,
                    post: true,
                    post_type: true,
                })
                .then(response => setTimelinePosts(response))
        }
    }, [crises])

    return (
        <AppLayout
            header={
                <h1>Dashboard overview</h1>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <NewCrisis/>

            {
                crises &&
                <RunCrisis crises={crises}/>
            }
            {
                crises && crises.data.length > 0 && crises.data[0].timeline &&
                <div className={'online-timeline col-span-12'}>
                    <Timeline edit={crises.data[0].timeline}/>
                </div>
            }
            {
                timelinePosts &&
                <div className={'social-posts col-span-12'}>
                    {
                        timelinePosts.data.map((timelinePost, index) => {
                            return <div key={index}><PostWrapper post={timelinePost.post} setOpen={setOpen}/></div>
                        })
                    }
                </div>
            }


            <Modal open={open} setOpen={setOpen}>
                <ReactionForm requestType={'store'}/>
            </Modal>

        </AppLayout>
    )
}

export default Dashboard
