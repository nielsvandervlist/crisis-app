import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {Fetcher, useApi} from 'ra-fetch'
import List from '@/components/Lists/List'
import TimelineForm from '@/components/Forms/TimelineForm'
import TimelinePosts from '@/components/Forms/TimelinePosts'

const Create = () => {

    const [posts, setPosts] = useState('')
    const [startTime, setStartTime] = useState(new Date())
    const [title, setTitle] = useState('')
    const [endTime, setEndTime] = useState('')
    const [timelinePosts, setTimelinePosts] = useState([])
    const {user} = useAuth({middleware: 'auth'})

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend').index('posts', {
                    user_id: user?.id,
                }).then(res => setPosts(res))

            Fetcher.api('backend').index('timeline_posts', {
                timeline_id: 1,
            }).then(res => setTimelinePosts(res))
                .catch(err => console.log(err))
        }
    }, [user?.id])

    if(timelinePosts.loading || timelinePosts.length < 1){
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

            <TimelineForm
                title={title}
                setTitle={setTitle}
                startTime={startTime}
                endTime={endTime}
                setEndTime={setEndTime}
                setStartTime={setStartTime}
            />
            {/*{!posts.loading && endTime !== '' &&*/}
            <TimelinePosts
                title={title}
                timelinePosts={timelinePosts}
                posts={posts}
                setPosts={setPosts}
                startTime={startTime}
                setStartTime={setStartTime}
                endTime={endTime}
            />

        </AppLayout>
    )
}

export default Create
